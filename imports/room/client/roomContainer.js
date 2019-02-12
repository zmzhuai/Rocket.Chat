import { Template } from 'meteor/templating';
import './roomContainer.html';
import RoomComponent from './roomComponent';

Template.roomContainer.helpers({
	roomComponent() {
		return RoomComponent;
	},
});
