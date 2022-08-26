 int minSubarray(vector<int>& nums, int p) {
        int target=0,n=nums.size();
        for(int i=0;i<n;i++){
            nums[i]%=p;
            target+=nums[i];
            target%=p;
        }
        if(target==0){
            return 0;
        }
        int res=INT_MAX,i=0,j=0,sum=0;
        while(j<n){
            sum+=nums[j];
            while(sum>target){
                sum-=nums[i];
                i++;
            }
            if(sum==target&&j-i+1<res){
                res=j-i+1;
            }
            ++j;
        }
        if(res==INT_MAX||res==n){
            return -1;
        }
        return res;
    }
