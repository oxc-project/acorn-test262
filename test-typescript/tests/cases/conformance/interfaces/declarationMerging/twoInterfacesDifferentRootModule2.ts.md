__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 627,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 64,
      "end": 627,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 627,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 79,
            "end": 126,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 86,
              "end": 126,
              "id": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 98,
                "end": 126,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 120,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 111,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 119,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 113,
                        "end": 119
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 132,
            "end": 177,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 139,
              "end": 177,
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 150,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 151,
                    "end": 152,
                    "name": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
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
                "start": 154,
                "end": 177,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 171,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 167,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 170,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 183,
            "end": 487,
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 192,
              "name": "M2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 193,
              "end": 487,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 203,
                  "end": 258,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 210,
                    "end": 258,
                    "id": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 222,
                      "end": 258,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 236,
                          "end": 248,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 239,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 241,
                              "end": 247
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 268,
                  "end": 277,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 272,
                      "end": 276,
                      "id": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 276,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 273,
                          "end": 276,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 275,
                            "end": 276,
                            "typeName": {
                              "type": "Identifier",
                              "start": 275,
                              "end": 276,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                  "start": 286,
                  "end": 301,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 290,
                      "end": 300,
                      "id": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 292,
                        "name": "r1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 295,
                        "end": 300,
                        "object": {
                          "type": "Identifier",
                          "start": 295,
                          "end": 296,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 300,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 319,
                  "end": 334,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 323,
                      "end": 333,
                      "id": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 325,
                        "name": "r2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 328,
                        "end": 333,
                        "object": {
                          "type": "Identifier",
                          "start": 328,
                          "end": 329,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 333,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 344,
                  "end": 397,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 351,
                    "end": 397,
                    "id": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 362,
                      "end": 365,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 363,
                          "end": 364,
                          "name": {
                            "type": "Identifier",
                            "start": 363,
                            "end": 364,
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
                      "start": 366,
                      "end": 397,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 380,
                          "end": 387,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 380,
                            "end": 383,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 383,
                            "end": 386,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 385,
                              "end": 386,
                              "typeName": {
                                "type": "Identifier",
                                "start": 385,
                                "end": 386,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 407,
                  "end": 424,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 411,
                      "end": 423,
                      "id": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 423,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 412,
                          "end": 423,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 414,
                            "end": 423,
                            "typeName": {
                              "type": "Identifier",
                              "start": 414,
                              "end": 415,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 415,
                              "end": 423,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 416,
                                  "end": 422
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
                  "start": 433,
                  "end": 448,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 437,
                      "end": 447,
                      "id": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 439,
                        "name": "r3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 442,
                        "end": 447,
                        "object": {
                          "type": "Identifier",
                          "start": 442,
                          "end": 443,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 447,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 466,
                  "end": 481,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 470,
                      "end": 480,
                      "id": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 472,
                        "name": "r4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 475,
                        "end": 480,
                        "object": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "type": "VariableDeclaration",
            "start": 493,
            "end": 502,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 497,
                "end": 501,
                "id": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 501,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 501,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 501,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 507,
            "end": 522,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 511,
                "end": 521,
                "id": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 513,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 516,
                  "end": 521,
                  "object": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 521,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 528,
            "end": 543,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 532,
                "end": 542,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 534,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 537,
                  "end": 542,
                  "object": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 542,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 558,
            "end": 575,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 562,
                "end": 574,
                "id": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 574,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 574,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 565,
                      "end": 574,
                      "typeName": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 566,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 566,
                        "end": 574,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 567,
                            "end": 573
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
            "start": 580,
            "end": 595,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 584,
                "end": 594,
                "id": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 586,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 589,
                  "end": 594,
                  "object": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 594,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 601,
            "end": 616,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 605,
                "end": 615,
                "id": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 607,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 610,
                  "end": 615,
                  "object": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 615,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
