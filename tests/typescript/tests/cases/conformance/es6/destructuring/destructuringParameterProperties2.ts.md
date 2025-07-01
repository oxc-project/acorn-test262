__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 26
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 38,
                        "end": 44
                      },
                      "start": 36,
                      "end": 44
                    },
                    "start": 35,
                    "end": 44
                  },
                  "readonly": false,
                  "static": false,
                  "start": 27,
                  "end": 44
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 59
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 62
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 66,
                            "end": 72
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 74,
                            "end": 80
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 82,
                            "end": 89
                          }
                        ],
                        "start": 65,
                        "end": 90
                      },
                      "start": 63,
                      "end": 90
                    },
                    "start": 54,
                    "end": 90
                  },
                  "readonly": false,
                  "static": false,
                  "start": 46,
                  "end": 90
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 107,
                            "end": 108
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 122
                          },
                          "start": 107,
                          "end": 122
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 127
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 132,
                            "end": 141
                          },
                          "start": 126,
                          "end": 141
                        },
                        "start": 107,
                        "end": 141
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 147,
                              "end": 151
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 152,
                              "end": 153
                            },
                            "optional": false,
                            "computed": false,
                            "start": 147,
                            "end": 153
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 158,
                            "end": 167
                          },
                          "start": 147,
                          "end": 167
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 171,
                              "end": 175
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 176,
                              "end": 177
                            },
                            "optional": false,
                            "computed": false,
                            "start": 171,
                            "end": 177
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 191
                          },
                          "start": 171,
                          "end": 191
                        },
                        "start": 147,
                        "end": 191
                      },
                      "start": 106,
                      "end": 192
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 208,
                                "end": 212
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 213,
                                "end": 214
                              },
                              "optional": false,
                              "computed": false,
                              "start": 208,
                              "end": 214
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 217,
                                "end": 218
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 222,
                                "end": 223
                              },
                              "start": 217,
                              "end": 223
                            },
                            "start": 208,
                            "end": 223
                          },
                          "directive": null,
                          "start": 208,
                          "end": 224
                        }
                      ],
                      "start": 194,
                      "end": 234
                    },
                    "alternate": null,
                    "start": 102,
                    "end": 234
                  }
                ],
                "start": 92,
                "end": 240
              },
              "expression": false,
              "start": 26,
              "end": 240
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 240
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getA",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 257
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 277,
                        "end": 281
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 283
                      },
                      "optional": false,
                      "computed": false,
                      "start": 277,
                      "end": 283
                    },
                    "start": 270,
                    "end": 283
                  }
                ],
                "start": 260,
                "end": 289
              },
              "expression": false,
              "start": 257,
              "end": 289
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 246,
            "end": 289
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getB",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 306
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 326,
                        "end": 330
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 331,
                        "end": 332
                      },
                      "optional": false,
                      "computed": false,
                      "start": 326,
                      "end": 332
                    },
                    "start": 319,
                    "end": 332
                  }
                ],
                "start": 309,
                "end": 338
              },
              "expression": false,
              "start": 306,
              "end": 338
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 295,
            "end": 338
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getC",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 355
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 375,
                        "end": 379
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 381
                      },
                      "optional": false,
                      "computed": false,
                      "start": 375,
                      "end": 381
                    },
                    "start": 368,
                    "end": 382
                  }
                ],
                "start": 358,
                "end": 388
              },
              "expression": false,
              "start": 355,
              "end": 388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 344,
            "end": 388
          }
        ],
        "start": 9,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 390
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 397
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 406
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 416
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 419,
                    "end": 420
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 431
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 433,
                    "end": 435
                  }
                ],
                "start": 418,
                "end": 436
              }
            ],
            "start": 400,
            "end": 437
          },
          "definite": false,
          "start": 396,
          "end": 437
        }
      ],
      "declare": false,
      "start": 392,
      "end": 438
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 447
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 457
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 458
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 468
                  },
                  "optional": false,
                  "computed": false,
                  "start": 462,
                  "end": 468
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 462,
                "end": 470
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 473
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 478
                  },
                  "optional": false,
                  "computed": false,
                  "start": 472,
                  "end": 478
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 472,
                "end": 480
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 483
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 488
                  },
                  "optional": false,
                  "computed": false,
                  "start": 482,
                  "end": 488
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 482,
                "end": 490
              }
            ],
            "start": 461,
            "end": 491
          },
          "definite": false,
          "start": 443,
          "end": 491
        }
      ],
      "declare": false,
      "start": 439,
      "end": 492
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 499
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 508
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 509,
                "end": 511
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 514,
                    "end": 515
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 517,
                    "end": 519
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 521,
                    "end": 525
                  }
                ],
                "start": 513,
                "end": 526
              }
            ],
            "start": 502,
            "end": 527
          },
          "definite": false,
          "start": 498,
          "end": 527
        }
      ],
      "declare": false,
      "start": 494,
      "end": 528
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 537
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 547
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 548
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 558
                  },
                  "optional": false,
                  "computed": false,
                  "start": 552,
                  "end": 558
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 552,
                "end": 560
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 563
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 568
                  },
                  "optional": false,
                  "computed": false,
                  "start": 562,
                  "end": 568
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 562,
                "end": 570
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 573
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 578
                  },
                  "optional": false,
                  "computed": false,
                  "start": 572,
                  "end": 578
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 572,
                "end": 580
              }
            ],
            "start": 551,
            "end": 581
          },
          "definite": false,
          "start": 533,
          "end": 581
        }
      ],
      "declare": false,
      "start": 529,
      "end": 582
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 589
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 598
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 599,
                "end": 601
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 604,
                    "end": 613
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 615,
                    "end": 617
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 619,
                    "end": 623
                  }
                ],
                "start": 603,
                "end": 624
              }
            ],
            "start": 592,
            "end": 625
          },
          "definite": false,
          "start": 588,
          "end": 625
        }
      ],
      "declare": false,
      "start": 584,
      "end": 626
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 635
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 640
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 645
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 646
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 651
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 656
                  },
                  "optional": false,
                  "computed": false,
                  "start": 650,
                  "end": 656
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 650,
                "end": 658
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 661
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 666
                  },
                  "optional": false,
                  "computed": false,
                  "start": 660,
                  "end": 666
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 660,
                "end": 668
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 676
                  },
                  "optional": false,
                  "computed": false,
                  "start": 670,
                  "end": 676
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 670,
                "end": 678
              }
            ],
            "start": 649,
            "end": 679
          },
          "definite": false,
          "start": 631,
          "end": 679
        }
      ],
      "declare": false,
      "start": 627,
      "end": 680
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
