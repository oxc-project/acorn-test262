__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 840,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 193,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 191,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 229,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 209,
            "end": 227,
            "parameters": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 213,
                    "end": 219
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 226,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 239,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 273,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 248,
                "end": 273,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 250,
                    "end": 271,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 251,
                        "end": 260,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 254,
                            "end": 260
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 261,
                      "end": 270,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 263,
                        "end": 270,
                        "typeName": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 270,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 274,
      "end": 280,
      "expression": {
        "type": "AssignmentExpression",
        "start": 274,
        "end": 279,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 274,
          "end": 275,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 278,
          "end": 279,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 281,
      "end": 287,
      "expression": {
        "type": "AssignmentExpression",
        "start": 281,
        "end": 286,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 281,
          "end": 282,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 332,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 306,
                "end": 332,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 308,
                    "end": 330,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 318,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 310,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 312,
                            "end": 318
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 319,
                      "end": 329,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 329,
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 329,
                          "name": "Derived2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 340,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 337,
          "end": 339,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 348,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 341,
          "end": 343,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 359,
      "end": 840,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 374,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 375,
        "end": 840,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 381,
            "end": 436,
            "id": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 405,
              "end": 436,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 415,
                  "end": 430,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 416,
                      "end": 425,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 417,
                        "end": 425,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 419,
                          "end": 425
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 428,
                      "end": 429,
                      "typeName": {
                        "type": "Identifier",
                        "start": 428,
                        "end": 429,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 388,
              "end": 404,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 389,
                  "end": 403,
                  "name": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 390,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 399,
                    "end": 403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 403,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 442,
            "end": 509,
            "id": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 466,
              "end": 509,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 476,
                  "end": 497,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 477,
                      "end": 486,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 478,
                        "end": 486,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 480,
                          "end": 486
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 487,
                    "end": 496,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 489,
                      "end": 496,
                      "typeName": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 496,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 459,
              "end": 465,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 460,
                  "end": 464,
                  "typeName": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 464,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 515,
            "end": 838,
            "id": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 546,
              "end": 838,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 556,
                  "end": 568,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 560,
                      "end": 567,
                      "id": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 567,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 567,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 563,
                            "end": 567,
                            "typeName": {
                              "type": "Identifier",
                              "start": 563,
                              "end": 564,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 564,
                              "end": 567,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 565,
                                  "end": 566,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 565,
                                    "end": 566,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 577,
                  "end": 609,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 581,
                      "end": 609,
                      "id": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 609,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 582,
                          "end": 609,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 584,
                            "end": 609,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 586,
                                "end": 607,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 587,
                                    "end": 596,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 588,
                                      "end": 596,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 590,
                                        "end": 596
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 597,
                                  "end": 606,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 599,
                                    "end": 606,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 599,
                                      "end": 606,
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 618,
                  "end": 624,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 618,
                    "end": 623,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 618,
                      "end": 619,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 623,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 642,
                  "end": 648,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 642,
                    "end": 647,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 642,
                      "end": 643,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 647,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 667,
                  "end": 701,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 671,
                      "end": 701,
                      "id": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 701,
                        "name": "b2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 673,
                          "end": 701,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 675,
                            "end": 701,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 677,
                                "end": 699,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 678,
                                    "end": 687,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 679,
                                      "end": 687,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 681,
                                        "end": 687
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 688,
                                  "end": 698,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 690,
                                    "end": 698,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 690,
                                      "end": 698,
                                      "name": "Derived2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 710,
                  "end": 717,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 710,
                    "end": 716,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 710,
                      "end": 711,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 714,
                      "end": 716,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 735,
                  "end": 742,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 735,
                    "end": 741,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 737,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 761,
                  "end": 788,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 765,
                      "end": 788,
                      "id": {
                        "type": "Identifier",
                        "start": 765,
                        "end": 788,
                        "name": "b3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 767,
                          "end": 788,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 769,
                            "end": 788,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 771,
                                "end": 786,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 772,
                                    "end": 781,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 773,
                                      "end": 781,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 775,
                                        "end": 781
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 782,
                                  "end": 785,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 784,
                                    "end": 785,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 784,
                                      "end": 785,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 797,
                  "end": 804,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 797,
                    "end": 803,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 797,
                      "end": 798,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 803,
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 819,
                  "end": 826,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 819,
                    "end": 825,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 819,
                      "end": 821,
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 527,
              "end": 543,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 528,
                  "end": 542,
                  "name": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 538,
                    "end": 542,
                    "typeName": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 542,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
