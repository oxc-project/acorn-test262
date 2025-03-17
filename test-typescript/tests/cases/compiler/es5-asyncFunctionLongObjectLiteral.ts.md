__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 712,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 288,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 65,
            "name": "fooShort",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 68,
            "end": 288,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 80,
              "end": 288,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 86,
                  "end": 286,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 93,
                    "end": 285,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 103,
                        "end": 130,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 104,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 106,
                          "end": 130,
                          "argument": {
                            "type": "CallExpression",
                            "start": 112,
                            "end": 130,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 112,
                              "end": 127,
                              "object": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 119,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 127,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 128,
                                "end": 129,
                                "value": 0,
                                "raw": "0"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 140,
                        "end": 167,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 143,
                          "end": 167,
                          "argument": {
                            "type": "CallExpression",
                            "start": 149,
                            "end": 167,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 149,
                              "end": 164,
                              "object": {
                                "type": "Identifier",
                                "start": 149,
                                "end": 156,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 164,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 165,
                                "end": 166,
                                "value": 1,
                                "raw": "1"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 177,
                        "end": 204,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 178,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 180,
                          "end": 204,
                          "argument": {
                            "type": "CallExpression",
                            "start": 186,
                            "end": 204,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 186,
                              "end": 201,
                              "object": {
                                "type": "Identifier",
                                "start": 186,
                                "end": 193,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 194,
                                "end": 201,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 202,
                                "end": 203,
                                "value": 2,
                                "raw": "2"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 214,
                        "end": 241,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 215,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 217,
                          "end": 241,
                          "argument": {
                            "type": "CallExpression",
                            "start": 223,
                            "end": 241,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 223,
                              "end": 238,
                              "object": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 230,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 231,
                                "end": 238,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 239,
                                "end": 240,
                                "value": 3,
                                "raw": "3"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 251,
                        "end": 278,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 254,
                          "end": 278,
                          "argument": {
                            "type": "CallExpression",
                            "start": 260,
                            "end": 278,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 260,
                              "end": 275,
                              "object": {
                                "type": "Identifier",
                                "start": 260,
                                "end": 267,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 275,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 276,
                                "end": 277,
                                "value": 4,
                                "raw": "4"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 711,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 711,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 303,
            "name": "fooLong",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 306,
            "end": 711,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 318,
              "end": 711,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 324,
                  "end": 709,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 331,
                    "end": 708,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 341,
                        "end": 368,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 342,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 344,
                          "end": 368,
                          "argument": {
                            "type": "CallExpression",
                            "start": 350,
                            "end": 368,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 350,
                              "end": 365,
                              "object": {
                                "type": "Identifier",
                                "start": 350,
                                "end": 357,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 358,
                                "end": 365,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 366,
                                "end": 367,
                                "value": 0,
                                "raw": "0"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 378,
                        "end": 405,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 378,
                          "end": 379,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 381,
                          "end": 405,
                          "argument": {
                            "type": "CallExpression",
                            "start": 387,
                            "end": 405,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 387,
                              "end": 402,
                              "object": {
                                "type": "Identifier",
                                "start": 387,
                                "end": 394,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 395,
                                "end": 402,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 403,
                                "end": 404,
                                "value": 1,
                                "raw": "1"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 415,
                        "end": 442,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 416,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 418,
                          "end": 442,
                          "argument": {
                            "type": "CallExpression",
                            "start": 424,
                            "end": 442,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 424,
                              "end": 439,
                              "object": {
                                "type": "Identifier",
                                "start": 424,
                                "end": 431,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 432,
                                "end": 439,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 440,
                                "end": 441,
                                "value": 2,
                                "raw": "2"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 452,
                        "end": 479,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 453,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 455,
                          "end": 479,
                          "argument": {
                            "type": "CallExpression",
                            "start": 461,
                            "end": 479,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 461,
                              "end": 476,
                              "object": {
                                "type": "Identifier",
                                "start": 461,
                                "end": 468,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 469,
                                "end": 476,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 477,
                                "end": 478,
                                "value": 3,
                                "raw": "3"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 489,
                        "end": 516,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 489,
                          "end": 490,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 492,
                          "end": 516,
                          "argument": {
                            "type": "CallExpression",
                            "start": 498,
                            "end": 516,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 498,
                              "end": 513,
                              "object": {
                                "type": "Identifier",
                                "start": 498,
                                "end": 505,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 506,
                                "end": 513,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 514,
                                "end": 515,
                                "value": 4,
                                "raw": "4"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 526,
                        "end": 553,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 527,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 529,
                          "end": 553,
                          "argument": {
                            "type": "CallExpression",
                            "start": 535,
                            "end": 553,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 535,
                              "end": 550,
                              "object": {
                                "type": "Identifier",
                                "start": 535,
                                "end": 542,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 543,
                                "end": 550,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 551,
                                "end": 552,
                                "value": 5,
                                "raw": "5"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 563,
                        "end": 590,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 563,
                          "end": 564,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 566,
                          "end": 590,
                          "argument": {
                            "type": "CallExpression",
                            "start": 572,
                            "end": 590,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 572,
                              "end": 587,
                              "object": {
                                "type": "Identifier",
                                "start": 572,
                                "end": 579,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 580,
                                "end": 587,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 588,
                                "end": 589,
                                "value": 6,
                                "raw": "6"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 600,
                        "end": 627,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 600,
                          "end": 601,
                          "name": "h",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 603,
                          "end": 627,
                          "argument": {
                            "type": "CallExpression",
                            "start": 609,
                            "end": 627,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 609,
                              "end": 624,
                              "object": {
                                "type": "Identifier",
                                "start": 609,
                                "end": 616,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 617,
                                "end": 624,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 625,
                                "end": 626,
                                "value": 7,
                                "raw": "7"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 637,
                        "end": 664,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 638,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 640,
                          "end": 664,
                          "argument": {
                            "type": "CallExpression",
                            "start": 646,
                            "end": 664,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 646,
                              "end": 661,
                              "object": {
                                "type": "Identifier",
                                "start": 646,
                                "end": 653,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 654,
                                "end": 661,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 662,
                                "end": 663,
                                "value": 8,
                                "raw": "8"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 674,
                        "end": 701,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 674,
                          "end": 675,
                          "name": "j",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "start": 677,
                          "end": 701,
                          "argument": {
                            "type": "CallExpression",
                            "start": 683,
                            "end": 701,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 683,
                              "end": 698,
                              "object": {
                                "type": "Identifier",
                                "start": 683,
                                "end": 690,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 691,
                                "end": 698,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 699,
                                "end": 700,
                                "value": 9,
                                "raw": "9"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
