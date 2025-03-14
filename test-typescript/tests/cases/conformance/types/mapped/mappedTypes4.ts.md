mappedTypes4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1548,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 18,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 17,
        "members": []
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 33,
        "decorators": [],
        "name": "Boxified",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 39,
        "end": 73,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 51,
          "end": 58,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 57,
            "end": 58,
            "typeName": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 70,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 70,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 65,
                "end": 69,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 66,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "decorators": [],
            "name": "Box",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 326,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 326,
        "body": [
          {
            "type": "IfStatement",
            "start": 122,
            "end": 303,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 151,
              "end": 303,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 161,
                  "end": 192,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 165,
                      "end": 191,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 171,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 174,
                        "end": 191,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 174,
                          "end": 176,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 191,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 188,
                            "end": 191,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 189,
                                "end": 190,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 189,
                                  "end": 190,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 188,
                            "decorators": [],
                            "name": "Boxified",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ForInStatement",
                  "start": 201,
                  "end": 274,
                  "body": {
                    "type": "BlockStatement",
                    "start": 220,
                    "end": 274,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 234,
                        "end": 264,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 234,
                          "end": 263,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 234,
                            "end": 243,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 240,
                              "decorators": [],
                              "name": "result",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 241,
                              "end": 242,
                              "decorators": [],
                              "name": "k",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 246,
                            "end": 263,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 248,
                                "end": 261,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 248,
                                  "end": 253,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 255,
                                  "end": 261,
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 258,
                                    "decorators": [],
                                    "name": "obj",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 260,
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 206,
                    "end": 211,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 210,
                        "end": 211,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "decorators": [],
                          "name": "k",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 283,
                  "end": 297,
                  "argument": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 296,
                    "decorators": [],
                    "name": "result",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 126,
              "end": 149,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 126,
                "end": 136,
                "argument": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 136,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 141,
                "end": 149,
                "raw": "\"object\"",
                "value": "object"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 308,
            "end": 324,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 315,
              "end": 323,
              "expression": {
                "type": "Identifier",
                "start": 320,
                "end": 323,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "boxify",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 101,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 101,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 115,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 104,
          "end": 115,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 112,
            "end": 115,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 104,
            "end": 112,
            "decorators": [],
            "name": "Boxified",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 328,
      "end": 351,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 337,
        "end": 350,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 339,
            "end": 348,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 352,
      "end": 375,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 358,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 361,
        "end": 374,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 363,
            "end": 372,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 364,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 372,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 366,
                "end": 372
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 376,
      "end": 399,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 382,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 385,
        "end": 398,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 396,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 396,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 464,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 439,
        "end": 464,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 445,
            "end": 462,
            "argument": {
              "type": "CallExpression",
              "start": 452,
              "end": 461,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 452,
                "end": 458,
                "decorators": [],
                "name": "boxify",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 413,
          "end": 437,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 414,
            "end": 437,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 416,
              "end": 437,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 417,
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 420,
                  "end": 421,
                  "typeName": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 421,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 428,
                  "end": 437
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 466,
      "end": 496,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 474,
        "decorators": [],
        "name": "T00",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 477,
        "end": 495,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 484,
          "end": 495,
          "params": [
            {
              "type": "TSUnionType",
              "start": 485,
              "end": 494,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 486,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 489,
                  "end": 490,
                  "typeName": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 493,
                  "end": 494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 477,
          "end": 484,
          "decorators": [],
          "name": "Partial",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 497,
      "end": 547,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 502,
        "end": 505,
        "decorators": [],
        "name": "T01",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 508,
        "end": 546,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 516,
          "end": 546,
          "params": [
            {
              "type": "TSUnionType",
              "start": 517,
              "end": 545,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 517,
                  "end": 518,
                  "typeName": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 521,
                  "end": 522,
                  "typeName": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 525,
                  "end": 526,
                  "typeName": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
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
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 508,
          "end": 516,
          "decorators": [],
          "name": "Readonly",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 548,
      "end": 589,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 556,
        "decorators": [],
        "name": "T02",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 559,
        "end": 589,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 567,
          "end": 589,
          "params": [
            {
              "type": "TSUnionType",
              "start": 568,
              "end": 588,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 568,
                  "end": 569,
                  "typeName": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 572,
                  "end": 575,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 572,
                    "end": 573,
                    "typeName": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 573,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 578,
                  "end": 579,
                  "typeName": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 579,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 559,
          "end": 567,
          "decorators": [],
          "name": "Boxified",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 590,
      "end": 663,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 598,
        "decorators": [],
        "name": "T03",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 601,
        "end": 662,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 609,
          "end": 662,
          "params": [
            {
              "type": "TSUnionType",
              "start": 610,
              "end": 661,
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
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 601,
          "end": 609,
          "decorators": [],
          "name": "Readonly",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 664,
      "end": 737,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 669,
        "end": 672,
        "decorators": [],
        "name": "T04",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 675,
        "end": 736,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 683,
          "end": 736,
          "params": [
            {
              "type": "TSUnionType",
              "start": 684,
              "end": 735,
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
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 675,
          "end": 683,
          "decorators": [],
          "name": "Boxified",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 738,
      "end": 781,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 746,
        "decorators": [],
        "name": "T05",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 749,
        "end": 780,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 756,
          "end": 780,
          "params": [
            {
              "type": "TSUnionType",
              "start": 757,
              "end": 779,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 757,
                  "end": 764,
                  "literal": {
                    "type": "Literal",
                    "start": 757,
                    "end": 764,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 767,
                  "end": 774,
                  "literal": {
                    "type": "Literal",
                    "start": 767,
                    "end": 774,
                    "raw": "\"world\"",
                    "value": "world"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 777,
                  "end": 779,
                  "literal": {
                    "type": "Literal",
                    "start": 777,
                    "end": 779,
                    "raw": "42",
                    "value": 42
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 749,
          "end": 756,
          "decorators": [],
          "name": "Partial",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 783,
      "end": 855,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 788,
        "end": 808,
        "decorators": [],
        "name": "BoxifiedWithSentinel",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 817,
        "end": 855,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 829,
          "end": 836,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 835,
            "end": 836,
            "typeName": {
              "type": "Identifier",
              "start": 835,
              "end": 836,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 824,
          "end": 825,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 839,
          "end": 852,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 839,
              "end": 848,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 842,
                "end": 848,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 843,
                    "end": 847,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 845,
                      "end": 846,
                      "typeName": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 846,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 843,
                      "end": 844,
                      "typeName": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 839,
                "end": 842,
                "decorators": [],
                "name": "Box",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 851,
              "end": 852,
              "typeName": {
                "type": "Identifier",
                "start": 851,
                "end": 852,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 808,
        "end": 814,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 809,
            "end": 810,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 812,
            "end": 813,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 812,
              "end": 813,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 857,
      "end": 906,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 862,
        "end": 865,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 868,
        "end": 905,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 888,
          "end": 905,
          "params": [
            {
              "type": "TSUnionType",
              "start": 889,
              "end": 898,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 889,
                  "end": 890,
                  "typeName": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 890,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 893,
                  "end": 894,
                  "typeName": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 894,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 897,
                  "end": 898,
                  "typeName": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 898,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ]
            },
            {
              "type": "TSNullKeyword",
              "start": 900,
              "end": 904
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 868,
          "end": 888,
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 907,
      "end": 961,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 915,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 918,
        "end": 960,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 938,
          "end": 960,
          "params": [
            {
              "type": "TSUnionType",
              "start": 939,
              "end": 948,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 939,
                  "end": 940,
                  "typeName": {
                    "type": "Identifier",
                    "start": 939,
                    "end": 940,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 943,
                  "end": 944,
                  "typeName": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 944,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 947,
                  "end": 948,
                  "typeName": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 948,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ]
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 950,
              "end": 959
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 918,
          "end": 938,
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 962,
      "end": 1013,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 970,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 973,
        "end": 1012,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 993,
          "end": 1012,
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
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 973,
          "end": 993,
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1015,
      "end": 1091,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1032,
        "decorators": [],
        "name": "DeepReadonly",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1038,
        "end": 1090,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1059,
          "end": 1066,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1065,
            "end": 1066,
            "typeName": {
              "type": "Identifier",
              "start": 1065,
              "end": 1066,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1054,
          "end": 1055,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1069,
          "end": 1087,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1081,
            "end": 1087,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1082,
                "end": 1086,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1084,
                  "end": 1085,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1082,
                  "end": 1083,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1083,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1069,
            "end": 1081,
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1032,
        "end": 1035,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1033,
            "end": 1034,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1033,
              "end": 1034,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1093,
      "end": 1172,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1104,
        "end": 1171,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1110,
            "end": 1120,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1110,
              "end": 1111,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1111,
              "end": 1119,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1113,
                "end": 1119
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1125,
            "end": 1153,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1125,
              "end": 1126,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1126,
              "end": 1152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1128,
                "end": 1152,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1130,
                    "end": 1140,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1130,
                      "end": 1131,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1131,
                      "end": 1139,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1133,
                        "end": 1139
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1141,
                    "end": 1150,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1142,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1142,
                      "end": 1150,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1144,
                        "end": 1150
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1158,
            "end": 1169,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1159,
              "end": 1168,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1161,
                "end": 1168
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1174,
      "end": 1310,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1179,
        "end": 1194,
        "decorators": [],
        "name": "DeepReadonlyFoo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1197,
        "end": 1309,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1203,
            "end": 1222,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1212,
              "end": 1213,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1215,
                "end": 1221
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1227,
            "end": 1282,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1236,
              "end": 1237,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1237,
              "end": 1281,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1239,
                "end": 1281,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1241,
                    "end": 1260,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1250,
                      "end": 1251,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1251,
                      "end": 1259,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1253,
                        "end": 1259
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1261,
                    "end": 1279,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1271,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1271,
                      "end": 1279,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1273,
                        "end": 1279
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1287,
            "end": 1307,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1296,
              "end": 1297,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1297,
              "end": 1306,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1299,
                "end": 1306
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1312,
      "end": 1338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1316,
          "end": 1337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1316,
            "end": 1337,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1318,
              "end": 1337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1320,
                "end": 1337,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1332,
                  "end": 1337,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1333,
                      "end": 1336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1333,
                        "end": 1336,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1332,
                  "decorators": [],
                  "name": "DeepReadonly",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1339,
      "end": 1363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1362,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1362,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1345,
              "end": 1362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1347,
                "end": 1362,
                "typeName": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1362,
                  "decorators": [],
                  "name": "DeepReadonlyFoo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1387,
      "end": 1410,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1392,
        "end": 1393,
        "decorators": [],
        "name": "Z",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1396,
        "end": 1409,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1398,
            "end": 1407,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1398,
              "end": 1399,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1399,
              "end": 1407,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1401,
                "end": 1407
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1411,
      "end": 1469,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1416,
        "end": 1421,
        "decorators": [],
        "name": "Clone",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1427,
        "end": 1468,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1437,
          "end": 1451,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "start": 1444,
            "end": 1450,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1444,
                "end": 1445,
                "typeName": {
                  "type": "Identifier",
                  "start": 1444,
                  "end": 1445,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 1448,
                "end": 1450,
                "members": []
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1432,
          "end": 1433,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1454,
          "end": 1465,
          "indexType": {
            "type": "TSTypeReference",
            "start": 1463,
            "end": 1464,
            "typeName": {
              "type": "Identifier",
              "start": 1463,
              "end": 1464,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSIntersectionType",
            "start": 1455,
            "end": 1461,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1455,
                "end": 1456,
                "typeName": {
                  "type": "Identifier",
                  "start": 1455,
                  "end": 1456,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 1459,
                "end": 1461,
                "members": []
              }
            ]
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1421,
        "end": 1424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1422,
            "end": 1423,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1422,
              "end": 1423,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1470,
      "end": 1488,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1475,
        "end": 1476,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1479,
        "end": 1487,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1484,
          "end": 1487,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1485,
              "end": 1486,
              "typeName": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
                "decorators": [],
                "name": "Z",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1479,
          "end": 1484,
          "decorators": [],
          "name": "Clone",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1519,
      "end": 1529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1523,
          "end": 1528,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1523,
            "end": 1528,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1525,
              "end": 1528,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1527,
                "end": 1528,
                "typeName": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1528,
                  "decorators": [],
                  "name": "Z",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1530,
      "end": 1547,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1534,
          "end": 1546,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1534,
            "end": 1546,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1536,
              "end": 1546,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1538,
                "end": 1546,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1543,
                  "end": 1546,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1544,
                      "end": 1545,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1544,
                        "end": 1545,
                        "decorators": [],
                        "name": "Z",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1538,
                  "end": 1543,
                  "decorators": [],
                  "name": "Clone",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
