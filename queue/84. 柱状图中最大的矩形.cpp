class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n=heights.size();
        int res=-1;
        int maxH=-1;
        for(auto x:heights){
            if(x>maxH){
                maxH=x;
            }
        }
        for(int h=0;h<=maxH;h++){
            int maxWidth=-1;
            int cur=0;
            for(int i=0;i<n;i++){
                if(heights[i]>=h){
                    cur++;
                    if(cur>maxWidth)
                        maxWidth=cur;
                }
                else{
                    cur=0;
                }
            }
            if(h*maxWidth>res){
                res=h*maxWidth;
            }
        }
        return res;
    }
};
