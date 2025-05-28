__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1182,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 62,
        "decorators": [],
        "name": "switchStatement0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 144,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 71,
            "end": 142,
            "discriminant": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 92,
                "end": 109,
                "test": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 100,
                    "end": 102,
                    "expression": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 103,
                    "end": 109,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 118,
                "end": 136,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 129,
                    "expression": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 130,
                    "end": 136,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 177,
        "decorators": [],
        "name": "switchStatement1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 265,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 186,
            "end": 263,
            "discriminant": {
              "type": "AwaitExpression",
              "start": 194,
              "end": 201,
              "argument": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 213,
                "end": 230,
                "test": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 221,
                    "end": 223,
                    "expression": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 224,
                    "end": 230,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 239,
                "end": 257,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 248,
                    "end": 250,
                    "expression": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 251,
                    "end": 257,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 267,
      "end": 386,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 298,
        "decorators": [],
        "name": "switchStatement2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 386,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 307,
            "end": 384,
            "discriminant": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 328,
                "end": 351,
                "test": {
                  "type": "AwaitExpression",
                  "start": 333,
                  "end": 340,
                  "argument": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 340,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 344,
                    "expression": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 345,
                    "end": 351,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 360,
                "end": 378,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 369,
                    "end": 371,
                    "expression": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 372,
                    "end": 378,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 388,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 419,
        "decorators": [],
        "name": "switchStatement3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 422,
        "end": 507,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 428,
            "end": 505,
            "discriminant": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 449,
                "end": 472,
                "test": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 455,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 457,
                    "end": 465,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 457,
                      "end": 464,
                      "argument": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 464,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 466,
                    "end": 472,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 481,
                "end": 499,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 490,
                    "end": 492,
                    "expression": {
                      "type": "Identifier",
                      "start": 490,
                      "end": 491,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 493,
                    "end": 499,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 509,
      "end": 628,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 540,
        "decorators": [],
        "name": "switchStatement4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 543,
        "end": 628,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 549,
            "end": 626,
            "discriminant": {
              "type": "Identifier",
              "start": 557,
              "end": 558,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 570,
                "end": 587,
                "test": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 578,
                    "end": 580,
                    "expression": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 581,
                    "end": 587,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 596,
                "end": 620,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 605,
                    "end": 613,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 605,
                      "end": 612,
                      "argument": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 612,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 614,
                    "end": 620,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 630,
      "end": 748,
      "id": {
        "type": "Identifier",
        "start": 645,
        "end": 661,
        "decorators": [],
        "name": "switchStatement5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 664,
        "end": 748,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 670,
            "end": 746,
            "discriminant": {
              "type": "Identifier",
              "start": 678,
              "end": 679,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 691,
                "end": 708,
                "test": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 697,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 699,
                    "end": 701,
                    "expression": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 700,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 702,
                    "end": 708,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 717,
                "end": 740,
                "test": {
                  "type": "AwaitExpression",
                  "start": 722,
                  "end": 729,
                  "argument": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 729,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 731,
                    "end": 733,
                    "expression": {
                      "type": "Identifier",
                      "start": 731,
                      "end": 732,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 734,
                    "end": 740,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 750,
      "end": 895,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 781,
        "decorators": [],
        "name": "switchStatement6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 784,
        "end": 895,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 790,
            "end": 893,
            "discriminant": {
              "type": "Identifier",
              "start": 798,
              "end": 799,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 811,
                "end": 829,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 820,
                    "end": 822,
                    "expression": {
                      "type": "Identifier",
                      "start": 820,
                      "end": 821,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 823,
                    "end": 829,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 838,
                "end": 861,
                "test": {
                  "type": "AwaitExpression",
                  "start": 843,
                  "end": 850,
                  "argument": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 850,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 852,
                    "end": 854,
                    "expression": {
                      "type": "Identifier",
                      "start": 852,
                      "end": 853,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 855,
                    "end": 861,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 870,
                "end": 887,
                "test": {
                  "type": "Identifier",
                  "start": 875,
                  "end": 876,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 878,
                    "end": 880,
                    "expression": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 879,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 881,
                    "end": 887,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 897,
      "end": 1042,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 928,
        "decorators": [],
        "name": "switchStatement7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 931,
        "end": 1042,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 937,
            "end": 1040,
            "discriminant": {
              "type": "Identifier",
              "start": 945,
              "end": 946,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 958,
                "end": 976,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 967,
                    "end": 969,
                    "expression": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 968,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 970,
                    "end": 976,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 985,
                "end": 1002,
                "test": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 991,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 993,
                    "end": 995,
                    "expression": {
                      "type": "Identifier",
                      "start": 993,
                      "end": 994,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 996,
                    "end": 1002,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1011,
                "end": 1034,
                "test": {
                  "type": "AwaitExpression",
                  "start": 1016,
                  "end": 1023,
                  "argument": {
                    "type": "Identifier",
                    "start": 1022,
                    "end": 1023,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1025,
                    "end": 1027,
                    "expression": {
                      "type": "Identifier",
                      "start": 1025,
                      "end": 1026,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1028,
                    "end": 1034,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1044,
      "end": 1182,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1075,
        "decorators": [],
        "name": "switchStatement8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1078,
        "end": 1182,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1084,
            "end": 1180,
            "discriminant": {
              "type": "Identifier",
              "start": 1092,
              "end": 1093,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1105,
                "end": 1116,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1114,
                    "end": 1116,
                    "expression": {
                      "type": "Identifier",
                      "start": 1114,
                      "end": 1115,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1125,
                "end": 1142,
                "test": {
                  "type": "Identifier",
                  "start": 1130,
                  "end": 1131,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1133,
                    "end": 1135,
                    "expression": {
                      "type": "Identifier",
                      "start": 1133,
                      "end": 1134,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1136,
                    "end": 1142,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1151,
                "end": 1174,
                "test": {
                  "type": "AwaitExpression",
                  "start": 1156,
                  "end": 1163,
                  "argument": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1163,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1165,
                    "end": 1167,
                    "expression": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1168,
                    "end": 1174,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
