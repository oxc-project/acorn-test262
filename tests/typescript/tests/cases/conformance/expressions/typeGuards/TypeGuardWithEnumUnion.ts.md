__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 627,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 11,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 35,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 53,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 39,
              "end": 53,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 39,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 44,
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 197,
        "body": [
          {
            "type": "IfStatement",
            "start": 61,
            "end": 195,
            "test": {
              "type": "BinaryExpression",
              "start": 65,
              "end": 86,
              "left": {
                "type": "UnaryExpression",
                "start": 65,
                "end": 73,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 78,
                "end": 86,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 88,
              "end": 136,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 98,
                  "end": 108,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 102,
                      "end": 107,
                      "id": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 107,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 117,
                  "end": 130,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 121,
                      "end": 129,
                      "id": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 129,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 122,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 124,
                            "end": 129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 129,
                              "decorators": [],
                              "name": "Color",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 146,
              "end": 195,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 156,
                  "end": 166,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 160,
                      "end": 165,
                      "id": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 175,
                  "end": 189,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 179,
                      "end": 188,
                      "id": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 188,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 180,
                          "end": 188,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 182,
                            "end": 188
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 199,
      "end": 627,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 210,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 211,
          "end": 239,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 239,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 214,
              "end": 239,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 219,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 219,
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 222,
                  "end": 228
                },
                {
                  "type": "TSArrayType",
                  "start": 231,
                  "end": 239,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 231,
                    "end": 237
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 627,
        "body": [
          {
            "type": "IfStatement",
            "start": 247,
            "end": 325,
            "test": {
              "type": "BinaryExpression",
              "start": 251,
              "end": 272,
              "left": {
                "type": "UnaryExpression",
                "start": 251,
                "end": 259,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 264,
                "end": 272,
                "value": "object",
                "raw": "\"object\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 274,
              "end": 325,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 284,
                  "end": 294,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 288,
                      "end": 293,
                      "id": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 303,
                  "end": 319,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 307,
                      "end": 318,
                      "id": {
                        "type": "Identifier",
                        "start": 307,
                        "end": 318,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 308,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 310,
                            "end": 318,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 310,
                              "end": 316
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 330,
            "end": 475,
            "test": {
              "type": "BinaryExpression",
              "start": 334,
              "end": 355,
              "left": {
                "type": "UnaryExpression",
                "start": 334,
                "end": 342,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 347,
                "end": 355,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 357,
              "end": 405,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 367,
                  "end": 377,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 371,
                      "end": 376,
                      "id": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 386,
                  "end": 399,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 390,
                      "end": 398,
                      "id": {
                        "type": "Identifier",
                        "start": 390,
                        "end": 398,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 391,
                          "end": 398,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 393,
                            "end": 398,
                            "typeName": {
                              "type": "Identifier",
                              "start": 393,
                              "end": 398,
                              "decorators": [],
                              "name": "Color",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 415,
              "end": 475,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 425,
                  "end": 435,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 429,
                      "end": 434,
                      "id": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 434,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 444,
                  "end": 469,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 448,
                      "end": 468,
                      "id": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 468,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 449,
                          "end": 468,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 451,
                            "end": 468,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 451,
                                "end": 457
                              },
                              {
                                "type": "TSArrayType",
                                "start": 460,
                                "end": 468,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 460,
                                  "end": 466
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 480,
            "end": 625,
            "test": {
              "type": "BinaryExpression",
              "start": 484,
              "end": 505,
              "left": {
                "type": "UnaryExpression",
                "start": 484,
                "end": 492,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 492,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 497,
                "end": 505,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 507,
              "end": 556,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 517,
                  "end": 527,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 521,
                      "end": 526,
                      "id": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 522,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 536,
                  "end": 550,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 540,
                      "end": 549,
                      "id": {
                        "type": "Identifier",
                        "start": 540,
                        "end": 549,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 541,
                          "end": 549,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 543,
                            "end": 549
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 566,
              "end": 625,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 576,
                  "end": 586,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 580,
                      "end": 585,
                      "id": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 585,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 595,
                  "end": 619,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 599,
                      "end": 618,
                      "id": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 618,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 600,
                          "end": 618,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 602,
                            "end": 618,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 602,
                                "end": 607,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 602,
                                  "end": 607,
                                  "decorators": [],
                                  "name": "Color",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSArrayType",
                                "start": 610,
                                "end": 618,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 610,
                                  "end": 616
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
