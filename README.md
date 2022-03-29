Setup

- abrir o terminal
- `git clone`
- `npm install`
- `sudo su postgres`
- `psql`
- `create database api_database;`
- `\c api_database`
- `create user api_user with encrypted password 'api_password';`
- `grant ALL ON DATABASE api_database to api_user;`
- `\q`
- `sudo service postgresql start`
- `npm run tsc`

- depois em outro terminal
- `npm run dev`

- e em outro terminal
- `psql -U api_user -d api_database -W`
- digitar a senha 'api_password'
