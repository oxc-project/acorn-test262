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
