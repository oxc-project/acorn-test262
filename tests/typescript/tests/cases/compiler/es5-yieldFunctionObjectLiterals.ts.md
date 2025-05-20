__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 49,
  "end": 841,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 77,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 64,
            "end": 75,
            "argument": {
              "type": "Literal",
              "start": 71,
              "end": 74,
              "raw": "\"g\"",
              "value": "g"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 79,
      "end": 179,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 179,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 112,
            "end": 177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 177,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 122,
                  "end": 177,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 132,
                      "end": 136,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 135,
                        "end": 136,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 146,
                      "end": 156,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "YieldExpression",
                        "start": 149,
                        "end": 156,
                        "argument": {
                          "type": "Literal",
                          "start": 155,
                          "end": 156,
                          "raw": "2",
                          "value": 2
                        },
                        "delegate": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 166,
                      "end": 170,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 169,
                        "end": 170,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 103,
        "decorators": [],
        "name": "objectLiteral1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 285,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 208,
        "end": 285,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 214,
            "end": 283,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 220,
                "end": 283,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 224,
                  "end": 283,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 234,
                      "end": 238,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 237,
                        "end": 238,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 248,
                      "end": 262,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 249,
                        "end": 252,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "YieldExpression",
                        "start": 255,
                        "end": 262,
                        "argument": {
                          "type": "Literal",
                          "start": 261,
                          "end": 262,
                          "raw": "2",
                          "value": 2
                        },
                        "delegate": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 272,
                      "end": 276,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 273,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 275,
                        "end": 276,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 205,
        "decorators": [],
        "name": "objectLiteral2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 405,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 314,
        "end": 405,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 403,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 403,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 330,
                  "end": 403,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 340,
                      "end": 344,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 341,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 343,
                        "end": 344,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 354,
                      "end": 364,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "YieldExpression",
                        "start": 357,
                        "end": 364,
                        "argument": {
                          "type": "Literal",
                          "start": 363,
                          "end": 364,
                          "raw": "2",
                          "value": 2
                        },
                        "delegate": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 374,
                      "end": 382,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 375,
                        "end": 378,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 376,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 381,
                        "end": 382,
                        "raw": "3",
                        "value": 3
                      }
                    },
                    {
                      "type": "Property",
                      "start": 392,
                      "end": 396,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 393,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 395,
                        "end": 396,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 311,
        "decorators": [],
        "name": "objectLiteral3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 407,
      "end": 525,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 434,
        "end": 525,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 440,
            "end": 523,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 446,
                "end": 523,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 450,
                  "end": 523,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 460,
                      "end": 464,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 461,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 463,
                        "end": 464,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 474,
                      "end": 482,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 475,
                        "end": 478,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 481,
                        "end": 482,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "Property",
                      "start": 492,
                      "end": 502,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "YieldExpression",
                        "start": 495,
                        "end": 502,
                        "argument": {
                          "type": "Literal",
                          "start": 501,
                          "end": 502,
                          "raw": "3",
                          "value": 3
                        },
                        "delegate": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 512,
                      "end": 516,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 513,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 515,
                        "end": 516,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 431,
        "decorators": [],
        "name": "objectLiteral4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 527,
      "end": 631,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 554,
        "end": 631,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 560,
            "end": 629,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 566,
                "end": 629,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 570,
                  "end": 629,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 580,
                      "end": 584,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 583,
                        "end": 584,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 594,
                      "end": 608,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 595,
                        "end": 598,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "YieldExpression",
                        "start": 601,
                        "end": 608,
                        "argument": {
                          "type": "Literal",
                          "start": 607,
                          "end": 608,
                          "raw": "2",
                          "value": 2
                        },
                        "delegate": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 618,
                      "end": 622,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 619,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 621,
                        "end": 622,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 551,
        "decorators": [],
        "name": "objectLiteral5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 633,
      "end": 733,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 733,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 666,
            "end": 731,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 672,
                "end": 731,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 676,
                  "end": 731,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 686,
                      "end": 690,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 687,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 689,
                        "end": 690,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 700,
                      "end": 710,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 701,
                        "end": 706,
                        "argument": null,
                        "delegate": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 709,
                        "end": 710,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "Property",
                      "start": 720,
                      "end": 724,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 723,
                        "end": 724,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 657,
        "decorators": [],
        "name": "objectLiteral6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 735,
      "end": 841,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 762,
        "end": 841,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 768,
            "end": 839,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 774,
                "end": 839,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 778,
                  "end": 839,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 788,
                      "end": 792,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 789,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 791,
                        "end": 792,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 802,
                      "end": 818,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 803,
                        "end": 808,
                        "argument": null,
                        "delegate": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "YieldExpression",
                        "start": 811,
                        "end": 818,
                        "argument": {
                          "type": "Literal",
                          "start": 817,
                          "end": 818,
                          "raw": "2",
                          "value": 2
                        },
                        "delegate": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 828,
                      "end": 832,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 829,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 831,
                        "end": 832,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 745,
        "end": 759,
        "decorators": [],
        "name": "objectLiteral7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
