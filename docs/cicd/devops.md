# CI/CD

### sonar 

1. 必备条件  
#linux
```shell
sysctl -w vm.max_map_count=524288
sysctl -w fs.file-max=131072
ulimit -n 131072
ulimit -u 8192
```
2. 安装数据库
```shell
docker run --name postgresqldb --restart=always -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres
```
创建数据库帐号
```shell
create user sonar with password 'sonar';
create database sonar owner sonar;
grant all privileges on database sonar to sonar;
```
3. 启动sonar
```shell
docker run -d --name sonarqube \
    -p 9000:9000 \
    -e SONAR_JDBC_URL=jdbc:postgresql://127.0.0.1:5432/sonar \
    -e SONAR_JDBC_USERNAME=sonar \
    -e SONAR_JDBC_PASSWORD=sonar \
    -v sonarqube_data:/opt/sonarqube/data \
    -v sonarqube_extensions:/opt/sonarqube/extensions \
    -v sonarqube_logs:/opt/sonarqube/logs \
    sonarqube
```
4. 查看服务器控制台: http://127.0.0.1:9000   admin/admin
5. maven项目使用sonar
```shell
 mvn clean verify sonar:sonar -DskipTests -Dsonar.projectKey={projectKey}   -Dsonar.host.url=http://127.0.0.1:9000   -Dsonar.login={loginToken}
```