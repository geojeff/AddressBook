AddressBook.contactsController = SC.ArrayController.create({
  allowsMultipleSelection: NO,
  content: [
    SC.Object.create({
      name: "Elizabeth Jones",
      phone: "(555) 391-1419",
      address: "145 Wandering Way, Austin, TX 78701",
      website: 'http://www.elizabethjonesproductions.com'
    }),
    
    SC.Object.create({
      name: "Arnold Washington",
      phone: "(453) 749-1585",
      address: "378 North 16th St., Ann Arbor, MI 79883",
      website: 'http://www.arnoldwashingtonmedia.com'
    }),
    
    SC.Object.create({
      name: "Pete Matthews",
      phone: "(343) 856-3750",
      address: "935 2nd St., Phoenix, AZ 87435",
      website: 'http://www.petematthewsfurniture.com'
    })
  ]
});