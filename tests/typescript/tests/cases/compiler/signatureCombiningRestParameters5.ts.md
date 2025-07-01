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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 30,
                          "end": 34
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 37,
                                  "end": 38
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 40,
                                      "end": 46
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 49,
                                      "end": 55
                                    }
                                  ],
                                  "start": 40,
                                  "end": 55
                                },
                                "optional": false,
                                "start": 37,
                                "end": 55
                              },
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 58
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 60,
                                      "end": 66
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 69,
                                      "end": 76
                                    }
                                  ],
                                  "start": 60,
                                  "end": 76
                                },
                                "optional": false,
                                "start": 57,
                                "end": 76
                              }
                            ],
                            "start": 36,
                            "end": 77
                          },
                          "start": 34,
                          "end": 77
                        },
                        "value": null,
                        "start": 27,
                        "end": 77
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      },
                      "start": 79,
                      "end": 86
                    },
                    "start": 26,
                    "end": 86
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 101
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 104,
                                  "end": 105
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 107,
                                      "end": 113
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 116,
                                      "end": 123
                                    }
                                  ],
                                  "start": 107,
                                  "end": 123
                                },
                                "optional": false,
                                "start": 104,
                                "end": 123
                              },
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 125,
                                  "end": 126
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 128,
                                      "end": 134
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 137,
                                      "end": 144
                                    }
                                  ],
                                  "start": 128,
                                  "end": 144
                                },
                                "optional": false,
                                "start": 125,
                                "end": 144
                              }
                            ],
                            "start": 103,
                            "end": 145
                          },
                          "start": 101,
                          "end": 145
                        },
                        "value": null,
                        "start": 94,
                        "end": 145
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 150,
                        "end": 154
                      },
                      "start": 147,
                      "end": 154
                    },
                    "start": 93,
                    "end": 154
                  }
                ],
                "start": 23,
                "end": 155
              },
              "start": 19,
              "end": 155
            },
            "start": 14,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 155
        }
      ],
      "declare": true,
      "start": 0,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 163
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 164,
            "end": 166
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 168,
            "end": 172
          }
        ],
        "optional": false,
        "start": 158,
        "end": 173
      },
      "directive": null,
      "start": 158,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 181,
            "end": 183
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 186,
                "end": 190
              }
            ],
            "start": 185,
            "end": 191
          }
        ],
        "optional": false,
        "start": 175,
        "end": 192
      },
      "directive": null,
      "start": 175,
      "end": 193
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 226
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 249,
                  "end": 256
                },
                "start": 249,
                "end": 258
              },
              "start": 240,
              "end": 258
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 258
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 281,
                  "end": 288
                },
                "start": 281,
                "end": 290
              },
              "start": 272,
              "end": 290
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 290
          }
        ],
        "start": 226,
        "end": 293
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 308
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 311
                      },
                      "typeArguments": null,
                      "start": 310,
                      "end": 311
                    },
                    "start": 308,
                    "end": 311
                  },
                  "value": null,
                  "start": 301,
                  "end": 311
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                },
                "start": 313,
                "end": 320
              },
              "start": 300,
              "end": 320
            },
            "start": 298,
            "end": 320
          },
          "start": 297,
          "end": 320
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 335
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 338
                      },
                      "typeArguments": null,
                      "start": 337,
                      "end": 338
                    },
                    "start": 335,
                    "end": 338
                  },
                  "value": null,
                  "start": 328,
                  "end": 338
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 343,
                  "end": 347
                },
                "start": 340,
                "end": 347
              },
              "start": 327,
              "end": 347
            },
            "start": 325,
            "end": 347
          },
          "start": 324,
          "end": 347
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 368
                          },
                          "typeArguments": null,
                          "start": 360,
                          "end": 368
                        },
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 378,
                            "end": 379
                          },
                          "typeArguments": null,
                          "start": 371,
                          "end": 379
                        }
                      ],
                      "start": 360,
                      "end": 379
                    },
                    "start": 358,
                    "end": 379
                  },
                  "start": 355,
                  "end": 379
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 384,
                  "end": 388
                },
                "start": 381,
                "end": 388
              },
              "start": 354,
              "end": 388
            },
            "start": 352,
            "end": 388
          },
          "start": 351,
          "end": 388
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 393,
          "end": 397
        },
        "start": 391,
        "end": 397
      },
      "body": null,
      "expression": false,
      "start": 204,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 405
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
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
                        "type": "TSNumberKeyword",
                        "start": 413,
                        "end": 419
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 422,
                        "end": 429
                      }
                    ],
                    "start": 413,
                    "end": 429
                  },
                  "start": 411,
                  "end": 429
                },
                "start": 410,
                "end": 429
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 434,
                        "end": 440
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 443,
                        "end": 449
                      }
                    ],
                    "start": 434,
                    "end": 449
                  },
                  "start": 432,
                  "end": 449
                },
                "start": 431,
                "end": 449
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 454,
              "end": 456
            },
            "id": null,
            "generator": false,
            "start": 409,
            "end": 456
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 464,
                        "end": 470
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 473,
                        "end": 480
                      }
                    ],
                    "start": 464,
                    "end": 480
                  },
                  "start": 462,
                  "end": 480
                },
                "start": 461,
                "end": 480
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 485,
                        "end": 491
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 494,
                        "end": 501
                      }
                    ],
                    "start": 485,
                    "end": 501
                  },
                  "start": 483,
                  "end": 501
                },
                "start": 482,
                "end": 501
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 506,
              "end": 508
            },
            "id": null,
            "generator": false,
            "start": 460,
            "end": 508
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 515
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 528
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 529,
                        "end": 533
                      },
                      {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 535,
                        "end": 537
                      }
                    ],
                    "optional": false,
                    "start": 526,
                    "end": 538
                  },
                  "directive": null,
                  "start": 526,
                  "end": 539
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 546
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 547,
                        "end": 551
                      },
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 554,
                            "end": 556
                          }
                        ],
                        "start": 553,
                        "end": 557
                      }
                    ],
                    "optional": false,
                    "start": 544,
                    "end": 558
                  },
                  "directive": null,
                  "start": 544,
                  "end": 559
                }
              ],
              "start": 520,
              "end": 572
            },
            "id": null,
            "generator": false,
            "start": 512,
            "end": 572
          }
        ],
        "optional": false,
        "start": 400,
        "end": 575
      },
      "directive": null,
      "start": 400,
      "end": 576
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 576
}
```
