# Second Largest Unique Number

## Problem Statement
Given an array of integers, find the second largest unique number. If there is no second largest unique number, return -1.

## Examples
```
Input: [3, 5, 2, 5, 6, 6, 1]
Output: 5

Input: [7, 7, 7]
Output: -1

Input: [1, 2, 3, 4, 5]
Output: 4

Input: [5, 5, 4, 4, 3, 3]
Output: 3

Input: [10]
Output: -1
```

## Approach
1. **Remove duplicates** using HashSet to get unique elements
2. **Check if we have at least 2 unique elements**
3. **Find the largest element** from unique elements
4. **Find the second largest** from remaining elements

## Time Complexity
- **Time:** O(n) - Two passes through unique elements
- **Space:** O(n) - For storing unique elements

## Code
```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <climits>

using namespace std;

int secondLargestUnique(vector<int>& nums) {
    unordered_set<int> uniqueSet(nums.begin(), nums.end());
    if (uniqueSet.size() < 2) {
        return -1;
    }
    int largest = INT_MIN;
    for (int num : uniqueSet) {
        if (num > largest) {
            largest = num;
        }
    }
    
    int secondLargest = INT_MIN;
    for (int num : uniqueSet) {
        if (num != largest && num > secondLargest) {
            secondLargest = num;
        }
    }
    
    return secondLargest;
}

int main() {
    vector<int> test1 = {3, 5, 2, 5, 6, 6, 1};
    vector<int> test2 = {7, 7, 7};
    vector<int> test3 = {1, 2, 3, 4, 5};
    vector<int> test4 = {5, 5, 4, 4, 3, 3};
    vector<int> test5 = {10};
    
    cout << "Input: [3, 5, 2, 5, 6, 6, 1] -> Output: " << secondLargestUnique(test1) << endl;
    cout << "Input: [7, 7, 7] -> Output: " << secondLargestUnique(test2) << endl;
    cout << "Input: [1, 2, 3, 4, 5] -> Output: " << secondLargestUnique(test3) << endl;
    cout << "Input: [5, 5, 4, 4, 3, 3] -> Output: " << secondLargestUnique(test4) << endl;
    cout << "Input: [10] -> Output: " << secondLargestUnique(test5) << endl;
    
    return 0;
}
```

## Output
```
Input: [3, 5, 2, 5, 6, 6, 1] -> Output: 5
Input: [7, 7, 7] -> Output: -1
Input: [1, 2, 3, 4, 5] -> Output: 4
Input: [5, 5, 4, 4, 3, 3] -> Output: 3
Input: [10] -> Output: -1
```