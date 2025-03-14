typeParameterUsedAsTypeParameterConstraint4.ts
```json
{
  "type": "Program",
  "start": 100,
  "end": 1280,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 233,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 148,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 231,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 231,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 231,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 198,
                    "end": 207,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 202,
                        "end": 206,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 206,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 203,
                            "end": 206,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 205,
                              "end": 206,
                              "typeName": {
                                "type": "Identifier",
                                "start": 205,
                                "end": 206,
                                "decorators": [],
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 216,
                    "end": 225,
                    "argument": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 183,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 180,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 182,
                      "end": 183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "W",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 184,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 186,
                  "end": 187,
                  "typeName": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 165,
                "end": 178,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 166,
                    "end": 177,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "W",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 122,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 135,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 135,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 235,
      "end": 349,
      "body": {
        "type": "TSInterfaceBody",
        "start": 276,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 287,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 292,
            "end": 297,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 295,
                "end": 296,
                "typeName": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 302,
            "end": 307,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 305,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 321,
            "end": 347,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 321,
              "end": 324,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 342,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 339,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 341,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "decorators": [],
                      "name": "W",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 324,
              "end": 337,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 325,
                  "end": 336,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 336,
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "W",
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
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 246,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 248,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 261,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 274,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 273,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 351,
      "end": 587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 395,
        "end": 587,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 410,
            "end": 585,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 454,
              "end": 585,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 473,
                  "end": 579,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 527,
                    "end": 579,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 541,
                        "end": 547,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 541,
                          "end": 546,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 541,
                            "end": 542,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 545,
                            "end": 546,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 560,
                        "end": 569,
                        "argument": {
                          "type": "Identifier",
                          "start": 567,
                          "end": 568,
                          "decorators": [],
                          "name": "y",
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
                    "start": 482,
                    "end": 485,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 512,
                      "end": 516,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 513,
                        "end": 516,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 515,
                          "end": 516,
                          "typeName": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
                            "decorators": [],
                            "name": "X",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 518,
                      "end": 522,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 519,
                        "end": 522,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 521,
                          "end": 522,
                          "typeName": {
                            "type": "Identifier",
                            "start": 521,
                            "end": 522,
                            "decorators": [],
                            "name": "Y",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 523,
                    "end": 526,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 525,
                      "end": 526,
                      "typeName": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 485,
                    "end": 511,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 486,
                        "end": 497,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 496,
                          "end": 497,
                          "typeName": {
                            "type": "Identifier",
                            "start": 496,
                            "end": 497,
                            "decorators": [],
                            "name": "W",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
                          "decorators": [],
                          "name": "X",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 499,
                        "end": 510,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 509,
                          "end": 510,
                          "typeName": {
                            "type": "Identifier",
                            "start": 509,
                            "end": 510,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 499,
                          "end": 500,
                          "decorators": [],
                          "name": "Y",
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
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 419,
              "end": 422,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 453,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 452,
                "end": 453,
                "typeName": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 453,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 422,
              "end": 448,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 423,
                  "end": 434,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 433,
                    "end": 434,
                    "typeName": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 436,
                  "end": 447,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 446,
                    "end": 447,
                    "typeName": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 447,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "W",
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 363,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 380,
          "end": 384,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 381,
            "end": 384,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 383,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 386,
          "end": 390,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 390,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 389,
              "end": 390,
              "typeName": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 391,
        "end": 394,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 393,
          "end": 394,
          "typeName": {
            "type": "Identifier",
            "start": 393,
            "end": 394,
            "decorators": [],
            "name": "V",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 363,
        "end": 379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 364,
            "end": 365,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 367,
            "end": 378,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
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
      "type": "FunctionDeclaration",
      "start": 589,
      "end": 826,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 634,
        "end": 826,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 649,
            "end": 824,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 693,
              "end": 824,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 712,
                  "end": 818,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 766,
                    "end": 818,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 780,
                        "end": 786,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 780,
                          "end": 785,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 780,
                            "end": 781,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 784,
                            "end": 785,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 799,
                        "end": 808,
                        "argument": {
                          "type": "Identifier",
                          "start": 806,
                          "end": 807,
                          "decorators": [],
                          "name": "y",
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
                    "start": 721,
                    "end": 724,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 751,
                      "end": 755,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 752,
                        "end": 755,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 754,
                          "end": 755,
                          "typeName": {
                            "type": "Identifier",
                            "start": 754,
                            "end": 755,
                            "decorators": [],
                            "name": "X",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 757,
                      "end": 761,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 758,
                        "end": 761,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 760,
                          "end": 761,
                          "typeName": {
                            "type": "Identifier",
                            "start": 760,
                            "end": 761,
                            "decorators": [],
                            "name": "Y",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 762,
                    "end": 765,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 764,
                      "end": 765,
                      "typeName": {
                        "type": "Identifier",
                        "start": 764,
                        "end": 765,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 724,
                    "end": 750,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 725,
                        "end": 736,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 735,
                          "end": 736,
                          "typeName": {
                            "type": "Identifier",
                            "start": 735,
                            "end": 736,
                            "decorators": [],
                            "name": "W",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 725,
                          "end": 726,
                          "decorators": [],
                          "name": "X",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 738,
                        "end": 749,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 748,
                          "end": 749,
                          "typeName": {
                            "type": "Identifier",
                            "start": 748,
                            "end": 749,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 738,
                          "end": 739,
                          "decorators": [],
                          "name": "Y",
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
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 658,
              "end": 661,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 692,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 691,
                "end": 692,
                "typeName": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 661,
              "end": 687,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 662,
                  "end": 673,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 672,
                    "end": 673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 662,
                    "end": 663,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 675,
                  "end": 686,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 685,
                    "end": 686,
                    "typeName": {
                      "type": "Identifier",
                      "start": 685,
                      "end": 686,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 675,
                    "end": 676,
                    "decorators": [],
                    "name": "W",
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 602,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 619,
          "end": 623,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 620,
            "end": 623,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 622,
              "end": 623,
              "typeName": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 625,
          "end": 629,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 629,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 628,
              "end": 629,
              "typeName": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 630,
        "end": 633,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 632,
          "end": 633,
          "typeName": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "decorators": [],
            "name": "W",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 602,
        "end": 618,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 603,
            "end": 614,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 613,
              "end": 614,
              "typeName": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 616,
            "end": 617,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
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
      "type": "VariableDeclaration",
      "start": 828,
      "end": 1058,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 832,
          "end": 1058,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 832,
            "end": 834,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 837,
            "end": 1058,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 869,
              "end": 1058,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 875,
                  "end": 1056,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 926,
                    "end": 1056,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 945,
                        "end": 1050,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 949,
                            "end": 1050,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 949,
                              "end": 950,
                              "decorators": [],
                              "name": "g",
                              "optional": false
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 953,
                              "end": 1050,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 998,
                                "end": 1050,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1012,
                                    "end": 1018,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 1012,
                                      "end": 1017,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1012,
                                        "end": 1013,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1016,
                                        "end": 1017,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1031,
                                    "end": 1040,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1038,
                                      "end": 1039,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 980,
                                  "end": 984,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 981,
                                    "end": 984,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 983,
                                      "end": 984,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 983,
                                        "end": 984,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 986,
                                  "end": 990,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 987,
                                    "end": 990,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 989,
                                      "end": 990,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 989,
                                        "end": 990,
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 991,
                                "end": 994,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 993,
                                  "end": 994,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 993,
                                    "end": 994,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 953,
                                "end": 979,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 954,
                                    "end": 965,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 964,
                                      "end": 965,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 964,
                                        "end": 965,
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 954,
                                      "end": 955,
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false
                                    },
                                    "out": false
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 967,
                                    "end": 978,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 977,
                                      "end": 978,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 977,
                                        "end": 978,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 967,
                                      "end": 968,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false
                                    },
                                    "out": false
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 887,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 914,
                      "end": 918,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 915,
                        "end": 918,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 917,
                          "end": 918,
                          "typeName": {
                            "type": "Identifier",
                            "start": 917,
                            "end": 918,
                            "decorators": [],
                            "name": "X",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 920,
                      "end": 924,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 921,
                        "end": 924,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 923,
                          "end": 924,
                          "typeName": {
                            "type": "Identifier",
                            "start": 923,
                            "end": 924,
                            "decorators": [],
                            "name": "Y",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 887,
                    "end": 913,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 888,
                        "end": 899,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 898,
                          "end": 899,
                          "typeName": {
                            "type": "Identifier",
                            "start": 898,
                            "end": 899,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 888,
                          "end": 889,
                          "decorators": [],
                          "name": "V",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 901,
                        "end": 912,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 911,
                          "end": 912,
                          "typeName": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 912,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 901,
                          "end": 902,
                          "decorators": [],
                          "name": "W",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 854,
                "end": 858,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 855,
                  "end": 858,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 857,
                    "end": 858,
                    "typeName": {
                      "type": "Identifier",
                      "start": 857,
                      "end": 858,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 860,
                "end": 864,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 861,
                  "end": 864,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 864,
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 864,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 837,
              "end": 853,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 838,
                  "end": 839,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 839,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 841,
                  "end": 852,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 851,
                    "end": 852,
                    "typeName": {
                      "type": "Identifier",
                      "start": 851,
                      "end": 852,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 841,
                    "end": 842,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1060,
      "end": 1280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1064,
          "end": 1280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1064,
            "end": 1066,
            "decorators": [],
            "name": "f4",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1069,
            "end": 1280,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1101,
              "end": 1280,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 1116,
                  "end": 1278,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1157,
                    "end": 1278,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1167,
                        "end": 1272,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1171,
                            "end": 1272,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1171,
                              "end": 1172,
                              "decorators": [],
                              "name": "g",
                              "optional": false
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 1175,
                              "end": 1272,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1220,
                                "end": 1272,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1234,
                                    "end": 1240,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 1234,
                                      "end": 1239,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1234,
                                        "end": 1235,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1238,
                                        "end": 1239,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1253,
                                    "end": 1262,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1260,
                                      "end": 1261,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1202,
                                  "end": 1206,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1203,
                                    "end": 1206,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1205,
                                      "end": 1206,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1205,
                                        "end": 1206,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1208,
                                  "end": 1212,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1209,
                                    "end": 1212,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1211,
                                      "end": 1212,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1211,
                                        "end": 1212,
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1213,
                                "end": 1216,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1215,
                                  "end": 1216,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1215,
                                    "end": 1216,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1175,
                                "end": 1201,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1176,
                                    "end": 1187,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1186,
                                      "end": 1187,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1186,
                                        "end": 1187,
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1176,
                                      "end": 1177,
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false
                                    },
                                    "out": false
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1189,
                                    "end": 1200,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1199,
                                      "end": 1200,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1199,
                                        "end": 1200,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1189,
                                      "end": 1190,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false
                                    },
                                    "out": false
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1125,
                    "end": 1128,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "params": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1128,
                    "end": 1154,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1129,
                        "end": 1140,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1139,
                          "end": 1140,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1140,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1129,
                          "end": 1130,
                          "decorators": [],
                          "name": "V",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1142,
                        "end": 1153,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1152,
                          "end": 1153,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1152,
                            "end": 1153,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1142,
                          "end": 1143,
                          "decorators": [],
                          "name": "W",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1086,
                "end": 1090,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1087,
                  "end": 1090,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1089,
                    "end": 1090,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1089,
                      "end": 1090,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1092,
                "end": 1096,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1093,
                  "end": 1096,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1095,
                    "end": 1096,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1095,
                      "end": 1096,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1069,
              "end": 1085,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1070,
                  "end": 1081,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1080,
                    "end": 1081,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1080,
                      "end": 1081,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1071,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1083,
                  "end": 1084,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1084,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
