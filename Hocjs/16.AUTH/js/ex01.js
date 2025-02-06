const loginForm = document.querySelector(".js-login-form");
const profileEl = document.querySelector(".js-profile");
const profileEl2 = document.querySelector(".js-profile2");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  const token = await sendLogin(email, password);
  if (!token) {
    return alert("Login failed");
  }
  saveToken(token.access_token, token.refresh_token);
  checkAuth(); //Update giao diện
  checkAuth2(); //Update giao diện
});

const saveToken = (accessToken, refreshToken) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};

const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

const sendLogin = async (email, password) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return response.json();
  } catch {
    return false;
  }
};

const getProfile = async (accessToken) => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Get profile failed");
    }
    return response.json();
  } catch {
    return false;
  }
};

//Kiểm tra trạng thái đăng nhập
const checkAuth = async () => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    loginForm.classList.add("hide");
    profileEl.classList.remove("hide");
    //Hiển thị thông tin profile
    const user = await getProfile(accessToken);
    if (user) {
      profileEl.querySelector(".js-fullname").textContent = user.name;
      const logoutBtn = profileEl.querySelector(".js-logout");
      logoutBtn.addEventListener("click", () => {
        removeToken();
        checkAuth();
      });
    } else {
      const newToken = await getRefreshToken();
      if (!newToken) {
        removeToken();
      } else {
        saveToken(newToken.access_token, newToken.refresh_token);
        checkAuth();
      }
    }
  } else {
    loginForm.classList.remove("hide");
    profileEl.classList.add("hide");
  }
};
checkAuth();
const checkAuth2 = async () => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    profileEl2.classList.remove("hide");
    //Hiển thị thông tin profile
    const user = await getProfile(accessToken);
    if (user) {
      profileEl2.querySelector(".js-fullname2").textContent = user.name;
    } else {
      const newToken = await getRefreshToken();
      if (!newToken) {
        removeToken();
      } else {
        saveToken(newToken.access_token, newToken.refresh_token);
        checkAuth2();
      }
    }
  }
};
checkAuth2();
//Refresh Token
let refreshTokenPromise = null;
const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) {
    return false;
  }
  try {
    const requestRefreshToken = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/auth/refresh-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        }
      );
      if (!response.ok) {
        throw new Error("Refresh token failed");
      }
      return response.json();
    };
    if (!refreshTokenPromise) {
      refreshTokenPromise = requestRefreshToken();
    }
    return refreshTokenPromise;
  } catch {
    return false;
  }
};
