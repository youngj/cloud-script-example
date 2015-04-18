
var subscribers = project.getOrCreateGroup("Subscribers");
contact.removeFromGroup(subscribers);
contact.save();
