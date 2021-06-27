enum Membership {
    Simple,
    Standard,
    Premium
}

const memberShip = Membership.Standard
const memberShipReverse = Membership[2]

// console.log(memberShip)
// console.log(memberShipReverse)

enum socialMedia {
    VK = 'Vk',
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'INSTAGRAM'
}

const social = socialMedia.INSTAGRAM

console.log(social)
