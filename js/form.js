export let loginFormHTML = `
  <form id="loginForm" class="text-center">
    <input
      type="text"
      id="userName"
      class="mb-2"
      placeholder="Usuario"
      maxlength="12"
      required
    />
    <input
      type="password"
      id="password"
      class="mb-3"
      placeholder="Contraseña"
      required
    />
    <button type="submit" class="mb-1">Ingresar</button>
    <a href="#">
      <small>(Olvidé mi contraseña)</small>
    </a>
  </form>      
`;

export let signupFormHTML = `
  <form id="signupForm">
    <div class="d-flex justify-content-center input-mobile mb-1">
      <input
        type="text"
        id="newUserName"
        class="me-1 margin-mobile"
        placeholder="Nombre de Usuario"
        maxlength="12"
        required
      />
      <input 
        type="email" 
        id="email" 
        placeholder="Escribe tu Email" 
        required 
      />
    </div>
    <div class="d-flex justify-content-center input-mobile mb-3">
      <input
        type="password"
        id="newPassword"
        class="me-1 margin-mobile"
        placeholder="Contraseña"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        placeholder="Repite tu contraseña"
        required
      />
    </div>
    <div
      class="d-flex align-items-center justify-content-center mb-2"
    >
      <input type="checkbox" required />
      <p class="ms-1">Declaro que soy mayor de 18 años.</p>
    </div>
    <button
      type="submit"
      class="text-center"
      style="background-color: goldenrod"
    >
      Crear cuenta
    </button>
  </form>        
`;
