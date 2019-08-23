const APIUtil = {
  //holds all 

  followUser: id => APIUtil.changeFollowStatus(id, 'POST'),

  unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),


   changeFollowStatus: (id, method) => {
      $.ajax ({
      url: ` users/${id}/follow`,
      dataType: 'json',
      method 
    });
  },
  
  success () {
    if (this.followState === "followed") {
      this.followState = "unfollowed";
    }
  }
};

module.exports = APIUtil;