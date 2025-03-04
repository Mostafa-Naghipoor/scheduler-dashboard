exports[`selectors setInterview should return state with new interview when interview is not null 1`] = `
Object {
  "appointments": Object {
    "1": Object {
      "id": 1,
      "interview": null,
      "time": "12pm",
    },
    "2": Object {
      "id": 2,
      "interview": Object {
        "interviewer": 1,
        "student": "Archie Cohen",
      },
      "time": "1pm",
    },
    "3": Object {
      "id": 3,
      "interview": null,
      "time": "12pm",
    },
    "4": Object {
      "id": 4,
      "interview": null,
      "time": "1pm",
    },
  },
  "days": Array [
    Object {
      "appointments": Array [
        1,
        2,
      ],
      "id": 1,
      "interviewers": Array [
        1,
        2,
      ],
      "name": "Monday",
      "spots": 1,
    },
    Object {
      "appointments": Array [
        3,
        4,
      ],
      "id": 2,
      "interviewers": Array [
        1,
        2,
      ],
      "name": "Tuesday",
      "spots": 2,
    },
  ],
  "interviewers": Object {
    "1": Object {
      "avatar": "https://i.imgur.com/LpaY82x.png",
      "id": 1,
      "name": "Sylvia Palmer",
    },
    "2": Object {
      "avatar": "https://i.imgur.com/Nmx0Qxo.png",
      "id": 2,
      "name": "Tori Malcolm",
    },
  },
}
`;

exports[`selectors setInterview should return state with no interview when interview is not null 1`] = `
Object {
  "appointments": Object {
    "1": Object {
      "id": 1,
      "interview": null,
      "time": "12pm",
    },
    "2": Object {
      "id": 2,
      "interview": null,
      "time": "1pm",
    },
    "3": Object {
      "id": 3,
      "interview": null,
      "time": "12pm",
    },
    "4": Object {
      "id": 4,
      "interview": null,
      "time": "1pm",
    },
  },
  "days": Array [
    Object {
      "appointments": Array [
        1,
        2,
      ],
      "id": 1,
      "interviewers": Array [
        1,
        2,
      ],
      "name": "Monday",
      "spots": 2,
    },
    Object {
      "appointments": Array [
        3,
        4,
      ],
      "id": 2,
      "interviewers": Array [
        1,
        2,
      ],
      "name": "Tuesday",
      "spots": 2,
    },
  ],
  "interviewers": Object {
    "1": Object {
      "avatar": "https://i.imgur.com/LpaY82x.png",
      "id": 1,
      "name": "Sylvia Palmer",
    },
    "2": Object {
      "avatar": "https://i.imgur.com/Nmx0Qxo.png",
      "id": 2,
      "name": "Tori Malcolm",
    },
  },
}
`;

exports[`selectors setInterview should return state with one interview when interview is created and cancelled 1`] = `
Object {
  "appointments": Object {
    "1": Object {
      "id": 1,
      "interview": null,
      "time": "12pm",
    },
    "2": Object {
      "id": 2,
      "interview": Object {
        "interviewer": 1,
        "student": "Archie Cohen",
      },
      "time": "1pm",
    },
    "3": Object {
      "id": 3,
      "interview": null,
      "time": "12pm",
    },
    "4": Object {
      "id": 4,
      "interview": null,
      "time": "1pm",
    },
  },
  "days": Array [
    Object {
      "appointments": Array [
        1,
        2,
      ],
      "id": 1,
      "interviewers": Array [
        1,
        2,
      ],
      "name": "Monday",
      "spots": 1,
    },
    Object {
      "appointments": Array [
        3,
        4,
      ],
      "id": 2,
      "interviewers": Array [
        1,
        2,
      ],
      "name": "Tuesday",
      "spots": 2,
    },
  ],
  "interviewers": Object {
    "1": Object {
      "avatar": "https://i.imgur.com/LpaY82x.png",
      "id": 1,
      "name": "Sylvia Palmer",
    },
    "2": Object {
      "avatar": "https://i.imgur.com/Nmx0Qxo.png",
      "id": 2,
      "name": "Tori Malcolm",
    },
  },
}
`;