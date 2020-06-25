
import DUAL_CONTROL_LEVER from "./images/DUAL_CONTROL_LEVER.jpg";
import HOLLOWTECH_CRANCSET from "./images/HOLLOWTECH_CRANCSET.jpg";
import REAR_DERAILLEUR_SHIMANO_SHADOW from "./images/REAR_DERAILLEUR_SHIMANO_SHADOW.jpg";
import FRONT_DERAILLEUR_SHIMANO_SHADOW from "./images/FRONT_DERAILLEUR_SHIMANO_SHADOW.jpg";
import HG_EV_ROAD_CASSETTE from "./images/HG_EV_ROAD_CASSETTE.jpg";
import STEPS_E6000 from "./images/STEPS_E6000.jpg";
import C60_DISK_BRAKE from "./images/C60_DISK_BRAKE.jpg";
import BRACKET_HOLLOWTECH from "./images/BRACKET_HOLLOWTECH.jpg";
import PD_R9100 from "./images/PD_R9100.jpg";


export default class ShimanoService {

    data = [
        {
            id: 1,
            title: "DURA-ACE DUAL CONTROL LEVER 11-speed",
            model: "ST-R9120-R",
            weight: "538 g/pair",
            price: 380,
            image: DUAL_CONTROL_LEVER
        },
        {
            id: 2,
            title: "DURA-ACE HOLLOWTECH II-Road Crankset 2x11-speed",
            model: "SFC-R9100-P",
            weight: "696 g (53-39T), 685 g (52-36T)",
            price: 424,
            image: HOLLOWTECH_CRANCSET
        },
        {
            id: 3,
            title: "DURA-ACE Rear Derailleur SHIMANO SHADOW RD 11-speed",
            model: "RD-R9100-SS",
            weight: "158 g",
            price: 486,
            image: REAR_DERAILLEUR_SHIMANO_SHADOW
        },
        {
            id: 4,
            title: "DURA-ACE Front Derailleur Brazed-On Mount-Road 2x11-speed",
            model: "FD-R9100-F",
            weight: "70 g",
            price: 312,
            image: FRONT_DERAILLEUR_SHIMANO_SHADOW
        },
        {
            id: 5,
            title: "DURA-ACE 11-Speed HG-EV-Road Cassette Sprocket",
            model: "CS-R9100",
            weight: "175 g (11-25T), 193 g (11-28T)",
            price: 234,
            image: HG_EV_ROAD_CASSETTE
        },
        {
            id: 6,
            title: "SHIMANO STEPS E6000 11-Speed HYPERGLIDE-SIL-TEC Chain",
            model: "CN-HG901-11",
            weight: "247 g",
            price: 88,
            image: STEPS_E6000
        },
        {
            id: 7,
            title: "DURA-ACE C60 Carbon-Tubular Disc Brake-1 mm Wheel Set",
            model: "WH-R9170-C60-TU-F12",
            weight: "1558 g",
            price: 760,
            image: C60_DISK_BRAKE
        },
        {
            id: 8,
            title: "DURA-ACE Bottom Bracket HOLLOWTECH II 68/70 mm",
            model: "BB-R9100",
            weight: "65 g",
            price: 47,
            image: BRACKET_HOLLOWTECH
        },
        {
            id: 9,
            title: "DURA-ACE PD-R9100",
            model: "PD-R9100",
            weight: "228 g",
            price: 212,
            image: PD_R9100
        }
    ];

    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error())
            }, 1000);
        });
    };
};

