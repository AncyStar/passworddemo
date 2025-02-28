Working functionality of Password Reset App
step1:
you have to signup by giving
for example,
name:user
email:user@gmail.com
password:user1233
when click signup button it give you user registered successfully message.
step2:
Login
email:user@gmail.com
password:user1233
when click login button it gives you login successfully alert message.
step3:
forgot-password
email:user@gmail.com
it send password reset link
also check the mongoDB it send token
step4:
copy the token and paste along the reset-password link
example:https://password-reset-efa2fb.netlify.app/reset-password/e121350f7a7bb80bd69f339d01a777488ad1dbad6486a20daca927940a8cbab5
then you enter new password
then password reset successfully.
token is read only.
