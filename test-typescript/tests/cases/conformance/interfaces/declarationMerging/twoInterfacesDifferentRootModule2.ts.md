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
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 627,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 79,
            "end": 126,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 86,
              "end": 126,
              "body": {
                "type": "TSInterfaceBody",
                "start": 98,
                "end": 126,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 120,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 111,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 119,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 113,
                        "end": 119
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 132,
            "end": 177,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 139,
              "end": 177,
              "body": {
                "type": "TSInterfaceBody",
                "start": 154,
                "end": 177,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 171,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 167,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 170,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 150,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 151,
                    "end": 152,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 183,
            "end": 487,
            "body": {
              "type": "TSModuleBlock",
              "start": 193,
              "end": 487,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 203,
                  "end": 258,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 210,
                    "end": 258,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 222,
                      "end": 258,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 236,
                          "end": 248,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 239,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 241,
                              "end": 247
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": []
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 276,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 273,
                          "end": 276,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 275,
                            "end": 276,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 275,
                              "end": 276,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
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
                  "start": 286,
                  "end": 301,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 290,
                      "end": 300,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 292,
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 295,
                        "end": 300,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 295,
                          "end": 296,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 300,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 325,
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 328,
                        "end": 333,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 328,
                          "end": 329,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 333,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 344,
                  "end": 397,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 351,
                    "end": 397,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 366,
                      "end": 397,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 380,
                          "end": 387,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 380,
                            "end": 383,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 383,
                            "end": 386,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 385,
                              "end": 386,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 385,
                                "end": 386,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 362,
                      "end": 365,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 363,
                          "end": 364,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 363,
                            "end": 364,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": []
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 423,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 412,
                          "end": 423,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 414,
                            "end": 423,
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
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 414,
                              "end": 415,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                  "start": 433,
                  "end": 448,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 437,
                      "end": 447,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 439,
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 442,
                        "end": 447,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 442,
                          "end": 443,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 447,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 472,
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 475,
                        "end": 480,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "start": 190,
              "end": 192,
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 501,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 501,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 501,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 507,
            "end": 522,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 511,
                "end": 521,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 513,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 516,
                  "end": 521,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 521,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 534,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 537,
                  "end": 542,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 542,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 574,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 574,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 565,
                      "end": 574,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 566,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 580,
            "end": 595,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 584,
                "end": 594,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 586,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 589,
                  "end": 594,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 594,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 607,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 610,
                  "end": 615,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 615,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
