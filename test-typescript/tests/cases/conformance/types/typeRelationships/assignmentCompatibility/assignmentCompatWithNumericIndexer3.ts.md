__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 750,
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
      "end": 232,
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
        "end": 232,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 209,
            "end": 230,
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
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
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
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 241,
                "end": 242,
                "typeName": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
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
      "start": 244,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 273,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 251,
                "end": 273,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 253,
                    "end": 271,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 254,
                        "end": 263,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 255,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 257,
                            "end": 263
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 264,
                      "end": 270,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 266,
                        "end": 270,
                        "typeName": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 270,
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
      "start": 276,
      "end": 282,
      "expression": {
        "type": "AssignmentExpression",
        "start": 276,
        "end": 281,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 280,
          "end": 281,
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
      "start": 292,
      "end": 298,
      "expression": {
        "type": "AssignmentExpression",
        "start": 292,
        "end": 297,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 306,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 314,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 323,
        "end": 324,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 325,
        "end": 361,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 331,
            "end": 353,
            "parameters": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 341,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 335,
                    "end": 341
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 344,
                "end": 352,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 352,
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
      "start": 363,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 397,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 371,
                "end": 397,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 373,
                    "end": 395,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 374,
                        "end": 383,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 377,
                            "end": 383
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 384,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 386,
                        "end": 394,
                        "typeName": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 394,
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
      "start": 399,
      "end": 406,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 405,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 399,
          "end": 400,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 403,
          "end": 405,
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
      "start": 413,
      "end": 420,
      "expression": {
        "type": "AssignmentExpression",
        "start": 413,
        "end": 419,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 413,
          "end": 415,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 418,
          "end": 419,
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
      "start": 431,
      "end": 750,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 446,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 447,
        "end": 750,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 453,
            "end": 511,
            "id": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 480,
              "end": 511,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 490,
                  "end": 505,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 491,
                      "end": 500,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 492,
                        "end": 500,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 494,
                          "end": 500
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 503,
                      "end": 504,
                      "typeName": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 504,
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
              "start": 460,
              "end": 479,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 461,
                  "end": 478,
                  "name": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 471,
                    "end": 478,
                    "typeName": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 478,
                      "name": "Derived",
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
            "type": "FunctionDeclaration",
            "start": 517,
            "end": 748,
            "id": {
              "type": "Identifier",
              "start": 526,
              "end": 529,
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
              "start": 551,
              "end": 748,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 561,
                  "end": 573,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 565,
                      "end": 572,
                      "id": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 572,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 566,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 572,
                            "typeName": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 569,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 569,
                              "end": 572,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 570,
                                  "end": 571,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 570,
                                    "end": 571,
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
                  "start": 582,
                  "end": 615,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 586,
                      "end": 614,
                      "id": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 614,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 587,
                          "end": 614,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 589,
                            "end": 614,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 591,
                                "end": 612,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 592,
                                    "end": 601,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 593,
                                      "end": 601,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 595,
                                        "end": 601
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 602,
                                  "end": 611,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 604,
                                    "end": 611,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 604,
                                      "end": 611,
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
                  "start": 624,
                  "end": 630,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 624,
                    "end": 629,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 624,
                      "end": 625,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
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
                  "start": 648,
                  "end": 654,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 648,
                    "end": 653,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 649,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 653,
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
                  "start": 670,
                  "end": 698,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 674,
                      "end": 697,
                      "id": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 697,
                        "name": "b2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 676,
                          "end": 697,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 678,
                            "end": 697,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 680,
                                "end": 695,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 681,
                                    "end": 690,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 682,
                                      "end": 690,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 684,
                                        "end": 690
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 691,
                                  "end": 694,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 693,
                                    "end": 694,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 693,
                                      "end": 694,
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
                  "start": 707,
                  "end": 714,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 707,
                    "end": 713,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 711,
                      "end": 713,
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
                  "start": 729,
                  "end": 736,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 729,
                    "end": 735,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 729,
                      "end": 731,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 735,
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
              "start": 529,
              "end": 548,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 530,
                  "end": 547,
                  "name": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 531,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 540,
                    "end": 547,
                    "typeName": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 547,
                      "name": "Derived",
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
