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
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
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
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
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
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 232,
      "abstract": false,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 213,
                    "end": 219
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
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
      "start": 244,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 273,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 255,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 257,
                            "end": 263
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 280,
          "end": 281,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 306,
      "end": 361,
      "abstract": false,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 335,
                    "end": 341
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 314,
        "decorators": [],
        "name": "B2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 323,
        "end": 324,
        "decorators": [],
        "name": "A",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 397,
            "decorators": [],
            "name": "b2",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 377,
                            "end": 383
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 403,
          "end": 405,
          "decorators": [],
          "name": "b2",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 418,
          "end": 419,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 431,
      "end": 750,
      "body": {
        "type": "TSModuleBlock",
        "start": 447,
        "end": 750,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 453,
            "end": 511,
            "abstract": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 492,
                        "end": 500,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 494,
                          "end": 500
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 460,
              "end": 479,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 461,
                  "end": 478,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 471,
                    "end": 478,
                    "typeName": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 478,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
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
            "start": 517,
            "end": 748,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 572,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 566,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 572,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 569,
                              "decorators": [],
                              "name": "A",
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
                  "start": 582,
                  "end": 615,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 586,
                      "end": 614,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 614,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 593,
                                      "end": 601,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 595,
                                        "end": 601
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
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
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
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
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
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
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 653,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 697,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 682,
                                      "end": 690,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 684,
                                        "end": 690
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
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
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
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
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 711,
                      "end": 713,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    }
                  }
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
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 735,
                      "decorators": [],
                      "name": "a",
                      "optional": false
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
              "start": 526,
              "end": 529,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 529,
              "end": 548,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 530,
                  "end": 547,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 540,
                    "end": 547,
                    "typeName": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 547,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 531,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 446,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
