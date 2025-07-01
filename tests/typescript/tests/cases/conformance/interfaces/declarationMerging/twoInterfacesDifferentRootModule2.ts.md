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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 111
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 113,
                        "end": 119
                      },
                      "start": 111,
                      "end": 119
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 108,
                    "end": 120
                  }
                ],
                "start": 98,
                "end": 126
              },
              "declare": false,
              "start": 86,
              "end": 126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 79,
            "end": 126
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
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
                      "start": 151,
                      "end": 152
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 151,
                    "end": 152
                  }
                ],
                "start": 150,
                "end": 153
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 167
                    },
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
                          "start": 169,
                          "end": 170
                        },
                        "typeArguments": null,
                        "start": 169,
                        "end": 170
                      },
                      "start": 167,
                      "end": 170
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 171
                  }
                ],
                "start": 154,
                "end": 177
              },
              "declare": false,
              "start": 139,
              "end": 177
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 132,
            "end": 177
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 192
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 221
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 239
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 241,
                              "end": 247
                            },
                            "start": 239,
                            "end": 247
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 236,
                          "end": 248
                        }
                      ],
                      "start": 222,
                      "end": 258
                    },
                    "declare": false,
                    "start": 210,
                    "end": 258
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 203,
                  "end": 258
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 276
                            },
                            "typeArguments": null,
                            "start": 275,
                            "end": 276
                          },
                          "start": 273,
                          "end": 276
                        },
                        "start": 272,
                        "end": 276
                      },
                      "init": null,
                      "definite": false,
                      "start": 272,
                      "end": 276
                    }
                  ],
                  "declare": false,
                  "start": 268,
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
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 292
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 295,
                          "end": 296
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 300
                        },
                        "optional": false,
                        "computed": false,
                        "start": 295,
                        "end": 300
                      },
                      "definite": false,
                      "start": 290,
                      "end": 300
                    }
                  ],
                  "declare": false,
                  "start": 286,
                  "end": 301
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
                        "start": 323,
                        "end": 325
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 328,
                          "end": 329
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 330,
                          "end": 333
                        },
                        "optional": false,
                        "computed": false,
                        "start": 328,
                        "end": 333
                      },
                      "definite": false,
                      "start": 323,
                      "end": 333
                    }
                  ],
                  "declare": false,
                  "start": 319,
                  "end": 334
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 362
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
                            "start": 363,
                            "end": 364
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 363,
                          "end": 364
                        }
                      ],
                      "start": 362,
                      "end": 365
                    },
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 380,
                            "end": 383
                          },
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
                                "start": 385,
                                "end": 386
                              },
                              "typeArguments": null,
                              "start": 385,
                              "end": 386
                            },
                            "start": 383,
                            "end": 386
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 380,
                          "end": 387
                        }
                      ],
                      "start": 366,
                      "end": 397
                    },
                    "declare": false,
                    "start": 351,
                    "end": 397
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 344,
                  "end": 397
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 415
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 416,
                                  "end": 422
                                }
                              ],
                              "start": 415,
                              "end": 423
                            },
                            "start": 414,
                            "end": 423
                          },
                          "start": 412,
                          "end": 423
                        },
                        "start": 411,
                        "end": 423
                      },
                      "init": null,
                      "definite": false,
                      "start": 411,
                      "end": 423
                    }
                  ],
                  "declare": false,
                  "start": 407,
                  "end": 424
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
                        "start": 437,
                        "end": 439
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 442,
                          "end": 443
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 447
                        },
                        "optional": false,
                        "computed": false,
                        "start": 442,
                        "end": 447
                      },
                      "definite": false,
                      "start": 437,
                      "end": 447
                    }
                  ],
                  "declare": false,
                  "start": 433,
                  "end": 448
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
                        "start": 470,
                        "end": 472
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 480
                        },
                        "optional": false,
                        "computed": false,
                        "start": 475,
                        "end": 480
                      },
                      "definite": false,
                      "start": 470,
                      "end": 480
                    }
                  ],
                  "declare": false,
                  "start": 466,
                  "end": 481
                }
              ],
              "start": 193,
              "end": 487
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 183,
            "end": 487
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 500,
                        "end": 501
                      },
                      "typeArguments": null,
                      "start": 500,
                      "end": 501
                    },
                    "start": 498,
                    "end": 501
                  },
                  "start": 497,
                  "end": 501
                },
                "init": null,
                "definite": false,
                "start": 497,
                "end": 501
              }
            ],
            "declare": false,
            "start": 493,
            "end": 502
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 513
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 518,
                    "end": 521
                  },
                  "optional": false,
                  "computed": false,
                  "start": 516,
                  "end": 521
                },
                "definite": false,
                "start": 511,
                "end": 521
              }
            ],
            "declare": false,
            "start": 507,
            "end": 522
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
                  "start": 532,
                  "end": 534
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 538
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 542
                  },
                  "optional": false,
                  "computed": false,
                  "start": 537,
                  "end": 542
                },
                "definite": false,
                "start": 532,
                "end": 542
              }
            ],
            "declare": false,
            "start": 528,
            "end": 543
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 566
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 567,
                            "end": 573
                          }
                        ],
                        "start": 566,
                        "end": 574
                      },
                      "start": 565,
                      "end": 574
                    },
                    "start": 563,
                    "end": 574
                  },
                  "start": 562,
                  "end": 574
                },
                "init": null,
                "definite": false,
                "start": 562,
                "end": 574
              }
            ],
            "declare": false,
            "start": 558,
            "end": 575
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
                  "start": 584,
                  "end": 586
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 589,
                    "end": 590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 594
                  },
                  "optional": false,
                  "computed": false,
                  "start": 589,
                  "end": 594
                },
                "definite": false,
                "start": 584,
                "end": 594
              }
            ],
            "declare": false,
            "start": 580,
            "end": 595
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
                  "start": 605,
                  "end": 607
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 611
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 615
                  },
                  "optional": false,
                  "computed": false,
                  "start": 610,
                  "end": 615
                },
                "definite": false,
                "start": 605,
                "end": 615
              }
            ],
            "declare": false,
            "start": 601,
            "end": 616
          }
        ],
        "start": 73,
        "end": 627
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 64,
      "end": 627
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 627
}
```
