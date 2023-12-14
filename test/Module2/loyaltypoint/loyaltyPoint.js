const { template } = require("@babel/core")
const { re } = require("@babel/core/lib/vendor/import-meta-resolve")

class LoyaltyPoint {
  constructor(memberId) {
    this.memberId = memberId
    this.points = 0
    this.memberType = this.calculateMembershipLevel()
  }

  calculatePoints(purchaseAmount) {
    const point = Math.floor(purchaseAmount / 25)
    this.points += point
    this.memberType = this.calculateMembershipLevel()
    return this.points
  }

  redeem(redeemPoints) {
    if (redeemPoints < 800) {
      return -1
    } else if (this.points < redeemPoints) {
      return -1
    }
    const redeem = Math.floor(redeemPoints / 800)
    this.points -= redeem * 800
    return {
      memberId: this.memberId,
      cashCoupons: redeem,
      redeemPoints: redeem * 800,
      currentPoints: this.points
    }
  }

  calculateMembershipLevel() {
    if (this.points < 10000) {
      return (this.memberType = "SILVER")
    } else if (this.points >= 10000 && this.points <= 20000) {
      return (this.memberType = "GOLD")
    }
    return (this.memberType = "PLATINUM")
  }
  
}

module.exports = LoyaltyPoint
