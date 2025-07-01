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
        "start": 7,
        "end": 25
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
              "start": 49,
              "end": 53
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
                            "start": 66,
                            "end": 72
                          },
                          "start": 64,
                          "end": 72
                        },
                        "start": 63,
                        "end": 72
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 77,
                        "end": 81
                      },
                      "start": 74,
                      "end": 81
                    },
                    "start": 58,
                    "end": 81
                  },
                  "start": 56,
                  "end": 81
                },
                "start": 54,
                "end": 81
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
                  "start": 91,
                  "end": 93
                },
                "typeArguments": null,
                "start": 84,
                "end": 93
              },
              "start": 82,
              "end": 93
            },
            "body": null,
            "expression": false,
            "start": 32,
            "end": 94
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
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
                    "start": 125,
                    "end": 128
                  },
                  "start": 123,
                  "end": 128
                },
                "start": 121,
                "end": 128
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 131,
                "end": 134
              },
              "start": 129,
              "end": 134
            },
            "body": null,
            "expression": false,
            "start": 99,
            "end": 135
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
                              "start": 159,
                              "end": 165
                            },
                            "start": 157,
                            "end": 165
                          },
                          "start": 156,
                          "end": 165
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 170,
                          "end": 176
                        },
                        "start": 167,
                        "end": 176
                      },
                      "start": 151,
                      "end": 176
                    },
                    "start": 149,
                    "end": 176
                  },
                  "start": 144,
                  "end": 176
                },
                "init": null,
                "definite": false,
                "start": 144,
                "end": 176
              }
            ],
            "declare": false,
            "start": 140,
            "end": 177
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
                  "start": 186,
                  "end": 187
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 194
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rarg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 200
                    }
                  ],
                  "optional": false,
                  "start": 190,
                  "end": 201
                },
                "definite": false,
                "start": 186,
                "end": 201
              }
            ],
            "declare": false,
            "start": 182,
            "end": 202
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
                              "start": 255,
                              "end": 256
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 255,
                            "end": 256
                          }
                        ],
                        "start": 254,
                        "end": 257
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
                                "start": 261,
                                "end": 262
                              },
                              "typeArguments": null,
                              "start": 261,
                              "end": 262
                            },
                            "start": 259,
                            "end": 262
                          },
                          "start": 258,
                          "end": 262
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 267,
                          "end": 273
                        },
                        "start": 264,
                        "end": 273
                      },
                      "start": 250,
                      "end": 273
                    },
                    "start": 248,
                    "end": 273
                  },
                  "start": 243,
                  "end": 273
                },
                "init": null,
                "definite": false,
                "start": 243,
                "end": 273
              }
            ],
            "declare": false,
            "start": 239,
            "end": 274
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
                  "start": 283,
                  "end": 285
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 292
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rarg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 298
                    }
                  ],
                  "optional": false,
                  "start": 288,
                  "end": 299
                },
                "definite": false,
                "start": 283,
                "end": 299
              }
            ],
            "declare": false,
            "start": 279,
            "end": 300
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 359
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
                            "start": 372,
                            "end": 378
                          },
                          "start": 370,
                          "end": 378
                        },
                        "start": 369,
                        "end": 378
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
                            "start": 383,
                            "end": 389
                          },
                          "start": 381,
                          "end": 389
                        },
                        "start": 380,
                        "end": 389
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 394,
                        "end": 398
                      },
                      "start": 391,
                      "end": 398
                    },
                    "start": 364,
                    "end": 398
                  },
                  "start": 362,
                  "end": 398
                },
                "start": 360,
                "end": 398
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
                  "start": 408,
                  "end": 410
                },
                "typeArguments": null,
                "start": 401,
                "end": 410
              },
              "start": 399,
              "end": 410
            },
            "body": null,
            "expression": false,
            "start": 338,
            "end": 411
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
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
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 442,
                    "end": 445
                  },
                  "start": 440,
                  "end": 445
                },
                "start": 438,
                "end": 445
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 448,
                "end": 451
              },
              "start": 446,
              "end": 451
            },
            "body": null,
            "expression": false,
            "start": 416,
            "end": 452
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
                              "start": 477,
                              "end": 483
                            },
                            "start": 475,
                            "end": 483
                          },
                          "start": 474,
                          "end": 483
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
                              "start": 488,
                              "end": 494
                            },
                            "start": 486,
                            "end": 494
                          },
                          "start": 485,
                          "end": 494
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 499,
                          "end": 505
                        },
                        "start": 496,
                        "end": 505
                      },
                      "start": 469,
                      "end": 505
                    },
                    "start": 467,
                    "end": 505
                  },
                  "start": 461,
                  "end": 505
                },
                "init": null,
                "definite": false,
                "start": 461,
                "end": 505
              }
            ],
            "declare": false,
            "start": 457,
            "end": 506
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
                  "start": 515,
                  "end": 517
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 524
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 531
                    }
                  ],
                  "optional": false,
                  "start": 520,
                  "end": 532
                },
                "definite": false,
                "start": 515,
                "end": 532
              }
            ],
            "declare": false,
            "start": 511,
            "end": 533
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
                              "start": 587,
                              "end": 588
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 587,
                            "end": 588
                          }
                        ],
                        "start": 586,
                        "end": 589
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
                                "start": 593,
                                "end": 594
                              },
                              "typeArguments": null,
                              "start": 593,
                              "end": 594
                            },
                            "start": 591,
                            "end": 594
                          },
                          "start": 590,
                          "end": 594
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 599,
                          "end": 605
                        },
                        "start": 596,
                        "end": 605
                      },
                      "start": 582,
                      "end": 605
                    },
                    "start": 580,
                    "end": 605
                  },
                  "start": 574,
                  "end": 605
                },
                "init": null,
                "definite": false,
                "start": 574,
                "end": 605
              }
            ],
            "declare": false,
            "start": 570,
            "end": 606
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
                  "start": 615,
                  "end": 617
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 624
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 631
                    }
                  ],
                  "optional": false,
                  "start": 620,
                  "end": 632
                },
                "definite": false,
                "start": 615,
                "end": 632
              }
            ],
            "declare": false,
            "start": 611,
            "end": 633
          }
        ],
        "start": 26,
        "end": 667
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 667
}
```
