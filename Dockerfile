FROM python:3.8

# Install deps (node, pip stuff, etc)
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs

# JS Dependency install
COPY ./frontend/package.json /app/frontend/
RUN cd /app/frontend && npm install

# Copy src files & build
COPY ./frontend/public /app/frontend/public
COPY ./frontend/src /app/frontend/src
COPY ./projname/ /app/projname
COPY ./wsgi.py /app
COPY ./requirements.txt /app

WORKDIR /app

RUN cd frontend && npm run build
RUN pip install -r requirements.txt

EXPOSE 5008

CMD ["gunicorn", "-b", "0.0.0.0:5000", "--timeout","90", "--log-level", "debug", "wsgi:app"]
