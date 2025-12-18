__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 11,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
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
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 44
                  },
                  "typeArguments": null,
                  "start": 39,
                  "end": 44
                },
                {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                }
              ],
              "start": 39,
              "end": 53
            },
            "start": 37,
            "end": 53
          },
          "start": 36,
          "end": 53
        }
      ],
      "returnType": null,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "prefix": true,
                "start": 65,
                "end": 73
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 78,
                "end": 86
              },
              "start": 65,
              "end": 86
            },
            "consequent": {
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
                        "start": 102,
                        "end": 103
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 107
                      },
                      "definite": false,
                      "start": 102,
                      "end": 107
                    }
                  ],
                  "declare": false,
                  "start": 98,
                  "end": 108
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 124,
                              "end": 129
                            },
                            "typeArguments": null,
                            "start": 124,
                            "end": 129
                          },
                          "start": 122,
                          "end": 129
                        },
                        "start": 121,
                        "end": 129
                      },
                      "init": null,
                      "definite": false,
                      "start": 121,
                      "end": 129
                    }
                  ],
                  "declare": false,
                  "start": 117,
                  "end": 130
                }
              ],
              "start": 88,
              "end": 136
            },
            "alternate": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 161
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 165
                      },
                      "definite": false,
                      "start": 160,
                      "end": 165
                    }
                  ],
                  "declare": false,
                  "start": 156,
                  "end": 166
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 182,
                            "end": 188
                          },
                          "start": 180,
                          "end": 188
                        },
                        "start": 179,
                        "end": 188
                      },
                      "init": null,
                      "definite": false,
                      "start": 179,
                      "end": 188
                    }
                  ],
                  "declare": false,
                  "start": 175,
                  "end": 189
                }
              ],
              "start": 146,
              "end": 195
            },
            "start": 61,
            "end": 195
          }
        ],
        "start": 55,
        "end": 197
      },
      "expression": false,
      "start": 24,
      "end": 197
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 210
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
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 219
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 219
                },
                {
                  "type": "TSStringKeyword",
                  "start": 222,
                  "end": 228
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 231,
                    "end": 237
                  },
                  "start": 231,
                  "end": 239
                }
              ],
              "start": 214,
              "end": 239
            },
            "start": 212,
            "end": 239
          },
          "start": 211,
          "end": 239
        }
      ],
      "returnType": null,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 259
                },
                "prefix": true,
                "start": 251,
                "end": 259
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 264,
                "end": 272
              },
              "start": 251,
              "end": 272
            },
            "consequent": {
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
                        "start": 288,
                        "end": 289
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 293
                      },
                      "definite": false,
                      "start": 288,
                      "end": 293
                    }
                  ],
                  "declare": false,
                  "start": 284,
                  "end": 294
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 310,
                              "end": 316
                            },
                            "start": 310,
                            "end": 318
                          },
                          "start": 308,
                          "end": 318
                        },
                        "start": 307,
                        "end": 318
                      },
                      "init": null,
                      "definite": false,
                      "start": 307,
                      "end": 318
                    }
                  ],
                  "declare": false,
                  "start": 303,
                  "end": 319
                }
              ],
              "start": 274,
              "end": 325
            },
            "alternate": null,
            "start": 247,
            "end": 325
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "prefix": true,
                "start": 334,
                "end": 342
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 347,
                "end": 355
              },
              "start": 334,
              "end": 355
            },
            "consequent": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 376
                      },
                      "definite": false,
                      "start": 371,
                      "end": 376
                    }
                  ],
                  "declare": false,
                  "start": 367,
                  "end": 377
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 398
                            },
                            "typeArguments": null,
                            "start": 393,
                            "end": 398
                          },
                          "start": 391,
                          "end": 398
                        },
                        "start": 390,
                        "end": 398
                      },
                      "init": null,
                      "definite": false,
                      "start": 390,
                      "end": 398
                    }
                  ],
                  "declare": false,
                  "start": 386,
                  "end": 399
                }
              ],
              "start": 357,
              "end": 405
            },
            "alternate": {
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
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 430
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 433,
                        "end": 434
                      },
                      "definite": false,
                      "start": 429,
                      "end": 434
                    }
                  ],
                  "declare": false,
                  "start": 425,
                  "end": 435
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
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 451,
                                "end": 457
                              },
                              {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 460,
                                  "end": 466
                                },
                                "start": 460,
                                "end": 468
                              }
                            ],
                            "start": 451,
                            "end": 468
                          },
                          "start": 449,
                          "end": 468
                        },
                        "start": 448,
                        "end": 468
                      },
                      "init": null,
                      "definite": false,
                      "start": 448,
                      "end": 468
                    }
                  ],
                  "declare": false,
                  "start": 444,
                  "end": 469
                }
              ],
              "start": 415,
              "end": 475
            },
            "start": 330,
            "end": 475
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 492
                },
                "prefix": true,
                "start": 484,
                "end": 492
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 497,
                "end": 505
              },
              "start": 484,
              "end": 505
            },
            "consequent": {
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
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 522
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 525,
                        "end": 526
                      },
                      "definite": false,
                      "start": 521,
                      "end": 526
                    }
                  ],
                  "declare": false,
                  "start": 517,
                  "end": 527
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 543,
                            "end": 549
                          },
                          "start": 541,
                          "end": 549
                        },
                        "start": 540,
                        "end": 549
                      },
                      "init": null,
                      "definite": false,
                      "start": 540,
                      "end": 549
                    }
                  ],
                  "declare": false,
                  "start": 536,
                  "end": 550
                }
              ],
              "start": 507,
              "end": 556
            },
            "alternate": {
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
                        "start": 580,
                        "end": 581
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 584,
                        "end": 585
                      },
                      "definite": false,
                      "start": 580,
                      "end": 585
                    }
                  ],
                  "declare": false,
                  "start": 576,
                  "end": 586
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
                                  "name": "Color",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 602,
                                  "end": 607
                                },
                                "typeArguments": null,
                                "start": 602,
                                "end": 607
                              },
                              {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 610,
                                  "end": 616
                                },
                                "start": 610,
                                "end": 618
                              }
                            ],
                            "start": 602,
                            "end": 618
                          },
                          "start": 600,
                          "end": 618
                        },
                        "start": 599,
                        "end": 618
                      },
                      "init": null,
                      "definite": false,
                      "start": 599,
                      "end": 618
                    }
                  ],
                  "declare": false,
                  "start": 595,
                  "end": 619
                }
              ],
              "start": 566,
              "end": 625
            },
            "start": 480,
            "end": 625
          }
        ],
        "start": 241,
        "end": 627
      },
      "expression": false,
      "start": 199,
      "end": 627
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 627
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 5,
    "end": 10,
    "range": [
      5,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 24,
    "end": 32,
    "range": [
      24,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 33,
    "end": 35,
    "range": [
      33,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 39,
    "end": 44,
    "range": [
      39,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 61,
    "end": 63,
    "range": [
      61,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 74,
    "end": 77,
    "range": [
      74,
      77
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 78,
    "end": 86,
    "range": [
      78,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 124,
    "end": 129,
    "range": [
      124,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 141,
    "end": 145,
    "range": [
      141,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 182,
    "end": 188,
    "range": [
      182,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 199,
    "end": 207,
    "range": [
      199,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 208,
    "end": 210,
    "range": [
      208,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 214,
    "end": 219,
    "range": [
      214,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 247,
    "end": 249,
    "range": [
      247,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 264,
    "end": 272,
    "range": [
      264,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287,
    "range": [
      284,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 303,
    "end": 306,
    "range": [
      303,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 310,
    "end": 316,
    "range": [
      310,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 334,
    "end": 340,
    "range": [
      334,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 343,
    "end": 346,
    "range": [
      343,
      346
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389,
    "range": [
      386,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 393,
    "end": 398,
    "range": [
      393,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 410,
    "end": 414,
    "range": [
      410,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 451,
    "end": 457,
    "range": [
      451,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 460,
    "end": 466,
    "range": [
      460,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 497,
    "end": 505,
    "range": [
      497,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520,
    "range": [
      517,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 536,
    "end": 539,
    "range": [
      536,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 561,
    "end": 565,
    "range": [
      561,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 576,
    "end": 579,
    "range": [
      576,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 602,
    "end": 607,
    "range": [
      602,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616,
    "range": [
      610,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  }
]
```
