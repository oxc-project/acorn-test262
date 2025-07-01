__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 33
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 35
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 34,
                  "end": 35
                }
              ],
              "start": 33,
              "end": 36
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 51
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 53
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 52,
                        "end": 53
                      }
                    ],
                    "start": 51,
                    "end": 54
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 63,
                                    "end": 64
                                  },
                                  "typeArguments": null,
                                  "start": 63,
                                  "end": 64
                                },
                                "start": 61,
                                "end": 64
                              },
                              "start": 60,
                              "end": 64
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 69,
                                "end": 76
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 77,
                                      "end": 78
                                    },
                                    "typeArguments": null,
                                    "start": 77,
                                    "end": 78
                                  }
                                ],
                                "start": 76,
                                "end": 79
                              },
                              "start": 69,
                              "end": 79
                            },
                            "start": 66,
                            "end": 79
                          },
                          "start": 59,
                          "end": 79
                        },
                        "start": 57,
                        "end": 79
                      },
                      "start": 55,
                      "end": 79
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 89
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 90,
                              "end": 91
                            },
                            "typeArguments": null,
                            "start": 90,
                            "end": 91
                          }
                        ],
                        "start": 89,
                        "end": 92
                      },
                      "start": 82,
                      "end": 92
                    },
                    "start": 80,
                    "end": 92
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 47,
                  "end": 93
                }
              ],
              "start": 37,
              "end": 99
            },
            "declare": false,
            "start": 16,
            "end": 99
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 134
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 138,
                    "end": 144
                  },
                  "start": 136,
                  "end": 144
                },
                "start": 135,
                "end": 144
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 154
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 155,
                      "end": 161
                    }
                  ],
                  "start": 154,
                  "end": 162
                },
                "start": 147,
                "end": 162
              },
              "start": 145,
              "end": 162
            },
            "body": null,
            "expression": false,
            "start": 105,
            "end": 163
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 192
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 193,
                            "end": 199
                          }
                        ],
                        "start": 192,
                        "end": 200
                      },
                      "start": 185,
                      "end": 200
                    },
                    "start": 183,
                    "end": 200
                  },
                  "start": 173,
                  "end": 200
                },
                "init": null,
                "definite": false,
                "start": 173,
                "end": 200
              }
            ],
            "declare": false,
            "start": 169,
            "end": 201
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 220
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 233
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 238
                    },
                    "optional": false,
                    "computed": false,
                    "start": 223,
                    "end": 238
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 251
                    }
                  ],
                  "optional": false,
                  "start": 223,
                  "end": 252
                },
                "definite": false,
                "start": 210,
                "end": 252
              }
            ],
            "declare": false,
            "start": 206,
            "end": 253
          }
        ],
        "start": 10,
        "end": 255
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 304,
        "end": 306
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 330
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 332
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 331,
                  "end": 332
                }
              ],
              "start": 330,
              "end": 333
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 348
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 349,
                          "end": 350
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 349,
                        "end": 350
                      }
                    ],
                    "start": 348,
                    "end": 351
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 360,
                                    "end": 361
                                  },
                                  "typeArguments": null,
                                  "start": 360,
                                  "end": 361
                                },
                                "start": 358,
                                "end": 361
                              },
                              "start": 357,
                              "end": 361
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 366,
                                "end": 373
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 374,
                                      "end": 375
                                    },
                                    "typeArguments": null,
                                    "start": 374,
                                    "end": 375
                                  }
                                ],
                                "start": 373,
                                "end": 376
                              },
                              "start": 366,
                              "end": 376
                            },
                            "start": 363,
                            "end": 376
                          },
                          "start": 356,
                          "end": 376
                        },
                        "start": 354,
                        "end": 376
                      },
                      "start": 352,
                      "end": 376
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 386
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 387,
                              "end": 388
                            },
                            "typeArguments": null,
                            "start": 387,
                            "end": 388
                          }
                        ],
                        "start": 386,
                        "end": 389
                      },
                      "start": 379,
                      "end": 389
                    },
                    "start": 377,
                    "end": 389
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 344,
                  "end": 390
                }
              ],
              "start": 334,
              "end": 396
            },
            "declare": false,
            "start": 313,
            "end": 396
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 431
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 435,
                    "end": 441
                  },
                  "start": 433,
                  "end": 441
                },
                "start": 432,
                "end": 441
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 451
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 452,
                      "end": 458
                    }
                  ],
                  "start": 451,
                  "end": 459
                },
                "start": 444,
                "end": 459
              },
              "start": 442,
              "end": 459
            },
            "body": null,
            "expression": false,
            "start": 402,
            "end": 460
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 494
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 498,
                    "end": 504
                  },
                  "start": 496,
                  "end": 504
                },
                "start": 495,
                "end": 504
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 514
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 515,
                      "end": 521
                    }
                  ],
                  "start": 514,
                  "end": 522
                },
                "start": 507,
                "end": 522
              },
              "start": 505,
              "end": 522
            },
            "body": null,
            "expression": false,
            "start": 465,
            "end": 523
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 545,
                        "end": 552
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 553,
                            "end": 559
                          }
                        ],
                        "start": 552,
                        "end": 560
                      },
                      "start": 545,
                      "end": 560
                    },
                    "start": 543,
                    "end": 560
                  },
                  "start": 533,
                  "end": 560
                },
                "init": null,
                "definite": false,
                "start": 533,
                "end": 560
              }
            ],
            "declare": false,
            "start": 529,
            "end": 561
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 580
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 583,
                      "end": 593
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 598
                    },
                    "optional": false,
                    "computed": false,
                    "start": 583,
                    "end": 598
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 599,
                      "end": 611
                    }
                  ],
                  "optional": false,
                  "start": 583,
                  "end": 612
                },
                "definite": false,
                "start": 570,
                "end": 612
              }
            ],
            "declare": false,
            "start": 566,
            "end": 613
          }
        ],
        "start": 307,
        "end": 615
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 297,
      "end": 615
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 666
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 690
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 691,
                    "end": 692
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 691,
                  "end": 692
                }
              ],
              "start": 690,
              "end": 693
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 708
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 709,
                          "end": 710
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 709,
                        "end": 710
                      }
                    ],
                    "start": 708,
                    "end": 711
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 720,
                                    "end": 721
                                  },
                                  "typeArguments": null,
                                  "start": 720,
                                  "end": 721
                                },
                                "start": 718,
                                "end": 721
                              },
                              "start": 717,
                              "end": 721
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 726,
                                "end": 733
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 734,
                                      "end": 735
                                    },
                                    "typeArguments": null,
                                    "start": 734,
                                    "end": 735
                                  }
                                ],
                                "start": 733,
                                "end": 736
                              },
                              "start": 726,
                              "end": 736
                            },
                            "start": 723,
                            "end": 736
                          },
                          "start": 716,
                          "end": 736
                        },
                        "start": 714,
                        "end": 736
                      },
                      "start": 712,
                      "end": 736
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 746
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 748
                            },
                            "typeArguments": null,
                            "start": 747,
                            "end": 748
                          }
                        ],
                        "start": 746,
                        "end": 749
                      },
                      "start": 739,
                      "end": 749
                    },
                    "start": 737,
                    "end": 749
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 704,
                  "end": 750
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 763
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
                          "end": 765
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 764,
                        "end": 765
                      }
                    ],
                    "start": 763,
                    "end": 766
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 775,
                                    "end": 776
                                  },
                                  "typeArguments": null,
                                  "start": 775,
                                  "end": 776
                                },
                                "start": 773,
                                "end": 776
                              },
                              "start": 772,
                              "end": 776
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 781,
                                "end": 788
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 789,
                                      "end": 790
                                    },
                                    "typeArguments": null,
                                    "start": 789,
                                    "end": 790
                                  }
                                ],
                                "start": 788,
                                "end": 791
                              },
                              "start": 781,
                              "end": 791
                            },
                            "start": 778,
                            "end": 791
                          },
                          "start": 771,
                          "end": 791
                        },
                        "start": 769,
                        "end": 791
                      },
                      "start": 767,
                      "end": 791
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 809,
                                  "end": 812
                                },
                                "start": 807,
                                "end": 812
                              },
                              "start": 802,
                              "end": 812
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 817,
                                "end": 824
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 825,
                                      "end": 826
                                    },
                                    "typeArguments": null,
                                    "start": 825,
                                    "end": 826
                                  }
                                ],
                                "start": 824,
                                "end": 827
                              },
                              "start": 817,
                              "end": 827
                            },
                            "start": 814,
                            "end": 827
                          },
                          "start": 801,
                          "end": 827
                        },
                        "start": 799,
                        "end": 827
                      },
                      "start": 793,
                      "end": 827
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 837
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 838,
                              "end": 839
                            },
                            "typeArguments": null,
                            "start": 838,
                            "end": 839
                          }
                        ],
                        "start": 837,
                        "end": 840
                      },
                      "start": 830,
                      "end": 840
                    },
                    "start": 828,
                    "end": 840
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 759,
                  "end": 841
                }
              ],
              "start": 694,
              "end": 847
            },
            "declare": false,
            "start": 673,
            "end": 847
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 882
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 886,
                    "end": 892
                  },
                  "start": 884,
                  "end": 892
                },
                "start": 883,
                "end": 892
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 895,
                  "end": 902
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 903,
                      "end": 909
                    }
                  ],
                  "start": 902,
                  "end": 910
                },
                "start": 895,
                "end": 910
              },
              "start": 893,
              "end": 910
            },
            "body": null,
            "expression": false,
            "start": 853,
            "end": 911
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 940
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 941,
                            "end": 947
                          }
                        ],
                        "start": 940,
                        "end": 948
                      },
                      "start": 933,
                      "end": 948
                    },
                    "start": 931,
                    "end": 948
                  },
                  "start": 921,
                  "end": 948
                },
                "init": null,
                "definite": false,
                "start": 921,
                "end": 948
              }
            ],
            "declare": false,
            "start": 917,
            "end": 949
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 968
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 971,
                      "end": 981
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 982,
                      "end": 986
                    },
                    "optional": false,
                    "computed": false,
                    "start": 971,
                    "end": 986
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 987,
                      "end": 999
                    }
                  ],
                  "optional": false,
                  "start": 971,
                  "end": 1000
                },
                "definite": false,
                "start": 958,
                "end": 1000
              }
            ],
            "declare": false,
            "start": 954,
            "end": 1001
          }
        ],
        "start": 667,
        "end": 1003
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 657,
      "end": 1003
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1054
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1071,
              "end": 1078
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1080
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1079,
                  "end": 1080
                }
              ],
              "start": 1078,
              "end": 1081
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1092,
                    "end": 1096
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1097,
                          "end": 1098
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1097,
                        "end": 1098
                      }
                    ],
                    "start": 1096,
                    "end": 1099
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1108,
                                    "end": 1109
                                  },
                                  "typeArguments": null,
                                  "start": 1108,
                                  "end": 1109
                                },
                                "start": 1106,
                                "end": 1109
                              },
                              "start": 1105,
                              "end": 1109
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1114,
                                "end": 1121
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1122,
                                      "end": 1123
                                    },
                                    "typeArguments": null,
                                    "start": 1122,
                                    "end": 1123
                                  }
                                ],
                                "start": 1121,
                                "end": 1124
                              },
                              "start": 1114,
                              "end": 1124
                            },
                            "start": 1111,
                            "end": 1124
                          },
                          "start": 1104,
                          "end": 1124
                        },
                        "start": 1102,
                        "end": 1124
                      },
                      "start": 1100,
                      "end": 1124
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1127,
                        "end": 1134
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1135,
                              "end": 1136
                            },
                            "typeArguments": null,
                            "start": 1135,
                            "end": 1136
                          }
                        ],
                        "start": 1134,
                        "end": 1137
                      },
                      "start": 1127,
                      "end": 1137
                    },
                    "start": 1125,
                    "end": 1137
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1092,
                  "end": 1138
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1147,
                    "end": 1151
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1152,
                          "end": 1153
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1152,
                        "end": 1153
                      }
                    ],
                    "start": 1151,
                    "end": 1154
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1163,
                                    "end": 1164
                                  },
                                  "typeArguments": null,
                                  "start": 1163,
                                  "end": 1164
                                },
                                "start": 1161,
                                "end": 1164
                              },
                              "start": 1160,
                              "end": 1164
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1169,
                                "end": 1176
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1177,
                                      "end": 1178
                                    },
                                    "typeArguments": null,
                                    "start": 1177,
                                    "end": 1178
                                  }
                                ],
                                "start": 1176,
                                "end": 1179
                              },
                              "start": 1169,
                              "end": 1179
                            },
                            "start": 1166,
                            "end": 1179
                          },
                          "start": 1159,
                          "end": 1179
                        },
                        "start": 1157,
                        "end": 1179
                      },
                      "start": 1155,
                      "end": 1179
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1197,
                                  "end": 1200
                                },
                                "start": 1195,
                                "end": 1200
                              },
                              "start": 1190,
                              "end": 1200
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1205,
                                "end": 1212
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1213,
                                      "end": 1214
                                    },
                                    "typeArguments": null,
                                    "start": 1213,
                                    "end": 1214
                                  }
                                ],
                                "start": 1212,
                                "end": 1215
                              },
                              "start": 1205,
                              "end": 1215
                            },
                            "start": 1202,
                            "end": 1215
                          },
                          "start": 1189,
                          "end": 1215
                        },
                        "start": 1187,
                        "end": 1215
                      },
                      "start": 1181,
                      "end": 1215
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1218,
                        "end": 1225
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1226,
                              "end": 1227
                            },
                            "typeArguments": null,
                            "start": 1226,
                            "end": 1227
                          }
                        ],
                        "start": 1225,
                        "end": 1228
                      },
                      "start": 1218,
                      "end": 1228
                    },
                    "start": 1216,
                    "end": 1228
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1147,
                  "end": 1229
                }
              ],
              "start": 1082,
              "end": 1235
            },
            "declare": false,
            "start": 1061,
            "end": 1235
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1270
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1274,
                    "end": 1280
                  },
                  "start": 1272,
                  "end": 1280
                },
                "start": 1271,
                "end": 1280
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1283,
                  "end": 1290
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1291,
                      "end": 1297
                    }
                  ],
                  "start": 1290,
                  "end": 1298
                },
                "start": 1283,
                "end": 1298
              },
              "start": 1281,
              "end": 1298
            },
            "body": null,
            "expression": false,
            "start": 1241,
            "end": 1299
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1333
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1337,
                    "end": 1343
                  },
                  "start": 1335,
                  "end": 1343
                },
                "start": 1334,
                "end": 1343
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1346,
                  "end": 1353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1354,
                      "end": 1360
                    }
                  ],
                  "start": 1353,
                  "end": 1361
                },
                "start": 1346,
                "end": 1361
              },
              "start": 1344,
              "end": 1361
            },
            "body": null,
            "expression": false,
            "start": 1304,
            "end": 1362
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1384,
                        "end": 1391
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1392,
                            "end": 1398
                          }
                        ],
                        "start": 1391,
                        "end": 1399
                      },
                      "start": 1384,
                      "end": 1399
                    },
                    "start": 1382,
                    "end": 1399
                  },
                  "start": 1372,
                  "end": 1399
                },
                "init": null,
                "definite": false,
                "start": 1372,
                "end": 1399
              }
            ],
            "declare": false,
            "start": 1368,
            "end": 1400
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1419
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1422,
                      "end": 1432
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1433,
                      "end": 1437
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1422,
                    "end": 1437
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1438,
                      "end": 1450
                    }
                  ],
                  "optional": false,
                  "start": 1422,
                  "end": 1451
                },
                "definite": false,
                "start": 1409,
                "end": 1451
              }
            ],
            "declare": false,
            "start": 1405,
            "end": 1452
          }
        ],
        "start": 1055,
        "end": 1454
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1045,
      "end": 1454
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1503,
        "end": 1505
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1522,
              "end": 1529
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1530,
                    "end": 1531
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1530,
                  "end": 1531
                }
              ],
              "start": 1529,
              "end": 1532
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1543,
                    "end": 1547
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1548,
                          "end": 1549
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1548,
                        "end": 1549
                      }
                    ],
                    "start": 1547,
                    "end": 1550
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1559,
                                    "end": 1560
                                  },
                                  "typeArguments": null,
                                  "start": 1559,
                                  "end": 1560
                                },
                                "start": 1557,
                                "end": 1560
                              },
                              "start": 1556,
                              "end": 1560
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1565,
                                "end": 1572
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1573,
                                      "end": 1574
                                    },
                                    "typeArguments": null,
                                    "start": 1573,
                                    "end": 1574
                                  }
                                ],
                                "start": 1572,
                                "end": 1575
                              },
                              "start": 1565,
                              "end": 1575
                            },
                            "start": 1562,
                            "end": 1575
                          },
                          "start": 1555,
                          "end": 1575
                        },
                        "start": 1553,
                        "end": 1575
                      },
                      "start": 1551,
                      "end": 1575
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1578,
                        "end": 1585
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1586,
                              "end": 1587
                            },
                            "typeArguments": null,
                            "start": 1586,
                            "end": 1587
                          }
                        ],
                        "start": 1585,
                        "end": 1588
                      },
                      "start": 1578,
                      "end": 1588
                    },
                    "start": 1576,
                    "end": 1588
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1543,
                  "end": 1589
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1598,
                    "end": 1602
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1603,
                          "end": 1604
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1603,
                        "end": 1604
                      }
                    ],
                    "start": 1602,
                    "end": 1605
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1614,
                                    "end": 1615
                                  },
                                  "typeArguments": null,
                                  "start": 1614,
                                  "end": 1615
                                },
                                "start": 1612,
                                "end": 1615
                              },
                              "start": 1611,
                              "end": 1615
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1620,
                                "end": 1627
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1628,
                                      "end": 1629
                                    },
                                    "typeArguments": null,
                                    "start": 1628,
                                    "end": 1629
                                  }
                                ],
                                "start": 1627,
                                "end": 1630
                              },
                              "start": 1620,
                              "end": 1630
                            },
                            "start": 1617,
                            "end": 1630
                          },
                          "start": 1610,
                          "end": 1630
                        },
                        "start": 1608,
                        "end": 1630
                      },
                      "start": 1606,
                      "end": 1630
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1648,
                                  "end": 1651
                                },
                                "start": 1646,
                                "end": 1651
                              },
                              "start": 1641,
                              "end": 1651
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1656,
                                "end": 1663
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1664,
                                      "end": 1665
                                    },
                                    "typeArguments": null,
                                    "start": 1664,
                                    "end": 1665
                                  }
                                ],
                                "start": 1663,
                                "end": 1666
                              },
                              "start": 1656,
                              "end": 1666
                            },
                            "start": 1653,
                            "end": 1666
                          },
                          "start": 1640,
                          "end": 1666
                        },
                        "start": 1638,
                        "end": 1666
                      },
                      "start": 1632,
                      "end": 1666
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1669,
                        "end": 1676
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1677,
                              "end": 1678
                            },
                            "typeArguments": null,
                            "start": 1677,
                            "end": 1678
                          }
                        ],
                        "start": 1676,
                        "end": 1679
                      },
                      "start": 1669,
                      "end": 1679
                    },
                    "start": 1667,
                    "end": 1679
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1598,
                  "end": 1680
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1689,
                    "end": 1693
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1694,
                          "end": 1695
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1694,
                        "end": 1695
                      }
                    ],
                    "start": 1693,
                    "end": 1696
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1705,
                                    "end": 1706
                                  },
                                  "typeArguments": null,
                                  "start": 1705,
                                  "end": 1706
                                },
                                "start": 1703,
                                "end": 1706
                              },
                              "start": 1702,
                              "end": 1706
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1711,
                                "end": 1718
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1719,
                                      "end": 1720
                                    },
                                    "typeArguments": null,
                                    "start": 1719,
                                    "end": 1720
                                  }
                                ],
                                "start": 1718,
                                "end": 1721
                              },
                              "start": 1711,
                              "end": 1721
                            },
                            "start": 1708,
                            "end": 1721
                          },
                          "start": 1701,
                          "end": 1721
                        },
                        "start": 1699,
                        "end": 1721
                      },
                      "start": 1697,
                      "end": 1721
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1739,
                                  "end": 1742
                                },
                                "start": 1737,
                                "end": 1742
                              },
                              "start": 1732,
                              "end": 1742
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1747,
                                "end": 1748
                              },
                              "typeArguments": null,
                              "start": 1747,
                              "end": 1748
                            },
                            "start": 1744,
                            "end": 1748
                          },
                          "start": 1731,
                          "end": 1748
                        },
                        "start": 1729,
                        "end": 1748
                      },
                      "start": 1723,
                      "end": 1748
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "progress",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "preservation",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1776,
                                  "end": 1779
                                },
                                "start": 1774,
                                "end": 1779
                              },
                              "start": 1762,
                              "end": 1779
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1784,
                              "end": 1788
                            },
                            "start": 1781,
                            "end": 1788
                          },
                          "start": 1761,
                          "end": 1788
                        },
                        "start": 1759,
                        "end": 1788
                      },
                      "start": 1750,
                      "end": 1788
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1791,
                        "end": 1798
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1799,
                              "end": 1800
                            },
                            "typeArguments": null,
                            "start": 1799,
                            "end": 1800
                          }
                        ],
                        "start": 1798,
                        "end": 1801
                      },
                      "start": 1791,
                      "end": 1801
                    },
                    "start": 1789,
                    "end": 1801
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1689,
                  "end": 1802
                }
              ],
              "start": 1533,
              "end": 1808
            },
            "declare": false,
            "start": 1512,
            "end": 1808
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1843
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1847,
                    "end": 1853
                  },
                  "start": 1845,
                  "end": 1853
                },
                "start": 1844,
                "end": 1853
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1856,
                  "end": 1863
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1864,
                      "end": 1870
                    }
                  ],
                  "start": 1863,
                  "end": 1871
                },
                "start": 1856,
                "end": 1871
              },
              "start": 1854,
              "end": 1871
            },
            "body": null,
            "expression": false,
            "start": 1814,
            "end": 1872
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1894,
              "end": 1906
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1910,
                    "end": 1916
                  },
                  "start": 1908,
                  "end": 1916
                },
                "start": 1907,
                "end": 1916
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1919,
                  "end": 1926
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1927,
                      "end": 1933
                    }
                  ],
                  "start": 1926,
                  "end": 1934
                },
                "start": 1919,
                "end": 1934
              },
              "start": 1917,
              "end": 1934
            },
            "body": null,
            "expression": false,
            "start": 1877,
            "end": 1935
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1957,
                        "end": 1964
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1965,
                            "end": 1971
                          }
                        ],
                        "start": 1964,
                        "end": 1972
                      },
                      "start": 1957,
                      "end": 1972
                    },
                    "start": 1955,
                    "end": 1972
                  },
                  "start": 1945,
                  "end": 1972
                },
                "init": null,
                "definite": false,
                "start": 1945,
                "end": 1972
              }
            ],
            "declare": false,
            "start": 1941,
            "end": 1973
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1982,
                  "end": 1992
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1995,
                      "end": 2005
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2006,
                      "end": 2010
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1995,
                    "end": 2010
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2011,
                      "end": 2023
                    }
                  ],
                  "optional": false,
                  "start": 1995,
                  "end": 2024
                },
                "definite": false,
                "start": 1982,
                "end": 2024
              }
            ],
            "declare": false,
            "start": 1978,
            "end": 2025
          }
        ],
        "start": 1506,
        "end": 2027
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1496,
      "end": 2027
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2076,
        "end": 2078
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 2095,
              "end": 2102
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2103,
                    "end": 2104
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2103,
                  "end": 2104
                }
              ],
              "start": 2102,
              "end": 2105
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2116,
                    "end": 2120
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2121,
                          "end": 2122
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2121,
                        "end": 2122
                      }
                    ],
                    "start": 2120,
                    "end": 2123
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2132,
                                    "end": 2133
                                  },
                                  "typeArguments": null,
                                  "start": 2132,
                                  "end": 2133
                                },
                                "start": 2130,
                                "end": 2133
                              },
                              "start": 2129,
                              "end": 2133
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2138,
                                "end": 2145
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2146,
                                      "end": 2147
                                    },
                                    "typeArguments": null,
                                    "start": 2146,
                                    "end": 2147
                                  }
                                ],
                                "start": 2145,
                                "end": 2148
                              },
                              "start": 2138,
                              "end": 2148
                            },
                            "start": 2135,
                            "end": 2148
                          },
                          "start": 2128,
                          "end": 2148
                        },
                        "start": 2126,
                        "end": 2148
                      },
                      "start": 2124,
                      "end": 2148
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2151,
                        "end": 2158
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2159,
                              "end": 2160
                            },
                            "typeArguments": null,
                            "start": 2159,
                            "end": 2160
                          }
                        ],
                        "start": 2158,
                        "end": 2161
                      },
                      "start": 2151,
                      "end": 2161
                    },
                    "start": 2149,
                    "end": 2161
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2116,
                  "end": 2162
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2171,
                    "end": 2175
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2176,
                          "end": 2177
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2176,
                        "end": 2177
                      }
                    ],
                    "start": 2175,
                    "end": 2178
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2187,
                                    "end": 2188
                                  },
                                  "typeArguments": null,
                                  "start": 2187,
                                  "end": 2188
                                },
                                "start": 2185,
                                "end": 2188
                              },
                              "start": 2184,
                              "end": 2188
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2193,
                                "end": 2200
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2201,
                                      "end": 2202
                                    },
                                    "typeArguments": null,
                                    "start": 2201,
                                    "end": 2202
                                  }
                                ],
                                "start": 2200,
                                "end": 2203
                              },
                              "start": 2193,
                              "end": 2203
                            },
                            "start": 2190,
                            "end": 2203
                          },
                          "start": 2183,
                          "end": 2203
                        },
                        "start": 2181,
                        "end": 2203
                      },
                      "start": 2179,
                      "end": 2203
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2221,
                                  "end": 2224
                                },
                                "start": 2219,
                                "end": 2224
                              },
                              "start": 2214,
                              "end": 2224
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2229,
                                "end": 2236
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2237,
                                      "end": 2238
                                    },
                                    "typeArguments": null,
                                    "start": 2237,
                                    "end": 2238
                                  }
                                ],
                                "start": 2236,
                                "end": 2239
                              },
                              "start": 2229,
                              "end": 2239
                            },
                            "start": 2226,
                            "end": 2239
                          },
                          "start": 2213,
                          "end": 2239
                        },
                        "start": 2211,
                        "end": 2239
                      },
                      "start": 2205,
                      "end": 2239
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2242,
                        "end": 2249
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2250,
                              "end": 2251
                            },
                            "typeArguments": null,
                            "start": 2250,
                            "end": 2251
                          }
                        ],
                        "start": 2249,
                        "end": 2252
                      },
                      "start": 2242,
                      "end": 2252
                    },
                    "start": 2240,
                    "end": 2252
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2171,
                  "end": 2253
                }
              ],
              "start": 2106,
              "end": 2259
            },
            "declare": false,
            "start": 2085,
            "end": 2259
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2282,
              "end": 2294
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2298,
                    "end": 2304
                  },
                  "start": 2296,
                  "end": 2304
                },
                "start": 2295,
                "end": 2304
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2307,
                  "end": 2314
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2315,
                      "end": 2321
                    }
                  ],
                  "start": 2314,
                  "end": 2322
                },
                "start": 2307,
                "end": 2322
              },
              "start": 2305,
              "end": 2322
            },
            "body": null,
            "expression": false,
            "start": 2265,
            "end": 2323
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2357
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2361,
                    "end": 2367
                  },
                  "start": 2359,
                  "end": 2367
                },
                "start": 2358,
                "end": 2367
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2377
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2378,
                      "end": 2384
                    }
                  ],
                  "start": 2377,
                  "end": 2385
                },
                "start": 2370,
                "end": 2385
              },
              "start": 2368,
              "end": 2385
            },
            "body": null,
            "expression": false,
            "start": 2328,
            "end": 2386
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2408,
              "end": 2420
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2424,
                    "end": 2431
                  },
                  "start": 2422,
                  "end": 2431
                },
                "start": 2421,
                "end": 2431
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2434,
                  "end": 2441
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2442,
                      "end": 2449
                    }
                  ],
                  "start": 2441,
                  "end": 2450
                },
                "start": 2434,
                "end": 2450
              },
              "start": 2432,
              "end": 2450
            },
            "body": null,
            "expression": false,
            "start": 2391,
            "end": 2451
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2480
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2481,
                            "end": 2487
                          }
                        ],
                        "start": 2480,
                        "end": 2488
                      },
                      "start": 2473,
                      "end": 2488
                    },
                    "start": 2471,
                    "end": 2488
                  },
                  "start": 2461,
                  "end": 2488
                },
                "init": null,
                "definite": false,
                "start": 2461,
                "end": 2488
              }
            ],
            "declare": false,
            "start": 2457,
            "end": 2489
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2498,
                  "end": 2508
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2511,
                      "end": 2521
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2522,
                      "end": 2526
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2511,
                    "end": 2526
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2527,
                      "end": 2539
                    }
                  ],
                  "optional": false,
                  "start": 2511,
                  "end": 2540
                },
                "definite": false,
                "start": 2498,
                "end": 2540
              }
            ],
            "declare": false,
            "start": 2494,
            "end": 2541
          }
        ],
        "start": 2079,
        "end": 2543
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2069,
      "end": 2543
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2543
}
```
