$http.get("json.json").success(function(response){$scope.datas = response;
    alert(JSON.stringify($scope.datas));//这样获取到的只是整个json的内容。
    //alert(JSON.stringify($scope.datas.id));这样返回的值是undefined。
    }).error(function(){})