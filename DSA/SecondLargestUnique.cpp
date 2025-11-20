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