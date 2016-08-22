app.controller("next", ["$scope","$location",'$http',function($scope,$location,$http) {
        $scope.next = {
            firstName: "next"
        };
        $scope.count = 0;
        $scope.name = "ZhangLitao";
        $scope.showName = function(){
        	$http({
                method: 'post',
                url: '/User/getUserInfo',
                data: {
                    id: '9527'
                }
            }).success(function(res){
                if(res.resultCode == '000000'){
                    $scope.httpSuc = true;
                    $scope.userInfo = res.result;
                }else{
                    console.log(res);
                }
            }).error(function(res){
                $scope.httpSuc = false;
                alert('发生错误');
            });
            // $location.path("/").replace()
        	// $scope.count++;
        	// console.log( $scope.name.toLocaleLowerCase() );
        };
    }
]);