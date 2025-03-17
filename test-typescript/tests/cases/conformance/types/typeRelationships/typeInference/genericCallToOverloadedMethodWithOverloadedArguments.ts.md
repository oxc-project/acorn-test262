__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2544,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 255,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 33,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 33,
              "end": 36,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 34,
                  "end": 35,
                  "name": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 37,
              "end": 99,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 47,
                  "end": 93,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 51,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 51,
                    "end": 54,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 52,
                        "end": 53,
                        "name": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 53,
                          "name": "U",
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
                      "start": 55,
                      "end": 79,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 57,
                        "end": 79,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 59,
                          "end": 79,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 60,
                              "end": 64,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 61,
                                "end": 64,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 63,
                                  "end": 64,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 63,
                                    "end": 64,
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
                            "start": 66,
                            "end": 79,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 69,
                              "end": 79,
                              "typeName": {
                                "type": "Identifier",
                                "start": 69,
                                "end": 76,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 76,
                                "end": 79,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 77,
                                    "end": 78,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 77,
                                      "end": 78,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 89,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 89,
                        "end": 92,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 90,
                            "end": 91,
                            "typeName": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 105,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 134,
              "name": "testFunction",
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
                "start": 135,
                "end": 144,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 138,
                    "end": 144
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
              "start": 145,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 154,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 154,
                  "end": 162,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 155,
                      "end": 161
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 201,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 200,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 200,
                  "name": "numPromise",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 200,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 192,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 192,
                        "end": 200,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 193,
                            "end": 199
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
            "start": 206,
            "end": 253,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 210,
                "end": 252,
                "id": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 220,
                  "name": "newPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 223,
                  "end": 252,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 238,
                    "object": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 233,
                      "name": "numPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 238,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 239,
                      "end": 251,
                      "name": "testFunction",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 297,
      "end": 615,
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 306,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 307,
        "end": 615,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 313,
            "end": 396,
            "id": {
              "type": "Identifier",
              "start": 323,
              "end": 330,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 330,
              "end": 333,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 331,
                  "end": 332,
                  "name": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 334,
              "end": 396,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 344,
                  "end": 390,
                  "key": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 348,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 348,
                    "end": 351,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 349,
                        "end": 350,
                        "name": {
                          "type": "Identifier",
                          "start": 349,
                          "end": 350,
                          "name": "U",
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
                      "start": 352,
                      "end": 376,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 354,
                        "end": 376,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 356,
                          "end": 376,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 357,
                              "end": 361,
                              "name": "x",
                              "typeAnnotation": {
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
                            "start": 363,
                            "end": 376,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 366,
                              "end": 376,
                              "typeName": {
                                "type": "Identifier",
                                "start": 366,
                                "end": 373,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 373,
                                "end": 376,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 374,
                                    "end": 375,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 374,
                                      "end": 375,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 379,
                      "end": 389,
                      "typeName": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 386,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 386,
                        "end": 389,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 387,
                            "end": 388,
                            "typeName": {
                              "type": "Identifier",
                              "start": 387,
                              "end": 388,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 402,
            "end": 460,
            "id": {
              "type": "Identifier",
              "start": 419,
              "end": 431,
              "name": "testFunction",
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
                "start": 432,
                "end": 441,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 433,
                  "end": 441,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 435,
                    "end": 441
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
              "start": 442,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 444,
                "end": 459,
                "typeName": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 451,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 451,
                  "end": 459,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 452,
                      "end": 458
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 465,
            "end": 523,
            "id": {
              "type": "Identifier",
              "start": 482,
              "end": 494,
              "name": "testFunction",
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
                "start": 495,
                "end": 504,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 496,
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 498,
                    "end": 504
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
              "start": 505,
              "end": 522,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 507,
                "end": 522,
                "typeName": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 514,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 514,
                  "end": 522,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 515,
                      "end": 521
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 529,
            "end": 561,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 533,
                "end": 560,
                "id": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 560,
                  "name": "numPromise",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 543,
                    "end": 560,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 545,
                      "end": 560,
                      "typeName": {
                        "type": "Identifier",
                        "start": 545,
                        "end": 552,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 552,
                        "end": 560,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 553,
                            "end": 559
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
            "start": 566,
            "end": 613,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 570,
                "end": 612,
                "id": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 580,
                  "name": "newPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 583,
                  "end": 612,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 583,
                    "end": 598,
                    "object": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 593,
                      "name": "numPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 598,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 599,
                      "end": 611,
                      "name": "testFunction",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 657,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 666,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 667,
        "end": 1003,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 673,
            "end": 847,
            "id": {
              "type": "Identifier",
              "start": 683,
              "end": 690,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 690,
              "end": 693,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 691,
                  "end": 692,
                  "name": {
                    "type": "Identifier",
                    "start": 691,
                    "end": 692,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 694,
              "end": 847,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 704,
                  "end": 750,
                  "key": {
                    "type": "Identifier",
                    "start": 704,
                    "end": 708,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 708,
                    "end": 711,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 709,
                        "end": 710,
                        "name": {
                          "type": "Identifier",
                          "start": 709,
                          "end": 710,
                          "name": "U",
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
                      "start": 712,
                      "end": 736,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 714,
                        "end": 736,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 716,
                          "end": 736,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 717,
                              "end": 721,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 718,
                                "end": 721,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 720,
                                  "end": 721,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 720,
                                    "end": 721,
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
                            "start": 723,
                            "end": 736,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 726,
                              "end": 736,
                              "typeName": {
                                "type": "Identifier",
                                "start": 726,
                                "end": 733,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 733,
                                "end": 736,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 734,
                                    "end": 735,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 734,
                                      "end": 735,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 737,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 739,
                      "end": 749,
                      "typeName": {
                        "type": "Identifier",
                        "start": 739,
                        "end": 746,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 746,
                        "end": 749,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 747,
                            "end": 748,
                            "typeName": {
                              "type": "Identifier",
                              "start": 747,
                              "end": 748,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 759,
                  "end": 841,
                  "key": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 763,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 763,
                    "end": 766,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 764,
                        "end": 765,
                        "name": {
                          "type": "Identifier",
                          "start": 764,
                          "end": 765,
                          "name": "U",
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
                      "start": 767,
                      "end": 791,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 769,
                        "end": 791,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 771,
                          "end": 791,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 772,
                              "end": 776,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 773,
                                "end": 776,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 775,
                                  "end": 776,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 775,
                                    "end": 776,
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
                            "start": 778,
                            "end": 791,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 781,
                              "end": 791,
                              "typeName": {
                                "type": "Identifier",
                                "start": 781,
                                "end": 788,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 788,
                                "end": 791,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 789,
                                    "end": 790,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 789,
                                      "end": 790,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 793,
                      "end": 827,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 799,
                        "end": 827,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 801,
                          "end": 827,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 802,
                              "end": 812,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 807,
                                "end": 812,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 809,
                                  "end": 812
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 814,
                            "end": 827,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 817,
                              "end": 827,
                              "typeName": {
                                "type": "Identifier",
                                "start": 817,
                                "end": 824,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 824,
                                "end": 827,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 825,
                                    "end": 826,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 825,
                                      "end": 826,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 828,
                    "end": 840,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 830,
                      "end": 840,
                      "typeName": {
                        "type": "Identifier",
                        "start": 830,
                        "end": 837,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 837,
                        "end": 840,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 838,
                            "end": 839,
                            "typeName": {
                              "type": "Identifier",
                              "start": 838,
                              "end": 839,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 853,
            "end": 911,
            "id": {
              "type": "Identifier",
              "start": 870,
              "end": 882,
              "name": "testFunction",
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
                "start": 883,
                "end": 892,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 884,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 886,
                    "end": 892
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
              "start": 893,
              "end": 910,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 895,
                "end": 910,
                "typeName": {
                  "type": "Identifier",
                  "start": 895,
                  "end": 902,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 902,
                  "end": 910,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 903,
                      "end": 909
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 917,
            "end": 949,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 921,
                "end": 948,
                "id": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 948,
                  "name": "numPromise",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 931,
                    "end": 948,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 933,
                      "end": 948,
                      "typeName": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 940,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 940,
                        "end": 948,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 941,
                            "end": 947
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
            "start": 954,
            "end": 1001,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 958,
                "end": 1000,
                "id": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 968,
                  "name": "newPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 971,
                  "end": 1000,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 971,
                    "end": 986,
                    "object": {
                      "type": "Identifier",
                      "start": 971,
                      "end": 981,
                      "name": "numPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 982,
                      "end": 986,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 987,
                      "end": 999,
                      "name": "testFunction",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1045,
      "end": 1454,
      "id": {
        "type": "Identifier",
        "start": 1052,
        "end": 1054,
        "name": "m4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1055,
        "end": 1454,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 1061,
            "end": 1235,
            "id": {
              "type": "Identifier",
              "start": 1071,
              "end": 1078,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1078,
              "end": 1081,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1079,
                  "end": 1080,
                  "name": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1080,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 1082,
              "end": 1235,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1092,
                  "end": 1138,
                  "key": {
                    "type": "Identifier",
                    "start": 1092,
                    "end": 1096,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1096,
                    "end": 1099,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1097,
                        "end": 1098,
                        "name": {
                          "type": "Identifier",
                          "start": 1097,
                          "end": 1098,
                          "name": "U",
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
                      "start": 1100,
                      "end": 1124,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1102,
                        "end": 1124,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1104,
                          "end": 1124,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1105,
                              "end": 1109,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1106,
                                "end": 1109,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1108,
                                  "end": 1109,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1108,
                                    "end": 1109,
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
                            "start": 1111,
                            "end": 1124,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1114,
                              "end": 1124,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1114,
                                "end": 1121,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1121,
                                "end": 1124,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1122,
                                    "end": 1123,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1122,
                                      "end": 1123,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1125,
                    "end": 1137,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1127,
                      "end": 1137,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1127,
                        "end": 1134,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1134,
                        "end": 1137,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1135,
                            "end": 1136,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1135,
                              "end": 1136,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1147,
                  "end": 1229,
                  "key": {
                    "type": "Identifier",
                    "start": 1147,
                    "end": 1151,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1151,
                    "end": 1154,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1152,
                        "end": 1153,
                        "name": {
                          "type": "Identifier",
                          "start": 1152,
                          "end": 1153,
                          "name": "U",
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
                      "start": 1155,
                      "end": 1179,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1157,
                        "end": 1179,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1159,
                          "end": 1179,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1160,
                              "end": 1164,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1161,
                                "end": 1164,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1163,
                                  "end": 1164,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1163,
                                    "end": 1164,
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
                            "start": 1166,
                            "end": 1179,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1169,
                              "end": 1179,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1169,
                                "end": 1176,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1176,
                                "end": 1179,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1177,
                                    "end": 1178,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1177,
                                      "end": 1178,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1215,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1187,
                        "end": 1215,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1189,
                          "end": 1215,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1190,
                              "end": 1200,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1195,
                                "end": 1200,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1197,
                                  "end": 1200
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1202,
                            "end": 1215,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1205,
                              "end": 1215,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1205,
                                "end": 1212,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1212,
                                "end": 1215,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1213,
                                    "end": 1214,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1213,
                                      "end": 1214,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1216,
                    "end": 1228,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1218,
                      "end": 1228,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1218,
                        "end": 1225,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1225,
                        "end": 1228,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1226,
                            "end": 1227,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1226,
                              "end": 1227,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1241,
            "end": 1299,
            "id": {
              "type": "Identifier",
              "start": 1258,
              "end": 1270,
              "name": "testFunction",
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
                "start": 1271,
                "end": 1280,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1272,
                  "end": 1280,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1274,
                    "end": 1280
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
              "start": 1281,
              "end": 1298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1283,
                "end": 1298,
                "typeName": {
                  "type": "Identifier",
                  "start": 1283,
                  "end": 1290,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1290,
                  "end": 1298,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1291,
                      "end": 1297
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1304,
            "end": 1362,
            "id": {
              "type": "Identifier",
              "start": 1321,
              "end": 1333,
              "name": "testFunction",
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
                "start": 1334,
                "end": 1343,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1335,
                  "end": 1343,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1337,
                    "end": 1343
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
              "start": 1344,
              "end": 1361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1346,
                "end": 1361,
                "typeName": {
                  "type": "Identifier",
                  "start": 1346,
                  "end": 1353,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1353,
                  "end": 1361,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1354,
                      "end": 1360
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1368,
            "end": 1400,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1372,
                "end": 1399,
                "id": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1399,
                  "name": "numPromise",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1382,
                    "end": 1399,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1384,
                      "end": 1399,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1384,
                        "end": 1391,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1391,
                        "end": 1399,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1392,
                            "end": 1398
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
            "start": 1405,
            "end": 1452,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1409,
                "end": 1451,
                "id": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1419,
                  "name": "newPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1422,
                  "end": 1451,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1422,
                    "end": 1437,
                    "object": {
                      "type": "Identifier",
                      "start": 1422,
                      "end": 1432,
                      "name": "numPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1433,
                      "end": 1437,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1438,
                      "end": 1450,
                      "name": "testFunction",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1496,
      "end": 2027,
      "id": {
        "type": "Identifier",
        "start": 1503,
        "end": 1505,
        "name": "m5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1506,
        "end": 2027,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 1512,
            "end": 1808,
            "id": {
              "type": "Identifier",
              "start": 1522,
              "end": 1529,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1529,
              "end": 1532,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1530,
                  "end": 1531,
                  "name": {
                    "type": "Identifier",
                    "start": 1530,
                    "end": 1531,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 1533,
              "end": 1808,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1543,
                  "end": 1589,
                  "key": {
                    "type": "Identifier",
                    "start": 1543,
                    "end": 1547,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1547,
                    "end": 1550,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1548,
                        "end": 1549,
                        "name": {
                          "type": "Identifier",
                          "start": 1548,
                          "end": 1549,
                          "name": "U",
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
                      "start": 1551,
                      "end": 1575,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1553,
                        "end": 1575,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1555,
                          "end": 1575,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1556,
                              "end": 1560,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1557,
                                "end": 1560,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1559,
                                  "end": 1560,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1559,
                                    "end": 1560,
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
                            "start": 1562,
                            "end": 1575,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1565,
                              "end": 1575,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1565,
                                "end": 1572,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1572,
                                "end": 1575,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1573,
                                    "end": 1574,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1573,
                                      "end": 1574,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1576,
                    "end": 1588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1578,
                      "end": 1588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1578,
                        "end": 1585,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1585,
                        "end": 1588,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1586,
                            "end": 1587,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1586,
                              "end": 1587,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1598,
                  "end": 1680,
                  "key": {
                    "type": "Identifier",
                    "start": 1598,
                    "end": 1602,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1602,
                    "end": 1605,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1603,
                        "end": 1604,
                        "name": {
                          "type": "Identifier",
                          "start": 1603,
                          "end": 1604,
                          "name": "U",
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
                      "start": 1606,
                      "end": 1630,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1608,
                        "end": 1630,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1610,
                          "end": 1630,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1611,
                              "end": 1615,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1612,
                                "end": 1615,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1614,
                                  "end": 1615,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1614,
                                    "end": 1615,
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
                            "start": 1617,
                            "end": 1630,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1620,
                              "end": 1630,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1620,
                                "end": 1627,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1627,
                                "end": 1630,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1628,
                                    "end": 1629,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1628,
                                      "end": 1629,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1632,
                      "end": 1666,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1638,
                        "end": 1666,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1640,
                          "end": 1666,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1641,
                              "end": 1651,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1646,
                                "end": 1651,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1648,
                                  "end": 1651
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1653,
                            "end": 1666,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1656,
                              "end": 1666,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1656,
                                "end": 1663,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1663,
                                "end": 1666,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1664,
                                    "end": 1665,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1664,
                                      "end": 1665,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1667,
                    "end": 1679,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1669,
                      "end": 1679,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1669,
                        "end": 1676,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1676,
                        "end": 1679,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1677,
                            "end": 1678,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1677,
                              "end": 1678,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1689,
                  "end": 1802,
                  "key": {
                    "type": "Identifier",
                    "start": 1689,
                    "end": 1693,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1693,
                    "end": 1696,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1694,
                        "end": 1695,
                        "name": {
                          "type": "Identifier",
                          "start": 1694,
                          "end": 1695,
                          "name": "U",
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
                      "start": 1697,
                      "end": 1721,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1699,
                        "end": 1721,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1701,
                          "end": 1721,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1702,
                              "end": 1706,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1703,
                                "end": 1706,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1705,
                                  "end": 1706,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1705,
                                    "end": 1706,
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
                            "start": 1708,
                            "end": 1721,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1711,
                              "end": 1721,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1711,
                                "end": 1718,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1718,
                                "end": 1721,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1719,
                                    "end": 1720,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1719,
                                      "end": 1720,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1723,
                      "end": 1748,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1729,
                        "end": 1748,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1731,
                          "end": 1748,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1732,
                              "end": 1742,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1737,
                                "end": 1742,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1739,
                                  "end": 1742
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1744,
                            "end": 1748,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1747,
                              "end": 1748,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1747,
                                "end": 1748,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 1750,
                      "end": 1788,
                      "name": "progress",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1759,
                        "end": 1788,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1761,
                          "end": 1788,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1762,
                              "end": 1779,
                              "name": "preservation",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1774,
                                "end": 1779,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1776,
                                  "end": 1779
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1781,
                            "end": 1788,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1784,
                              "end": 1788
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1789,
                    "end": 1801,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1791,
                      "end": 1801,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1791,
                        "end": 1798,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1798,
                        "end": 1801,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1799,
                            "end": 1800,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1799,
                              "end": 1800,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1814,
            "end": 1872,
            "id": {
              "type": "Identifier",
              "start": 1831,
              "end": 1843,
              "name": "testFunction",
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
                "start": 1844,
                "end": 1853,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1845,
                  "end": 1853,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1847,
                    "end": 1853
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
              "start": 1854,
              "end": 1871,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1856,
                "end": 1871,
                "typeName": {
                  "type": "Identifier",
                  "start": 1856,
                  "end": 1863,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1863,
                  "end": 1871,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1864,
                      "end": 1870
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1877,
            "end": 1935,
            "id": {
              "type": "Identifier",
              "start": 1894,
              "end": 1906,
              "name": "testFunction",
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
                "start": 1907,
                "end": 1916,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1908,
                  "end": 1916,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1910,
                    "end": 1916
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
              "start": 1917,
              "end": 1934,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1919,
                "end": 1934,
                "typeName": {
                  "type": "Identifier",
                  "start": 1919,
                  "end": 1926,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1926,
                  "end": 1934,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1927,
                      "end": 1933
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1941,
            "end": 1973,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1945,
                "end": 1972,
                "id": {
                  "type": "Identifier",
                  "start": 1945,
                  "end": 1972,
                  "name": "numPromise",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1955,
                    "end": 1972,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1957,
                      "end": 1972,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1957,
                        "end": 1964,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1964,
                        "end": 1972,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1965,
                            "end": 1971
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
            "start": 1978,
            "end": 2025,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1982,
                "end": 2024,
                "id": {
                  "type": "Identifier",
                  "start": 1982,
                  "end": 1992,
                  "name": "newPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1995,
                  "end": 2024,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1995,
                    "end": 2010,
                    "object": {
                      "type": "Identifier",
                      "start": 1995,
                      "end": 2005,
                      "name": "numPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2006,
                      "end": 2010,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2011,
                      "end": 2023,
                      "name": "testFunction",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2069,
      "end": 2543,
      "id": {
        "type": "Identifier",
        "start": 2076,
        "end": 2078,
        "name": "m6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2079,
        "end": 2543,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 2085,
            "end": 2259,
            "id": {
              "type": "Identifier",
              "start": 2095,
              "end": 2102,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2102,
              "end": 2105,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2103,
                  "end": 2104,
                  "name": {
                    "type": "Identifier",
                    "start": 2103,
                    "end": 2104,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 2106,
              "end": 2259,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 2116,
                  "end": 2162,
                  "key": {
                    "type": "Identifier",
                    "start": 2116,
                    "end": 2120,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2120,
                    "end": 2123,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2121,
                        "end": 2122,
                        "name": {
                          "type": "Identifier",
                          "start": 2121,
                          "end": 2122,
                          "name": "U",
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
                      "start": 2124,
                      "end": 2148,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2126,
                        "end": 2148,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2128,
                          "end": 2148,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2129,
                              "end": 2133,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2130,
                                "end": 2133,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2132,
                                  "end": 2133,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2132,
                                    "end": 2133,
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
                            "start": 2135,
                            "end": 2148,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2138,
                              "end": 2148,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2138,
                                "end": 2145,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2145,
                                "end": 2148,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2146,
                                    "end": 2147,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2146,
                                      "end": 2147,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2149,
                    "end": 2161,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2151,
                      "end": 2161,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2151,
                        "end": 2158,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2158,
                        "end": 2161,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2159,
                            "end": 2160,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2159,
                              "end": 2160,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2171,
                  "end": 2253,
                  "key": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2175,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2175,
                    "end": 2178,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2176,
                        "end": 2177,
                        "name": {
                          "type": "Identifier",
                          "start": 2176,
                          "end": 2177,
                          "name": "U",
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
                      "start": 2179,
                      "end": 2203,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2181,
                        "end": 2203,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2183,
                          "end": 2203,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2184,
                              "end": 2188,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2185,
                                "end": 2188,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2187,
                                  "end": 2188,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2187,
                                    "end": 2188,
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
                            "start": 2190,
                            "end": 2203,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2193,
                              "end": 2203,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2193,
                                "end": 2200,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2200,
                                "end": 2203,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2201,
                                    "end": 2202,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2201,
                                      "end": 2202,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2205,
                      "end": 2239,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2211,
                        "end": 2239,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2213,
                          "end": 2239,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2214,
                              "end": 2224,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2219,
                                "end": 2224,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2221,
                                  "end": 2224
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2226,
                            "end": 2239,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2229,
                              "end": 2239,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2229,
                                "end": 2236,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2236,
                                "end": 2239,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2237,
                                    "end": 2238,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2237,
                                      "end": 2238,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2240,
                    "end": 2252,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2242,
                      "end": 2252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2242,
                        "end": 2249,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2249,
                        "end": 2252,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2250,
                            "end": 2251,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2250,
                              "end": 2251,
                              "name": "U",
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 2265,
            "end": 2323,
            "id": {
              "type": "Identifier",
              "start": 2282,
              "end": 2294,
              "name": "testFunction",
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
                "start": 2295,
                "end": 2304,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2296,
                  "end": 2304,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2298,
                    "end": 2304
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
              "start": 2305,
              "end": 2322,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2307,
                "end": 2322,
                "typeName": {
                  "type": "Identifier",
                  "start": 2307,
                  "end": 2314,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2314,
                  "end": 2322,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2315,
                      "end": 2321
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 2328,
            "end": 2386,
            "id": {
              "type": "Identifier",
              "start": 2345,
              "end": 2357,
              "name": "testFunction",
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
                "start": 2358,
                "end": 2367,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2359,
                  "end": 2367,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2361,
                    "end": 2367
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
              "start": 2368,
              "end": 2385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2370,
                "end": 2385,
                "typeName": {
                  "type": "Identifier",
                  "start": 2370,
                  "end": 2377,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2377,
                  "end": 2385,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2378,
                      "end": 2384
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 2391,
            "end": 2451,
            "id": {
              "type": "Identifier",
              "start": 2408,
              "end": 2420,
              "name": "testFunction",
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
                "start": 2421,
                "end": 2431,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2422,
                  "end": 2431,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2424,
                    "end": 2431
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
              "start": 2432,
              "end": 2450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2434,
                "end": 2450,
                "typeName": {
                  "type": "Identifier",
                  "start": 2434,
                  "end": 2441,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2441,
                  "end": 2450,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2442,
                      "end": 2449
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 2457,
            "end": 2489,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2461,
                "end": 2488,
                "id": {
                  "type": "Identifier",
                  "start": 2461,
                  "end": 2488,
                  "name": "numPromise",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2471,
                    "end": 2488,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2473,
                      "end": 2488,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2473,
                        "end": 2480,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2480,
                        "end": 2488,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2481,
                            "end": 2487
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
            "start": 2494,
            "end": 2541,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2498,
                "end": 2540,
                "id": {
                  "type": "Identifier",
                  "start": 2498,
                  "end": 2508,
                  "name": "newPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2511,
                  "end": 2540,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2511,
                    "end": 2526,
                    "object": {
                      "type": "Identifier",
                      "start": 2511,
                      "end": 2521,
                      "name": "numPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2522,
                      "end": 2526,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2527,
                      "end": 2539,
                      "name": "testFunction",
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
