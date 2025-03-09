######################################################################
#
#
#Given an array nums of size n, return the majority element.
#
#
#The majority element is the element that appears more than ⌊n / 2⌋ times. 
# You may assume that the majority element always exists in the array.
#
#######################################################################

def count_elements(inout_list):
    dect = {}
    for i in inout_list:
        if i in dect:
            dect[i] += 1
        else:
            dect[i] = 1
    
    return dect


def majorityElement(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """

    maj_condition = len(nums) / 2
    count_dict = count_elements(nums)
    maj_element = max(count_dict)

    return maj_element



        