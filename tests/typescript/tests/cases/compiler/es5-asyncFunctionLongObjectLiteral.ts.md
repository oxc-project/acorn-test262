__ESTREE_TEST__:PASS:
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
