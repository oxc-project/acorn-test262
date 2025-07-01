__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
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
                  "start": 23,
                  "end": 24
                },
                "init": null,
                "definite": false,
                "start": 23,
                "end": 24
              }
            ],
            "declare": false,
            "start": 19,
            "end": 25
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
                  "start": 34,
                  "end": 35
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 38,
                  "end": 39
                },
                "definite": false,
                "start": 34,
                "end": 39
              }
            ],
            "declare": false,
            "start": 30,
            "end": 40
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 55
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 58,
                    "end": 59
                  },
                  "definite": false,
                  "start": 54,
                  "end": 59
                }
              ],
              "declare": false,
              "start": 50,
              "end": 59
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 65,
                "end": 67
              },
              "start": 61,
              "end": 67
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
              },
              "start": 69,
              "end": 72
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "start": 84,
                    "end": 90
                  },
                  "directive": null,
                  "start": 84,
                  "end": 91
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 101
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 105,
                      "end": 106
                    },
                    "start": 100,
                    "end": 106
                  },
                  "directive": null,
                  "start": 100,
                  "end": 107
                }
              ],
              "start": 74,
              "end": 113
            },
            "start": 45,
            "end": 113
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 17,
                "raw": "17",
                "start": 126,
                "end": 128
              },
              "start": 122,
              "end": 128
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "/=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "right": {
                      "type": "Literal",
                      "value": 9,
                      "raw": "9",
                      "start": 145,
                      "end": 146
                    },
                    "start": 140,
                    "end": 146
                  },
                  "directive": null,
                  "start": 140,
                  "end": 147
                }
              ],
              "start": 130,
              "end": 153
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 174,
                      "end": 176
                    },
                    "start": 169,
                    "end": 176
                  },
                  "directive": null,
                  "start": 169,
                  "end": 177
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "start": 186,
                    "end": 189
                  },
                  "directive": null,
                  "start": 186,
                  "end": 190
                }
              ],
              "start": 159,
              "end": 196
            },
            "start": 118,
            "end": 196
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 219,
                      "end": 220
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 230,
                      "end": 231
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 241,
                      "end": 242
                    }
                  ],
                  "start": 209,
                  "end": 248
                },
                "definite": false,
                "start": 205,
                "end": 248
              }
            ],
            "declare": false,
            "start": 201,
            "end": 249
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 261
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 277,
                        "end": 278
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 274,
                      "end": 278
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 291,
                        "end": 298
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 288,
                      "end": 298
                    }
                  ],
                  "start": 264,
                  "end": 304
                },
                "definite": false,
                "start": 258,
                "end": 304
              }
            ],
            "declare": false,
            "start": 254,
            "end": 305
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "init": null,
                  "definite": false,
                  "start": 319,
                  "end": 320
                }
              ],
              "declare": false,
              "start": 315,
              "end": 320
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "body": {
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 340
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 342
                      },
                      "optional": false,
                      "computed": false,
                      "start": 337,
                      "end": 342
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 348
                      },
                      "optional": false,
                      "computed": true,
                      "start": 345,
                      "end": 349
                    },
                    "start": 337,
                    "end": 349
                  },
                  "directive": null,
                  "start": 337,
                  "end": 350
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 364
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 367,
                        "end": 369
                      },
                      "definite": false,
                      "start": 363,
                      "end": 369
                    }
                  ],
                  "declare": false,
                  "start": 359,
                  "end": 370
                }
              ],
              "start": 327,
              "end": 376
            },
            "start": 310,
            "end": 376
          },
          {
            "type": "TryStatement",
            "block": {
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 398
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "optional": false,
                      "computed": false,
                      "start": 395,
                      "end": 400
                    },
                    "right": {
                      "type": "Literal",
                      "value": "ohhh",
                      "raw": "\"ohhh\"",
                      "start": 403,
                      "end": 409
                    },
                    "start": 395,
                    "end": 409
                  },
                  "directive": null,
                  "start": 395,
                  "end": 410
                }
              ],
              "start": 385,
              "end": 416
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 444
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "optional": false,
                        "computed": false,
                        "start": 441,
                        "end": 446
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 449,
                        "end": 451
                      },
                      "start": 441,
                      "end": 451
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 470
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 472
                              },
                              "optional": false,
                              "computed": false,
                              "start": 467,
                              "end": 472
                            },
                            "right": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 475,
                              "end": 477
                            },
                            "start": 467,
                            "end": 477
                          },
                          "directive": null,
                          "start": 467,
                          "end": 478
                        }
                      ],
                      "start": 453,
                      "end": 488
                    },
                    "alternate": {
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 508,
                                "end": 511
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "q",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 512,
                                "end": 513
                              },
                              "optional": false,
                              "computed": false,
                              "start": 508,
                              "end": 513
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hmm",
                              "raw": "\"hmm\"",
                              "start": 516,
                              "end": 521
                            },
                            "start": 508,
                            "end": 521
                          },
                          "directive": null,
                          "start": 508,
                          "end": 522
                        }
                      ],
                      "start": 494,
                      "end": 532
                    },
                    "start": 437,
                    "end": 532
                  }
                ],
                "start": 427,
                "end": 538
              },
              "start": 417,
              "end": 538
            },
            "finalizer": null,
            "start": 381,
            "end": 538
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 572
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 563,
                    "end": 574
                  },
                  "start": 557,
                  "end": 575
                }
              ],
              "start": 547,
              "end": 581
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 591
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 607,
                          "end": 608
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 613
                        },
                        "definite": false,
                        "start": 607,
                        "end": 613
                      }
                    ],
                    "declare": false,
                    "start": 603,
                    "end": 614
                  }
                ],
                "start": 593,
                "end": 620
              },
              "start": 582,
              "end": 620
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 639,
                      "end": 640
                    },
                    "right": {
                      "type": "Literal",
                      "value": 70,
                      "raw": "70",
                      "start": 643,
                      "end": 645
                    },
                    "start": 639,
                    "end": 645
                  },
                  "directive": null,
                  "start": 639,
                  "end": 646
                }
              ],
              "start": 629,
              "end": 652
            },
            "start": 543,
            "end": 652
          },
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 666
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 678,
                      "end": 679
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 682,
                      "end": 683
                    },
                    "start": 678,
                    "end": 683
                  },
                  "directive": null,
                  "start": 678,
                  "end": 684
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 694
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 697,
                      "end": 699
                    },
                    "start": 693,
                    "end": 699
                  },
                  "directive": null,
                  "start": 693,
                  "end": 700
                }
              ],
              "start": 668,
              "end": 706
            },
            "start": 657,
            "end": 706
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 722
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "optional": false,
              "computed": false,
              "start": 719,
              "end": 724
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 741,
                  "end": 742
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 758,
                            "end": 759
                          },
                          "start": 758,
                          "end": 761
                        },
                        "directive": null,
                        "start": 758,
                        "end": 762
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 775,
                        "end": 781
                      }
                    ],
                    "start": 744,
                    "end": 792
                  }
                ],
                "start": 736,
                "end": 792
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 806,
                  "end": 807
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 824
                          },
                          "start": 823,
                          "end": 826
                        },
                        "directive": null,
                        "start": 823,
                        "end": 827
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 840,
                        "end": 846
                      }
                    ],
                    "start": 809,
                    "end": 857
                  }
                ],
                "start": 801,
                "end": 857
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 889,
                            "end": 890
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 894,
                            "end": 895
                          },
                          "start": 889,
                          "end": 895
                        },
                        "directive": null,
                        "start": 889,
                        "end": 896
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 909,
                            "end": 910
                          },
                          "right": {
                            "type": "Literal",
                            "value": 50,
                            "raw": "50",
                            "start": 913,
                            "end": 915
                          },
                          "start": 909,
                          "end": 915
                        },
                        "directive": null,
                        "start": 909,
                        "end": 916
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 929,
                        "end": 935
                      }
                    ],
                    "start": 875,
                    "end": 946
                  }
                ],
                "start": 866,
                "end": 946
              }
            ],
            "start": 711,
            "end": 952
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 964,
                "end": 965
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 968,
                "end": 970
              },
              "start": 964,
              "end": 970
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 982,
                      "end": 983
                    },
                    "start": 982,
                    "end": 985
                  },
                  "directive": null,
                  "start": 982,
                  "end": 986
                }
              ],
              "start": 972,
              "end": 992
            },
            "start": 957,
            "end": 992
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1011
                    },
                    "start": 1010,
                    "end": 1013
                  },
                  "directive": null,
                  "start": 1010,
                  "end": 1014
                }
              ],
              "start": 1000,
              "end": 1020
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1029
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1032,
                "end": 1033
              },
              "start": 1028,
              "end": 1033
            },
            "start": 997,
            "end": 1034
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1040
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1044
              },
              "start": 1039,
              "end": 1044
            },
            "directive": null,
            "start": 1039,
            "end": 1045
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
                  "start": 1054,
                  "end": 1055
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1059,
                      "end": 1060
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1064,
                      "end": 1065
                    },
                    "start": 1059,
                    "end": 1065
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1070
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1073,
                      "end": 1074
                    },
                    "start": 1069,
                    "end": 1074
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1077,
                      "end": 1078
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1081,
                      "end": 1082
                    },
                    "start": 1077,
                    "end": 1082
                  },
                  "start": 1058,
                  "end": 1082
                },
                "definite": false,
                "start": 1054,
                "end": 1082
              }
            ],
            "declare": false,
            "start": 1050,
            "end": 1083
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1090
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1094,
                  "end": 1095
                },
                "start": 1089,
                "end": 1095
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1103,
                  "end": 1104
                },
                "start": 1099,
                "end": 1104
              },
              "alternate": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1107,
                  "end": 1108
                },
                "operator": "-",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1111,
                  "end": 1112
                },
                "start": 1107,
                "end": 1112
              },
              "start": 1088,
              "end": 1112
            },
            "directive": null,
            "start": 1088,
            "end": 1113
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1119
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1124,
                "end": 1125
              },
              "start": 1118,
              "end": 1125
            },
            "directive": null,
            "start": 1118,
            "end": 1126
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1131,
                "end": 1132
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1136
                },
                "right": {
                  "type": "Literal",
                  "value": 40,
                  "raw": "40",
                  "start": 1139,
                  "end": 1141
                },
                "start": 1135,
                "end": 1141
              },
              "start": 1131,
              "end": 1141
            },
            "directive": null,
            "start": 1131,
            "end": 1142
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "eval",
                "optional": false,
                "typeAnnotation": null,
                "start": 1147,
                "end": 1151
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "y",
                  "raw": "\"y\"",
                  "start": 1152,
                  "end": 1155
                }
              ],
              "optional": false,
              "start": 1147,
              "end": 1156
            },
            "directive": null,
            "start": 1147,
            "end": 1157
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1162,
            "end": 1169
          }
        ],
        "start": 13,
        "end": 1171
      },
      "expression": false,
      "start": 0,
      "end": 1171
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1176,
            "end": 1177
          },
          "init": {
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
                        "start": 1202,
                        "end": 1203
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1206,
                        "end": 1208
                      },
                      "definite": false,
                      "start": 1202,
                      "end": 1208
                    }
                  ],
                  "declare": false,
                  "start": 1198,
                  "end": 1209
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1214,
                      "end": 1215
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1218,
                        "end": 1219
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1222,
                        "end": 1223
                      },
                      "start": 1218,
                      "end": 1223
                    },
                    "start": 1214,
                    "end": 1223
                  },
                  "directive": null,
                  "start": 1214,
                  "end": 1224
                }
              ],
              "start": 1192,
              "end": 1226
            },
            "expression": false,
            "start": 1180,
            "end": 1226
          },
          "definite": false,
          "start": 1176,
          "end": 1226
        }
      ],
      "declare": false,
      "start": 1172,
      "end": 1227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 1228,
          "end": 1229
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1228,
        "end": 1231
      },
      "directive": null,
      "start": 1228,
      "end": 1232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1232
}
```
