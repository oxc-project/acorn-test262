__ESTREE_TEST__:AST:
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
        "start": 10,
        "end": 12
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
              "start": 29,
              "end": 36
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
                    "start": 37,
                    "end": 38
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 38
                }
              ],
              "start": 36,
              "end": 39
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
                    "start": 50,
                    "end": 54
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
                          "start": 55,
                          "end": 56
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 55,
                        "end": 56
                      }
                    ],
                    "start": 54,
                    "end": 57
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
                                    "start": 66,
                                    "end": 67
                                  },
                                  "typeArguments": null,
                                  "start": 66,
                                  "end": 67
                                },
                                "start": 64,
                                "end": 67
                              },
                              "start": 63,
                              "end": 67
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
                                "start": 72,
                                "end": 79
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
                                      "start": 80,
                                      "end": 81
                                    },
                                    "typeArguments": null,
                                    "start": 80,
                                    "end": 81
                                  }
                                ],
                                "start": 79,
                                "end": 82
                              },
                              "start": 72,
                              "end": 82
                            },
                            "start": 69,
                            "end": 82
                          },
                          "start": 62,
                          "end": 82
                        },
                        "start": 60,
                        "end": 82
                      },
                      "start": 58,
                      "end": 82
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
                        "start": 85,
                        "end": 92
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
                              "start": 93,
                              "end": 94
                            },
                            "typeArguments": null,
                            "start": 93,
                            "end": 94
                          }
                        ],
                        "start": 92,
                        "end": 95
                      },
                      "start": 85,
                      "end": 95
                    },
                    "start": 83,
                    "end": 95
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 50,
                  "end": 96
                }
              ],
              "start": 40,
              "end": 102
            },
            "declare": false,
            "start": 19,
            "end": 102
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 137
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
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 138,
                "end": 147
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
                  "start": 150,
                  "end": 157
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  ],
                  "start": 157,
                  "end": 165
                },
                "start": 150,
                "end": 165
              },
              "start": 148,
              "end": 165
            },
            "body": null,
            "expression": false,
            "start": 108,
            "end": 166
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
                        "start": 188,
                        "end": 195
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 196,
                            "end": 202
                          }
                        ],
                        "start": 195,
                        "end": 203
                      },
                      "start": 188,
                      "end": 203
                    },
                    "start": 186,
                    "end": 203
                  },
                  "start": 176,
                  "end": 203
                },
                "init": null,
                "definite": false,
                "start": 176,
                "end": 203
              }
            ],
            "declare": false,
            "start": 172,
            "end": 204
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
                  "start": 213,
                  "end": 223
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
                      "start": 226,
                      "end": 236
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 226,
                    "end": 241
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 254
                    }
                  ],
                  "optional": false,
                  "start": 226,
                  "end": 255
                },
                "definite": false,
                "start": 213,
                "end": 255
              }
            ],
            "declare": false,
            "start": 209,
            "end": 256
          }
        ],
        "start": 13,
        "end": 258
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 258
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
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
              "start": 329,
              "end": 336
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
                    "start": 337,
                    "end": 338
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 337,
                  "end": 338
                }
              ],
              "start": 336,
              "end": 339
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
                    "start": 350,
                    "end": 354
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
                          "start": 355,
                          "end": 356
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 355,
                        "end": 356
                      }
                    ],
                    "start": 354,
                    "end": 357
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
                                    "start": 366,
                                    "end": 367
                                  },
                                  "typeArguments": null,
                                  "start": 366,
                                  "end": 367
                                },
                                "start": 364,
                                "end": 367
                              },
                              "start": 363,
                              "end": 367
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
                                "start": 372,
                                "end": 379
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
                                      "start": 380,
                                      "end": 381
                                    },
                                    "typeArguments": null,
                                    "start": 380,
                                    "end": 381
                                  }
                                ],
                                "start": 379,
                                "end": 382
                              },
                              "start": 372,
                              "end": 382
                            },
                            "start": 369,
                            "end": 382
                          },
                          "start": 362,
                          "end": 382
                        },
                        "start": 360,
                        "end": 382
                      },
                      "start": 358,
                      "end": 382
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
                        "start": 385,
                        "end": 392
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
                              "start": 393,
                              "end": 394
                            },
                            "typeArguments": null,
                            "start": 393,
                            "end": 394
                          }
                        ],
                        "start": 392,
                        "end": 395
                      },
                      "start": 385,
                      "end": 395
                    },
                    "start": 383,
                    "end": 395
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 350,
                  "end": 396
                }
              ],
              "start": 340,
              "end": 402
            },
            "declare": false,
            "start": 319,
            "end": 402
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 437
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
                    "start": 441,
                    "end": 447
                  },
                  "start": 439,
                  "end": 447
                },
                "start": 438,
                "end": 447
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
                  "start": 450,
                  "end": 457
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 458,
                      "end": 464
                    }
                  ],
                  "start": 457,
                  "end": 465
                },
                "start": 450,
                "end": 465
              },
              "start": 448,
              "end": 465
            },
            "body": null,
            "expression": false,
            "start": 408,
            "end": 466
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 500
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
                    "start": 504,
                    "end": 510
                  },
                  "start": 502,
                  "end": 510
                },
                "start": 501,
                "end": 510
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
                  "start": 513,
                  "end": 520
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 521,
                      "end": 527
                    }
                  ],
                  "start": 520,
                  "end": 528
                },
                "start": 513,
                "end": 528
              },
              "start": 511,
              "end": 528
            },
            "body": null,
            "expression": false,
            "start": 471,
            "end": 529
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
                        "start": 551,
                        "end": 558
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 559,
                            "end": 565
                          }
                        ],
                        "start": 558,
                        "end": 566
                      },
                      "start": 551,
                      "end": 566
                    },
                    "start": 549,
                    "end": 566
                  },
                  "start": 539,
                  "end": 566
                },
                "init": null,
                "definite": false,
                "start": 539,
                "end": 566
              }
            ],
            "declare": false,
            "start": 535,
            "end": 567
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
                  "start": 576,
                  "end": 586
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
                      "start": 589,
                      "end": 599
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 600,
                      "end": 604
                    },
                    "optional": false,
                    "computed": false,
                    "start": 589,
                    "end": 604
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 617
                    }
                  ],
                  "optional": false,
                  "start": 589,
                  "end": 618
                },
                "definite": false,
                "start": 576,
                "end": 618
              }
            ],
            "declare": false,
            "start": 572,
            "end": 619
          }
        ],
        "start": 313,
        "end": 621
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 300,
      "end": 621
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
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
              "start": 692,
              "end": 699
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
                    "start": 700,
                    "end": 701
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 700,
                  "end": 701
                }
              ],
              "start": 699,
              "end": 702
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
                    "start": 713,
                    "end": 717
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
                          "start": 718,
                          "end": 719
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 718,
                        "end": 719
                      }
                    ],
                    "start": 717,
                    "end": 720
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
                                    "start": 729,
                                    "end": 730
                                  },
                                  "typeArguments": null,
                                  "start": 729,
                                  "end": 730
                                },
                                "start": 727,
                                "end": 730
                              },
                              "start": 726,
                              "end": 730
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
                                "start": 735,
                                "end": 742
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
                                      "start": 743,
                                      "end": 744
                                    },
                                    "typeArguments": null,
                                    "start": 743,
                                    "end": 744
                                  }
                                ],
                                "start": 742,
                                "end": 745
                              },
                              "start": 735,
                              "end": 745
                            },
                            "start": 732,
                            "end": 745
                          },
                          "start": 725,
                          "end": 745
                        },
                        "start": 723,
                        "end": 745
                      },
                      "start": 721,
                      "end": 745
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
                        "start": 748,
                        "end": 755
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
                              "start": 756,
                              "end": 757
                            },
                            "typeArguments": null,
                            "start": 756,
                            "end": 757
                          }
                        ],
                        "start": 755,
                        "end": 758
                      },
                      "start": 748,
                      "end": 758
                    },
                    "start": 746,
                    "end": 758
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 713,
                  "end": 759
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 768,
                    "end": 772
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
                          "start": 773,
                          "end": 774
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 773,
                        "end": 774
                      }
                    ],
                    "start": 772,
                    "end": 775
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
                                    "start": 784,
                                    "end": 785
                                  },
                                  "typeArguments": null,
                                  "start": 784,
                                  "end": 785
                                },
                                "start": 782,
                                "end": 785
                              },
                              "start": 781,
                              "end": 785
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
                                "start": 790,
                                "end": 797
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
                                      "start": 798,
                                      "end": 799
                                    },
                                    "typeArguments": null,
                                    "start": 798,
                                    "end": 799
                                  }
                                ],
                                "start": 797,
                                "end": 800
                              },
                              "start": 790,
                              "end": 800
                            },
                            "start": 787,
                            "end": 800
                          },
                          "start": 780,
                          "end": 800
                        },
                        "start": 778,
                        "end": 800
                      },
                      "start": 776,
                      "end": 800
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
                                  "start": 818,
                                  "end": 821
                                },
                                "start": 816,
                                "end": 821
                              },
                              "start": 811,
                              "end": 821
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
                                "start": 826,
                                "end": 833
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
                                      "start": 834,
                                      "end": 835
                                    },
                                    "typeArguments": null,
                                    "start": 834,
                                    "end": 835
                                  }
                                ],
                                "start": 833,
                                "end": 836
                              },
                              "start": 826,
                              "end": 836
                            },
                            "start": 823,
                            "end": 836
                          },
                          "start": 810,
                          "end": 836
                        },
                        "start": 808,
                        "end": 836
                      },
                      "start": 802,
                      "end": 836
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
                        "start": 839,
                        "end": 846
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
                              "start": 847,
                              "end": 848
                            },
                            "typeArguments": null,
                            "start": 847,
                            "end": 848
                          }
                        ],
                        "start": 846,
                        "end": 849
                      },
                      "start": 839,
                      "end": 849
                    },
                    "start": 837,
                    "end": 849
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 768,
                  "end": 850
                }
              ],
              "start": 703,
              "end": 856
            },
            "declare": false,
            "start": 682,
            "end": 856
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 891
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
                    "start": 895,
                    "end": 901
                  },
                  "start": 893,
                  "end": 901
                },
                "start": 892,
                "end": 901
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
                  "start": 904,
                  "end": 911
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 912,
                      "end": 918
                    }
                  ],
                  "start": 911,
                  "end": 919
                },
                "start": 904,
                "end": 919
              },
              "start": 902,
              "end": 919
            },
            "body": null,
            "expression": false,
            "start": 862,
            "end": 920
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
                        "start": 942,
                        "end": 949
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 950,
                            "end": 956
                          }
                        ],
                        "start": 949,
                        "end": 957
                      },
                      "start": 942,
                      "end": 957
                    },
                    "start": 940,
                    "end": 957
                  },
                  "start": 930,
                  "end": 957
                },
                "init": null,
                "definite": false,
                "start": 930,
                "end": 957
              }
            ],
            "declare": false,
            "start": 926,
            "end": 958
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
                  "start": 967,
                  "end": 977
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
                      "start": 980,
                      "end": 990
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 991,
                      "end": 995
                    },
                    "optional": false,
                    "computed": false,
                    "start": 980,
                    "end": 995
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 996,
                      "end": 1008
                    }
                  ],
                  "optional": false,
                  "start": 980,
                  "end": 1009
                },
                "definite": false,
                "start": 967,
                "end": 1009
              }
            ],
            "declare": false,
            "start": 963,
            "end": 1010
          }
        ],
        "start": 676,
        "end": 1012
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 663,
      "end": 1012
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1066
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
              "start": 1083,
              "end": 1090
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
                    "start": 1091,
                    "end": 1092
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1091,
                  "end": 1092
                }
              ],
              "start": 1090,
              "end": 1093
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
                    "start": 1104,
                    "end": 1108
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
                          "start": 1109,
                          "end": 1110
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1109,
                        "end": 1110
                      }
                    ],
                    "start": 1108,
                    "end": 1111
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
                                    "start": 1120,
                                    "end": 1121
                                  },
                                  "typeArguments": null,
                                  "start": 1120,
                                  "end": 1121
                                },
                                "start": 1118,
                                "end": 1121
                              },
                              "start": 1117,
                              "end": 1121
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
                                "start": 1126,
                                "end": 1133
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
                                      "start": 1134,
                                      "end": 1135
                                    },
                                    "typeArguments": null,
                                    "start": 1134,
                                    "end": 1135
                                  }
                                ],
                                "start": 1133,
                                "end": 1136
                              },
                              "start": 1126,
                              "end": 1136
                            },
                            "start": 1123,
                            "end": 1136
                          },
                          "start": 1116,
                          "end": 1136
                        },
                        "start": 1114,
                        "end": 1136
                      },
                      "start": 1112,
                      "end": 1136
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
                        "start": 1139,
                        "end": 1146
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
                              "start": 1147,
                              "end": 1148
                            },
                            "typeArguments": null,
                            "start": 1147,
                            "end": 1148
                          }
                        ],
                        "start": 1146,
                        "end": 1149
                      },
                      "start": 1139,
                      "end": 1149
                    },
                    "start": 1137,
                    "end": 1149
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1104,
                  "end": 1150
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1159,
                    "end": 1163
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
                          "start": 1164,
                          "end": 1165
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1164,
                        "end": 1165
                      }
                    ],
                    "start": 1163,
                    "end": 1166
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
                                    "start": 1175,
                                    "end": 1176
                                  },
                                  "typeArguments": null,
                                  "start": 1175,
                                  "end": 1176
                                },
                                "start": 1173,
                                "end": 1176
                              },
                              "start": 1172,
                              "end": 1176
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
                                "start": 1181,
                                "end": 1188
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
                                      "start": 1189,
                                      "end": 1190
                                    },
                                    "typeArguments": null,
                                    "start": 1189,
                                    "end": 1190
                                  }
                                ],
                                "start": 1188,
                                "end": 1191
                              },
                              "start": 1181,
                              "end": 1191
                            },
                            "start": 1178,
                            "end": 1191
                          },
                          "start": 1171,
                          "end": 1191
                        },
                        "start": 1169,
                        "end": 1191
                      },
                      "start": 1167,
                      "end": 1191
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
                                  "start": 1209,
                                  "end": 1212
                                },
                                "start": 1207,
                                "end": 1212
                              },
                              "start": 1202,
                              "end": 1212
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
                                "start": 1217,
                                "end": 1224
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
                                      "start": 1225,
                                      "end": 1226
                                    },
                                    "typeArguments": null,
                                    "start": 1225,
                                    "end": 1226
                                  }
                                ],
                                "start": 1224,
                                "end": 1227
                              },
                              "start": 1217,
                              "end": 1227
                            },
                            "start": 1214,
                            "end": 1227
                          },
                          "start": 1201,
                          "end": 1227
                        },
                        "start": 1199,
                        "end": 1227
                      },
                      "start": 1193,
                      "end": 1227
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
                        "start": 1230,
                        "end": 1237
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
                              "start": 1238,
                              "end": 1239
                            },
                            "typeArguments": null,
                            "start": 1238,
                            "end": 1239
                          }
                        ],
                        "start": 1237,
                        "end": 1240
                      },
                      "start": 1230,
                      "end": 1240
                    },
                    "start": 1228,
                    "end": 1240
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1159,
                  "end": 1241
                }
              ],
              "start": 1094,
              "end": 1247
            },
            "declare": false,
            "start": 1073,
            "end": 1247
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1282
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
                    "start": 1286,
                    "end": 1292
                  },
                  "start": 1284,
                  "end": 1292
                },
                "start": 1283,
                "end": 1292
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
                  "start": 1295,
                  "end": 1302
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1303,
                      "end": 1309
                    }
                  ],
                  "start": 1302,
                  "end": 1310
                },
                "start": 1295,
                "end": 1310
              },
              "start": 1293,
              "end": 1310
            },
            "body": null,
            "expression": false,
            "start": 1253,
            "end": 1311
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1345
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
                    "start": 1349,
                    "end": 1355
                  },
                  "start": 1347,
                  "end": 1355
                },
                "start": 1346,
                "end": 1355
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
                  "start": 1358,
                  "end": 1365
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1366,
                      "end": 1372
                    }
                  ],
                  "start": 1365,
                  "end": 1373
                },
                "start": 1358,
                "end": 1373
              },
              "start": 1356,
              "end": 1373
            },
            "body": null,
            "expression": false,
            "start": 1316,
            "end": 1374
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
                        "start": 1396,
                        "end": 1403
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1404,
                            "end": 1410
                          }
                        ],
                        "start": 1403,
                        "end": 1411
                      },
                      "start": 1396,
                      "end": 1411
                    },
                    "start": 1394,
                    "end": 1411
                  },
                  "start": 1384,
                  "end": 1411
                },
                "init": null,
                "definite": false,
                "start": 1384,
                "end": 1411
              }
            ],
            "declare": false,
            "start": 1380,
            "end": 1412
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
                  "start": 1421,
                  "end": 1431
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
                      "start": 1434,
                      "end": 1444
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1445,
                      "end": 1449
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1434,
                    "end": 1449
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1462
                    }
                  ],
                  "optional": false,
                  "start": 1434,
                  "end": 1463
                },
                "definite": false,
                "start": 1421,
                "end": 1463
              }
            ],
            "declare": false,
            "start": 1417,
            "end": 1464
          }
        ],
        "start": 1067,
        "end": 1466
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1054,
      "end": 1466
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1520
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
              "start": 1537,
              "end": 1544
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
                    "start": 1545,
                    "end": 1546
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1545,
                  "end": 1546
                }
              ],
              "start": 1544,
              "end": 1547
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
                    "start": 1558,
                    "end": 1562
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
                          "start": 1563,
                          "end": 1564
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1563,
                        "end": 1564
                      }
                    ],
                    "start": 1562,
                    "end": 1565
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
                                    "start": 1574,
                                    "end": 1575
                                  },
                                  "typeArguments": null,
                                  "start": 1574,
                                  "end": 1575
                                },
                                "start": 1572,
                                "end": 1575
                              },
                              "start": 1571,
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
                                "start": 1580,
                                "end": 1587
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
                                      "start": 1588,
                                      "end": 1589
                                    },
                                    "typeArguments": null,
                                    "start": 1588,
                                    "end": 1589
                                  }
                                ],
                                "start": 1587,
                                "end": 1590
                              },
                              "start": 1580,
                              "end": 1590
                            },
                            "start": 1577,
                            "end": 1590
                          },
                          "start": 1570,
                          "end": 1590
                        },
                        "start": 1568,
                        "end": 1590
                      },
                      "start": 1566,
                      "end": 1590
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
                        "start": 1593,
                        "end": 1600
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
                              "start": 1601,
                              "end": 1602
                            },
                            "typeArguments": null,
                            "start": 1601,
                            "end": 1602
                          }
                        ],
                        "start": 1600,
                        "end": 1603
                      },
                      "start": 1593,
                      "end": 1603
                    },
                    "start": 1591,
                    "end": 1603
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1558,
                  "end": 1604
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1613,
                    "end": 1617
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
                          "start": 1618,
                          "end": 1619
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1618,
                        "end": 1619
                      }
                    ],
                    "start": 1617,
                    "end": 1620
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
                                    "start": 1629,
                                    "end": 1630
                                  },
                                  "typeArguments": null,
                                  "start": 1629,
                                  "end": 1630
                                },
                                "start": 1627,
                                "end": 1630
                              },
                              "start": 1626,
                              "end": 1630
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
                                "start": 1635,
                                "end": 1642
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
                                      "start": 1643,
                                      "end": 1644
                                    },
                                    "typeArguments": null,
                                    "start": 1643,
                                    "end": 1644
                                  }
                                ],
                                "start": 1642,
                                "end": 1645
                              },
                              "start": 1635,
                              "end": 1645
                            },
                            "start": 1632,
                            "end": 1645
                          },
                          "start": 1625,
                          "end": 1645
                        },
                        "start": 1623,
                        "end": 1645
                      },
                      "start": 1621,
                      "end": 1645
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
                                  "start": 1663,
                                  "end": 1666
                                },
                                "start": 1661,
                                "end": 1666
                              },
                              "start": 1656,
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
                                "start": 1671,
                                "end": 1678
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
                                      "start": 1679,
                                      "end": 1680
                                    },
                                    "typeArguments": null,
                                    "start": 1679,
                                    "end": 1680
                                  }
                                ],
                                "start": 1678,
                                "end": 1681
                              },
                              "start": 1671,
                              "end": 1681
                            },
                            "start": 1668,
                            "end": 1681
                          },
                          "start": 1655,
                          "end": 1681
                        },
                        "start": 1653,
                        "end": 1681
                      },
                      "start": 1647,
                      "end": 1681
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
                        "start": 1684,
                        "end": 1691
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
                              "start": 1692,
                              "end": 1693
                            },
                            "typeArguments": null,
                            "start": 1692,
                            "end": 1693
                          }
                        ],
                        "start": 1691,
                        "end": 1694
                      },
                      "start": 1684,
                      "end": 1694
                    },
                    "start": 1682,
                    "end": 1694
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1613,
                  "end": 1695
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1704,
                    "end": 1708
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
                          "start": 1709,
                          "end": 1710
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1709,
                        "end": 1710
                      }
                    ],
                    "start": 1708,
                    "end": 1711
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
                                    "start": 1720,
                                    "end": 1721
                                  },
                                  "typeArguments": null,
                                  "start": 1720,
                                  "end": 1721
                                },
                                "start": 1718,
                                "end": 1721
                              },
                              "start": 1717,
                              "end": 1721
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
                                "start": 1726,
                                "end": 1733
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
                                      "start": 1734,
                                      "end": 1735
                                    },
                                    "typeArguments": null,
                                    "start": 1734,
                                    "end": 1735
                                  }
                                ],
                                "start": 1733,
                                "end": 1736
                              },
                              "start": 1726,
                              "end": 1736
                            },
                            "start": 1723,
                            "end": 1736
                          },
                          "start": 1716,
                          "end": 1736
                        },
                        "start": 1714,
                        "end": 1736
                      },
                      "start": 1712,
                      "end": 1736
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
                                  "start": 1754,
                                  "end": 1757
                                },
                                "start": 1752,
                                "end": 1757
                              },
                              "start": 1747,
                              "end": 1757
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
                                "start": 1762,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "start": 1762,
                              "end": 1763
                            },
                            "start": 1759,
                            "end": 1763
                          },
                          "start": 1746,
                          "end": 1763
                        },
                        "start": 1744,
                        "end": 1763
                      },
                      "start": 1738,
                      "end": 1763
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
                                  "start": 1791,
                                  "end": 1794
                                },
                                "start": 1789,
                                "end": 1794
                              },
                              "start": 1777,
                              "end": 1794
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1799,
                              "end": 1803
                            },
                            "start": 1796,
                            "end": 1803
                          },
                          "start": 1776,
                          "end": 1803
                        },
                        "start": 1774,
                        "end": 1803
                      },
                      "start": 1765,
                      "end": 1803
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
                        "start": 1806,
                        "end": 1813
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
                              "start": 1814,
                              "end": 1815
                            },
                            "typeArguments": null,
                            "start": 1814,
                            "end": 1815
                          }
                        ],
                        "start": 1813,
                        "end": 1816
                      },
                      "start": 1806,
                      "end": 1816
                    },
                    "start": 1804,
                    "end": 1816
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1704,
                  "end": 1817
                }
              ],
              "start": 1548,
              "end": 1823
            },
            "declare": false,
            "start": 1527,
            "end": 1823
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1846,
              "end": 1858
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
                    "start": 1862,
                    "end": 1868
                  },
                  "start": 1860,
                  "end": 1868
                },
                "start": 1859,
                "end": 1868
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
                  "start": 1871,
                  "end": 1878
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1879,
                      "end": 1885
                    }
                  ],
                  "start": 1878,
                  "end": 1886
                },
                "start": 1871,
                "end": 1886
              },
              "start": 1869,
              "end": 1886
            },
            "body": null,
            "expression": false,
            "start": 1829,
            "end": 1887
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1909,
              "end": 1921
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
                    "start": 1925,
                    "end": 1931
                  },
                  "start": 1923,
                  "end": 1931
                },
                "start": 1922,
                "end": 1931
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
                  "start": 1934,
                  "end": 1941
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1942,
                      "end": 1948
                    }
                  ],
                  "start": 1941,
                  "end": 1949
                },
                "start": 1934,
                "end": 1949
              },
              "start": 1932,
              "end": 1949
            },
            "body": null,
            "expression": false,
            "start": 1892,
            "end": 1950
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
                        "start": 1972,
                        "end": 1979
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1980,
                            "end": 1986
                          }
                        ],
                        "start": 1979,
                        "end": 1987
                      },
                      "start": 1972,
                      "end": 1987
                    },
                    "start": 1970,
                    "end": 1987
                  },
                  "start": 1960,
                  "end": 1987
                },
                "init": null,
                "definite": false,
                "start": 1960,
                "end": 1987
              }
            ],
            "declare": false,
            "start": 1956,
            "end": 1988
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
                  "start": 1997,
                  "end": 2007
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
                      "start": 2010,
                      "end": 2020
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2021,
                      "end": 2025
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2010,
                    "end": 2025
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2026,
                      "end": 2038
                    }
                  ],
                  "optional": false,
                  "start": 2010,
                  "end": 2039
                },
                "definite": false,
                "start": 1997,
                "end": 2039
              }
            ],
            "declare": false,
            "start": 1993,
            "end": 2040
          }
        ],
        "start": 1521,
        "end": 2042
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1508,
      "end": 2042
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2094,
        "end": 2096
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
              "start": 2113,
              "end": 2120
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
                    "start": 2134,
                    "end": 2138
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
                          "start": 2139,
                          "end": 2140
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2139,
                        "end": 2140
                      }
                    ],
                    "start": 2138,
                    "end": 2141
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
                                    "start": 2150,
                                    "end": 2151
                                  },
                                  "typeArguments": null,
                                  "start": 2150,
                                  "end": 2151
                                },
                                "start": 2148,
                                "end": 2151
                              },
                              "start": 2147,
                              "end": 2151
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
                                "start": 2156,
                                "end": 2163
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
                                      "start": 2164,
                                      "end": 2165
                                    },
                                    "typeArguments": null,
                                    "start": 2164,
                                    "end": 2165
                                  }
                                ],
                                "start": 2163,
                                "end": 2166
                              },
                              "start": 2156,
                              "end": 2166
                            },
                            "start": 2153,
                            "end": 2166
                          },
                          "start": 2146,
                          "end": 2166
                        },
                        "start": 2144,
                        "end": 2166
                      },
                      "start": 2142,
                      "end": 2166
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
                        "start": 2169,
                        "end": 2176
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
                              "start": 2177,
                              "end": 2178
                            },
                            "typeArguments": null,
                            "start": 2177,
                            "end": 2178
                          }
                        ],
                        "start": 2176,
                        "end": 2179
                      },
                      "start": 2169,
                      "end": 2179
                    },
                    "start": 2167,
                    "end": 2179
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2134,
                  "end": 2180
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2189,
                    "end": 2193
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
                          "start": 2194,
                          "end": 2195
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2194,
                        "end": 2195
                      }
                    ],
                    "start": 2193,
                    "end": 2196
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
                                    "start": 2205,
                                    "end": 2206
                                  },
                                  "typeArguments": null,
                                  "start": 2205,
                                  "end": 2206
                                },
                                "start": 2203,
                                "end": 2206
                              },
                              "start": 2202,
                              "end": 2206
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
                                "start": 2211,
                                "end": 2218
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
                                      "start": 2219,
                                      "end": 2220
                                    },
                                    "typeArguments": null,
                                    "start": 2219,
                                    "end": 2220
                                  }
                                ],
                                "start": 2218,
                                "end": 2221
                              },
                              "start": 2211,
                              "end": 2221
                            },
                            "start": 2208,
                            "end": 2221
                          },
                          "start": 2201,
                          "end": 2221
                        },
                        "start": 2199,
                        "end": 2221
                      },
                      "start": 2197,
                      "end": 2221
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
                                  "start": 2239,
                                  "end": 2242
                                },
                                "start": 2237,
                                "end": 2242
                              },
                              "start": 2232,
                              "end": 2242
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
                                "start": 2247,
                                "end": 2254
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
                                      "start": 2255,
                                      "end": 2256
                                    },
                                    "typeArguments": null,
                                    "start": 2255,
                                    "end": 2256
                                  }
                                ],
                                "start": 2254,
                                "end": 2257
                              },
                              "start": 2247,
                              "end": 2257
                            },
                            "start": 2244,
                            "end": 2257
                          },
                          "start": 2231,
                          "end": 2257
                        },
                        "start": 2229,
                        "end": 2257
                      },
                      "start": 2223,
                      "end": 2257
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
                        "start": 2260,
                        "end": 2267
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
                              "start": 2268,
                              "end": 2269
                            },
                            "typeArguments": null,
                            "start": 2268,
                            "end": 2269
                          }
                        ],
                        "start": 2267,
                        "end": 2270
                      },
                      "start": 2260,
                      "end": 2270
                    },
                    "start": 2258,
                    "end": 2270
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2189,
                  "end": 2271
                }
              ],
              "start": 2124,
              "end": 2277
            },
            "declare": false,
            "start": 2103,
            "end": 2277
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2312
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
                    "start": 2316,
                    "end": 2322
                  },
                  "start": 2314,
                  "end": 2322
                },
                "start": 2313,
                "end": 2322
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
                  "start": 2325,
                  "end": 2332
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2333,
                      "end": 2339
                    }
                  ],
                  "start": 2332,
                  "end": 2340
                },
                "start": 2325,
                "end": 2340
              },
              "start": 2323,
              "end": 2340
            },
            "body": null,
            "expression": false,
            "start": 2283,
            "end": 2341
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2363,
              "end": 2375
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
                    "start": 2379,
                    "end": 2385
                  },
                  "start": 2377,
                  "end": 2385
                },
                "start": 2376,
                "end": 2385
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
                  "start": 2388,
                  "end": 2395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2396,
                      "end": 2402
                    }
                  ],
                  "start": 2395,
                  "end": 2403
                },
                "start": 2388,
                "end": 2403
              },
              "start": 2386,
              "end": 2403
            },
            "body": null,
            "expression": false,
            "start": 2346,
            "end": 2404
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2426,
              "end": 2438
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
                    "start": 2442,
                    "end": 2449
                  },
                  "start": 2440,
                  "end": 2449
                },
                "start": 2439,
                "end": 2449
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
                  "start": 2452,
                  "end": 2459
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2460,
                      "end": 2467
                    }
                  ],
                  "start": 2459,
                  "end": 2468
                },
                "start": 2452,
                "end": 2468
              },
              "start": 2450,
              "end": 2468
            },
            "body": null,
            "expression": false,
            "start": 2409,
            "end": 2469
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
                        "start": 2491,
                        "end": 2498
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2499,
                            "end": 2505
                          }
                        ],
                        "start": 2498,
                        "end": 2506
                      },
                      "start": 2491,
                      "end": 2506
                    },
                    "start": 2489,
                    "end": 2506
                  },
                  "start": 2479,
                  "end": 2506
                },
                "init": null,
                "definite": false,
                "start": 2479,
                "end": 2506
              }
            ],
            "declare": false,
            "start": 2475,
            "end": 2507
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
                  "start": 2516,
                  "end": 2526
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
                      "start": 2529,
                      "end": 2539
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2540,
                      "end": 2544
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2529,
                    "end": 2544
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2545,
                      "end": 2557
                    }
                  ],
                  "optional": false,
                  "start": 2529,
                  "end": 2558
                },
                "definite": false,
                "start": 2516,
                "end": 2558
              }
            ],
            "declare": false,
            "start": 2512,
            "end": 2559
          }
        ],
        "start": 2097,
        "end": 2561
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2084,
      "end": 2561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2561
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 19,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 125,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 176,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 213,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 226,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 242,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 300,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 319,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 369,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 385,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 408,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 416,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 425,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 450,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 471,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 479,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 488,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 513,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 539,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 576,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 589,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 605,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 663,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 682,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 692,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 721,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 732,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 735,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 748,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 787,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 790,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 802,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 823,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 826,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 839,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 862,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 870,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 879,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 904,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 926,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 930,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 942,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 950,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 963,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 967,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 980,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 991,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 996,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1054,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1073,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1083,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1123,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1126,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1139,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1159,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1181,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1217,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1253,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1261,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1270,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1295,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1303,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1324,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1333,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1349,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1358,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 1384,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1396,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 1421,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 1434,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1445,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1450,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1508,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1518,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1527,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1537,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1558,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1577,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1580,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1593,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1613,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1632,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1647,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1671,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1684,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1704,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1723,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1726,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1738,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1754,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1759,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1765,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "preservation",
    "start": 1777,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1796,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1799,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1806,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1829,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1837,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1846,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1862,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1871,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1879,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1892,
    "end": 1899
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1900,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1909,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1934,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1942,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1956,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 1960,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1972,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1980,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 1997,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2010,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2021,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2026,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2084,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 2094,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2103,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2113,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2134,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2142,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2153,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2156,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2169,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2189,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2197,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2208,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2211,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2223,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2232,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2239,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2244,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2247,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2260,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2283,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2291,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2300,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2316,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2325,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2333,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2346,
    "end": 2353
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2354,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2363,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2379,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2388,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2396,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2409,
    "end": 2416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2417,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2426,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2442,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2452,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2460,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2475,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2479,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2491,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2499,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2512,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 2516,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2529,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2540,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2545,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2560,
    "end": 2561
  }
]
```
