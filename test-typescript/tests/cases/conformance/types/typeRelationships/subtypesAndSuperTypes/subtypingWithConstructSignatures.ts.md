__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 25,
        "name": "ConstructSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 667,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 32,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 81,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 58,
                    "end": 81,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 72,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 64,
                          "end": 72,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 66,
                            "end": 72
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
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
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 99,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 128,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 125,
                    "end": 128
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 176,
                  "name": "rarg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 151,
                      "end": 176,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 156,
                          "end": 165,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 157,
                            "end": 165,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 159,
                              "end": 165
                            }
                          },
                          "decorators": [],
                          "optional": false
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
            "start": 182,
            "end": 202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 201,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 190,
                  "end": 201,
                  "callee": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 194,
                    "name": "foo1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 195,
                      "end": 200,
                      "name": "rarg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 273,
                  "name": "rarg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 273,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 250,
                      "end": 273,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 254,
                        "end": 257,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 255,
                            "end": 256,
                            "name": {
                              "type": "Identifier",
                              "start": 255,
                              "end": 256,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 258,
                          "end": 262,
                          "name": "x",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
            "start": 279,
            "end": 300,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 299,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 285,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 288,
                  "end": 299,
                  "callee": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "name": "foo1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 293,
                      "end": 298,
                      "name": "rarg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 338,
            "end": 411,
            "id": {
              "type": "Identifier",
              "start": 355,
              "end": 359,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 398,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 398,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 364,
                    "end": 398,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 369,
                        "end": 378,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 370,
                          "end": 378,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 372,
                            "end": 378
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 380,
                        "end": 389,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 381,
                          "end": 389,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 383,
                            "end": 389
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
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
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 416,
            "end": 452,
            "id": {
              "type": "Identifier",
              "start": 433,
              "end": 437,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 438,
                "end": 445,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 440,
                  "end": 445,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 442,
                    "end": 445
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 505,
                  "name": "r3arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 505,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 469,
                      "end": 505,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 474,
                          "end": 483,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 475,
                            "end": 483,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 477,
                              "end": 483
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 485,
                          "end": 494,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 486,
                            "end": 494,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 488,
                              "end": 494
                            }
                          },
                          "decorators": [],
                          "optional": false
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
            "start": 511,
            "end": 533,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 515,
                "end": 532,
                "id": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 517,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 520,
                  "end": 532,
                  "callee": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 524,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "name": "r3arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 605,
                  "name": "r4arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 580,
                    "end": 605,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 582,
                      "end": 605,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 586,
                        "end": 589,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 587,
                            "end": 588,
                            "name": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 588,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 590,
                          "end": 594,
                          "name": "x",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
            "start": 611,
            "end": 633,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 615,
                "end": 632,
                "id": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 620,
                  "end": 632,
                  "callee": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 624,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 625,
                      "end": 631,
                      "name": "r4arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
