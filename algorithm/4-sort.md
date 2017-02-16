<!-- $theme: default -->

# ![30%](images/img_white.png) 
# 자료구조 :crown: 기초 
## 4. 정렬
<p align='center'>
CodeSquad Master <br>
Hoyoung Jung
</p>

---
<!-- page_number: true -->
# 출석 체크 및 모닝 알고리즘 
https://www.hackerrank.com/challenges/tutorial-intro

---
# 정렬 (sort)

주어진 콜렉션을 내림차순 또는 오름차순으로 재배열하는 알고리즘 

## 언제 사용하나?
- 정렬이 필요할 때
- 입시 단골문제
- 여러가지 정렬의 특성을 잘 알아야 함

---
# 정렬의 종류
### Bubble Sort
### Selection Sort
### Insertion Sort
### Quick Sort
### Merge Sort 
### Heap Sort
### Radix Sort
...

---
# 정렬을 하기 위한 선조건
- 크기비교를 할 수 있는 값들에 대해서만 정렬 가능 
- 오브젝트에서 크기비교 함수를 구현하면 정렬 가능해짐
- 혹은 컨테이너에서 sort(callback)을 이용해서 정렬할 수도 있다.

---
# JS sort
```javascript
myarr = []
myarr.push({name: "bmw", price: 99.99, speed: 100});
myarr.push({name: "benz", price: 799.99, speed: 50});
myarr.push({name: "eq", price: 444.44, speed: 300});

console.log("before")
console.log(myarr);

myarr.sort(function(a,b) {
  return b.price - a.price;
});
console.log("after")
console.log(myarr);

```

---
# Swift sort
```
var cars = []
// append elements 
//...
cars.sorted({ $0.price > $1.price })
print(cars)
```

--- 
# Stable / Unstble Sort
- 안정 정렬과 불안정 정렬
## Unstable Sort
- 같은 값들의 상대적 위치가 변경될 수 있는 정렬
- Quick sort
## Stable Sort
- MBI 
    - Merge, Bubble, Insertion sort


---
# Use Visualgo
https://visualgo.net/sorting

- 정렬 외에도 많다. 다 공부하자.

---
# Bubble Sort
- https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC
```
do
  swapped = false
  for i = 1 to indexOfLastUnsortedElement
    if leftElement > rightElement
      swap(leftElement, rightElement)
      swapped = true; swapCounter++
while swapped
```

---
# Bubble Sort를 구현하세요.

- 정렬 복잡도는?
- 
---
# 버블 소트 구현하기 
1. swap(array, idx1, idx2) 구현 
2. 배열에서 가장 큰 원소를 맨 뒤로 보내도록 구현 
```
end = array.length;
for (var i = 0; i < end - 1 ; i++) {
    // if 
    // swap
}
```
3. 2를 반복적으로 호출하도록 변경해서 버블 소트 구현 
- 바깥 쪽 루프 추가
```
for(end = array.length; end > 0; end --) {
    for (var i = 0; i < end - 1 ; i++) {
    //...
    }
}

```

---
# Insertion Sort 
```
mark first element as sorted
for each unsorted element
  'extract' the element
  for i = lastSortedIndex to 0
    if currentSortedElement > extractedElement
      move sorted element to the right by 1
    else: insert extracted element
```


---
# Insertion Sort도 구현해 보세요.
## Insertion Sort의 중요성

일반적인 경우 
$\Theta(n^2)$

대부분의 원소가 정렬되어 있을 경우 가장 빠름!
$\Theta(n)$

---
# Quick Sort
어렵다.
```
0) 파티션에 원소가 하나면 종료.
1) 적당한 숫자 하나를 피봇으로 고른다. 
2) 피봇보다 작은 숫자는 왼쪽 큰 숫자는 오른쪽으로. 
피봇 왼쪽 파티션과 오른쪽 파티션에 대해 반복적으로 수행
```
---
# Quick Sort
```
function quicksort(q)
  var list less, pivotList, greater
  if length(q) ≤ 1  then
    return q  
  select a pivot value pivot from q
  for each x in q except the pivot element
    if x < pivot then add x to less
    if x ≥ pivot then add x to greater
  add pivot to pivotList
  return concatenate(quicksort(less),
    pivotList, quicksort(greater))
```
- 알고리즘을 그대로 구현 
- 비효율적, 메모리의 낭비가 있음 

---
# Partition 함수
```
function partition(a, left, right, pivotIndex)
      pivotValue := a[pivotIndex]
      swap(a[pivotIndex], a[right]) 
      storeIndex := left
      for i from left to right-1
          if a[i] <= pivotValue then
              swap(a[storeIndex], a[i])
              storeIndex := storeIndex + 1
      swap(a[right], a[storeIndex]) 
      return storeIndex
```

---
## Quick Sort2
```
function quicksort(a, left, right)
  if right > left then
    select a pivot value a[pivotIndex]
    pivotNewIndex := partition(a, 
    left, right, pivotIndex)
    quicksort(a, left, pivotNewIndex-1)
    quicksort(a, pivotNewIndex+1, right)
```
---
# 퀵소트 분석
- 평균적으로 빠른 정렬 알고리즘

$$
O(n \log n)
$$

- 피벗을 가장 작은 수 또는 가장 큰 수를 고르면...
$$
O(n^2)
$$
- 이 상태를 피하려면? 


- 아쉽게도 불안정 
- 멀티스레드 지원이 어려움 

---
# merge sort
병합 정렬, Thread Safe하게 구현 용이
# heap sort
자료구조 heap을 이용한 정렬 

---
Thank you :+1: