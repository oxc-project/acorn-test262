__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 74,
  "end": 644,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 114,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 99,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 114,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 109,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 103,
                      "end": 109
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 169,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 169,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 152,
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 164,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 126,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 126,
        "end": 129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 128,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
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
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 274,
      "body": {
        "type": "TSInterfaceBody",
        "start": 185,
        "end": 274,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 191,
            "end": 220,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 204,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 198,
                    "end": 204
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 206,
                "end": 215,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 215,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 225,
            "end": 263,
            "params": [
              {
                "type": "Identifier",
                "start": 229,
                "end": 238,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 232,
                    "end": 238
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 240,
                "end": 249,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 241,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 262,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 254,
                  "end": 262,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 255,
                      "end": 261
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 254,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 184,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 276,
      "end": 453,
      "body": {
        "type": "TSInterfaceBody",
        "start": 292,
        "end": 453,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 298,
            "end": 332,
            "params": [
              {
                "type": "Identifier",
                "start": 303,
                "end": 307,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 304,
                  "end": 307,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 306,
                    "end": 307,
                    "typeName": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 309,
                "end": 318,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 310,
                  "end": 318,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 312,
                    "end": 318
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 331,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 323,
                  "end": 331,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 323,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 337,
            "end": 362,
            "params": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 346,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
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
                }
              },
              {
                "type": "Identifier",
                "start": 348,
                "end": 357,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 349,
                  "end": 357,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 351,
                    "end": 357
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 360,
                "end": 361,
                "typeName": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 361,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 376,
            "end": 408,
            "params": [
              {
                "type": "Identifier",
                "start": 384,
                "end": 388,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 385,
                  "end": 388,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 387,
                    "end": 388,
                    "typeName": {
                      "type": "Identifier",
                      "start": 387,
                      "end": 388,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 391,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 407,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 402,
                "end": 407,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 404,
                  "end": 407,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 405,
                      "end": 406,
                      "typeName": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 406,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 404,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 380,
              "end": 383,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 381,
                  "end": 382,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
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
            "type": "TSConstructSignatureDeclaration",
            "start": 413,
            "end": 441,
            "params": [
              {
                "type": "Identifier",
                "start": 421,
                "end": 425,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 422,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 424,
                    "end": 425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 425,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 427,
                "end": 436,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 436,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 439,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 417,
              "end": 420,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 418,
                  "end": 419,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
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
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 288,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 288,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 290,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
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
      "start": 455,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 553,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 553,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 460,
              "end": 553,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 462,
                "end": 553,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 468,
                    "end": 507,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 473,
                        "end": 482,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 474,
                          "end": 482,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 476,
                            "end": 482
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 484,
                        "end": 493,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 485,
                          "end": 493,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 487,
                            "end": 493
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 494,
                      "end": 506,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 496,
                        "end": 506,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 498,
                          "end": 506,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 499,
                              "end": 505
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 496,
                          "end": 498,
                          "decorators": [],
                          "name": "C2",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 512,
                    "end": 542,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 517,
                        "end": 526,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 518,
                          "end": 526,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 520,
                            "end": 526
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 528,
                        "end": 537,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 529,
                          "end": 537,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 531,
                            "end": 537
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 538,
                      "end": 541,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 540,
                        "end": 541,
                        "typeName": {
                          "type": "Identifier",
                          "start": 540,
                          "end": 541,
                          "decorators": [],
                          "name": "C",
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
      "type": "VariableDeclaration",
      "start": 555,
      "end": 644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 644,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 644,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 560,
              "end": 644,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 562,
                "end": 644,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 568,
                    "end": 600,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 576,
                        "end": 580,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 577,
                          "end": 580,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 579,
                            "end": 580,
                            "typeName": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 580,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 582,
                        "end": 591,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 583,
                          "end": 591,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 585,
                            "end": 591
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 592,
                      "end": 599,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 594,
                        "end": 599,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 596,
                          "end": 599,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 597,
                              "end": 598,
                              "typeName": {
                                "type": "Identifier",
                                "start": 597,
                                "end": 598,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 594,
                          "end": 596,
                          "decorators": [],
                          "name": "C2",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 572,
                      "end": 575,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 573,
                          "end": 574,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 573,
                            "end": 574,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 605,
                    "end": 633,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 613,
                        "end": 617,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 614,
                          "end": 617,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 616,
                            "end": 617,
                            "typeName": {
                              "type": "Identifier",
                              "start": 616,
                              "end": 617,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 619,
                        "end": 628,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 620,
                          "end": 628,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 622,
                            "end": 628
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 629,
                      "end": 632,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 631,
                        "end": 632,
                        "typeName": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 632,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 609,
                      "end": 612,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 610,
                          "end": 611,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 610,
                            "end": 611,
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
  "sourceType": "script",
  "hashbang": null
}
```
