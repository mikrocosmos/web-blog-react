/// <reference types="react-scripts" />

interface Response {
  data: Array;
};

interface IMain extends Response {
	name: String;
	theme: String;
	description: String;
	socials: Object[];
}