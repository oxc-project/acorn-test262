__ESTREE_TEST__:PASS:
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
