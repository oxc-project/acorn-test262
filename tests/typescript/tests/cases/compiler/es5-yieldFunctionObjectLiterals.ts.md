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
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "value": "g",
              "raw": "\"g\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 79,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 103,
        "decorators": [],
        "name": "objectLiteral1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 179,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 112,
            "end": 177,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 177,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 135,
                        "end": 136,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 146,
                      "end": 156,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "YieldExpression",
                        "start": 149,
                        "end": 156,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 155,
                          "end": 156,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 166,
                      "end": 170,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 169,
                        "end": 170,
                        "value": 3,
                        "raw": "3"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 205,
        "decorators": [],
        "name": "objectLiteral2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 208,
        "end": 285,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 214,
            "end": 283,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 220,
                "end": 283,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 237,
                        "end": 238,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 248,
                      "end": 262,
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "start": 249,
                        "end": 252,
                        "callee": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "value": {
                        "type": "YieldExpression",
                        "start": 255,
                        "end": 262,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 261,
                          "end": 262,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 272,
                      "end": 276,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 273,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 275,
                        "end": 276,
                        "value": 3,
                        "raw": "3"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 405,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 311,
        "decorators": [],
        "name": "objectLiteral3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 314,
        "end": 405,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 403,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 403,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 341,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 343,
                        "end": 344,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 354,
                      "end": 364,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "YieldExpression",
                        "start": 357,
                        "end": 364,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 363,
                          "end": 364,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 374,
                      "end": 382,
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "start": 375,
                        "end": 378,
                        "callee": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 376,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 381,
                        "end": 382,
                        "value": 3,
                        "raw": "3"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 392,
                      "end": 396,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 393,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 395,
                        "end": 396,
                        "value": 4,
                        "raw": "4"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 407,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 431,
        "decorators": [],
        "name": "objectLiteral4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 434,
        "end": 525,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 440,
            "end": 523,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 446,
                "end": 523,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 461,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 463,
                        "end": 464,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 474,
                      "end": 482,
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "start": 475,
                        "end": 478,
                        "callee": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 481,
                        "end": 482,
                        "value": 2,
                        "raw": "2"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 492,
                      "end": 502,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "YieldExpression",
                        "start": 495,
                        "end": 502,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 501,
                          "end": 502,
                          "value": 3,
                          "raw": "3"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 512,
                      "end": 516,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 513,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 515,
                        "end": 516,
                        "value": 4,
                        "raw": "4"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 527,
      "end": 631,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 551,
        "decorators": [],
        "name": "objectLiteral5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 554,
        "end": 631,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 560,
            "end": 629,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 566,
                "end": 629,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 583,
                        "end": 584,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 594,
                      "end": 608,
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "start": 595,
                        "end": 598,
                        "callee": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "value": {
                        "type": "YieldExpression",
                        "start": 601,
                        "end": 608,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 607,
                          "end": 608,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 618,
                      "end": 622,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 619,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 621,
                        "end": 622,
                        "value": 4,
                        "raw": "4"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 633,
      "end": 733,
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 657,
        "decorators": [],
        "name": "objectLiteral6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 733,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 666,
            "end": 731,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 672,
                "end": 731,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 687,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 689,
                        "end": 690,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 700,
                      "end": 710,
                      "kind": "init",
                      "key": {
                        "type": "YieldExpression",
                        "start": 701,
                        "end": 706,
                        "delegate": false,
                        "argument": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 709,
                        "end": 710,
                        "value": 2,
                        "raw": "2"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 720,
                      "end": 724,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 723,
                        "end": 724,
                        "value": 4,
                        "raw": "4"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 735,
      "end": 841,
      "id": {
        "type": "Identifier",
        "start": 745,
        "end": 759,
        "decorators": [],
        "name": "objectLiteral7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 762,
        "end": 841,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 768,
            "end": 839,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 774,
                "end": 839,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 789,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 791,
                        "end": 792,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 802,
                      "end": 818,
                      "kind": "init",
                      "key": {
                        "type": "YieldExpression",
                        "start": 803,
                        "end": 808,
                        "delegate": false,
                        "argument": null
                      },
                      "value": {
                        "type": "YieldExpression",
                        "start": 811,
                        "end": 818,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 817,
                          "end": 818,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 828,
                      "end": 832,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 829,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 831,
                        "end": 832,
                        "value": 4,
                        "raw": "4"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
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
