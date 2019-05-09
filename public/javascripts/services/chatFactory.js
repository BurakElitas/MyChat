app.factory('chatFactory',['$http','env',($http,env)=>{
    const getMessages=roomId=>{
        return $http({
            url:env.SERVICE_URL+'/messages/list',
            method:'Get',
            params:{
                roomId
            }
        }).then(response=>{
            return response.data;
        },(err)=>{
            console.error(err);
        })
    };
    return {
        getMessages
    }

}]);