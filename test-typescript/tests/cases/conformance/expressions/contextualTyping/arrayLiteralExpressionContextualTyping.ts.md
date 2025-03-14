arrayLiteralExpressionContextualTyping.ts
```json
{
  "type": "Program",
  "start": 307,
  "end": 958,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 316,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 319,
            "end": 328,
            "elements": [
              {
                "type": "Literal",
                "start": 320,
                "end": 321,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 323,
                "end": 324,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 326,
                "end": 327,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 340,
            "decorators": [],
            "name": "array1",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 343,
            "end": 355,
            "elements": [
              {
                "type": "Literal",
                "start": 344,
                "end": 348,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 350,
                "end": 351,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 353,
                "end": 354,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 459,
            "decorators": [],
            "name": "tup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 435,
                "end": 459,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 444,
                    "end": 450
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 452,
                    "end": 458
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 462,
            "end": 474,
            "elements": [
              {
                "type": "Literal",
                "start": 463,
                "end": 464,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 466,
                "end": 467,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 469,
                "end": 470,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 472,
                "end": 473,
                "raw": "4",
                "value": 4
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 553,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 531,
            "decorators": [],
            "name": "tup1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 484,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 486,
                "end": 531,
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "start": 487,
                    "end": 500,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 487,
                        "end": 493
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 494,
                        "end": 500
                      }
                    ]
                  },
                  {
                    "type": "TSUnionType",
                    "start": 502,
                    "end": 515,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 502,
                        "end": 508
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 509,
                        "end": 515
                      }
                    ]
                  },
                  {
                    "type": "TSUnionType",
                    "start": 517,
                    "end": 530,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 517,
                        "end": 523
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 524,
                        "end": 530
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 534,
            "end": 553,
            "elements": [
              {
                "type": "Literal",
                "start": 535,
                "end": 536,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 538,
                "end": 539,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 541,
                "end": 542,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 544,
                "end": 552,
                "raw": "\"string\"",
                "value": "string"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 611,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 589,
            "decorators": [],
            "name": "tup2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 563,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 565,
                "end": 589,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 566,
                    "end": 572
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 574,
                    "end": 580
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 582,
                    "end": 588
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 592,
            "end": 611,
            "elements": [
              {
                "type": "Literal",
                "start": 593,
                "end": 594,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 596,
                "end": 597,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 599,
                "end": 600,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 602,
                "end": 610,
                "raw": "\"string\"",
                "value": "string"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 832,
      "end": 862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 836,
          "end": 861,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 836,
            "end": 839,
            "decorators": [],
            "name": "spr",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 842,
            "end": 861,
            "elements": [
              {
                "type": "Literal",
                "start": 843,
                "end": 844,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 846,
                "end": 847,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 849,
                "end": 850,
                "raw": "3",
                "value": 3
              },
              {
                "type": "SpreadElement",
                "start": 852,
                "end": 860,
                "argument": {
                  "type": "Identifier",
                  "start": 855,
                  "end": 860,
                  "decorators": [],
                  "name": "array",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 863,
      "end": 892,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 867,
          "end": 891,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 867,
            "end": 871,
            "decorators": [],
            "name": "spr1",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 874,
            "end": 891,
            "elements": [
              {
                "type": "Literal",
                "start": 875,
                "end": 876,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 878,
                "end": 879,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 881,
                "end": 882,
                "raw": "3",
                "value": 3
              },
              {
                "type": "SpreadElement",
                "start": 884,
                "end": 890,
                "argument": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 890,
                  "decorators": [],
                  "name": "tup",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 893,
      "end": 947,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 897,
          "end": 946,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 897,
            "end": 926,
            "decorators": [],
            "name": "spr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 901,
              "end": 926,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 902,
                "end": 926,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 903,
                    "end": 909
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 911,
                    "end": 917
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 919,
                    "end": 925
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 929,
            "end": 946,
            "elements": [
              {
                "type": "Literal",
                "start": 930,
                "end": 931,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 933,
                "end": 934,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 936,
                "end": 937,
                "raw": "3",
                "value": 3
              },
              {
                "type": "SpreadElement",
                "start": 939,
                "end": 945,
                "argument": {
                  "type": "Identifier",
                  "start": 942,
                  "end": 945,
                  "decorators": [],
                  "name": "tup",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
