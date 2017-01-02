<!-- page_number: true -->
# ![30%](images/img_white.png) Learn Linux Basic
<p align='center'>
CodeSquad Master <br>
Hoyoung Jung
</p>

---
<!-- page_number: true -->
# History
1. 1969년 켄 톰슨과데니스리치가 벨 연구소에서 유닉스 OS를 만듬
2. 1991년 라이너스 토발즈라는 대학생이 Linux 커널을 만듬

---
<!-- page_number: true -->
# 리눅스 배포판 선택
1. 리눅스에는 다양한 배포판이 존재함
	- 배포만들은 각각 자신만의 프로그램 관리 도구가 있음
	- Debian (www.debian.org)
	- Ubuntu (www.ubuntu.org)
    - Redhat Enterprize Linux
    - Fedora
    - Cent
    - Mint Linux
    - Gentoo
    - Arch Linux
    - Open SUSE

---
<!-- page_number: true -->
# 실습 준비
1. 윈도우 사용자
   - https://git-for-windows.github.io/ 에서 bash-git 설치
2. 맥 사용자
   - 터미널 실행
   - http://brew.sh/index_ko.html 설치

---
<!-- page_number: true -->
# (옵션) c9.io 이용
https://c9.io
github 계정으로 이용 가능
Create a new workspace - harvard CS50 선택 

---
<!-- page_number: true -->
# Shell
Shell(쉘, 셸)이란?
   - OS와 대화하는 프로그램
   - 여러 가지 종류가 있는데 지금은 bash사용
   - 맥 사용자는 zsh를 사용하는 것도 좋다! (oh-my-zsh)


---
<!-- page_number: true -->
# pwd
현재 디렉토리를 확인

# tree

---
<!-- page_number: true -->
# mkdir
새로운 디렉토리 생성
```bash
$ mkdir honux
$ ls
$ pwd
$ cd honux
$ ls
```

---
<!-- page_number: true -->
# ls
List Directory, 디렉토리의 내용을 보여줌
```bash
$ ls -l
$ ls -al
$ ll
```
. 은 현재 디렉토리
.. 은 현재 디렉토리의 부모 디렉토리를 나타낸다.

---
<!-- page_number: true -->
# cat 파일이름
파일 내용 표시
```bash
$ echo "Hello, CodeSquad?" > hello.txt
$ cat hello.txt
```

---
<!-- page_number: true -->
# less 파일명
긴 파일의 내용을 끊어서 표시
   - q: 종료
   - g: 처음으로
   - G: 끝으로
   - /단어: 문서에서 '단어'를 검색
   - space, enter, 화살표, hjkl: 페이지 이동

---
<!-- page_number: true -->
# history
명령어 이력 표시
```bash
$ history
$ !명령어번호

```

---
<!-- page_number: true -->
# cp, mv, rm
파일 복사, 이동, 삭제
```
$ mkdir dir1
$ echo "some" > dir1/file.txt
$ cp dir1/file.txt file2.txt
$ cp -a dir1 dir2
$ ls -R
$ mv dir2 dir3
$ rm -rf dir1
```

---
<!-- page_number: true -->
# find 디렉토리 -name "파일이름"
지정한 디렉토리와 그 하위디렉토리에서 해당 파일을 검색한다.

---
<!-- paœge_number: true -->
# touch 파일이름
0바이트 파일 생성
```bash
$ touch foo.txt
$ ls
```

---
<!-- paœge_number: true -->
# 더 공부하기
- http://linuxcommand.org/lc3_learning_the_shell.php
- https://linuxjourney.com/
- https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-0
