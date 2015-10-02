/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

 /*************************************************
  * Copyright (c) 2015 Ansible, Inc.
  *
  * All Rights Reserved
  *************************************************/

 export default
    [ '$rootScope',
        function ($rootScope) {
            return {
                response: function(config) {
                    if(config.headers('auth-token-timeout') !== null){
                        $AnsibleConfig.session_timeout = Number(config.headers('auth-token-timeout'));
                    }
                    return config;
                },
                responseError: function(rejection){
                    if( !_.isEmpty(rejection.data.detail) && rejection.data.detail === "Maximum per-user sessions reached"){
                        $rootScope.sessionTimer.expireSession('session_limit');
                        return rejection;
                    }
                    return rejection;
                }
            };
 }];
