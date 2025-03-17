__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 285,
  "end": 1903,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 295,
            "name": "А",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 298,
            "end": 299,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 301,
      "end": 333,
      "test": {
        "type": "BinaryExpression",
        "start": 305,
        "end": 312,
        "left": {
          "type": "Identifier",
          "start": 305,
          "end": 306,
          "name": "А",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 311,
          "end": 312,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 314,
        "end": 333,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 318,
            "end": 331,
            "expression": {
              "type": "CallExpression",
              "start": 318,
              "end": 330,
              "callee": {
                "type": "Identifier",
                "start": 318,
                "end": 324,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 325,
                  "end": 329,
                  "value": "#А",
                  "raw": "'#А'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 344,
            "name": "Б",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 347,
            "end": 348,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 350,
      "end": 382,
      "test": {
        "type": "BinaryExpression",
        "start": 354,
        "end": 361,
        "left": {
          "type": "Identifier",
          "start": 354,
          "end": 355,
          "name": "Б",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 360,
          "end": 361,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 363,
        "end": 382,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 367,
            "end": 380,
            "expression": {
              "type": "CallExpression",
              "start": 367,
              "end": 379,
              "callee": {
                "type": "Identifier",
                "start": 367,
                "end": 373,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 374,
                  "end": 378,
                  "value": "#Б",
                  "raw": "'#Б'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 393,
            "name": "В",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 396,
            "end": 397,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 399,
      "end": 431,
      "test": {
        "type": "BinaryExpression",
        "start": 403,
        "end": 410,
        "left": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "name": "В",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 409,
          "end": 410,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 412,
        "end": 431,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 416,
            "end": 429,
            "expression": {
              "type": "CallExpression",
              "start": 416,
              "end": 428,
              "callee": {
                "type": "Identifier",
                "start": 416,
                "end": 422,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 423,
                  "end": 427,
                  "value": "#В",
                  "raw": "'#В'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 442,
            "name": "Г",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 445,
            "end": 446,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 448,
      "end": 480,
      "test": {
        "type": "BinaryExpression",
        "start": 452,
        "end": 459,
        "left": {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "name": "Г",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 458,
          "end": 459,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 461,
        "end": 480,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 465,
            "end": 478,
            "expression": {
              "type": "CallExpression",
              "start": 465,
              "end": 477,
              "callee": {
                "type": "Identifier",
                "start": 465,
                "end": 471,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 472,
                  "end": 476,
                  "value": "#Г",
                  "raw": "'#Г'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 491,
            "name": "Д",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 494,
            "end": 495,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 497,
      "end": 529,
      "test": {
        "type": "BinaryExpression",
        "start": 501,
        "end": 508,
        "left": {
          "type": "Identifier",
          "start": 501,
          "end": 502,
          "name": "Д",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 507,
          "end": 508,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 510,
        "end": 529,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 514,
            "end": 527,
            "expression": {
              "type": "CallExpression",
              "start": 514,
              "end": 526,
              "callee": {
                "type": "Identifier",
                "start": 514,
                "end": 520,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 521,
                  "end": 525,
                  "value": "#Д",
                  "raw": "'#Д'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 544,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 540,
            "name": "Е",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 543,
            "end": 544,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 546,
      "end": 578,
      "test": {
        "type": "BinaryExpression",
        "start": 550,
        "end": 557,
        "left": {
          "type": "Identifier",
          "start": 550,
          "end": 551,
          "name": "Е",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 556,
          "end": 557,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 559,
        "end": 578,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 563,
            "end": 576,
            "expression": {
              "type": "CallExpression",
              "start": 563,
              "end": 575,
              "callee": {
                "type": "Identifier",
                "start": 563,
                "end": 569,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 570,
                  "end": 574,
                  "value": "#Е",
                  "raw": "'#Е'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 579,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 589,
            "name": "Ж",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 592,
            "end": 593,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 595,
      "end": 627,
      "test": {
        "type": "BinaryExpression",
        "start": 599,
        "end": 606,
        "left": {
          "type": "Identifier",
          "start": 599,
          "end": 600,
          "name": "Ж",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 605,
          "end": 606,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 608,
        "end": 627,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 612,
            "end": 625,
            "expression": {
              "type": "CallExpression",
              "start": 612,
              "end": 624,
              "callee": {
                "type": "Identifier",
                "start": 612,
                "end": 618,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 619,
                  "end": 623,
                  "value": "#Ж",
                  "raw": "'#Ж'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 638,
            "name": "З",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 641,
            "end": 642,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 644,
      "end": 676,
      "test": {
        "type": "BinaryExpression",
        "start": 648,
        "end": 655,
        "left": {
          "type": "Identifier",
          "start": 648,
          "end": 649,
          "name": "З",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 654,
          "end": 655,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 657,
        "end": 676,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 661,
            "end": 674,
            "expression": {
              "type": "CallExpression",
              "start": 661,
              "end": 673,
              "callee": {
                "type": "Identifier",
                "start": 661,
                "end": 667,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 668,
                  "end": 672,
                  "value": "#З",
                  "raw": "'#З'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 677,
      "end": 692,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 691,
          "id": {
            "type": "Identifier",
            "start": 681,
            "end": 687,
            "name": "И",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 690,
            "end": 691,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 693,
      "end": 725,
      "test": {
        "type": "BinaryExpression",
        "start": 697,
        "end": 704,
        "left": {
          "type": "Identifier",
          "start": 697,
          "end": 698,
          "name": "И",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 703,
          "end": 704,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 706,
        "end": 725,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 710,
            "end": 723,
            "expression": {
              "type": "CallExpression",
              "start": 710,
              "end": 722,
              "callee": {
                "type": "Identifier",
                "start": 710,
                "end": 716,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 717,
                  "end": 721,
                  "value": "#И",
                  "raw": "'#И'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 726,
      "end": 741,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 730,
          "end": 740,
          "id": {
            "type": "Identifier",
            "start": 730,
            "end": 736,
            "name": "Й",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 739,
            "end": 740,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 742,
      "end": 774,
      "test": {
        "type": "BinaryExpression",
        "start": 746,
        "end": 753,
        "left": {
          "type": "Identifier",
          "start": 746,
          "end": 747,
          "name": "Й",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 752,
          "end": 753,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 755,
        "end": 774,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 772,
            "expression": {
              "type": "CallExpression",
              "start": 759,
              "end": 771,
              "callee": {
                "type": "Identifier",
                "start": 759,
                "end": 765,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 766,
                  "end": 770,
                  "value": "#Й",
                  "raw": "'#Й'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 775,
      "end": 790,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 789,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 785,
            "name": "К",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 788,
            "end": 789,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 791,
      "end": 823,
      "test": {
        "type": "BinaryExpression",
        "start": 795,
        "end": 802,
        "left": {
          "type": "Identifier",
          "start": 795,
          "end": 796,
          "name": "К",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 801,
          "end": 802,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 804,
        "end": 823,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 808,
            "end": 821,
            "expression": {
              "type": "CallExpression",
              "start": 808,
              "end": 820,
              "callee": {
                "type": "Identifier",
                "start": 808,
                "end": 814,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 815,
                  "end": 819,
                  "value": "#К",
                  "raw": "'#К'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 824,
      "end": 839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 828,
          "end": 838,
          "id": {
            "type": "Identifier",
            "start": 828,
            "end": 834,
            "name": "Л",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 837,
            "end": 838,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 840,
      "end": 872,
      "test": {
        "type": "BinaryExpression",
        "start": 844,
        "end": 851,
        "left": {
          "type": "Identifier",
          "start": 844,
          "end": 845,
          "name": "Л",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 850,
          "end": 851,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 853,
        "end": 872,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 857,
            "end": 870,
            "expression": {
              "type": "CallExpression",
              "start": 857,
              "end": 869,
              "callee": {
                "type": "Identifier",
                "start": 857,
                "end": 863,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 864,
                  "end": 868,
                  "value": "#Л",
                  "raw": "'#Л'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 873,
      "end": 888,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 877,
          "end": 887,
          "id": {
            "type": "Identifier",
            "start": 877,
            "end": 883,
            "name": "М",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 886,
            "end": 887,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 889,
      "end": 921,
      "test": {
        "type": "BinaryExpression",
        "start": 893,
        "end": 900,
        "left": {
          "type": "Identifier",
          "start": 893,
          "end": 894,
          "name": "М",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 899,
          "end": 900,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 902,
        "end": 921,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 906,
            "end": 919,
            "expression": {
              "type": "CallExpression",
              "start": 906,
              "end": 918,
              "callee": {
                "type": "Identifier",
                "start": 906,
                "end": 912,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 913,
                  "end": 917,
                  "value": "#М",
                  "raw": "'#М'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 922,
      "end": 937,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 926,
          "end": 936,
          "id": {
            "type": "Identifier",
            "start": 926,
            "end": 932,
            "name": "Н",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 935,
            "end": 936,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 938,
      "end": 970,
      "test": {
        "type": "BinaryExpression",
        "start": 942,
        "end": 949,
        "left": {
          "type": "Identifier",
          "start": 942,
          "end": 943,
          "name": "Н",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 948,
          "end": 949,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 951,
        "end": 970,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 955,
            "end": 968,
            "expression": {
              "type": "CallExpression",
              "start": 955,
              "end": 967,
              "callee": {
                "type": "Identifier",
                "start": 955,
                "end": 961,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 962,
                  "end": 966,
                  "value": "#Н",
                  "raw": "'#Н'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 971,
      "end": 986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 975,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 975,
            "end": 981,
            "name": "О",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 984,
            "end": 985,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 987,
      "end": 1019,
      "test": {
        "type": "BinaryExpression",
        "start": 991,
        "end": 998,
        "left": {
          "type": "Identifier",
          "start": 991,
          "end": 992,
          "name": "О",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 997,
          "end": 998,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1000,
        "end": 1019,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1004,
            "end": 1017,
            "expression": {
              "type": "CallExpression",
              "start": 1004,
              "end": 1016,
              "callee": {
                "type": "Identifier",
                "start": 1004,
                "end": 1010,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1011,
                  "end": 1015,
                  "value": "#О",
                  "raw": "'#О'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1020,
      "end": 1035,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1024,
          "end": 1034,
          "id": {
            "type": "Identifier",
            "start": 1024,
            "end": 1030,
            "name": "П",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1033,
            "end": 1034,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1036,
      "end": 1068,
      "test": {
        "type": "BinaryExpression",
        "start": 1040,
        "end": 1047,
        "left": {
          "type": "Identifier",
          "start": 1040,
          "end": 1041,
          "name": "П",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1046,
          "end": 1047,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1049,
        "end": 1068,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1053,
            "end": 1066,
            "expression": {
              "type": "CallExpression",
              "start": 1053,
              "end": 1065,
              "callee": {
                "type": "Identifier",
                "start": 1053,
                "end": 1059,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1060,
                  "end": 1064,
                  "value": "#П",
                  "raw": "'#П'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1069,
      "end": 1084,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1073,
          "end": 1083,
          "id": {
            "type": "Identifier",
            "start": 1073,
            "end": 1079,
            "name": "Р",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1082,
            "end": 1083,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1085,
      "end": 1117,
      "test": {
        "type": "BinaryExpression",
        "start": 1089,
        "end": 1096,
        "left": {
          "type": "Identifier",
          "start": 1089,
          "end": 1090,
          "name": "Р",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1095,
          "end": 1096,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1098,
        "end": 1117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1102,
            "end": 1115,
            "expression": {
              "type": "CallExpression",
              "start": 1102,
              "end": 1114,
              "callee": {
                "type": "Identifier",
                "start": 1102,
                "end": 1108,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1109,
                  "end": 1113,
                  "value": "#Р",
                  "raw": "'#Р'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1118,
      "end": 1133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1122,
          "end": 1132,
          "id": {
            "type": "Identifier",
            "start": 1122,
            "end": 1128,
            "name": "С",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1131,
            "end": 1132,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1134,
      "end": 1166,
      "test": {
        "type": "BinaryExpression",
        "start": 1138,
        "end": 1145,
        "left": {
          "type": "Identifier",
          "start": 1138,
          "end": 1139,
          "name": "С",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1144,
          "end": 1145,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1147,
        "end": 1166,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1151,
            "end": 1164,
            "expression": {
              "type": "CallExpression",
              "start": 1151,
              "end": 1163,
              "callee": {
                "type": "Identifier",
                "start": 1151,
                "end": 1157,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1158,
                  "end": 1162,
                  "value": "#С",
                  "raw": "'#С'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1167,
      "end": 1182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1171,
          "end": 1181,
          "id": {
            "type": "Identifier",
            "start": 1171,
            "end": 1177,
            "name": "Т",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1180,
            "end": 1181,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1183,
      "end": 1215,
      "test": {
        "type": "BinaryExpression",
        "start": 1187,
        "end": 1194,
        "left": {
          "type": "Identifier",
          "start": 1187,
          "end": 1188,
          "name": "Т",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1193,
          "end": 1194,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1196,
        "end": 1215,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1200,
            "end": 1213,
            "expression": {
              "type": "CallExpression",
              "start": 1200,
              "end": 1212,
              "callee": {
                "type": "Identifier",
                "start": 1200,
                "end": 1206,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1207,
                  "end": 1211,
                  "value": "#Т",
                  "raw": "'#Т'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1216,
      "end": 1231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1220,
          "end": 1230,
          "id": {
            "type": "Identifier",
            "start": 1220,
            "end": 1226,
            "name": "У",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1229,
            "end": 1230,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1232,
      "end": 1264,
      "test": {
        "type": "BinaryExpression",
        "start": 1236,
        "end": 1243,
        "left": {
          "type": "Identifier",
          "start": 1236,
          "end": 1237,
          "name": "У",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1242,
          "end": 1243,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1245,
        "end": 1264,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1249,
            "end": 1262,
            "expression": {
              "type": "CallExpression",
              "start": 1249,
              "end": 1261,
              "callee": {
                "type": "Identifier",
                "start": 1249,
                "end": 1255,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1256,
                  "end": 1260,
                  "value": "#У",
                  "raw": "'#У'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1265,
      "end": 1280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1269,
          "end": 1279,
          "id": {
            "type": "Identifier",
            "start": 1269,
            "end": 1275,
            "name": "Ф",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1278,
            "end": 1279,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1281,
      "end": 1313,
      "test": {
        "type": "BinaryExpression",
        "start": 1285,
        "end": 1292,
        "left": {
          "type": "Identifier",
          "start": 1285,
          "end": 1286,
          "name": "Ф",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1291,
          "end": 1292,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1294,
        "end": 1313,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1298,
            "end": 1311,
            "expression": {
              "type": "CallExpression",
              "start": 1298,
              "end": 1310,
              "callee": {
                "type": "Identifier",
                "start": 1298,
                "end": 1304,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1305,
                  "end": 1309,
                  "value": "#Ф",
                  "raw": "'#Ф'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1314,
      "end": 1329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1318,
          "end": 1328,
          "id": {
            "type": "Identifier",
            "start": 1318,
            "end": 1324,
            "name": "Х",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1327,
            "end": 1328,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1330,
      "end": 1362,
      "test": {
        "type": "BinaryExpression",
        "start": 1334,
        "end": 1341,
        "left": {
          "type": "Identifier",
          "start": 1334,
          "end": 1335,
          "name": "Х",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1340,
          "end": 1341,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1343,
        "end": 1362,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1347,
            "end": 1360,
            "expression": {
              "type": "CallExpression",
              "start": 1347,
              "end": 1359,
              "callee": {
                "type": "Identifier",
                "start": 1347,
                "end": 1353,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1354,
                  "end": 1358,
                  "value": "#Х",
                  "raw": "'#Х'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1363,
      "end": 1378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1367,
          "end": 1377,
          "id": {
            "type": "Identifier",
            "start": 1367,
            "end": 1373,
            "name": "Ц",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1376,
            "end": 1377,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1379,
      "end": 1411,
      "test": {
        "type": "BinaryExpression",
        "start": 1383,
        "end": 1390,
        "left": {
          "type": "Identifier",
          "start": 1383,
          "end": 1384,
          "name": "Ц",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1389,
          "end": 1390,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1392,
        "end": 1411,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1396,
            "end": 1409,
            "expression": {
              "type": "CallExpression",
              "start": 1396,
              "end": 1408,
              "callee": {
                "type": "Identifier",
                "start": 1396,
                "end": 1402,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1403,
                  "end": 1407,
                  "value": "#Ц",
                  "raw": "'#Ц'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1412,
      "end": 1427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1416,
          "end": 1426,
          "id": {
            "type": "Identifier",
            "start": 1416,
            "end": 1422,
            "name": "Ч",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1425,
            "end": 1426,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1428,
      "end": 1460,
      "test": {
        "type": "BinaryExpression",
        "start": 1432,
        "end": 1439,
        "left": {
          "type": "Identifier",
          "start": 1432,
          "end": 1433,
          "name": "Ч",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1438,
          "end": 1439,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1441,
        "end": 1460,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1445,
            "end": 1458,
            "expression": {
              "type": "CallExpression",
              "start": 1445,
              "end": 1457,
              "callee": {
                "type": "Identifier",
                "start": 1445,
                "end": 1451,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1452,
                  "end": 1456,
                  "value": "#Ч",
                  "raw": "'#Ч'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1461,
      "end": 1476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1465,
          "end": 1475,
          "id": {
            "type": "Identifier",
            "start": 1465,
            "end": 1471,
            "name": "Ш",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1474,
            "end": 1475,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1477,
      "end": 1509,
      "test": {
        "type": "BinaryExpression",
        "start": 1481,
        "end": 1488,
        "left": {
          "type": "Identifier",
          "start": 1481,
          "end": 1482,
          "name": "Ш",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1487,
          "end": 1488,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1490,
        "end": 1509,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1494,
            "end": 1507,
            "expression": {
              "type": "CallExpression",
              "start": 1494,
              "end": 1506,
              "callee": {
                "type": "Identifier",
                "start": 1494,
                "end": 1500,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1501,
                  "end": 1505,
                  "value": "#Ш",
                  "raw": "'#Ш'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1510,
      "end": 1525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1514,
          "end": 1524,
          "id": {
            "type": "Identifier",
            "start": 1514,
            "end": 1520,
            "name": "Щ",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1523,
            "end": 1524,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1526,
      "end": 1558,
      "test": {
        "type": "BinaryExpression",
        "start": 1530,
        "end": 1537,
        "left": {
          "type": "Identifier",
          "start": 1530,
          "end": 1531,
          "name": "Щ",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1536,
          "end": 1537,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1539,
        "end": 1558,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1543,
            "end": 1556,
            "expression": {
              "type": "CallExpression",
              "start": 1543,
              "end": 1555,
              "callee": {
                "type": "Identifier",
                "start": 1543,
                "end": 1549,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1550,
                  "end": 1554,
                  "value": "#Щ",
                  "raw": "'#Щ'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1559,
      "end": 1574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1563,
          "end": 1573,
          "id": {
            "type": "Identifier",
            "start": 1563,
            "end": 1569,
            "name": "Ъ",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1572,
            "end": 1573,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1575,
      "end": 1607,
      "test": {
        "type": "BinaryExpression",
        "start": 1579,
        "end": 1586,
        "left": {
          "type": "Identifier",
          "start": 1579,
          "end": 1580,
          "name": "Ъ",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1585,
          "end": 1586,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1588,
        "end": 1607,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1592,
            "end": 1605,
            "expression": {
              "type": "CallExpression",
              "start": 1592,
              "end": 1604,
              "callee": {
                "type": "Identifier",
                "start": 1592,
                "end": 1598,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1599,
                  "end": 1603,
                  "value": "#Ъ",
                  "raw": "'#Ъ'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1608,
      "end": 1623,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1612,
          "end": 1622,
          "id": {
            "type": "Identifier",
            "start": 1612,
            "end": 1618,
            "name": "Ы",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1621,
            "end": 1622,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1624,
      "end": 1656,
      "test": {
        "type": "BinaryExpression",
        "start": 1628,
        "end": 1635,
        "left": {
          "type": "Identifier",
          "start": 1628,
          "end": 1629,
          "name": "Ы",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1634,
          "end": 1635,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1637,
        "end": 1656,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1641,
            "end": 1654,
            "expression": {
              "type": "CallExpression",
              "start": 1641,
              "end": 1653,
              "callee": {
                "type": "Identifier",
                "start": 1641,
                "end": 1647,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1648,
                  "end": 1652,
                  "value": "#Ы",
                  "raw": "'#Ы'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1657,
      "end": 1672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1661,
          "end": 1671,
          "id": {
            "type": "Identifier",
            "start": 1661,
            "end": 1667,
            "name": "Ь",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1670,
            "end": 1671,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1673,
      "end": 1705,
      "test": {
        "type": "BinaryExpression",
        "start": 1677,
        "end": 1684,
        "left": {
          "type": "Identifier",
          "start": 1677,
          "end": 1678,
          "name": "Ь",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1683,
          "end": 1684,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1686,
        "end": 1705,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1690,
            "end": 1703,
            "expression": {
              "type": "CallExpression",
              "start": 1690,
              "end": 1702,
              "callee": {
                "type": "Identifier",
                "start": 1690,
                "end": 1696,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1697,
                  "end": 1701,
                  "value": "#Ь",
                  "raw": "'#Ь'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1706,
      "end": 1721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1710,
          "end": 1720,
          "id": {
            "type": "Identifier",
            "start": 1710,
            "end": 1716,
            "name": "Э",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1719,
            "end": 1720,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1722,
      "end": 1754,
      "test": {
        "type": "BinaryExpression",
        "start": 1726,
        "end": 1733,
        "left": {
          "type": "Identifier",
          "start": 1726,
          "end": 1727,
          "name": "Э",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1732,
          "end": 1733,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1735,
        "end": 1754,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1739,
            "end": 1752,
            "expression": {
              "type": "CallExpression",
              "start": 1739,
              "end": 1751,
              "callee": {
                "type": "Identifier",
                "start": 1739,
                "end": 1745,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1746,
                  "end": 1750,
                  "value": "#Э",
                  "raw": "'#Э'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1755,
      "end": 1770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1759,
          "end": 1769,
          "id": {
            "type": "Identifier",
            "start": 1759,
            "end": 1765,
            "name": "Ю",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1768,
            "end": 1769,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1771,
      "end": 1803,
      "test": {
        "type": "BinaryExpression",
        "start": 1775,
        "end": 1782,
        "left": {
          "type": "Identifier",
          "start": 1775,
          "end": 1776,
          "name": "Ю",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1781,
          "end": 1782,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1784,
        "end": 1803,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1788,
            "end": 1801,
            "expression": {
              "type": "CallExpression",
              "start": 1788,
              "end": 1800,
              "callee": {
                "type": "Identifier",
                "start": 1788,
                "end": 1794,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1795,
                  "end": 1799,
                  "value": "#Ю",
                  "raw": "'#Ю'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1804,
      "end": 1819,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1808,
          "end": 1818,
          "id": {
            "type": "Identifier",
            "start": 1808,
            "end": 1814,
            "name": "Я",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1817,
            "end": 1818,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1820,
      "end": 1852,
      "test": {
        "type": "BinaryExpression",
        "start": 1824,
        "end": 1831,
        "left": {
          "type": "Identifier",
          "start": 1824,
          "end": 1825,
          "name": "Я",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1830,
          "end": 1831,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1833,
        "end": 1852,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1837,
            "end": 1850,
            "expression": {
              "type": "CallExpression",
              "start": 1837,
              "end": 1849,
              "callee": {
                "type": "Identifier",
                "start": 1837,
                "end": 1843,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1844,
                  "end": 1848,
                  "value": "#Я",
                  "raw": "'#Я'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1853,
      "end": 1868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1857,
          "end": 1867,
          "id": {
            "type": "Identifier",
            "start": 1857,
            "end": 1863,
            "name": "Ё",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1866,
            "end": 1867,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1869,
      "end": 1901,
      "test": {
        "type": "BinaryExpression",
        "start": 1873,
        "end": 1880,
        "left": {
          "type": "Identifier",
          "start": 1873,
          "end": 1874,
          "name": "Ё",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1879,
          "end": 1880,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1882,
        "end": 1901,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1886,
            "end": 1899,
            "expression": {
              "type": "CallExpression",
              "start": 1886,
              "end": 1898,
              "callee": {
                "type": "Identifier",
                "start": 1886,
                "end": 1892,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1893,
                  "end": 1897,
                  "value": "#Ё",
                  "raw": "'#Ё'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
