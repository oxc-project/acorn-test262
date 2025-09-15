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
        "name": "ConstructSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 56
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "abstract": false,
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
                            "type": "TSNumberKeyword",
                            "start": 69,
                            "end": 75
                          },
                          "start": 67,
                          "end": 75
                        },
                        "start": 66,
                        "end": 75
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 80,
                        "end": 84
                      },
                      "start": 77,
                      "end": 84
                    },
                    "start": 61,
                    "end": 84
                  },
                  "start": 59,
                  "end": 84
                },
                "start": 57,
                "end": 84
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 96
                },
                "typeArguments": null,
                "start": 87,
                "end": 96
              },
              "start": 85,
              "end": 96
            },
            "body": null,
            "expression": false,
            "start": 35,
            "end": 97
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 123
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 128,
                    "end": 131
                  },
                  "start": 126,
                  "end": 131
                },
                "start": 124,
                "end": 131
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
              },
              "start": 132,
              "end": 137
            },
            "body": null,
            "expression": false,
            "start": 102,
            "end": 138
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
                  "name": "rarg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSNumberKeyword",
                              "start": 162,
                              "end": 168
                            },
                            "start": 160,
                            "end": 168
                          },
                          "start": 159,
                          "end": 168
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 173,
                          "end": 179
                        },
                        "start": 170,
                        "end": 179
                      },
                      "start": 154,
                      "end": 179
                    },
                    "start": 152,
                    "end": 179
                  },
                  "start": 147,
                  "end": 179
                },
                "init": null,
                "definite": false,
                "start": 147,
                "end": 179
              }
            ],
            "declare": false,
            "start": 143,
            "end": 180
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 197
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rarg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    }
                  ],
                  "optional": false,
                  "start": 193,
                  "end": 204
                },
                "definite": false,
                "start": 189,
                "end": 204
              }
            ],
            "declare": false,
            "start": 185,
            "end": 205
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
                  "name": "rarg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 258,
                              "end": 259
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 258,
                            "end": 259
                          }
                        ],
                        "start": 257,
                        "end": 260
                      },
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
                                "start": 264,
                                "end": 265
                              },
                              "typeArguments": null,
                              "start": 264,
                              "end": 265
                            },
                            "start": 262,
                            "end": 265
                          },
                          "start": 261,
                          "end": 265
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 270,
                          "end": 276
                        },
                        "start": 267,
                        "end": 276
                      },
                      "start": 253,
                      "end": 276
                    },
                    "start": 251,
                    "end": 276
                  },
                  "start": 246,
                  "end": 276
                },
                "init": null,
                "definite": false,
                "start": 246,
                "end": 276
              }
            ],
            "declare": false,
            "start": 242,
            "end": 277
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 288
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 295
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rarg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 301
                    }
                  ],
                  "optional": false,
                  "start": 291,
                  "end": 302
                },
                "definite": false,
                "start": 286,
                "end": 302
              }
            ],
            "declare": false,
            "start": 282,
            "end": 303
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 362
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "abstract": false,
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
                            "type": "TSNumberKeyword",
                            "start": 375,
                            "end": 381
                          },
                          "start": 373,
                          "end": 381
                        },
                        "start": 372,
                        "end": 381
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 386,
                            "end": 392
                          },
                          "start": 384,
                          "end": 392
                        },
                        "start": 383,
                        "end": 392
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 397,
                        "end": 401
                      },
                      "start": 394,
                      "end": 401
                    },
                    "start": 367,
                    "end": 401
                  },
                  "start": 365,
                  "end": 401
                },
                "start": 363,
                "end": 401
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 413
                },
                "typeArguments": null,
                "start": 404,
                "end": 413
              },
              "start": 402,
              "end": 413
            },
            "body": null,
            "expression": false,
            "start": 341,
            "end": 414
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 440
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 445,
                    "end": 448
                  },
                  "start": 443,
                  "end": 448
                },
                "start": 441,
                "end": 448
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 451,
                "end": 454
              },
              "start": 449,
              "end": 454
            },
            "body": null,
            "expression": false,
            "start": 419,
            "end": 455
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
                  "name": "r3arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSNumberKeyword",
                              "start": 480,
                              "end": 486
                            },
                            "start": 478,
                            "end": 486
                          },
                          "start": 477,
                          "end": 486
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 491,
                              "end": 497
                            },
                            "start": 489,
                            "end": 497
                          },
                          "start": 488,
                          "end": 497
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 502,
                          "end": 508
                        },
                        "start": 499,
                        "end": 508
                      },
                      "start": 472,
                      "end": 508
                    },
                    "start": 470,
                    "end": 508
                  },
                  "start": 464,
                  "end": 508
                },
                "init": null,
                "definite": false,
                "start": 464,
                "end": 508
              }
            ],
            "declare": false,
            "start": 460,
            "end": 509
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 520
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 527
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 534
                    }
                  ],
                  "optional": false,
                  "start": 523,
                  "end": 535
                },
                "definite": false,
                "start": 518,
                "end": 535
              }
            ],
            "declare": false,
            "start": 514,
            "end": 536
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
                  "name": "r4arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 590,
                              "end": 591
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 590,
                            "end": 591
                          }
                        ],
                        "start": 589,
                        "end": 592
                      },
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
                                "start": 596,
                                "end": 597
                              },
                              "typeArguments": null,
                              "start": 596,
                              "end": 597
                            },
                            "start": 594,
                            "end": 597
                          },
                          "start": 593,
                          "end": 597
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 602,
                          "end": 608
                        },
                        "start": 599,
                        "end": 608
                      },
                      "start": 585,
                      "end": 608
                    },
                    "start": 583,
                    "end": 608
                  },
                  "start": 577,
                  "end": 608
                },
                "init": null,
                "definite": false,
                "start": 577,
                "end": 608
              }
            ],
            "declare": false,
            "start": 573,
            "end": 609
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 620
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 623,
                    "end": 627
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 634
                    }
                  ],
                  "optional": false,
                  "start": 623,
                  "end": 635
                },
                "definite": false,
                "start": 618,
                "end": 635
              }
            ],
            "declare": false,
            "start": 614,
            "end": 636
          }
        ],
        "start": 29,
        "end": 670
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 670
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 670
}
```
