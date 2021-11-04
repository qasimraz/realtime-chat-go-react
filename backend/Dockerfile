FROM golang:1.11.1-alpine3.8
RUN mkdir /app
RUN apk add git
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -o main ./...
CMD ["/app/main"]