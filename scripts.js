const signUp = document.getElementById('signUp');
const signIn = document.querySelector('.signin-signup')
const login = document.querySelector('.login-form')

 signUp.addEventListener('click', function(){

    login.style.display = 'none'
    const form = document.createElement('form');
    form.innerHTML = `
    <h2 class="title">Sign Up</h2>
    <div class="input-field">
    <input type="text" name="username" placeholder="Username" required>
    <i class="ri-user-fill"></i>
    </div>
     <div class="input-field">
    <input type="email" name="email" placeholder="Email" required>
     <i class="ri-mail-fill"></i>
     </div>
     <div class="input-field">
    <input type="password" name="password" placeholder="Password" required>
     <i class="ri-lock-fill"></i>
     </div>
     <input class="btn" type="submit" value="Sign Up">
    `
    signIn.append(form);
    
    
 })