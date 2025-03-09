#include <iostream>
#include <vector>

using namespace std;

class listA {
  listA(int num1, int num2, int num3) {
    
  }
};

int main() {


  vector<int> numbers = {};
  for (int i = 0; i < 10; i++) {
    numbers.push_back(i);
  }

  for (int i = 0; i < 10; i++) {
      cout << numbers[i] << endl;
  }


  return 0;
}
