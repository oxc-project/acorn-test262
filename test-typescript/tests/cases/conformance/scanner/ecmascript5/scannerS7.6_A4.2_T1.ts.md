__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 284,
  "end": 1901,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 294,
            "decorators": [],
            "name": "А",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 297,
            "end": 298,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 300,
      "end": 332,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 313,
        "end": 332,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 317,
            "end": 330,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 317,
              "end": 329,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 324,
                  "end": 328,
                  "raw": "'#А'",
                  "value": "#А",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 317,
                "end": 323,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 304,
        "end": 311,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "decorators": [],
          "name": "А",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 310,
          "end": 311,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 347,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 343,
            "decorators": [],
            "name": "Б",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 346,
            "end": 347,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 349,
      "end": 381,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 362,
        "end": 381,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 366,
            "end": 379,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 366,
              "end": 378,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 373,
                  "end": 377,
                  "raw": "'#Б'",
                  "value": "#Б",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 366,
                "end": 372,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 353,
        "end": 360,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 353,
          "end": 354,
          "decorators": [],
          "name": "Б",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 359,
          "end": 360,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 396,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 392,
            "decorators": [],
            "name": "В",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 395,
            "end": 396,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 398,
      "end": 430,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 411,
        "end": 430,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 415,
            "end": 428,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 415,
              "end": 427,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 422,
                  "end": 426,
                  "raw": "'#В'",
                  "value": "#В",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 415,
                "end": 421,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 402,
        "end": 409,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 403,
          "decorators": [],
          "name": "В",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 408,
          "end": 409,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 445,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 441,
            "decorators": [],
            "name": "Г",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 444,
            "end": 445,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 447,
      "end": 479,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 460,
        "end": 479,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 464,
            "end": 477,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 464,
              "end": 476,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 471,
                  "end": 475,
                  "raw": "'#Г'",
                  "value": "#Г",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 464,
                "end": 470,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 451,
        "end": 458,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 451,
          "end": 452,
          "decorators": [],
          "name": "Г",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 457,
          "end": 458,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 490,
            "decorators": [],
            "name": "Д",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 493,
            "end": 494,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 496,
      "end": 528,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 509,
        "end": 528,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 513,
            "end": 526,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 513,
              "end": 525,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 520,
                  "end": 524,
                  "raw": "'#Д'",
                  "value": "#Д",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 513,
                "end": 519,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 500,
        "end": 507,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 500,
          "end": 501,
          "decorators": [],
          "name": "Д",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 506,
          "end": 507,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 543,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 539,
            "decorators": [],
            "name": "Е",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 542,
            "end": 543,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 545,
      "end": 577,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 558,
        "end": 577,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 562,
            "end": 575,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 562,
              "end": 574,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 569,
                  "end": 573,
                  "raw": "'#Е'",
                  "value": "#Е",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 562,
                "end": 568,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 549,
        "end": 556,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 549,
          "end": 550,
          "decorators": [],
          "name": "Е",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 555,
          "end": 556,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 592,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 588,
            "decorators": [],
            "name": "Ж",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 591,
            "end": 592,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 594,
      "end": 626,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 607,
        "end": 626,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 624,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 611,
              "end": 623,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 618,
                  "end": 622,
                  "raw": "'#Ж'",
                  "value": "#Ж",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 611,
                "end": 617,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 598,
        "end": 605,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 599,
          "decorators": [],
          "name": "Ж",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 604,
          "end": 605,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 641,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 637,
            "decorators": [],
            "name": "З",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 640,
            "end": 641,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 643,
      "end": 675,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 656,
        "end": 675,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 660,
            "end": 673,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 660,
              "end": 672,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 667,
                  "end": 671,
                  "raw": "'#З'",
                  "value": "#З",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 660,
                "end": 666,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 647,
        "end": 654,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 647,
          "end": 648,
          "decorators": [],
          "name": "З",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 653,
          "end": 654,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 676,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 680,
          "end": 690,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 680,
            "end": 686,
            "decorators": [],
            "name": "И",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 689,
            "end": 690,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 692,
      "end": 724,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 705,
        "end": 724,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 709,
            "end": 722,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 709,
              "end": 721,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 716,
                  "end": 720,
                  "raw": "'#И'",
                  "value": "#И",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 709,
                "end": 715,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 696,
        "end": 703,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 696,
          "end": 697,
          "decorators": [],
          "name": "И",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 702,
          "end": 703,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 725,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 739,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 735,
            "decorators": [],
            "name": "Й",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 738,
            "end": 739,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 741,
      "end": 773,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 754,
        "end": 773,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 758,
            "end": 771,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 758,
              "end": 770,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 765,
                  "end": 769,
                  "raw": "'#Й'",
                  "value": "#Й",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 758,
                "end": 764,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 745,
        "end": 752,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 745,
          "end": 746,
          "decorators": [],
          "name": "Й",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 751,
          "end": 752,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 778,
          "end": 788,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 778,
            "end": 784,
            "decorators": [],
            "name": "К",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 787,
            "end": 788,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 790,
      "end": 822,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 803,
        "end": 822,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 807,
            "end": 820,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 807,
              "end": 819,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 814,
                  "end": 818,
                  "raw": "'#К'",
                  "value": "#К",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 807,
                "end": 813,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 794,
        "end": 801,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 794,
          "end": 795,
          "decorators": [],
          "name": "К",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 800,
          "end": 801,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 823,
      "end": 838,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 837,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 833,
            "decorators": [],
            "name": "Л",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 836,
            "end": 837,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 839,
      "end": 871,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 852,
        "end": 871,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 856,
            "end": 869,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 856,
              "end": 868,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 863,
                  "end": 867,
                  "raw": "'#Л'",
                  "value": "#Л",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 856,
                "end": 862,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 843,
        "end": 850,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 843,
          "end": 844,
          "decorators": [],
          "name": "Л",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 849,
          "end": 850,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 872,
      "end": 887,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 876,
          "end": 886,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 876,
            "end": 882,
            "decorators": [],
            "name": "М",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 885,
            "end": 886,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 888,
      "end": 920,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 901,
        "end": 920,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 905,
            "end": 918,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 905,
              "end": 917,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 912,
                  "end": 916,
                  "raw": "'#М'",
                  "value": "#М",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 905,
                "end": 911,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 892,
        "end": 899,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 892,
          "end": 893,
          "decorators": [],
          "name": "М",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 898,
          "end": 899,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 921,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 935,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 931,
            "decorators": [],
            "name": "Н",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 934,
            "end": 935,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 937,
      "end": 969,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 950,
        "end": 969,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 954,
            "end": 967,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 954,
              "end": 966,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 961,
                  "end": 965,
                  "raw": "'#Н'",
                  "value": "#Н",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 954,
                "end": 960,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 941,
        "end": 948,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 941,
          "end": 942,
          "decorators": [],
          "name": "Н",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 947,
          "end": 948,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 970,
      "end": 985,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 974,
          "end": 984,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 974,
            "end": 980,
            "decorators": [],
            "name": "О",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 983,
            "end": 984,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 986,
      "end": 1018,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 999,
        "end": 1018,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1003,
            "end": 1016,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1003,
              "end": 1015,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1010,
                  "end": 1014,
                  "raw": "'#О'",
                  "value": "#О",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1003,
                "end": 1009,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 990,
        "end": 997,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 990,
          "end": 991,
          "decorators": [],
          "name": "О",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 996,
          "end": 997,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1019,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1033,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1029,
            "decorators": [],
            "name": "П",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1032,
            "end": 1033,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1035,
      "end": 1067,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1048,
        "end": 1067,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1052,
            "end": 1065,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1052,
              "end": 1064,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1059,
                  "end": 1063,
                  "raw": "'#П'",
                  "value": "#П",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1052,
                "end": 1058,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1039,
        "end": 1046,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1039,
          "end": 1040,
          "decorators": [],
          "name": "П",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1045,
          "end": 1046,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1068,
      "end": 1083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1072,
          "end": 1082,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1072,
            "end": 1078,
            "decorators": [],
            "name": "Р",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1081,
            "end": 1082,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1084,
      "end": 1116,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1097,
        "end": 1116,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1101,
            "end": 1114,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1101,
              "end": 1113,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1108,
                  "end": 1112,
                  "raw": "'#Р'",
                  "value": "#Р",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1101,
                "end": 1107,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1088,
        "end": 1095,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1088,
          "end": 1089,
          "decorators": [],
          "name": "Р",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1094,
          "end": 1095,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1117,
      "end": 1132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1121,
          "end": 1131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1121,
            "end": 1127,
            "decorators": [],
            "name": "С",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1130,
            "end": 1131,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1133,
      "end": 1165,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1146,
        "end": 1165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1150,
            "end": 1163,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1150,
              "end": 1162,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1157,
                  "end": 1161,
                  "raw": "'#С'",
                  "value": "#С",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1150,
                "end": 1156,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1137,
        "end": 1144,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1137,
          "end": 1138,
          "decorators": [],
          "name": "С",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1143,
          "end": 1144,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1166,
      "end": 1181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1170,
          "end": 1180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1170,
            "end": 1176,
            "decorators": [],
            "name": "Т",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1179,
            "end": 1180,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1182,
      "end": 1214,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1195,
        "end": 1214,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1199,
            "end": 1212,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1199,
              "end": 1211,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1206,
                  "end": 1210,
                  "raw": "'#Т'",
                  "value": "#Т",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1199,
                "end": 1205,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1186,
        "end": 1193,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1186,
          "end": 1187,
          "decorators": [],
          "name": "Т",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1192,
          "end": 1193,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1215,
      "end": 1230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1219,
          "end": 1229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1219,
            "end": 1225,
            "decorators": [],
            "name": "У",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1228,
            "end": 1229,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1231,
      "end": 1263,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1244,
        "end": 1263,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1248,
            "end": 1261,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1248,
              "end": 1260,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1255,
                  "end": 1259,
                  "raw": "'#У'",
                  "value": "#У",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1248,
                "end": 1254,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1235,
        "end": 1242,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1235,
          "end": 1236,
          "decorators": [],
          "name": "У",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1241,
          "end": 1242,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1264,
      "end": 1279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1268,
          "end": 1278,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1268,
            "end": 1274,
            "decorators": [],
            "name": "Ф",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1277,
            "end": 1278,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1280,
      "end": 1312,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1293,
        "end": 1312,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1297,
            "end": 1310,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1297,
              "end": 1309,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1304,
                  "end": 1308,
                  "raw": "'#Ф'",
                  "value": "#Ф",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1297,
                "end": 1303,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1284,
        "end": 1291,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1284,
          "end": 1285,
          "decorators": [],
          "name": "Ф",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1290,
          "end": 1291,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1313,
      "end": 1328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1317,
          "end": 1327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1317,
            "end": 1323,
            "decorators": [],
            "name": "Х",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1326,
            "end": 1327,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1329,
      "end": 1361,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1342,
        "end": 1361,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1346,
            "end": 1359,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1346,
              "end": 1358,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1353,
                  "end": 1357,
                  "raw": "'#Х'",
                  "value": "#Х",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1346,
                "end": 1352,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1333,
        "end": 1340,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1333,
          "end": 1334,
          "decorators": [],
          "name": "Х",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1339,
          "end": 1340,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1362,
      "end": 1377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1366,
          "end": 1376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1366,
            "end": 1372,
            "decorators": [],
            "name": "Ц",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1375,
            "end": 1376,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1378,
      "end": 1410,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1391,
        "end": 1410,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1395,
            "end": 1408,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1395,
              "end": 1407,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1402,
                  "end": 1406,
                  "raw": "'#Ц'",
                  "value": "#Ц",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1395,
                "end": 1401,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1382,
        "end": 1389,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1382,
          "end": 1383,
          "decorators": [],
          "name": "Ц",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1388,
          "end": 1389,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1411,
      "end": 1426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1415,
          "end": 1425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1415,
            "end": 1421,
            "decorators": [],
            "name": "Ч",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1424,
            "end": 1425,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1427,
      "end": 1459,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1440,
        "end": 1459,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1444,
            "end": 1457,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1444,
              "end": 1456,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1451,
                  "end": 1455,
                  "raw": "'#Ч'",
                  "value": "#Ч",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1444,
                "end": 1450,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1431,
        "end": 1438,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1431,
          "end": 1432,
          "decorators": [],
          "name": "Ч",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1437,
          "end": 1438,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1460,
      "end": 1475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1464,
          "end": 1474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1464,
            "end": 1470,
            "decorators": [],
            "name": "Ш",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1473,
            "end": 1474,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1476,
      "end": 1508,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1489,
        "end": 1508,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1493,
            "end": 1506,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1493,
              "end": 1505,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1500,
                  "end": 1504,
                  "raw": "'#Ш'",
                  "value": "#Ш",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1493,
                "end": 1499,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1480,
        "end": 1487,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1480,
          "end": 1481,
          "decorators": [],
          "name": "Ш",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1486,
          "end": 1487,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1509,
      "end": 1524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1513,
          "end": 1523,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1513,
            "end": 1519,
            "decorators": [],
            "name": "Щ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1522,
            "end": 1523,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1525,
      "end": 1557,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1538,
        "end": 1557,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1542,
            "end": 1555,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1542,
              "end": 1554,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1549,
                  "end": 1553,
                  "raw": "'#Щ'",
                  "value": "#Щ",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1542,
                "end": 1548,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1529,
        "end": 1536,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1529,
          "end": 1530,
          "decorators": [],
          "name": "Щ",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1535,
          "end": 1536,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1558,
      "end": 1573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1562,
          "end": 1572,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1562,
            "end": 1568,
            "decorators": [],
            "name": "Ъ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1571,
            "end": 1572,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1574,
      "end": 1606,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1587,
        "end": 1606,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1591,
            "end": 1604,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1591,
              "end": 1603,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1598,
                  "end": 1602,
                  "raw": "'#Ъ'",
                  "value": "#Ъ",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1591,
                "end": 1597,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1578,
        "end": 1585,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1578,
          "end": 1579,
          "decorators": [],
          "name": "Ъ",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1584,
          "end": 1585,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1607,
      "end": 1622,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1611,
          "end": 1621,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1611,
            "end": 1617,
            "decorators": [],
            "name": "Ы",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1620,
            "end": 1621,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1623,
      "end": 1655,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1636,
        "end": 1655,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1640,
            "end": 1653,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1640,
              "end": 1652,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1647,
                  "end": 1651,
                  "raw": "'#Ы'",
                  "value": "#Ы",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1640,
                "end": 1646,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1627,
        "end": 1634,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1627,
          "end": 1628,
          "decorators": [],
          "name": "Ы",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1633,
          "end": 1634,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1656,
      "end": 1671,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1660,
          "end": 1670,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1660,
            "end": 1666,
            "decorators": [],
            "name": "Ь",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1669,
            "end": 1670,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1672,
      "end": 1704,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1685,
        "end": 1704,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1689,
            "end": 1702,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1689,
              "end": 1701,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1696,
                  "end": 1700,
                  "raw": "'#Ь'",
                  "value": "#Ь",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1689,
                "end": 1695,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1676,
        "end": 1683,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1676,
          "end": 1677,
          "decorators": [],
          "name": "Ь",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1682,
          "end": 1683,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1705,
      "end": 1720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1709,
          "end": 1719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1715,
            "decorators": [],
            "name": "Э",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1718,
            "end": 1719,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1721,
      "end": 1753,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1734,
        "end": 1753,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1738,
            "end": 1751,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1738,
              "end": 1750,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1745,
                  "end": 1749,
                  "raw": "'#Э'",
                  "value": "#Э",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1738,
                "end": 1744,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1725,
        "end": 1732,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1725,
          "end": 1726,
          "decorators": [],
          "name": "Э",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1731,
          "end": 1732,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1754,
      "end": 1769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1758,
          "end": 1768,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1758,
            "end": 1764,
            "decorators": [],
            "name": "Ю",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1767,
            "end": 1768,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1770,
      "end": 1802,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1783,
        "end": 1802,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1787,
            "end": 1800,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1787,
              "end": 1799,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1794,
                  "end": 1798,
                  "raw": "'#Ю'",
                  "value": "#Ю",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1787,
                "end": 1793,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1774,
        "end": 1781,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1774,
          "end": 1775,
          "decorators": [],
          "name": "Ю",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1780,
          "end": 1781,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1803,
      "end": 1818,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1807,
          "end": 1817,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1807,
            "end": 1813,
            "decorators": [],
            "name": "Я",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1816,
            "end": 1817,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1819,
      "end": 1851,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1832,
        "end": 1851,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1836,
            "end": 1849,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1836,
              "end": 1848,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1843,
                  "end": 1847,
                  "raw": "'#Я'",
                  "value": "#Я",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1836,
                "end": 1842,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1823,
        "end": 1830,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1823,
          "end": 1824,
          "decorators": [],
          "name": "Я",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1829,
          "end": 1830,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1852,
      "end": 1867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1856,
          "end": 1866,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1856,
            "end": 1862,
            "decorators": [],
            "name": "Ё",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1865,
            "end": 1866,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1868,
      "end": 1900,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1881,
        "end": 1900,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1885,
            "end": 1898,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1885,
              "end": 1897,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1892,
                  "end": 1896,
                  "raw": "'#Ё'",
                  "value": "#Ё",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1885,
                "end": 1891,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1872,
        "end": 1879,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 1872,
          "end": 1873,
          "decorators": [],
          "name": "Ё",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1878,
          "end": 1879,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
