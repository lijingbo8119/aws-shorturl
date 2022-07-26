# Solution Builder - Full Stack - Assignment

## About Me
* Name: Li Jingbo
* Email: me@ljb.ink
* Mobile: 15598259922
* Main Stack: Go, PHP, TS, MySQL, Redis, Cassandra, MongoDB, InfluxDB etc.

## **Brief introduction to the project**
* LAMP stack with MySQL, Apache and Python all running on one desktop PC.
* A short url service.
* Technology stack
  * Web Service: [Apache Httpd](https://github.com/apache/httpd)
  * Frontend: [TypeScript](https://github.com/microsoft/TypeScript), [React](https://github.com/facebook/react), [Ant Design](https://github.com/ant-design/ant-design), [Axios](https://github.com/axios/axios)
  * Backend For Frontend: [node.js](https://github.com/topics/nodejs), [TypeScript](https://github.com/microsoft/TypeScript), [Express](https://github.com/expressjs/express), [Axios](https://github.com/axios/axios)
  * Backend: [Python](https://github.com/search?q=python), [Django](https://github.com/django/django)
  * Storage: [MySQL](https://github.com/mysqljs/mysql)
  * DevOps: [Docker Compose](https://docs.docker.com/compose/)
* GitHub address
> https://github.com/lijingbo8119/aws-shorturl

* Preview

><img src='https://github.com/lijingbo8119/aws-shorturl/blob/master/images/preview.png?raw=true' style='width: 500px'/>

* Architecture
>![Preview](https://github.com/lijingbo8119/aws-shorturl/blob/master/images/architecture1.png?raw=true)

### **How to run the project**
```bash
$ git clone git@github.com:lijingbo8119/aws-shorturl.git
$ cd aws-shorturl
& docker compose up

# Wait for building job done.
# Use http://localhost:3000(nodejs server address) 
# or http://localhost:9000(httpd server address)
# to visit project.
ws-shorturl-django-1        | Django version 4.0.6, using settings 'app.settings'
aws-shorturl-django-1       | Starting development server at http://0.0.0.0:8080/
aws-shorturl-django-1       | Quit the server with CONTROL-C.
aws-shorturl-nodejs-1       | 
aws-shorturl-nodejs-1       | > barebones-react-typescript-express@1.0.0 start
aws-shorturl-nodejs-1       | > node dist/server.js
aws-shorturl-nodejs-1       | 
aws-shorturl-nodejs-1       | Server listening on port: 3000
```

### **Business logic and algorithms**
* Uses the combination of uppercase and lowercase letters A-Z and digits to convert hexadecimal letters to hexadecimal letters.
* Send long URL via POST HTTP request to the backend, which generates a record in MySQL. The primary key ID is used as the short path.
* Access the short path URL, verify the parameter short_path carried by the backend, try to convert it to int ID, retrieve the corresponding record from the database, obtain the corresponding long address, and return 302 for redirection operation.
```TypeScript
export class Shorter {
    // The character list is scrambled, making the generated SHORT_PATH look less regular.
    private static readonly alphabet: string[] = [
        '8', 'M', 'j', 'e', '0', 'O', 'l', '4', 'u', 'N',
        's', 'x', 'g', 'B', 'd', 'h', 'a', 'p', 'C', 'G',
        'b', 'Y', '7', 'f', 'F', 'W', 'w', 'k', 'c', 'X',
        'V', 'v', 'i', 'n', 'z', 'R', '2', 'E', 'T', 'y',
        'I', 'o', 'U', 'K', 't', 'm', 'q', 'L', 'H', 'S',
        '6', '1', 'Z', '3', 'Q', '5', 'J', 'D', 'r', 'A',
        '9', 'P',
    ];

    // Id plus a basic integer ensure that short_path contains a minimum of five characters
    private static readonly baseNum: number = 100000000;

    // The ID of the primary key of MySQL is short_path. Procedure
    public static idToStr(id: number): string {
        let num = id + Shorter.baseNum;
        let arr: number[] = [];
        while (num > 0) {
            arr.push(Math.trunc(num % 62));
            num = Math.trunc(num / 62);
        }
        let str = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            str = str + Shorter.alphabet[arr[i]]
        }
        return str
    }

    // transfer from short_path to id
    public static strToId(str: string): number {
        let arr: number[] = str.split('').reverse().map((s: string) => Shorter.findIndex(s))
        let num = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            num += arr[i] * Math.pow(62, i)
        }
        return num - Shorter.baseNum
    }

    private static findIndex(s: string): number {
        for (let i = 0; i < Shorter.alphabet.length; i++) {
            if (s === Shorter.alphabet[i]) {
                return i;
            }
        }
        return -1;
    }
}
```

### Storage

Using MySQL as storage middleware.
Initializes the MySQL service and automatically creates a Schema when the container starts.

```YAML
version: "3.9"  # optional since v1.27.0
services:
  mysql:
    image: mysql
    volumes:
      - ./docker/init.sql:/docker-entrypoint-initdb.d/init.sql // init database ddl sql
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=dev_root_password
      - TZ=Asia/Shanghai
```

```SQL
create schema short_url collate utf8mb4_unicode_ci;
use short_url;
create table short_urls (
    id int auto_increment primary key,
    long_url varchar(2048) not null,
    created_at timestamp default CURRENT_TIMESTAMP not null
);
```

### About Test
```BASH
$ docker exec -it fullstack-nodejs-1 /bin/sh
$ npm run test:coverage
--------------------------------------|---------|----------|---------|---------|-------------------
File                                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------------|---------|----------|---------|---------|-------------------
All files                             |   63.55 |    34.78 |   73.68 |   62.83 |                   
 models/file:/var/www/html/src/models |   96.29 |    66.66 |     100 |   96.29 |                   
  http.ts                             |     100 |     87.5 |     100 |     100 | 16                
  shortUrl.ts                         |   92.85 |       50 |     100 |   92.85 | 23                
 server                               |       0 |        0 |       0 |       0 |                   
  routes.ts                           |       0 |        0 |       0 |       0 | 8-69              
  server.ts                           |       0 |        0 |       0 |       0 | 4-10              
 server/file:/var/www/html/src/server |      98 |      100 |     100 |   97.82 |                   
  db.ts                               |     100 |      100 |     100 |     100 |                   
  lib.ts                              |      96 |      100 |     100 |   95.23 | 43                
  repositroy.ts                       |     100 |      100 |     100 |     100 |                   
--------------------------------------|---------|----------|---------|---------|-------------------
=============================== Coverage summary ===============================
Statements   : 63.55% ( 75/118 )
Branches     : 34.78% ( 16/46 )
Functions    : 73.68% ( 14/19 )
Lines        : 62.83% ( 71/113 )
================================================================================
```

## Architecture Migration Solution

### Using AWS to improve the overall architecture of the project

1. CI/CD

>![Preview](https://github.com/lijingbo8119/aws-shorturl/blob/master/images/architecture-cicd.png?raw=true)

Add CI/CD pipe-line, push the images(frontend and backend) to the Amazon ECR.

2. [Amazon Elastic Container Registry](https://aws.amazon.com/cn/ecr)

> Amazon ECR is a fully managed container registry offering high-performance hosting, so you can reliably deploy application images and artifacts anywhere.

Using Amazon ECR to manage proejct images(frontend and backend).

3. [Amazon API Gateway](https://aws.amazon.com/cn/api-gateway/)
> Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. 

Replace current web service layer(httpd) of current project, use Amazon API Gateway as new web service layer.

4. [AWS Lambda](https://aws.amazon.com/cn/lambda/features)

> AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.

using AWS Lambda for deploy project(images from Amazon ECR). 

5. [Amazon Aurora Serverless](https://aws.amazon.com/cn/rds/aurora/serverles)

> Amazon Aurora Serverless is an on-demand, autoscaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. You can run your database on AWS without managing database capacity.

6. [AWS Database Migration Service](https://aws.amazon.com/cn/dms)

> AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely.

Using AWS DMS to Migration data from old MySQL to Amazon Aurora Serverless.

### Goal
* Final architecture
>![Preview](https://github.com/lijingbo8119/aws-shorturl/blob/master/images/architecture2.png?raw=true)

### My effort

1. Learned basic usage for Python and web framework Django. Write Backend code from zero to one.

2. Learned basic concept and usage for React. Write Frontend(including bff) code from zero to one.

3. Learned basic usage of httpd.

4. Use docker compose to DevOps the projects. write docker-compose yaml file.

