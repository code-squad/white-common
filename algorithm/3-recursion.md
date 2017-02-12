# ![30%](images/img_white.png) 
# 자료구조 :crown: 기초 
## 2. 재귀와 이진검색 
<p align='center'>
CodeSquad Master <br>
Hoyoung Jung
</p>

---
<!-- page_number: true -->
# 출석 체크 및 모닝 알고리즘 
https://www.hackerrank.com/challenges/arrays-ds

--- 
# 재귀 (recursion) 알고리즘 
- 함수가 자기 자신을 호출함으로써 문제를 해결하는 방법

## 언제 사용하나?
- 재귀를 사용하면 문제가 쉽게 풀릴 경우 
- 모든 재귀 알고리즘은 안재귀 알고리즘으로 풀 수 있음이 증명됨 
- 성능상 문제가 생길 수 있다.

---
# 재귀 알고리즘 만드는 법

- 점화식을 발견한다.
- 초기 조건 혹은 중단 조건을 찾는다. 
- `f(n)` 과 `f(n-1)` 혹은 그 이전 항 사이의 관계를 찾아낸다.

---

# 재귀 알고리즘 1
## 1에서 n까지 더하기
```
f(1) = 1 //초기 조건 
f(n) = f(n - 1) + n //점화식 
```

---
# 재귀 알고리즘 1
## 1에서 n까지 더하기
```
function sum(n) {
  if (n === 1) 
    return 1;
  else 
    return sum(n - 1) + n;
}
```

---
# 재귀 알고리즘 2
## 팩토리얼
0! = 1
1! = 1
2! = 2 * 1 = 2 
3! = 3 * 2 * 1 = 6
n! = n * (n-1)! 

---
# 재귀 알고리즘 3 
## 피보나치 수열 
> 토끼 한 쌍이 있다.
> 두 달 이상 된 토끼 한 쌍은 토끼 한 쌍을 낳는다. 
> 토끼는 죽지 않는다. 

https://ko.wikipedia.org/wiki/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98_%EC%88%98

---
# 재귀 알고리즘 3
## 피보나치 수열
$f(0) = 1$
$f(1) = 1$
$f(n) = f(n-1) + f(n-2), n >= 2$

- 그런데 구현하면 더럽게 느립니다.
- 왜일까요?
- 동적 프로그래밍 또는 Memoization을 사용하면 빨라집니다.

---
# 하노이 타워
대표적인 재귀 알고리즘으로 푸는 문제의 대명사
https://ko.wikipedia.org/wiki/%ED%95%98%EB%85%B8%EC%9D%B4%EC%9D%98_%ED%83%91

# combination (조합)
재귀로 풀기 어려운 문제지만 가끔 시험에 나옴 

---
# 도전 과제
- 하노이 타워를 구현해 봅시다.
- 애니메이션도 동작하도록 해 봅시다. 

---
# Binary Search 
https://www.youtube.com/watch?v=D5SrAga1pno

---
# Binary Search 

- 분할 정복(Divide and Conquer) 알고리즘의 일종 
- $\Omega(1)$
- $O(\log n)$ 
- https://ko.wikipedia.org/wiki/%EB%B6%84%ED%95%A0_%EC%A0%95%EB%B3%B5_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98

---
# Binary Search

```
//array: array of size N
binarySearch(array, value) {
  low = 0
  high = N - 1
  while (         ) {
      mid = (low + high) / 2
      if (A[mid] > value)
          high =  (      )
      else if (A[mid] < value)
          low = (      ) 
      else
          return (     )
  }
  return (    )// not found 
}
```

---
# Binary Search

```
//array: array of size N
binarySearch(array, value) {
  low = 0
  high = N - 1
  while (low <= high) {
      mid = (low + high) / 2
      if (A[mid] > value)
          high = mid - 1
      else if (A[mid] < value)
          low = mid + 1
      else
          return mid
  }
  return -1 // not found 
}
```

---
# Cheer Up :+1:
![](https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png)
