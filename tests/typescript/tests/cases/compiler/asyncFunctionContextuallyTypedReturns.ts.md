__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 27,
                      "end": 34
                    },
                    "start": 25,
                    "end": 34
                  },
                  "start": 24,
                  "end": 34
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 40,
                            "end": 41
                          },
                          "start": 40,
                          "end": 41
                        }
                      ],
                      "start": 39,
                      "end": 42
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 56
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 58,
                                  "end": 59
                                },
                                "start": 58,
                                "end": 59
                              }
                            ],
                            "start": 57,
                            "end": 60
                          }
                        ],
                        "start": 56,
                        "end": 61
                      },
                      "start": 45,
                      "end": 61
                    }
                  ],
                  "start": 39,
                  "end": 61
                },
                "start": 36,
                "end": 61
              },
              "start": 23,
              "end": 61
            },
            "start": 21,
            "end": 61
          },
          "start": 19,
          "end": 61
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 64,
          "end": 68
        },
        "start": 62,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 69
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
          "start": 70,
          "end": 71
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "consequent": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 82,
                    "end": 83
                  }
                ],
                "start": 81,
                "end": 84
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 94
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 101
                  },
                  "optional": false,
                  "computed": false,
                  "start": 87,
                  "end": 101
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 87,
                "end": 103
              },
              "start": 77,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 72,
            "end": 103
          }
        ],
        "optional": false,
        "start": 70,
        "end": 104
      },
      "directive": null,
      "start": 70,
      "end": 105
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
          "start": 106,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "consequent": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 124,
                    "end": 125
                  }
                ],
                "start": 123,
                "end": 126
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 136
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 143
                  },
                  "optional": false,
                  "computed": false,
                  "start": 129,
                  "end": 143
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 129,
                "end": 145
              },
              "start": 119,
              "end": 145
            },
            "id": null,
            "generator": false,
            "start": 108,
            "end": 145
          }
        ],
        "optional": false,
        "start": 106,
        "end": 146
      },
      "directive": null,
      "start": 106,
      "end": 147
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 176,
                      "end": 183
                    },
                    "start": 174,
                    "end": 183
                  },
                  "start": 173,
                  "end": 183
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "contextuallyTypable",
                        "raw": "\"contextuallyTypable\"",
                        "start": 188,
                        "end": 209
                      },
                      "start": 188,
                      "end": 209
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 223
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "contextuallyTypable",
                              "raw": "\"contextuallyTypable\"",
                              "start": 224,
                              "end": 245
                            },
                            "start": 224,
                            "end": 245
                          }
                        ],
                        "start": 223,
                        "end": 246
                      },
                      "start": 212,
                      "end": 246
                    }
                  ],
                  "start": 188,
                  "end": 246
                },
                "start": 185,
                "end": 246
              },
              "start": 172,
              "end": 246
            },
            "start": 170,
            "end": 246
          },
          "start": 168,
          "end": 246
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 249,
          "end": 253
        },
        "start": 247,
        "end": 253
      },
      "body": null,
      "expression": false,
      "start": 149,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 263
              },
              "consequent": {
                "type": "Literal",
                "value": "contextuallyTypable",
                "raw": "\"contextuallyTypable\"",
                "start": 266,
                "end": 287
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 297
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 304
                  },
                  "optional": false,
                  "computed": false,
                  "start": 290,
                  "end": 304
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 290,
                "end": 306
              },
              "start": 262,
              "end": 306
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 306
          }
        ],
        "optional": false,
        "start": 255,
        "end": 307
      },
      "directive": null,
      "start": 255,
      "end": 308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "consequent": {
                "type": "Literal",
                "value": "contextuallyTypable",
                "raw": "\"contextuallyTypable\"",
                "start": 326,
                "end": 347
              },
              "alternate": {
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
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 364
                  },
                  "optional": false,
                  "computed": false,
                  "start": 350,
                  "end": 364
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 350,
                "end": 366
              },
              "start": 322,
              "end": 366
            },
            "id": null,
            "generator": false,
            "start": 311,
            "end": 366
          }
        ],
        "optional": false,
        "start": 309,
        "end": 367
      },
      "directive": null,
      "start": 309,
      "end": 368
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 385
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 396,
                "end": 402
              },
              "start": 394,
              "end": 402
            },
            "start": 389,
            "end": 402
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 407,
            "end": 411
          },
          "start": 404,
          "end": 411
        },
        "start": 388,
        "end": 411
      },
      "declare": false,
      "start": 370,
      "end": 412
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 431
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 440,
                      "end": 447
                    },
                    "start": 438,
                    "end": 447
                  },
                  "start": 437,
                  "end": 447
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 462
                      },
                      "typeArguments": null,
                      "start": 452,
                      "end": 462
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 476
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyCallback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 477,
                              "end": 487
                            },
                            "typeArguments": null,
                            "start": 477,
                            "end": 487
                          }
                        ],
                        "start": 476,
                        "end": 488
                      },
                      "start": 465,
                      "end": 488
                    }
                  ],
                  "start": 452,
                  "end": 488
                },
                "start": 449,
                "end": 488
              },
              "start": 436,
              "end": 488
            },
            "start": 434,
            "end": 488
          },
          "start": 432,
          "end": 488
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 491,
          "end": 495
        },
        "start": 489,
        "end": 495
      },
      "body": null,
      "expression": false,
      "start": 413,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 498
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "consequent": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 512
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 517,
                  "end": 520
                },
                "id": null,
                "generator": false,
                "start": 508,
                "end": 520
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 530
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 537
                  },
                  "optional": false,
                  "computed": false,
                  "start": 523,
                  "end": 537
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 523,
                "end": 539
              },
              "start": 504,
              "end": 539
            },
            "id": null,
            "generator": false,
            "start": 499,
            "end": 539
          }
        ],
        "optional": false,
        "start": 497,
        "end": 540
      },
      "directive": null,
      "start": 497,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 543
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 551
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "consequent": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "def",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 560,
                    "end": 563
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 568,
                  "end": 571
                },
                "id": null,
                "generator": false,
                "start": 559,
                "end": 571
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 581
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 588
                  },
                  "optional": false,
                  "computed": false,
                  "start": 574,
                  "end": 588
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 574,
                "end": 590
              },
              "start": 555,
              "end": 590
            },
            "id": null,
            "generator": false,
            "start": 544,
            "end": 590
          }
        ],
        "optional": false,
        "start": 542,
        "end": 591
      },
      "directive": null,
      "start": 542,
      "end": 592
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
            "name": "increment",
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
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 641,
                        "end": 647
                      },
                      "start": 639,
                      "end": 647
                    },
                    "start": 636,
                    "end": 647
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 656,
                        "end": 662
                      },
                      "start": 654,
                      "end": 662
                    },
                    "start": 651,
                    "end": 662
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 668,
                          "end": 675
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 681,
                                          "end": 687
                                        },
                                        "start": 679,
                                        "end": 687
                                      },
                                      "start": 678,
                                      "end": 687
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 692,
                                      "end": 695
                                    },
                                    "start": 689,
                                    "end": 695
                                  },
                                  "start": 677,
                                  "end": 695
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 699,
                                  "end": 705
                                }
                              ],
                              "start": 676,
                              "end": 705
                            }
                          ],
                          "start": 675,
                          "end": 706
                        },
                        "start": 668,
                        "end": 706
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 709,
                        "end": 715
                      }
                    ],
                    "start": 668,
                    "end": 715
                  },
                  "start": 665,
                  "end": 715
                },
                "start": 632,
                "end": 715
              },
              "start": 630,
              "end": 715
            },
            "start": 621,
            "end": 715
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 728
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 733
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
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
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 767,
                              "end": 768
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 775
                            },
                            "optional": false,
                            "computed": false,
                            "start": 767,
                            "end": 775
                          },
                          "start": 760,
                          "end": 775
                        }
                      ],
                      "start": 754,
                      "end": 779
                    },
                    "id": null,
                    "generator": false,
                    "start": 749,
                    "end": 779
                  },
                  "start": 742,
                  "end": 779
                }
              ],
              "start": 738,
              "end": 781
            },
            "id": null,
            "generator": false,
            "start": 718,
            "end": 781
          },
          "definite": false,
          "start": 621,
          "end": 781
        }
      ],
      "declare": false,
      "start": 615,
      "end": 781
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
            "name": "increment2",
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
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 810,
                        "end": 816
                      },
                      "start": 808,
                      "end": 816
                    },
                    "start": 805,
                    "end": 816
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 825,
                        "end": 831
                      },
                      "start": 823,
                      "end": 831
                    },
                    "start": 820,
                    "end": 831
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 844
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 850,
                                      "end": 856
                                    },
                                    "start": 848,
                                    "end": 856
                                  },
                                  "start": 847,
                                  "end": 856
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 861,
                                  "end": 864
                                },
                                "start": 858,
                                "end": 864
                              },
                              "start": 846,
                              "end": 864
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 868,
                              "end": 874
                            }
                          ],
                          "start": 845,
                          "end": 874
                        }
                      ],
                      "start": 844,
                      "end": 875
                    },
                    "start": 837,
                    "end": 875
                  },
                  "start": 834,
                  "end": 875
                },
                "start": 801,
                "end": 875
              },
              "start": 799,
              "end": 875
            },
            "start": 789,
            "end": 875
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 885,
                "end": 888
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 893
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
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
                        "typeAnnotation": null,
                        "start": 909,
                        "end": 910
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 928
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 929,
                              "end": 935
                            },
                            "optional": false,
                            "computed": false,
                            "start": 927,
                            "end": 935
                          },
                          "start": 920,
                          "end": 935
                        }
                      ],
                      "start": 914,
                      "end": 939
                    },
                    "id": null,
                    "generator": false,
                    "start": 909,
                    "end": 939
                  },
                  "start": 902,
                  "end": 939
                }
              ],
              "start": 898,
              "end": 941
            },
            "id": null,
            "generator": false,
            "start": 878,
            "end": 941
          },
          "definite": false,
          "start": 789,
          "end": 941
        }
      ],
      "declare": false,
      "start": 783,
      "end": 941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 941
}
```
