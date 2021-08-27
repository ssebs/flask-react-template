# flask react template

This project can be used as a template for Flask + React projects. 

## Dependencies
- python3.6+
- nodejs, npm
- docker

## Usage
- Developing:
  - Clone the repo
    > Note: You'll need to build the frontend before running flask the first time
  - You'll need 2 terminals
    - ```bash
      $ cd flask-react-tutorial/frontend/
      $ npm install
      $ npm run start
      ```
    - ```bash
      $ cd flask-react-tutorial/
      $ python3 -m venv venv
      $ source ./venv/bin/activate
      (venv) $ pip install -r requirements.txt
      (venv) $ python dev.py
      ```
  - Note that you'll need to update API.js to fix the `BASE_URL` to match the Flask server instead of using just `/api/`
  - Once running, you can access the frontend site on `localhost:3000` and the backend from `localhost:5000`
- Production:
  - `docker build -t projname .`
  - `docker run -d -p 5000:5000 projname`
  - Once running, you can access the site on `localhost:5000`
  - For production, I recommend configuring a HTTPS reverse proxy


## Route info
- All endpoints in flask should remain behind `/api/`
- All endpoints in react should NOT use `/api/`
- Flask routes:
  - `/api/`
    - GET
      - Test api
  - `/api/test`
    - GET
      - Test api in route folder
    - POST
      - Test api in route folder, but with a post that requires data
      - json required:
        - ```json
           {
               "data": {...}
           }
          ```
  - `/api/test/:str`
    - GET
      - Test api in route folder with params
  - `/`
    - Serves react
- React routes:
  - `/test`
    - Render test component

## Template info
If you want to actually use this as a template, make sure to replace these folders / files / names in files:
- `projname/` folder
- `projname` in all files
  - Files to check:
    - `__init__.py`
    - `dev.py`
    - `wsgi.py`
    - `Dockerfile`
  - Any imports you may have
