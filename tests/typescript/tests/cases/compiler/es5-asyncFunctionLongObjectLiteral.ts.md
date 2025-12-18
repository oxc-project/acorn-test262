__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooShort",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 65
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 104
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 112,
                                "end": 119
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 120,
                                "end": 127
                              },
                              "optional": false,
                              "computed": false,
                              "start": 112,
                              "end": 127
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 128,
                                "end": 129
                              }
                            ],
                            "optional": false,
                            "start": 112,
                            "end": 130
                          },
                          "start": 106,
                          "end": 130
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 103,
                        "end": 130
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 141
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 149,
                                "end": 156
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 164
                              },
                              "optional": false,
                              "computed": false,
                              "start": 149,
                              "end": 164
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 165,
                                "end": 166
                              }
                            ],
                            "optional": false,
                            "start": 149,
                            "end": 167
                          },
                          "start": 143,
                          "end": 167
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 140,
                        "end": 167
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 178
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 186,
                                "end": 193
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 201
                              },
                              "optional": false,
                              "computed": false,
                              "start": 186,
                              "end": 201
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 202,
                                "end": 203
                              }
                            ],
                            "optional": false,
                            "start": 186,
                            "end": 204
                          },
                          "start": 180,
                          "end": 204
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 177,
                        "end": 204
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 215
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 223,
                                "end": 230
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 231,
                                "end": 238
                              },
                              "optional": false,
                              "computed": false,
                              "start": 223,
                              "end": 238
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 239,
                                "end": 240
                              }
                            ],
                            "optional": false,
                            "start": 223,
                            "end": 241
                          },
                          "start": 217,
                          "end": 241
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 214,
                        "end": 241
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 252
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 260,
                                "end": 267
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 268,
                                "end": 275
                              },
                              "optional": false,
                              "computed": false,
                              "start": 260,
                              "end": 275
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 276,
                                "end": 277
                              }
                            ],
                            "optional": false,
                            "start": 260,
                            "end": 278
                          },
                          "start": 254,
                          "end": 278
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 251,
                        "end": 278
                      }
                    ],
                    "start": 93,
                    "end": 285
                  },
                  "start": 86,
                  "end": 286
                }
              ],
              "start": 80,
              "end": 288
            },
            "id": null,
            "generator": false,
            "start": 68,
            "end": 288
          },
          "definite": false,
          "start": 57,
          "end": 288
        }
      ],
      "declare": false,
      "start": 51,
      "end": 288
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooLong",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 303
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 341,
                          "end": 342
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 350,
                                "end": 357
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 358,
                                "end": 365
                              },
                              "optional": false,
                              "computed": false,
                              "start": 350,
                              "end": 365
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 366,
                                "end": 367
                              }
                            ],
                            "optional": false,
                            "start": 350,
                            "end": 368
                          },
                          "start": 344,
                          "end": 368
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 341,
                        "end": 368
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 379
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 387,
                                "end": 394
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 395,
                                "end": 402
                              },
                              "optional": false,
                              "computed": false,
                              "start": 387,
                              "end": 402
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 403,
                                "end": 404
                              }
                            ],
                            "optional": false,
                            "start": 387,
                            "end": 405
                          },
                          "start": 381,
                          "end": 405
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 378,
                        "end": 405
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 416
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 424,
                                "end": 431
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 432,
                                "end": 439
                              },
                              "optional": false,
                              "computed": false,
                              "start": 424,
                              "end": 439
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 440,
                                "end": 441
                              }
                            ],
                            "optional": false,
                            "start": 424,
                            "end": 442
                          },
                          "start": 418,
                          "end": 442
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 415,
                        "end": 442
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 453
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 461,
                                "end": 468
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 469,
                                "end": 476
                              },
                              "optional": false,
                              "computed": false,
                              "start": 461,
                              "end": 476
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 477,
                                "end": 478
                              }
                            ],
                            "optional": false,
                            "start": 461,
                            "end": 479
                          },
                          "start": 455,
                          "end": 479
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 452,
                        "end": 479
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 489,
                          "end": 490
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 498,
                                "end": 505
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 506,
                                "end": 513
                              },
                              "optional": false,
                              "computed": false,
                              "start": 498,
                              "end": 513
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 514,
                                "end": 515
                              }
                            ],
                            "optional": false,
                            "start": 498,
                            "end": 516
                          },
                          "start": 492,
                          "end": 516
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 489,
                        "end": 516
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 526,
                          "end": 527
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 535,
                                "end": 542
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 543,
                                "end": 550
                              },
                              "optional": false,
                              "computed": false,
                              "start": 535,
                              "end": 550
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 551,
                                "end": 552
                              }
                            ],
                            "optional": false,
                            "start": 535,
                            "end": 553
                          },
                          "start": 529,
                          "end": 553
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 526,
                        "end": 553
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 563,
                          "end": 564
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 572,
                                "end": 579
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 580,
                                "end": 587
                              },
                              "optional": false,
                              "computed": false,
                              "start": 572,
                              "end": 587
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 6,
                                "raw": "6",
                                "start": 588,
                                "end": 589
                              }
                            ],
                            "optional": false,
                            "start": 572,
                            "end": 590
                          },
                          "start": 566,
                          "end": 590
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 563,
                        "end": 590
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 600,
                          "end": 601
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 609,
                                "end": 616
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 617,
                                "end": 624
                              },
                              "optional": false,
                              "computed": false,
                              "start": 609,
                              "end": 624
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 7,
                                "raw": "7",
                                "start": 625,
                                "end": 626
                              }
                            ],
                            "optional": false,
                            "start": 609,
                            "end": 627
                          },
                          "start": 603,
                          "end": 627
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 600,
                        "end": 627
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 638
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 646,
                                "end": 653
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 654,
                                "end": 661
                              },
                              "optional": false,
                              "computed": false,
                              "start": 646,
                              "end": 661
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 8,
                                "raw": "8",
                                "start": 662,
                                "end": 663
                              }
                            ],
                            "optional": false,
                            "start": 646,
                            "end": 664
                          },
                          "start": 640,
                          "end": 664
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 637,
                        "end": 664
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 674,
                          "end": 675
                        },
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 683,
                                "end": 690
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 691,
                                "end": 698
                              },
                              "optional": false,
                              "computed": false,
                              "start": 683,
                              "end": 698
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 9,
                                "raw": "9",
                                "start": 699,
                                "end": 700
                              }
                            ],
                            "optional": false,
                            "start": 683,
                            "end": 701
                          },
                          "start": 677,
                          "end": 701
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 674,
                        "end": 701
                      }
                    ],
                    "start": 331,
                    "end": 708
                  },
                  "start": 324,
                  "end": 709
                }
              ],
              "start": 318,
              "end": 711
            },
            "id": null,
            "generator": false,
            "start": 306,
            "end": 711
          },
          "definite": false,
          "start": 296,
          "end": 711
        }
      ],
      "declare": false,
      "start": 290,
      "end": 711
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 51,
  "end": 711
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56,
    "range": [
      51,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "fooShort",
    "start": 57,
    "end": 65,
    "range": [
      57,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 68,
    "end": 73,
    "range": [
      68,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 106,
    "end": 111,
    "range": [
      106,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 120,
    "end": 127,
    "range": [
      120,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 149,
    "end": 156,
    "range": [
      149,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 157,
    "end": 164,
    "range": [
      157,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 180,
    "end": 185,
    "range": [
      180,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 186,
    "end": 193,
    "range": [
      186,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 194,
    "end": 201,
    "range": [
      194,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 217,
    "end": 222,
    "range": [
      217,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 223,
    "end": 230,
    "range": [
      223,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 231,
    "end": 238,
    "range": [
      231,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 268,
    "end": 275,
    "range": [
      268,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 290,
    "end": 295,
    "range": [
      290,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "fooLong",
    "start": 296,
    "end": 303,
    "range": [
      296,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 306,
    "end": 311,
    "range": [
      306,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 315,
    "end": 317,
    "range": [
      315,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 324,
    "end": 330,
    "range": [
      324,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 344,
    "end": 349,
    "range": [
      344,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 350,
    "end": 357,
    "range": [
      350,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 358,
    "end": 365,
    "range": [
      358,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 387,
    "end": 394,
    "range": [
      387,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 395,
    "end": 402,
    "range": [
      395,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 418,
    "end": 423,
    "range": [
      418,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 424,
    "end": 431,
    "range": [
      424,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 432,
    "end": 439,
    "range": [
      432,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 455,
    "end": 460,
    "range": [
      455,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 461,
    "end": 468,
    "range": [
      461,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 469,
    "end": 476,
    "range": [
      469,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 492,
    "end": 497,
    "range": [
      492,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 498,
    "end": 505,
    "range": [
      498,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 506,
    "end": 513,
    "range": [
      506,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 529,
    "end": 534,
    "range": [
      529,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 535,
    "end": 542,
    "range": [
      535,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 543,
    "end": 550,
    "range": [
      543,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 566,
    "end": 571,
    "range": [
      566,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 572,
    "end": 579,
    "range": [
      572,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 580,
    "end": 587,
    "range": [
      580,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 603,
    "end": 608,
    "range": [
      603,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 609,
    "end": 616,
    "range": [
      609,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 617,
    "end": 624,
    "range": [
      617,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 640,
    "end": 645,
    "range": [
      640,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 646,
    "end": 653,
    "range": [
      646,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 654,
    "end": 661,
    "range": [
      654,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 677,
    "end": 682,
    "range": [
      677,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 683,
    "end": 690,
    "range": [
      683,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 691,
    "end": 698,
    "range": [
      691,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  }
]
```
