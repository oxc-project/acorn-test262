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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 50,
                          "end": 57
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 60,
                          "end": 66
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 69,
                          "end": 75
                        }
                      ],
                      "start": 50,
                      "end": 75
                    },
                    "start": 48,
                    "end": 75
                  },
                  "start": 47,
                  "end": 75
                },
                "init": null,
                "definite": false,
                "start": 47,
                "end": 75
              }
            ],
            "declare": false,
            "start": 43,
            "end": 76
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "prefix": true,
                "start": 85,
                "end": 93
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "'boolean'",
                "start": 98,
                "end": 107
              },
              "start": 85,
              "end": 107
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                          "start": 174,
                          "end": 175
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 178,
                          "end": 179
                        },
                        "definite": false,
                        "start": 174,
                        "end": 179
                      }
                    ],
                    "declare": false,
                    "start": 170,
                    "end": 179
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 182
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 185,
                      "end": 186
                    },
                    "start": 181,
                    "end": 186
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
                      "start": 188,
                      "end": 189
                    },
                    "start": 188,
                    "end": 191
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 216,
                                "end": 217
                              },
                              "init": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 220,
                                "end": 221
                              },
                              "definite": false,
                              "start": 216,
                              "end": 221
                            }
                          ],
                          "declare": false,
                          "start": 212,
                          "end": 221
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 223,
                            "end": 224
                          },
                          "operator": "<",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 227,
                            "end": 228
                          },
                          "start": 223,
                          "end": 228
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 231
                          },
                          "start": 230,
                          "end": 233
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 235,
                          "end": 237
                        },
                        "start": 207,
                        "end": 237
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 261,
                              "end": 262
                            },
                            "prefix": true,
                            "start": 254,
                            "end": 262
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 267,
                            "end": 275
                          },
                          "start": 254,
                          "end": 275
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
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
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 349,
                                      "end": 350
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 353,
                                      "end": 354
                                    },
                                    "definite": false,
                                    "start": 349,
                                    "end": 354
                                  }
                                ],
                                "declare": false,
                                "start": 345,
                                "end": 354
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 356,
                                  "end": 357
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 360,
                                  "end": 361
                                },
                                "start": 356,
                                "end": 361
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 363,
                                  "end": 364
                                },
                                "start": 363,
                                "end": 366
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 390,
                                        "end": 391
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 392,
                                        "end": 398
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 390,
                                      "end": 398
                                    },
                                    "directive": null,
                                    "start": 390,
                                    "end": 399
                                  }
                                ],
                                "start": 368,
                                "end": 442
                              },
                              "start": 340,
                              "end": 442
                            }
                          ],
                          "start": 277,
                          "end": 456
                        },
                        "alternate": null,
                        "start": 250,
                        "end": 456
                      }
                    ],
                    "start": 193,
                    "end": 466
                  },
                  "start": 165,
                  "end": 466
                }
              ],
              "start": 109,
              "end": 472
            },
            "alternate": null,
            "start": 81,
            "end": 472
          }
        ],
        "start": 37,
        "end": 474
      },
      "expression": false,
      "start": 23,
      "end": 474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 487
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 512,
                          "end": 518
                        }
                      ],
                      "start": 503,
                      "end": 518
                    },
                    "start": 501,
                    "end": 518
                  },
                  "start": 500,
                  "end": 518
                },
                "init": null,
                "definite": false,
                "start": 500,
                "end": 518
              }
            ],
            "declare": false,
            "start": 496,
            "end": 519
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "prefix": true,
                "start": 528,
                "end": 536
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 541,
                "end": 549
              },
              "start": 528,
              "end": 549
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 568,
                    "end": 569
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 592,
                          "end": 593
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 595,
                          "end": 597
                        },
                        "start": 585,
                        "end": 597
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 622
                            },
                            "prefix": true,
                            "start": 614,
                            "end": 622
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 627,
                            "end": 635
                          },
                          "start": 614,
                          "end": 635
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "WhileStatement",
                              "test": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 662,
                                "end": 663
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 687,
                                        "end": 688
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 689,
                                        "end": 695
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 687,
                                      "end": 695
                                    },
                                    "directive": null,
                                    "start": 687,
                                    "end": 696
                                  }
                                ],
                                "start": 665,
                                "end": 739
                              },
                              "start": 655,
                              "end": 739
                            }
                          ],
                          "start": 637,
                          "end": 753
                        },
                        "alternate": null,
                        "start": 610,
                        "end": 753
                      }
                    ],
                    "start": 571,
                    "end": 763
                  },
                  "start": 561,
                  "end": 763
                }
              ],
              "start": 551,
              "end": 769
            },
            "alternate": null,
            "start": 524,
            "end": 769
          }
        ],
        "start": 490,
        "end": 771
      },
      "expression": false,
      "start": 476,
      "end": 771
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 771
}
```
