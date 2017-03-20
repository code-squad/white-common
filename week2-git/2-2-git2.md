<!-- page_number: true -->
# ![30%](images/img_white.png) 
# Learn Git Basic 2
<p align='center'>
CodeSquad Master <br>
Hoyoung Jung
</p>

---
# Branch
여러 커밋을 트리 형태로 관리하고 이름 붙여줌 
git이 가진 강력한 기능: 브랜치 및 워크플로우 관리

![](images/git-flow.png)

---

# 브랜치 만들기 
```
$ git branch 브랜치이름 
$ git branch 
$ git branch -r
```
---
# Origin
오리진이란 기본으로 정해지는 원격 저장소 이름, 바꿀 수 있다.
다른 원격 저장소를 다른 이름으로 추가할 수도 있다! 

# Master
가장 기본이 되는 브랜치 
실제 서비스 운영시에는 보통 가장 최근의 실배포 내용만 적용된
**:poop: 마스터 브랜치에서는 작업을 하지 않는 게 좋다.**

---
# checkout 
현재 작업 디렉토리를 커밋 또는 브랜치로 바꿀 때 사용 
```
$ git checkout 브랜치이름 
$ git checkout 커밋아이디
$ git checkout 커밋아이디 -b 새로운브랜치이름
$ git checkout development 
$ git checkout ab0d4c
$ git checkout origin/feature_login -b feature_login
```
---
# 브랜치 삭제 
```
$ git branch -d 브랜치이름 
```

---
# 브랜치 원격 저장소에 반영하기
```
$ git push #현재 브랜치를 origin에 반영 
$ git push 원격저장소 브랜치이름 
$ git push origin feature_login
```
---
# 실습
1. 적당한 커밋으로부터 새 브랜치를 만든다. 
2. 새 브랜치에서 적당히 새 커밋을 몇 개 한다. 
3. 원래 브랜치로 돌아온다.
4. 또 커밋을 몇 개 한다.
5. 아래 명령을 실행하자.
```
$ git log --oneline --graph --decorate 
```

---
# 브랜치 병합하기 
```
$ git checkout development
$ git merge feature_login 
```
로그인 브랜치가 개발 브랜치로 합쳐진다.
성공한다면 로그인 브랜치는 제거해도 무방하다. 

---
# 실습
아까 만든 브랜치를 마스터 브랜치와 병합해 보자. 

---
# 브랜치 전략

![](images/branch.png)

https://backlogtool.com/git-guide/kr/stepup/stepup1_5.html


---
# tag 사용하기

```
$ git tag 태그이름 커밋아이디
$ git push origin 태그이름 
```

---
# 그 외 명령
```
rebase -i 이전커밋아이디
stash 
cherry-pick
```
나중에 배우면 됩니다. 

---

# 참고자료 

1. http://learngitbranching.js.org/
2. https://backlogtool.com/git-guide/kr/stepup/stepup1_1.html 
3. http://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html 






