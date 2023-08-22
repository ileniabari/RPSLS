//import {finalPlayerChoice,setCpuPick } from "./main";
import Rock from '../images/stone.jpg'
import Paper from '../images/paper.jpg'
import Scissor from '../images/scissor.jpg'
import Lizard from '../images/lizard.jpg'
import Spock from '../images/spock.jpg'


var pickList = [
    {
        title: "rock",
        image: Rock
    },
    {
        title: "paper",
        image: Paper
    },
    {
        title: "scissor",
        image: Scissor
    },
    {
        title: "lizard",
        image: Lizard
    },
    {
        title: "spock",
        image: Spock
    }
]

//var pickList = ["stone", "paper", "scissor", "lizard", "spock"];
var playerPick;
var cpuPick;

function cpuRandomPick() {
    var randomPick = Math.floor(Math.random() * pickList.length);
    return pickList[randomPick];
}

function getWinner(playerPick, cpuPick) {
    var winner = null;
    var player = playerPick.title;
    var cpu = cpuPick.title;

    if (player == cpu) {
        return "draw"
    }
    var rules = {
        "rock": ["scissor", "lizard"],
        "paper": ["rock", "spock"],
        "scissor": ["paper", "lizard"],
        "spock": ["scissor", "rock"],
        "lizard": ["paper", "spock"],

    }
    var playerWin = rules[player];

    var i = 0;
    while (i < playerWin.length && playerWin[i] != cpu) {
        i++;
    }

    if (i < playerWin.length) {
        winner = "player";
    } else {
        winner = "cpu";
    }
    console.log(winner)
    return winner;
}

export { pickList, cpuRandomPick, getWinner }





