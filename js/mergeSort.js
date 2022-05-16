function merge(l,mid,r) {
    let arr1 = [],arr2 = [];
    for(let i=l;i<=mid;i++) {
        arr1[i-l] = div_sizes[i];
    }
    for(let i=mid+1;i<=r;i++) {
        arr2[i-mid-1] = div_sizes[i];
    }
    let i = l,j = mid+1;
    while(i<=mid&&j<=r) {
        div_update(divs[i],div_sizes[i],"yellow");
        div_update(divs[j],div_sizes[j],"yellow");
        if(div_sizes[i])
    }
}

function divide(l,r) {
    if(l==r) return;
    let mid = Math.floor((l+r)/2);
    divide(l,mid);
    divide(mid+1,r);
    merge(l,mid,r);
}

function mergeSort() {
    c_delay = 0;
    divide(0,array_size-1);
    enable_buttons();
}