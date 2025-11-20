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
    
    cout << "Input: [3, 5, 2, 5, 6, 6, 1] -> Output: " << secondLargestUnique(test1) << endl;
    cout << "Input: [7, 7, 7] -> Output: " << secondLargestUnique(test2) << endl;
    
    return 0;
}