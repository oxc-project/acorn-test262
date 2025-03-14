subtypingWithConstructSignatures.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 667,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 667,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 667,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 32,
            "end": 94,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 81,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 58,
                    "end": 81,
                    "abstract": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 72,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 64,
                          "end": 72,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 66,
                            "end": 72
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 77,
                        "end": 81
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 84,
                "end": 93,
                "exprName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 93,
                  "decorators": [],
                  "name": "cb",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 99,
            "end": 135,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 128,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 125,
                    "end": 128
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 134,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 131,
                "end": 134
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 140,
            "end": 177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 144,
                "end": 176,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 176,
                  "decorators": [],
                  "name": "rarg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 151,
                      "end": 176,
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 156,
                          "end": 165,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 157,
                            "end": 165,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 159,
                              "end": 165
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 167,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 170,
                          "end": 176
                        }
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
            "start": 182,
            "end": 202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 201,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 190,
                  "end": 201,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 195,
                      "end": 200,
                      "decorators": [],
                      "name": "rarg1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 194,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 239,
            "end": 274,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 243,
                "end": 273,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 273,
                  "decorators": [],
                  "name": "rarg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 273,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 250,
                      "end": 273,
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 258,
                          "end": 262,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 259,
                            "end": 262,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 261,
                              "end": 262,
                              "typeName": {
                                "type": "Identifier",
                                "start": 261,
                                "end": 262,
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
                        "start": 264,
                        "end": 273,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 267,
                          "end": 273
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 254,
                        "end": 257,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 255,
                            "end": 256,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 255,
                              "end": 256,
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
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 279,
            "end": 300,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 299,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 285,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 288,
                  "end": 299,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 293,
                      "end": 298,
                      "decorators": [],
                      "name": "rarg2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSDeclareFunction",
            "start": 338,
            "end": 411,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 355,
              "end": 359,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 398,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 398,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 364,
                    "end": 398,
                    "abstract": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 369,
                        "end": 378,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 370,
                          "end": 378,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 372,
                            "end": 378
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 380,
                        "end": 389,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 381,
                          "end": 389,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 383,
                            "end": 389
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 391,
                      "end": 398,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 394,
                        "end": 398
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 410,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 401,
                "end": 410,
                "exprName": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 410,
                  "decorators": [],
                  "name": "cb",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 416,
            "end": 452,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 433,
              "end": 437,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 438,
                "end": 445,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 440,
                  "end": 445,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 442,
                    "end": 445
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 451,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 448,
                "end": 451
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 457,
            "end": 506,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 461,
                "end": 505,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 505,
                  "decorators": [],
                  "name": "r3arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 505,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 469,
                      "end": 505,
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 474,
                          "end": 483,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 475,
                            "end": 483,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 477,
                              "end": 483
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 485,
                          "end": 494,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 486,
                            "end": 494,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 488,
                              "end": 494
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 496,
                        "end": 505,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 499,
                          "end": 505
                        }
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
            "start": 511,
            "end": 533,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 515,
                "end": 532,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 517,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 520,
                  "end": 532,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 524,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 570,
            "end": 606,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 574,
                "end": 605,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 605,
                  "decorators": [],
                  "name": "r4arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 580,
                    "end": 605,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 582,
                      "end": 605,
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 590,
                          "end": 594,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 591,
                            "end": 594,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 593,
                              "end": 594,
                              "typeName": {
                                "type": "Identifier",
                                "start": 593,
                                "end": 594,
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
                        "start": 596,
                        "end": 605,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 599,
                          "end": 605
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 586,
                        "end": 589,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 587,
                            "end": 588,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 588,
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
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 611,
            "end": 633,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 615,
                "end": 632,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 620,
                  "end": 632,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 625,
                      "end": 631,
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 624,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 25,
        "decorators": [],
        "name": "ConstructSignature",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
