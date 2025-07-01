__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 14,
        "end": 17
      },
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 33
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 35
          }
        ],
        "start": 33,
        "end": 36
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 47
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeArguments": null,
            "start": 57,
            "end": 58
          },
          "start": 51,
          "end": 58
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 64
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 66
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                "start": 65,
                "end": 69
              }
            ],
            "start": 64,
            "end": 70
          },
          "start": 61,
          "end": 70
        },
        "optional": false,
        "readonly": null,
        "start": 39,
        "end": 73
      },
      "declare": false,
      "start": 20,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "typeArguments": null,
              "start": 100,
              "end": 101
            },
            "start": 98,
            "end": 101
          },
          "start": 95,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 112
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              }
            ],
            "start": 112,
            "end": 115
          },
          "start": 104,
          "end": 115
        },
        "start": 102,
        "end": 115
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 136
                },
                "prefix": true,
                "start": 126,
                "end": 136
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 141,
                "end": 149
              },
              "start": 126,
              "end": 149
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 171
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 174,
                          "end": 176
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boxified",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 188
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 189,
                                  "end": 190
                                },
                                "typeArguments": null,
                                "start": 189,
                                "end": 190
                              }
                            ],
                            "start": 188,
                            "end": 191
                          },
                          "start": 180,
                          "end": 191
                        },
                        "start": 174,
                        "end": 191
                      },
                      "definite": false,
                      "start": 165,
                      "end": 191
                    }
                  ],
                  "declare": false,
                  "start": 161,
                  "end": 192
                },
                {
                  "type": "ForInStatement",
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 211
                        },
                        "init": null,
                        "definite": false,
                        "start": 210,
                        "end": 211
                      }
                    ],
                    "declare": false,
                    "start": 206,
                    "end": 211
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 218
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
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 240
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 241,
                              "end": 242
                            },
                            "optional": false,
                            "computed": true,
                            "start": 234,
                            "end": 243
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 248,
                                  "end": 253
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 255,
                                    "end": 258
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 259,
                                    "end": 260
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 255,
                                  "end": 261
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 248,
                                "end": 261
                              }
                            ],
                            "start": 246,
                            "end": 263
                          },
                          "start": 234,
                          "end": 263
                        },
                        "directive": null,
                        "start": 234,
                        "end": 264
                      }
                    ],
                    "start": 220,
                    "end": 274
                  },
                  "start": 201,
                  "end": 274
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 296
                  },
                  "start": 283,
                  "end": 297
                }
              ],
              "start": 151,
              "end": 303
            },
            "alternate": null,
            "start": 122,
            "end": 303
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 308,
            "end": 324
          }
        ],
        "start": 116,
        "end": 326
      },
      "expression": false,
      "start": 76,
      "end": 326
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 334
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 339,
            "end": 348
          }
        ],
        "start": 337,
        "end": 350
      },
      "declare": false,
      "start": 328,
      "end": 351
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 358
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 364
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 366,
                "end": 372
              },
              "start": 364,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 363,
            "end": 372
          }
        ],
        "start": 361,
        "end": 374
      },
      "declare": false,
      "start": 352,
      "end": 375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 382
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 396
          }
        ],
        "start": 385,
        "end": 398
      },
      "declare": false,
      "start": 376,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 412
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "typeArguments": null,
                  "start": 416,
                  "end": 417
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "typeArguments": null,
                  "start": 420,
                  "end": 421
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 425
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 425
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 428,
                  "end": 437
                }
              ],
              "start": 416,
              "end": 437
            },
            "start": 414,
            "end": 437
          },
          "start": 413,
          "end": 437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "boxify",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 458
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                }
              ],
              "optional": false,
              "start": 452,
              "end": 461
            },
            "start": 445,
            "end": 462
          }
        ],
        "start": 439,
        "end": 464
      },
      "expression": false,
      "start": 401,
      "end": 464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 474
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 486
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 486
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "typeArguments": null,
                  "start": 489,
                  "end": 490
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 493,
                  "end": 494
                }
              ],
              "start": 485,
              "end": 494
            }
          ],
          "start": 484,
          "end": 495
        },
        "start": 477,
        "end": 495
      },
      "declare": false,
      "start": 466,
      "end": 496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 505
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 508,
          "end": 516
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 518
                  },
                  "typeArguments": null,
                  "start": 517,
                  "end": 518
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 522
                  },
                  "typeArguments": null,
                  "start": 521,
                  "end": 522
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "typeArguments": null,
                  "start": 525,
                  "end": 526
                },
                {
                  "type": "TSNullKeyword",
                  "start": 529,
                  "end": 533
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 536,
                  "end": 545
                }
              ],
              "start": 517,
              "end": 545
            }
          ],
          "start": 516,
          "end": 546
        },
        "start": 508,
        "end": 546
      },
      "declare": false,
      "start": 497,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 559,
          "end": 567
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 569
                  },
                  "typeArguments": null,
                  "start": 568,
                  "end": 569
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 573
                    },
                    "typeArguments": null,
                    "start": 572,
                    "end": 573
                  },
                  "start": 572,
                  "end": 575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 579
                  },
                  "typeArguments": null,
                  "start": 578,
                  "end": 579
                },
                {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                }
              ],
              "start": 568,
              "end": 588
            }
          ],
          "start": 567,
          "end": 589
        },
        "start": 559,
        "end": 589
      },
      "declare": false,
      "start": 548,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 598
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 609
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 619,
                  "end": 625
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 628,
                  "end": 635
                },
                {
                  "type": "TSNullKeyword",
                  "start": 638,
                  "end": 642
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 645,
                  "end": 654
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 657,
                  "end": 661
                }
              ],
              "start": 610,
              "end": 661
            }
          ],
          "start": 609,
          "end": 662
        },
        "start": 601,
        "end": 662
      },
      "declare": false,
      "start": 590,
      "end": 663
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 669,
        "end": 672
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 683
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 684,
                  "end": 690
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 693,
                  "end": 699
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 702,
                  "end": 709
                },
                {
                  "type": "TSNullKeyword",
                  "start": 712,
                  "end": 716
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 719,
                  "end": 728
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 731,
                  "end": 735
                }
              ],
              "start": 684,
              "end": 735
            }
          ],
          "start": 683,
          "end": 736
        },
        "start": 675,
        "end": 736
      },
      "declare": false,
      "start": 664,
      "end": 737
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 746
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 749,
          "end": 756
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 757,
                    "end": 764
                  },
                  "start": 757,
                  "end": 764
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "world",
                    "raw": "\"world\"",
                    "start": 767,
                    "end": 774
                  },
                  "start": 767,
                  "end": 774
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 777,
                    "end": 779
                  },
                  "start": 777,
                  "end": 779
                }
              ],
              "start": 757,
              "end": 779
            }
          ],
          "start": 756,
          "end": 780
        },
        "start": 749,
        "end": 780
      },
      "declare": false,
      "start": 738,
      "end": 781
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxifiedWithSentinel",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 808
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 810
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 813
          }
        ],
        "start": 808,
        "end": 814
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 825
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 836
            },
            "typeArguments": null,
            "start": 835,
            "end": 836
          },
          "start": 829,
          "end": 836
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 842
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 844
                      },
                      "typeArguments": null,
                      "start": 843,
                      "end": 844
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 846
                      },
                      "typeArguments": null,
                      "start": 845,
                      "end": 846
                    },
                    "start": 843,
                    "end": 847
                  }
                ],
                "start": 842,
                "end": 848
              },
              "start": 839,
              "end": 848
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              "typeArguments": null,
              "start": 851,
              "end": 852
            }
          ],
          "start": 839,
          "end": 852
        },
        "optional": false,
        "readonly": null,
        "start": 817,
        "end": 855
      },
      "declare": false,
      "start": 783,
      "end": 855
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 865
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "typeAnnotation": null,
          "start": 868,
          "end": 888
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 890
                  },
                  "typeArguments": null,
                  "start": 889,
                  "end": 890
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 894
                  },
                  "typeArguments": null,
                  "start": 893,
                  "end": 894
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 898
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 898
                }
              ],
              "start": 889,
              "end": 898
            },
            {
              "type": "TSNullKeyword",
              "start": 900,
              "end": 904
            }
          ],
          "start": 888,
          "end": 905
        },
        "start": 868,
        "end": 905
      },
      "declare": false,
      "start": 857,
      "end": 906
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "typeAnnotation": null,
          "start": 918,
          "end": 938
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 939,
                    "end": 940
                  },
                  "typeArguments": null,
                  "start": 939,
                  "end": 940
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 944
                  },
                  "typeArguments": null,
                  "start": 943,
                  "end": 944
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 948
                  },
                  "typeArguments": null,
                  "start": 947,
                  "end": 948
                }
              ],
              "start": 939,
              "end": 948
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 950,
              "end": 959
            }
          ],
          "start": 938,
          "end": 960
        },
        "start": 918,
        "end": 960
      },
      "declare": false,
      "start": 907,
      "end": 961
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 970
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "typeAnnotation": null,
          "start": 973,
          "end": 993
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 994,
              "end": 1000
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 1002,
              "end": 1011
            }
          ],
          "start": 993,
          "end": 1012
        },
        "start": 973,
        "end": 1012
      },
      "declare": false,
      "start": 962,
      "end": 1013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1032
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1034
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1033,
            "end": 1034
          }
        ],
        "start": 1032,
        "end": 1035
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1054,
          "end": 1055
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1066
            },
            "typeArguments": null,
            "start": 1065,
            "end": 1066
          },
          "start": 1059,
          "end": 1066
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1081
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1083
                  },
                  "typeArguments": null,
                  "start": 1082,
                  "end": 1083
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1085
                  },
                  "typeArguments": null,
                  "start": 1084,
                  "end": 1085
                },
                "start": 1082,
                "end": 1086
              }
            ],
            "start": 1081,
            "end": 1087
          },
          "start": 1069,
          "end": 1087
        },
        "optional": false,
        "readonly": true,
        "start": 1038,
        "end": 1090
      },
      "declare": false,
      "start": 1015,
      "end": 1091
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1098,
        "end": 1101
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1113,
                "end": 1119
              },
              "start": 1111,
              "end": 1119
            },
            "accessibility": null,
            "static": false,
            "start": 1110,
            "end": 1120
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1125,
              "end": 1126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1130,
                      "end": 1131
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1133,
                        "end": 1139
                      },
                      "start": 1131,
                      "end": 1139
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1130,
                    "end": 1140
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1142
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1144,
                        "end": 1150
                      },
                      "start": 1142,
                      "end": 1150
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1141,
                    "end": 1150
                  }
                ],
                "start": 1128,
                "end": 1152
              },
              "start": 1126,
              "end": 1152
            },
            "accessibility": null,
            "static": false,
            "start": 1125,
            "end": 1153
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1161,
                "end": 1168
              },
              "start": 1159,
              "end": 1168
            },
            "accessibility": null,
            "static": false,
            "start": 1158,
            "end": 1169
          }
        ],
        "start": 1104,
        "end": 1171
      },
      "declare": false,
      "start": 1093,
      "end": 1172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonlyFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1179,
        "end": 1194
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1215,
                "end": 1221
              },
              "start": 1213,
              "end": 1221
            },
            "accessibility": null,
            "static": false,
            "start": 1203,
            "end": 1222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1253,
                        "end": 1259
                      },
                      "start": 1251,
                      "end": 1259
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1241,
                    "end": 1260
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1270,
                      "end": 1271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1273,
                        "end": 1279
                      },
                      "start": 1271,
                      "end": 1279
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1261,
                    "end": 1279
                  }
                ],
                "start": 1239,
                "end": 1281
              },
              "start": 1237,
              "end": 1281
            },
            "accessibility": null,
            "static": false,
            "start": 1227,
            "end": 1282
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1299,
                "end": 1306
              },
              "start": 1297,
              "end": 1306
            },
            "accessibility": null,
            "static": false,
            "start": 1287,
            "end": 1307
          }
        ],
        "start": 1197,
        "end": 1309
      },
      "declare": false,
      "start": 1174,
      "end": 1310
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeepReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1332
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1333,
                        "end": 1336
                      },
                      "typeArguments": null,
                      "start": 1333,
                      "end": 1336
                    }
                  ],
                  "start": 1332,
                  "end": 1337
                },
                "start": 1320,
                "end": 1337
              },
              "start": 1318,
              "end": 1337
            },
            "start": 1316,
            "end": 1337
          },
          "init": null,
          "definite": false,
          "start": 1316,
          "end": 1337
        }
      ],
      "declare": false,
      "start": 1312,
      "end": 1338
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeepReadonlyFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1362
                },
                "typeArguments": null,
                "start": 1347,
                "end": 1362
              },
              "start": 1345,
              "end": 1362
            },
            "start": 1343,
            "end": 1362
          },
          "init": null,
          "definite": false,
          "start": 1343,
          "end": 1362
        }
      ],
      "declare": false,
      "start": 1339,
      "end": 1363
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1392,
        "end": 1393
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1398,
              "end": 1399
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1401,
                "end": 1407
              },
              "start": 1399,
              "end": 1407
            },
            "accessibility": null,
            "static": false,
            "start": 1398,
            "end": 1407
          }
        ],
        "start": 1396,
        "end": 1409
      },
      "declare": false,
      "start": 1387,
      "end": 1410
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Clone",
        "optional": false,
        "typeAnnotation": null,
        "start": 1416,
        "end": 1421
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1422,
              "end": 1423
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1422,
            "end": 1423
          }
        ],
        "start": 1421,
        "end": 1424
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1432,
          "end": 1433
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "typeArguments": null,
                "start": 1444,
                "end": 1445
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1448,
                "end": 1450
              }
            ],
            "start": 1444,
            "end": 1450
          },
          "start": 1437,
          "end": 1451
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1455,
                  "end": 1456
                },
                "typeArguments": null,
                "start": 1455,
                "end": 1456
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1459,
                "end": 1461
              }
            ],
            "start": 1455,
            "end": 1461
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1464
            },
            "typeArguments": null,
            "start": 1463,
            "end": 1464
          },
          "start": 1454,
          "end": 1465
        },
        "optional": false,
        "readonly": null,
        "start": 1427,
        "end": 1468
      },
      "declare": false,
      "start": 1411,
      "end": 1469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1475,
        "end": 1476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "typeAnnotation": null,
          "start": 1479,
          "end": 1484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1485,
                "end": 1486
              },
              "typeArguments": null,
              "start": 1485,
              "end": 1486
            }
          ],
          "start": 1484,
          "end": 1487
        },
        "start": 1479,
        "end": 1487
      },
      "declare": false,
      "start": 1470,
      "end": 1488
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1527,
                  "end": 1528
                },
                "typeArguments": null,
                "start": 1527,
                "end": 1528
              },
              "start": 1525,
              "end": 1528
            },
            "start": 1523,
            "end": 1528
          },
          "init": null,
          "definite": false,
          "start": 1523,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1519,
      "end": 1529
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Clone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1538,
                  "end": 1543
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1544,
                        "end": 1545
                      },
                      "typeArguments": null,
                      "start": 1544,
                      "end": 1545
                    }
                  ],
                  "start": 1543,
                  "end": 1546
                },
                "start": 1538,
                "end": 1546
              },
              "start": 1536,
              "end": 1546
            },
            "start": 1534,
            "end": 1546
          },
          "init": null,
          "definite": false,
          "start": 1534,
          "end": 1546
        }
      ],
      "declare": false,
      "start": 1530,
      "end": 1547
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1547
}
```
