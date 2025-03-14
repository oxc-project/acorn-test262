assignmentCompatWithNumericIndexer.ts
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
      "end": 229,
      "abstract": false,
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
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 226,
                  "decorators": [],
                  "name": "Base",
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
      "start": 231,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 239,
            "decorators": [],
            "name": "a",
            "optional": false,
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
      "start": 241,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 273,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 254,
                            "end": 260
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 278,
          "end": 279,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 332,
            "decorators": [],
            "name": "b2",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 310,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 312,
                            "end": 318
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 337,
          "end": 339,
          "decorators": [],
          "name": "b2",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 359,
      "end": 840,
      "body": {
        "type": "TSModuleBlock",
        "start": 375,
        "end": 840,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 381,
            "end": 436,
            "abstract": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 417,
                        "end": 425,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 419,
                          "end": 425
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
              "start": 387,
              "end": 388,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 388,
              "end": 404,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 389,
                  "end": 403,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 399,
                    "end": 403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 403,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 390,
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
            "type": "ClassDeclaration",
            "start": 442,
            "end": 509,
            "abstract": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 478,
                        "end": 486,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 480,
                          "end": 486
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "A",
              "optional": false
            },
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
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 515,
            "end": 838,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 567,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 567,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 563,
                            "end": 567,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 563,
                              "end": 564,
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
                  "start": 577,
                  "end": 609,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 581,
                      "end": 609,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 609,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 588,
                                      "end": 596,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 590,
                                        "end": 596
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 623,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
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
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 647,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 701,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 679,
                                      "end": 687,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 681,
                                        "end": 687
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 714,
                      "end": 716,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    }
                  }
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
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 765,
                        "end": 788,
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 773,
                                      "end": 781,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 775,
                                        "end": 781
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 803,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    }
                  }
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
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
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
              "start": 524,
              "end": 527,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 527,
              "end": 543,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 528,
                  "end": 542,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 538,
                    "end": 542,
                    "typeName": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 542,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
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
        "start": 366,
        "end": 374,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
