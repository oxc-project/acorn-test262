__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3888,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 139,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 139,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "TypeLambda",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 28,
          "end": 139,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 34,
              "end": 54,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 45,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 47,
                  "end": 54
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 59,
              "end": 81,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 68,
                "end": 72,
                "decorators": [],
                "name": "Out2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 74,
                  "end": 81
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 86,
              "end": 108,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "decorators": [],
                "name": "Out1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 99,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 101,
                  "end": 108
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 113,
              "end": 137,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 128,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 130,
                  "end": 137
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 306,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 147,
        "end": 306,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 162,
          "decorators": [],
          "name": "Types",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 163,
          "end": 306,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 169,
              "end": 207,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 176,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 190,
                  "decorators": [],
                  "name": "Invariant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 190,
                  "end": 193,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 191,
                      "end": 192,
                      "name": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 196,
                  "end": 207,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 197,
                      "end": 201,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 198,
                        "end": 201,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 200,
                          "end": 201,
                          "typeName": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 201,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 206,
                      "end": 207,
                      "typeName": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 212,
              "end": 254,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 219,
                "end": 254,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 233,
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 233,
                  "end": 236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 234,
                      "end": 235,
                      "name": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 239,
                  "end": 254,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 240,
                      "end": 248,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 241,
                        "end": 248,
                        "typeAnnotation": {
                          "type": "TSNeverKeyword",
                          "start": 243,
                          "end": 248
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 250,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 254,
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 259,
              "end": 304,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 266,
                "end": 304,
                "id": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 284,
                  "decorators": [],
                  "name": "Contravariant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 284,
                  "end": 287,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 285,
                      "end": 286,
                      "name": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 290,
                  "end": 304,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 291,
                      "end": 295,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 292,
                        "end": 295,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 294,
                          "end": 295,
                          "typeName": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 295,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 297,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 300,
                      "end": 304
                    }
                  }
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 308,
      "end": 348,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 315,
        "end": 348,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 347,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 347,
              "decorators": [],
              "name": "URI",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 332,
                "end": 347,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 334,
                  "end": 347,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 341,
                    "end": 347
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 349,
      "end": 424,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 356,
        "end": 424,
        "id": {
          "type": "Identifier",
          "start": 366,
          "end": 375,
          "decorators": [],
          "name": "TypeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 375,
          "end": 397,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 376,
              "end": 396,
              "name": {
                "type": "Identifier",
                "start": 376,
                "end": 377,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 386,
                "end": 396,
                "typeName": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 396,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 398,
          "end": 424,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 404,
              "end": 422,
              "computed": true,
              "optional": true,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 414,
                "end": 417,
                "decorators": [],
                "name": "URI",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 419,
                "end": 422,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 421,
                  "end": 422,
                  "typeName": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 426,
      "end": 826,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 433,
        "end": 826,
        "id": {
          "type": "Identifier",
          "start": 443,
          "end": 452,
          "decorators": [],
          "name": "Invariant",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 452,
          "end": 474,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 453,
              "end": 473,
              "name": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 463,
                "end": 473,
                "typeName": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 473,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 483,
            "end": 495,
            "expression": {
              "type": "Identifier",
              "start": 483,
              "end": 492,
              "decorators": [],
              "name": "TypeClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 492,
              "end": 495,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 493,
                  "end": 494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 496,
          "end": 826,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 502,
              "end": 824,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 511,
                "end": 515,
                "decorators": [],
                "name": "imap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 515,
                "end": 824,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 517,
                  "end": 824,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 527,
                      "end": 664,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 527,
                        "end": 533,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 528,
                            "end": 529,
                            "name": {
                              "type": "Identifier",
                              "start": 528,
                              "end": 529,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 531,
                            "end": 532,
                            "name": {
                              "type": "Identifier",
                              "start": 531,
                              "end": 532,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 547,
                          "end": 562,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 549,
                            "end": 562,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 551,
                              "end": 562,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 552,
                                  "end": 556,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 553,
                                    "end": 556,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 555,
                                      "end": 556,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 555,
                                        "end": 556,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 558,
                                "end": 562,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 561,
                                  "end": 562,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 561,
                                    "end": 562,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 576,
                          "end": 593,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 580,
                            "end": 593,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 582,
                              "end": 593,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 583,
                                  "end": 587,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 584,
                                    "end": 587,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 586,
                                      "end": 587,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 586,
                                        "end": 587,
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 589,
                                "end": 593,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 592,
                                  "end": 593,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 592,
                                    "end": 593,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 603,
                        "end": 664,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 605,
                          "end": 664,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 605,
                            "end": 614,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 606,
                                "end": 607,
                                "name": {
                                  "type": "Identifier",
                                  "start": 606,
                                  "end": 607,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 609,
                                "end": 610,
                                "name": {
                                  "type": "Identifier",
                                  "start": 609,
                                  "end": 610,
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 612,
                                "end": 613,
                                "name": {
                                  "type": "Identifier",
                                  "start": 612,
                                  "end": 613,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 615,
                              "end": 640,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 619,
                                "end": 640,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 621,
                                  "end": 640,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 621,
                                    "end": 625,
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 625,
                                    "end": 640,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 626,
                                        "end": 627,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 626,
                                          "end": 627,
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 629,
                                        "end": 630,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 629,
                                          "end": 630,
                                          "decorators": [],
                                          "name": "R",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 632,
                                        "end": 633,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 632,
                                          "end": 633,
                                          "decorators": [],
                                          "name": "O",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 635,
                                        "end": 636,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 635,
                                          "end": 636,
                                          "decorators": [],
                                          "name": "E",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 638,
                                        "end": 639,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 638,
                                          "end": 639,
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 642,
                            "end": 664,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 645,
                              "end": 664,
                              "typeName": {
                                "type": "Identifier",
                                "start": 645,
                                "end": 649,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 649,
                                "end": 664,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 650,
                                    "end": 651,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 650,
                                      "end": 651,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 653,
                                    "end": 654,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 653,
                                      "end": 654,
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 656,
                                    "end": 657,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 656,
                                      "end": 657,
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 659,
                                    "end": 660,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 659,
                                      "end": 660,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 662,
                                    "end": 663,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 662,
                                      "end": 663,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 673,
                      "end": 818,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 673,
                        "end": 688,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 674,
                            "end": 675,
                            "name": {
                              "type": "Identifier",
                              "start": 674,
                              "end": 675,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 677,
                            "end": 678,
                            "name": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 678,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 680,
                            "end": 681,
                            "name": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 681,
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 683,
                            "end": 684,
                            "name": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 684,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 686,
                            "end": 687,
                            "name": {
                              "type": "Identifier",
                              "start": 686,
                              "end": 687,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 702,
                          "end": 727,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 706,
                            "end": 727,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 708,
                              "end": 727,
                              "typeName": {
                                "type": "Identifier",
                                "start": 708,
                                "end": 712,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 712,
                                "end": 727,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 713,
                                    "end": 714,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 713,
                                      "end": 714,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 716,
                                    "end": 717,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 716,
                                      "end": 717,
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 719,
                                    "end": 720,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 719,
                                      "end": 720,
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 722,
                                    "end": 723,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 722,
                                      "end": 723,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 725,
                                    "end": 726,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 725,
                                      "end": 726,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 741,
                          "end": 756,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 743,
                            "end": 756,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 745,
                              "end": 756,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 746,
                                  "end": 750,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 747,
                                    "end": 750,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 749,
                                      "end": 750,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 749,
                                        "end": 750,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 752,
                                "end": 756,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 755,
                                  "end": 756,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 755,
                                    "end": 756,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 770,
                          "end": 787,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 774,
                            "end": 787,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 776,
                              "end": 787,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 777,
                                  "end": 781,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 778,
                                    "end": 781,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 780,
                                      "end": 781,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 780,
                                        "end": 781,
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 783,
                                "end": 787,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 786,
                                  "end": 787,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 786,
                                    "end": 787,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 797,
                        "end": 818,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 799,
                          "end": 818,
                          "typeName": {
                            "type": "Identifier",
                            "start": 799,
                            "end": 803,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 803,
                            "end": 818,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 804,
                                "end": 805,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 804,
                                  "end": 805,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 807,
                                "end": 808,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 807,
                                  "end": 808,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 810,
                                "end": 811,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 810,
                                  "end": 811,
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 813,
                                "end": 814,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 813,
                                  "end": 814,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 816,
                                "end": 817,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 816,
                                  "end": 817,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 828,
      "end": 1107,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 835,
        "end": 1107,
        "id": {
          "type": "Identifier",
          "start": 845,
          "end": 854,
          "decorators": [],
          "name": "Covariant",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 854,
          "end": 876,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 855,
              "end": 875,
              "name": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 865,
                "end": 875,
                "typeName": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 875,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 885,
            "end": 897,
            "expression": {
              "type": "Identifier",
              "start": 885,
              "end": 894,
              "decorators": [],
              "name": "Invariant",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 894,
              "end": 897,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 895,
                  "end": 896,
                  "typeName": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 896,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 898,
          "end": 1107,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 904,
              "end": 1105,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 913,
                "end": 916,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 916,
                "end": 1105,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 918,
                  "end": 1105,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 928,
                      "end": 1011,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 928,
                        "end": 934,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 929,
                            "end": 930,
                            "name": {
                              "type": "Identifier",
                              "start": 929,
                              "end": 930,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 932,
                            "end": 933,
                            "name": {
                              "type": "Identifier",
                              "start": 932,
                              "end": 933,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 935,
                          "end": 949,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 936,
                            "end": 949,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 938,
                              "end": 949,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 939,
                                  "end": 943,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 940,
                                    "end": 943,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 942,
                                      "end": 943,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 942,
                                        "end": 943,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 945,
                                "end": 949,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 948,
                                  "end": 949,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 948,
                                    "end": 949,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 950,
                        "end": 1011,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 952,
                          "end": 1011,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 952,
                            "end": 961,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 953,
                                "end": 954,
                                "name": {
                                  "type": "Identifier",
                                  "start": 953,
                                  "end": 954,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 956,
                                "end": 957,
                                "name": {
                                  "type": "Identifier",
                                  "start": 956,
                                  "end": 957,
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 959,
                                "end": 960,
                                "name": {
                                  "type": "Identifier",
                                  "start": 959,
                                  "end": 960,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 962,
                              "end": 987,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 966,
                                "end": 987,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 968,
                                  "end": 987,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 968,
                                    "end": 972,
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 972,
                                    "end": 987,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 973,
                                        "end": 974,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 973,
                                          "end": 974,
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 976,
                                        "end": 977,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 976,
                                          "end": 977,
                                          "decorators": [],
                                          "name": "R",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 979,
                                        "end": 980,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 979,
                                          "end": 980,
                                          "decorators": [],
                                          "name": "O",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 982,
                                        "end": 983,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 982,
                                          "end": 983,
                                          "decorators": [],
                                          "name": "E",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 985,
                                        "end": 986,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 985,
                                          "end": 986,
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 989,
                            "end": 1011,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 992,
                              "end": 1011,
                              "typeName": {
                                "type": "Identifier",
                                "start": 992,
                                "end": 996,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 996,
                                "end": 1011,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 997,
                                    "end": 998,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 997,
                                      "end": 998,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1000,
                                    "end": 1001,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1000,
                                      "end": 1001,
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1003,
                                    "end": 1004,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1003,
                                      "end": 1004,
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1006,
                                    "end": 1007,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1006,
                                      "end": 1007,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1009,
                                    "end": 1010,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1009,
                                      "end": 1010,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 1020,
                      "end": 1099,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1020,
                        "end": 1035,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1021,
                            "end": 1022,
                            "name": {
                              "type": "Identifier",
                              "start": 1021,
                              "end": 1022,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 1024,
                            "end": 1025,
                            "name": {
                              "type": "Identifier",
                              "start": 1024,
                              "end": 1025,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 1027,
                            "end": 1028,
                            "name": {
                              "type": "Identifier",
                              "start": 1027,
                              "end": 1028,
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 1030,
                            "end": 1031,
                            "name": {
                              "type": "Identifier",
                              "start": 1030,
                              "end": 1031,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 1033,
                            "end": 1034,
                            "name": {
                              "type": "Identifier",
                              "start": 1033,
                              "end": 1034,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 1036,
                          "end": 1061,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1040,
                            "end": 1061,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1042,
                              "end": 1061,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1042,
                                "end": 1046,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1046,
                                "end": 1061,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1047,
                                    "end": 1048,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1047,
                                      "end": 1048,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1050,
                                    "end": 1051,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1050,
                                      "end": 1051,
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1053,
                                    "end": 1054,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1053,
                                      "end": 1054,
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1056,
                                    "end": 1057,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1056,
                                      "end": 1057,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1059,
                                    "end": 1060,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1059,
                                      "end": 1060,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1077,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1064,
                            "end": 1077,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1066,
                              "end": 1077,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1067,
                                  "end": 1071,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1068,
                                    "end": 1071,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1070,
                                      "end": 1071,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1070,
                                        "end": 1071,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1073,
                                "end": 1077,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1076,
                                  "end": 1077,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1076,
                                    "end": 1077,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1078,
                        "end": 1099,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1080,
                          "end": 1099,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1080,
                            "end": 1084,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1084,
                            "end": 1099,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1085,
                                "end": 1086,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1085,
                                  "end": 1086,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1088,
                                "end": 1089,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1088,
                                  "end": 1089,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1091,
                                "end": 1092,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1091,
                                  "end": 1092,
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1094,
                                "end": 1095,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1094,
                                  "end": 1095,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1097,
                                "end": 1098,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1097,
                                  "end": 1098,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1110,
      "end": 1551,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1117,
        "end": 1551,
        "id": {
          "type": "Identifier",
          "start": 1122,
          "end": 1126,
          "decorators": [],
          "name": "Kind",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1126,
          "end": 1172,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1127,
              "end": 1147,
              "name": {
                "type": "Identifier",
                "start": 1127,
                "end": 1128,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1137,
                "end": 1147,
                "typeName": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1147,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1149,
              "end": 1151,
              "name": {
                "type": "Identifier",
                "start": 1149,
                "end": 1151,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1153,
              "end": 1157,
              "name": {
                "type": "Identifier",
                "start": 1153,
                "end": 1157,
                "decorators": [],
                "name": "Out2",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1159,
              "end": 1163,
              "name": {
                "type": "Identifier",
                "start": 1159,
                "end": 1163,
                "decorators": [],
                "name": "Out1",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1165,
              "end": 1171,
              "name": {
                "type": "Identifier",
                "start": 1165,
                "end": 1171,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1175,
          "end": 1551,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1175,
            "end": 1176,
            "typeName": {
              "type": "Identifier",
              "start": 1175,
              "end": 1176,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 1185,
            "end": 1215,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1191,
                "end": 1213,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 1200,
                  "end": 1204,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1204,
                  "end": 1213,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1206,
                    "end": 1213
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1218,
            "end": 1331,
            "objectType": {
              "type": "TSIntersectionType",
              "start": 1219,
              "end": 1322,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1219,
                  "end": 1220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1219,
                    "end": 1220,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1223,
                  "end": 1322,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1229,
                      "end": 1244,
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "start": 1238,
                        "end": 1240,
                        "decorators": [],
                        "name": "In",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1240,
                        "end": 1244,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1242,
                          "end": 1244,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1242,
                            "end": 1244,
                            "decorators": [],
                            "name": "In",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1249,
                      "end": 1268,
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "start": 1258,
                        "end": 1262,
                        "decorators": [],
                        "name": "Out2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1262,
                        "end": 1268,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1264,
                          "end": 1268,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1264,
                            "end": 1268,
                            "decorators": [],
                            "name": "Out2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1273,
                      "end": 1292,
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "start": 1282,
                        "end": 1286,
                        "decorators": [],
                        "name": "Out1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1286,
                        "end": 1292,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1288,
                          "end": 1292,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1288,
                            "end": 1292,
                            "decorators": [],
                            "name": "Out1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1297,
                      "end": 1320,
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "start": 1306,
                        "end": 1312,
                        "decorators": [],
                        "name": "Target",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1312,
                        "end": 1320,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1314,
                          "end": 1320,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1314,
                            "end": 1320,
                            "decorators": [],
                            "name": "Target",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 1324,
              "end": 1330,
              "literal": {
                "type": "Literal",
                "start": 1324,
                "end": 1330,
                "value": "type",
                "raw": "\"type\""
              }
            }
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "start": 1338,
            "end": 1551,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1348,
                "end": 1361,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 1357,
                  "end": 1358,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1358,
                  "end": 1361,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1360,
                    "end": 1361,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1360,
                      "end": 1361,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1370,
                "end": 1406,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 1379,
                  "end": 1381,
                  "decorators": [],
                  "name": "In",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1381,
                  "end": 1406,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1383,
                    "end": 1406,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1383,
                      "end": 1402,
                      "left": {
                        "type": "Identifier",
                        "start": 1383,
                        "end": 1388,
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1389,
                        "end": 1402,
                        "decorators": [],
                        "name": "Contravariant",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1402,
                      "end": 1406,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1403,
                          "end": 1405,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1403,
                            "end": 1405,
                            "decorators": [],
                            "name": "In",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1415,
                "end": 1451,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 1424,
                  "end": 1428,
                  "decorators": [],
                  "name": "Out2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1428,
                  "end": 1451,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1430,
                    "end": 1451,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1430,
                      "end": 1445,
                      "left": {
                        "type": "Identifier",
                        "start": 1430,
                        "end": 1435,
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1436,
                        "end": 1445,
                        "decorators": [],
                        "name": "Covariant",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1445,
                      "end": 1451,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1446,
                          "end": 1450,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1446,
                            "end": 1450,
                            "decorators": [],
                            "name": "Out2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1460,
                "end": 1496,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 1469,
                  "end": 1473,
                  "decorators": [],
                  "name": "Out1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1473,
                  "end": 1496,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1475,
                    "end": 1496,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1475,
                      "end": 1490,
                      "left": {
                        "type": "Identifier",
                        "start": 1475,
                        "end": 1480,
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1481,
                        "end": 1490,
                        "decorators": [],
                        "name": "Covariant",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1490,
                      "end": 1496,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1491,
                          "end": 1495,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1491,
                            "end": 1495,
                            "decorators": [],
                            "name": "Out1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1505,
                "end": 1545,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 1514,
                  "end": 1520,
                  "decorators": [],
                  "name": "Target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1520,
                  "end": 1545,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1522,
                    "end": 1545,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1522,
                      "end": 1537,
                      "left": {
                        "type": "Identifier",
                        "start": 1522,
                        "end": 1527,
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1528,
                        "end": 1537,
                        "decorators": [],
                        "name": "Invariant",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1537,
                      "end": 1545,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1538,
                          "end": 1544,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1538,
                            "end": 1544,
                            "decorators": [],
                            "name": "Target",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1553,
      "end": 1979,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1560,
        "end": 1979,
        "id": {
          "type": "Identifier",
          "start": 1570,
          "end": 1581,
          "decorators": [],
          "name": "SemiProduct",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1581,
          "end": 1603,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1582,
              "end": 1602,
              "name": {
                "type": "Identifier",
                "start": 1582,
                "end": 1583,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1592,
                "end": 1602,
                "typeName": {
                  "type": "Identifier",
                  "start": 1592,
                  "end": 1602,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1612,
            "end": 1624,
            "expression": {
              "type": "Identifier",
              "start": 1612,
              "end": 1621,
              "decorators": [],
              "name": "Invariant",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1621,
              "end": 1624,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1622,
                  "end": 1623,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1622,
                    "end": 1623,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 1625,
          "end": 1979,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1631,
              "end": 1807,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 1640,
                "end": 1647,
                "decorators": [],
                "name": "product",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1647,
                "end": 1807,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1649,
                  "end": 1807,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1649,
                    "end": 1679,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1650,
                        "end": 1652,
                        "name": {
                          "type": "Identifier",
                          "start": 1650,
                          "end": 1652,
                          "decorators": [],
                          "name": "R1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1654,
                        "end": 1656,
                        "name": {
                          "type": "Identifier",
                          "start": 1654,
                          "end": 1656,
                          "decorators": [],
                          "name": "O1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1658,
                        "end": 1660,
                        "name": {
                          "type": "Identifier",
                          "start": 1658,
                          "end": 1660,
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1662,
                        "end": 1663,
                        "name": {
                          "type": "Identifier",
                          "start": 1662,
                          "end": 1663,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1665,
                        "end": 1667,
                        "name": {
                          "type": "Identifier",
                          "start": 1665,
                          "end": 1667,
                          "decorators": [],
                          "name": "R2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1669,
                        "end": 1671,
                        "name": {
                          "type": "Identifier",
                          "start": 1669,
                          "end": 1671,
                          "decorators": [],
                          "name": "O2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1673,
                        "end": 1675,
                        "name": {
                          "type": "Identifier",
                          "start": 1673,
                          "end": 1675,
                          "decorators": [],
                          "name": "E2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1677,
                        "end": 1678,
                        "name": {
                          "type": "Identifier",
                          "start": 1677,
                          "end": 1678,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 1689,
                      "end": 1717,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1693,
                        "end": 1717,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1695,
                          "end": 1717,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1695,
                            "end": 1699,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1699,
                            "end": 1717,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1700,
                                "end": 1701,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1700,
                                  "end": 1701,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1703,
                                "end": 1705,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1703,
                                  "end": 1705,
                                  "decorators": [],
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1707,
                                "end": 1709,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1707,
                                  "end": 1709,
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1711,
                                "end": 1713,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1711,
                                  "end": 1713,
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1715,
                                "end": 1716,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1715,
                                  "end": 1716,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1727,
                      "end": 1755,
                      "decorators": [],
                      "name": "that",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1731,
                        "end": 1755,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1733,
                          "end": 1755,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1733,
                            "end": 1737,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1737,
                            "end": 1755,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1738,
                                "end": 1739,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1738,
                                  "end": 1739,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1741,
                                "end": 1743,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1741,
                                  "end": 1743,
                                  "decorators": [],
                                  "name": "R2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1745,
                                "end": 1747,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1745,
                                  "end": 1747,
                                  "decorators": [],
                                  "name": "O2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1749,
                                "end": 1751,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1749,
                                  "end": 1751,
                                  "decorators": [],
                                  "name": "E2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1753,
                                "end": 1754,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1753,
                                  "end": 1754,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1762,
                    "end": 1807,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1765,
                      "end": 1807,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1765,
                        "end": 1769,
                        "decorators": [],
                        "name": "Kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1769,
                        "end": 1807,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1770,
                            "end": 1771,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1770,
                              "end": 1771,
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSIntersectionType",
                            "start": 1773,
                            "end": 1780,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1773,
                                "end": 1775,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1773,
                                  "end": 1775,
                                  "decorators": [],
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1778,
                                "end": 1780,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1778,
                                  "end": 1780,
                                  "decorators": [],
                                  "name": "R2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          },
                          {
                            "type": "TSUnionType",
                            "start": 1782,
                            "end": 1789,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1782,
                                "end": 1784,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1782,
                                  "end": 1784,
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1787,
                                "end": 1789,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1787,
                                  "end": 1789,
                                  "decorators": [],
                                  "name": "O2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          },
                          {
                            "type": "TSUnionType",
                            "start": 1791,
                            "end": 1798,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1791,
                                "end": 1793,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1791,
                                  "end": 1793,
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1796,
                                "end": 1798,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1796,
                                  "end": 1798,
                                  "decorators": [],
                                  "name": "E2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          },
                          {
                            "type": "TSTupleType",
                            "start": 1800,
                            "end": 1806,
                            "elementTypes": [
                              {
                                "type": "TSTypeReference",
                                "start": 1801,
                                "end": 1802,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1801,
                                  "end": 1802,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1804,
                                "end": 1805,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1804,
                                  "end": 1805,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1813,
              "end": 1977,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 1822,
                "end": 1833,
                "decorators": [],
                "name": "productMany",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1833,
                "end": 1977,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1835,
                  "end": 1977,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1835,
                    "end": 1847,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1836,
                        "end": 1837,
                        "name": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1837,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1839,
                        "end": 1840,
                        "name": {
                          "type": "Identifier",
                          "start": 1839,
                          "end": 1840,
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1842,
                        "end": 1843,
                        "name": {
                          "type": "Identifier",
                          "start": 1842,
                          "end": 1843,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1845,
                        "end": 1846,
                        "name": {
                          "type": "Identifier",
                          "start": 1845,
                          "end": 1846,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 1857,
                      "end": 1882,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1861,
                        "end": 1882,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1863,
                          "end": 1882,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1863,
                            "end": 1867,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1867,
                            "end": 1882,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1868,
                                "end": 1869,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1868,
                                  "end": 1869,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1871,
                                "end": 1872,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1871,
                                  "end": 1872,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1874,
                                "end": 1875,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1874,
                                  "end": 1875,
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1877,
                                "end": 1878,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1877,
                                  "end": 1878,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1880,
                                "end": 1881,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1880,
                                  "end": 1881,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1892,
                      "end": 1933,
                      "decorators": [],
                      "name": "collection",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1902,
                        "end": 1933,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1904,
                          "end": 1933,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1904,
                            "end": 1912,
                            "decorators": [],
                            "name": "Iterable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1912,
                            "end": 1933,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1913,
                                "end": 1932,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1913,
                                  "end": 1917,
                                  "decorators": [],
                                  "name": "Kind",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 1917,
                                  "end": 1932,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1918,
                                      "end": 1919,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1918,
                                        "end": 1919,
                                        "decorators": [],
                                        "name": "F",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1921,
                                      "end": 1922,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1921,
                                        "end": 1922,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1924,
                                      "end": 1925,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1924,
                                        "end": 1925,
                                        "decorators": [],
                                        "name": "O",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1927,
                                      "end": 1928,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1927,
                                        "end": 1928,
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1930,
                                      "end": 1931,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1930,
                                        "end": 1931,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1940,
                    "end": 1977,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1943,
                      "end": 1977,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1943,
                        "end": 1947,
                        "decorators": [],
                        "name": "Kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1947,
                        "end": 1977,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1948,
                            "end": 1949,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1948,
                              "end": 1949,
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1951,
                            "end": 1952,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1951,
                              "end": 1952,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1954,
                            "end": 1955,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1954,
                              "end": 1955,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1957,
                            "end": 1958,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1957,
                              "end": 1958,
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTupleType",
                            "start": 1960,
                            "end": 1976,
                            "elementTypes": [
                              {
                                "type": "TSTypeReference",
                                "start": 1961,
                                "end": 1962,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1961,
                                  "end": 1962,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSRestType",
                                "start": 1964,
                                "end": 1975,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1967,
                                  "end": 1975,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1967,
                                    "end": 1972,
                                    "decorators": [],
                                    "name": "Array",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1972,
                                    "end": 1975,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1973,
                                        "end": 1974,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1973,
                                          "end": 1974,
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1980,
      "end": 2075,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1987,
        "end": 2075,
        "id": {
          "type": "Identifier",
          "start": 1997,
          "end": 2012,
          "decorators": [],
          "name": "SemiApplicative",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2012,
          "end": 2034,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2013,
              "end": 2033,
              "name": {
                "type": "Identifier",
                "start": 2013,
                "end": 2014,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2023,
                "end": 2033,
                "typeName": {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2033,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 2043,
            "end": 2057,
            "expression": {
              "type": "Identifier",
              "start": 2043,
              "end": 2054,
              "decorators": [],
              "name": "SemiProduct",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2054,
              "end": 2057,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2055,
                  "end": 2056,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2055,
                    "end": 2056,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 2059,
            "end": 2071,
            "expression": {
              "type": "Identifier",
              "start": 2059,
              "end": 2068,
              "decorators": [],
              "name": "Covariant",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2068,
              "end": 2071,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2069,
                  "end": 2070,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2069,
                    "end": 2070,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 2072,
          "end": 2075,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2078,
      "end": 2123,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2085,
        "end": 2123,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2091,
            "end": 2122,
            "id": {
              "type": "Identifier",
              "start": 2091,
              "end": 2093,
              "decorators": [],
              "name": "SK",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 2096,
              "end": 2122,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2096,
                "end": 2102,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2097,
                    "end": 2098,
                    "name": {
                      "type": "Identifier",
                      "start": 2097,
                      "end": 2098,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 2100,
                    "end": 2101,
                    "name": {
                      "type": "Identifier",
                      "start": 2100,
                      "end": 2101,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 2103,
                  "end": 2107,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2104,
                    "end": 2107,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2106,
                      "end": 2107,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2106,
                        "end": 2107,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2109,
                  "end": 2113,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2110,
                    "end": 2113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2112,
                      "end": 2113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2112,
                        "end": 2113,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2114,
                "end": 2117,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2116,
                  "end": 2117,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2116,
                    "end": 2117,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "Identifier",
                "start": 2121,
                "end": 2122,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2125,
      "end": 2562,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2132,
        "end": 2562,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2146,
            "end": 2561,
            "id": {
              "type": "Identifier",
              "start": 2146,
              "end": 2561,
              "decorators": [],
              "name": "dual",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2150,
                "end": 2561,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 2152,
                  "end": 2561,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 2158,
                      "end": 2354,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2158,
                        "end": 2253,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2159,
                            "end": 2204,
                            "name": {
                              "type": "Identifier",
                              "start": 2159,
                              "end": 2167,
                              "decorators": [],
                              "name": "DataLast",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "start": 2176,
                              "end": 2204,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 2177,
                                  "end": 2196,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2180,
                                    "end": 2184,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2184,
                                    "end": 2196,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2186,
                                      "end": 2196,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2186,
                                        "end": 2191,
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2191,
                                        "end": 2196,
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2192,
                                            "end": 2195
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2198,
                                "end": 2204,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2201,
                                  "end": 2204
                                }
                              }
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2206,
                            "end": 2252,
                            "name": {
                              "type": "Identifier",
                              "start": 2206,
                              "end": 2215,
                              "decorators": [],
                              "name": "DataFirst",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "start": 2224,
                              "end": 2252,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 2225,
                                  "end": 2244,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2228,
                                    "end": 2232,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2232,
                                    "end": 2244,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2234,
                                      "end": 2244,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2234,
                                        "end": 2239,
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2239,
                                        "end": 2244,
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2240,
                                            "end": 2243
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2246,
                                "end": 2252,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2249,
                                  "end": 2252
                                }
                              }
                            },
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
                          "start": 2263,
                          "end": 2301,
                          "decorators": [],
                          "name": "arity",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2268,
                            "end": 2301,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 2270,
                              "end": 2301,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 2270,
                                "end": 2291,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2270,
                                  "end": 2280,
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2280,
                                  "end": 2291,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2281,
                                      "end": 2290,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2281,
                                        "end": 2290,
                                        "decorators": [],
                                        "name": "DataFirst",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 2292,
                                "end": 2300,
                                "literal": {
                                  "type": "Literal",
                                  "start": 2292,
                                  "end": 2300,
                                  "value": "length",
                                  "raw": "\"length\""
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2311,
                          "end": 2326,
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2315,
                            "end": 2326,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2317,
                              "end": 2326,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2317,
                                "end": 2326,
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2332,
                        "end": 2354,
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "start": 2334,
                          "end": 2354,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 2334,
                              "end": 2342,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2334,
                                "end": 2342,
                                "decorators": [],
                                "name": "DataLast",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2345,
                              "end": 2354,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2345,
                                "end": 2354,
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 2359,
                      "end": 2559,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2359,
                        "end": 2454,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2360,
                            "end": 2405,
                            "name": {
                              "type": "Identifier",
                              "start": 2360,
                              "end": 2368,
                              "decorators": [],
                              "name": "DataLast",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "start": 2377,
                              "end": 2405,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 2378,
                                  "end": 2397,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2381,
                                    "end": 2385,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2385,
                                    "end": 2397,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2387,
                                      "end": 2397,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2387,
                                        "end": 2392,
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2392,
                                        "end": 2397,
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2393,
                                            "end": 2396
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2399,
                                "end": 2405,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2402,
                                  "end": 2405
                                }
                              }
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2407,
                            "end": 2453,
                            "name": {
                              "type": "Identifier",
                              "start": 2407,
                              "end": 2416,
                              "decorators": [],
                              "name": "DataFirst",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "start": 2425,
                              "end": 2453,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 2426,
                                  "end": 2445,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2429,
                                    "end": 2433,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2433,
                                    "end": 2445,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2435,
                                      "end": 2445,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2435,
                                        "end": 2440,
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2440,
                                        "end": 2445,
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2441,
                                            "end": 2444
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2447,
                                "end": 2453,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2450,
                                  "end": 2453
                                }
                              }
                            },
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
                          "start": 2464,
                          "end": 2506,
                          "decorators": [],
                          "name": "isDataFirst",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2475,
                            "end": 2506,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 2477,
                              "end": 2506,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2478,
                                  "end": 2494,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2482,
                                    "end": 2494,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2484,
                                      "end": 2494,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2484,
                                        "end": 2494,
                                        "decorators": [],
                                        "name": "IArguments",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2496,
                                "end": 2506,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2499,
                                  "end": 2506
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2516,
                          "end": 2531,
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2520,
                            "end": 2531,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2522,
                              "end": 2531,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2522,
                                "end": 2531,
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2537,
                        "end": 2559,
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "start": 2539,
                          "end": 2559,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 2539,
                              "end": 2547,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2539,
                                "end": 2547,
                                "decorators": [],
                                "name": "DataLast",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2550,
                              "end": 2559,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2550,
                                "end": 2559,
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2564,
      "end": 3304,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2571,
        "end": 3304,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2577,
            "end": 3303,
            "id": {
              "type": "Identifier",
              "start": 2577,
              "end": 2584,
              "decorators": [],
              "name": "zipWith",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 2587,
              "end": 3303,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2587,
                "end": 2609,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2588,
                    "end": 2608,
                    "name": {
                      "type": "Identifier",
                      "start": 2588,
                      "end": 2589,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2598,
                      "end": 2608,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2598,
                        "end": 2608,
                        "decorators": [],
                        "name": "TypeLambda",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
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
                  "start": 2610,
                  "end": 2631,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2611,
                    "end": 2631,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2613,
                      "end": 2631,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2613,
                        "end": 2628,
                        "decorators": [],
                        "name": "SemiApplicative",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2628,
                        "end": 2631,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2629,
                            "end": 2630,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2629,
                              "end": 2630,
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2632,
                "end": 3011,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 2634,
                  "end": 3011,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 2640,
                      "end": 2820,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2640,
                        "end": 2661,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2641,
                            "end": 2643,
                            "name": {
                              "type": "Identifier",
                              "start": 2641,
                              "end": 2643,
                              "decorators": [],
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2645,
                            "end": 2647,
                            "name": {
                              "type": "Identifier",
                              "start": 2645,
                              "end": 2647,
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2649,
                            "end": 2651,
                            "name": {
                              "type": "Identifier",
                              "start": 2649,
                              "end": 2651,
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2653,
                            "end": 2654,
                            "name": {
                              "type": "Identifier",
                              "start": 2653,
                              "end": 2654,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2656,
                            "end": 2657,
                            "name": {
                              "type": "Identifier",
                              "start": 2656,
                              "end": 2657,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2659,
                            "end": 2660,
                            "name": {
                              "type": "Identifier",
                              "start": 2659,
                              "end": 2660,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2671,
                          "end": 2699,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2675,
                            "end": 2699,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2677,
                              "end": 2699,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2677,
                                "end": 2681,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2681,
                                "end": 2699,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2682,
                                    "end": 2683,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2682,
                                      "end": 2683,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2685,
                                    "end": 2687,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2685,
                                      "end": 2687,
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2689,
                                    "end": 2691,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2689,
                                      "end": 2691,
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2693,
                                    "end": 2695,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2693,
                                      "end": 2695,
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2697,
                                    "end": 2698,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2697,
                                      "end": 2698,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2709,
                          "end": 2729,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2710,
                            "end": 2729,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 2712,
                              "end": 2729,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2713,
                                  "end": 2717,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2714,
                                    "end": 2717,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2716,
                                      "end": 2717,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2716,
                                        "end": 2717,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 2719,
                                  "end": 2723,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2720,
                                    "end": 2723,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2722,
                                      "end": 2723,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2722,
                                        "end": 2723,
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2725,
                                "end": 2729,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2728,
                                  "end": 2729,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2728,
                                    "end": 2729,
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2735,
                        "end": 2820,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2737,
                          "end": 2820,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 2737,
                            "end": 2749,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 2738,
                                "end": 2740,
                                "name": {
                                  "type": "Identifier",
                                  "start": 2738,
                                  "end": 2740,
                                  "decorators": [],
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 2742,
                                "end": 2744,
                                "name": {
                                  "type": "Identifier",
                                  "start": 2742,
                                  "end": 2744,
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 2746,
                                "end": 2748,
                                "name": {
                                  "type": "Identifier",
                                  "start": 2746,
                                  "end": 2748,
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 2750,
                              "end": 2778,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2754,
                                "end": 2778,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2756,
                                  "end": 2778,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2756,
                                    "end": 2760,
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 2760,
                                    "end": 2778,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2761,
                                        "end": 2762,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2761,
                                          "end": 2762,
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2764,
                                        "end": 2766,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2764,
                                          "end": 2766,
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2768,
                                        "end": 2770,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2768,
                                          "end": 2770,
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2772,
                                        "end": 2774,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2772,
                                          "end": 2774,
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2776,
                                        "end": 2777,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2776,
                                          "end": 2777,
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2780,
                            "end": 2820,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2783,
                              "end": 2820,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2783,
                                "end": 2787,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2787,
                                "end": 2820,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2788,
                                    "end": 2789,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2788,
                                      "end": 2789,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "start": 2791,
                                    "end": 2798,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2791,
                                        "end": 2793,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2791,
                                          "end": 2793,
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2796,
                                        "end": 2798,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2796,
                                          "end": 2798,
                                          "decorators": [],
                                          "name": "R2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "start": 2800,
                                    "end": 2807,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2800,
                                        "end": 2802,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2800,
                                          "end": 2802,
                                          "decorators": [],
                                          "name": "O2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2805,
                                        "end": 2807,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2805,
                                          "end": 2807,
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "start": 2809,
                                    "end": 2816,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2809,
                                        "end": 2811,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2809,
                                          "end": 2811,
                                          "decorators": [],
                                          "name": "E2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2814,
                                        "end": 2816,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2814,
                                          "end": 2816,
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2818,
                                    "end": 2819,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2818,
                                      "end": 2819,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 2825,
                      "end": 3009,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2825,
                        "end": 2858,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2826,
                            "end": 2828,
                            "name": {
                              "type": "Identifier",
                              "start": 2826,
                              "end": 2828,
                              "decorators": [],
                              "name": "R1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2830,
                            "end": 2832,
                            "name": {
                              "type": "Identifier",
                              "start": 2830,
                              "end": 2832,
                              "decorators": [],
                              "name": "O1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2834,
                            "end": 2836,
                            "name": {
                              "type": "Identifier",
                              "start": 2834,
                              "end": 2836,
                              "decorators": [],
                              "name": "E1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2838,
                            "end": 2839,
                            "name": {
                              "type": "Identifier",
                              "start": 2838,
                              "end": 2839,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2841,
                            "end": 2843,
                            "name": {
                              "type": "Identifier",
                              "start": 2841,
                              "end": 2843,
                              "decorators": [],
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2845,
                            "end": 2847,
                            "name": {
                              "type": "Identifier",
                              "start": 2845,
                              "end": 2847,
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2849,
                            "end": 2851,
                            "name": {
                              "type": "Identifier",
                              "start": 2849,
                              "end": 2851,
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2853,
                            "end": 2854,
                            "name": {
                              "type": "Identifier",
                              "start": 2853,
                              "end": 2854,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2856,
                            "end": 2857,
                            "name": {
                              "type": "Identifier",
                              "start": 2856,
                              "end": 2857,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2868,
                          "end": 2896,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2872,
                            "end": 2896,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2874,
                              "end": 2896,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2874,
                                "end": 2878,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2878,
                                "end": 2896,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2879,
                                    "end": 2880,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2879,
                                      "end": 2880,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2882,
                                    "end": 2884,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2882,
                                      "end": 2884,
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2886,
                                    "end": 2888,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2886,
                                      "end": 2888,
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2890,
                                    "end": 2892,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2890,
                                      "end": 2892,
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2894,
                                    "end": 2895,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2894,
                                      "end": 2895,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2906,
                          "end": 2934,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2910,
                            "end": 2934,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2912,
                              "end": 2934,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2912,
                                "end": 2916,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2916,
                                "end": 2934,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2917,
                                    "end": 2918,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2917,
                                      "end": 2918,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2920,
                                    "end": 2922,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2920,
                                      "end": 2922,
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2924,
                                    "end": 2926,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2924,
                                      "end": 2926,
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2928,
                                    "end": 2930,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2928,
                                      "end": 2930,
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2932,
                                    "end": 2933,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2932,
                                      "end": 2933,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2944,
                          "end": 2964,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2945,
                            "end": 2964,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 2947,
                              "end": 2964,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2948,
                                  "end": 2952,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2949,
                                    "end": 2952,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2951,
                                      "end": 2952,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2951,
                                        "end": 2952,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 2954,
                                  "end": 2958,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2955,
                                    "end": 2958,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2957,
                                      "end": 2958,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2957,
                                        "end": 2958,
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2960,
                                "end": 2964,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2963,
                                  "end": 2964,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2963,
                                    "end": 2964,
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2970,
                        "end": 3009,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2972,
                          "end": 3009,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2972,
                            "end": 2976,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2976,
                            "end": 3009,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2977,
                                "end": 2978,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2977,
                                  "end": 2978,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSIntersectionType",
                                "start": 2980,
                                "end": 2987,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2980,
                                    "end": 2982,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2980,
                                      "end": 2982,
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2985,
                                    "end": 2987,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2985,
                                      "end": 2987,
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              },
                              {
                                "type": "TSUnionType",
                                "start": 2989,
                                "end": 2996,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2989,
                                    "end": 2991,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2989,
                                      "end": 2991,
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2994,
                                    "end": 2996,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2994,
                                      "end": 2996,
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              },
                              {
                                "type": "TSUnionType",
                                "start": 2998,
                                "end": 3005,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2998,
                                    "end": 3000,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2998,
                                      "end": 3000,
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3003,
                                    "end": 3005,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3003,
                                      "end": 3005,
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 3007,
                                "end": 3008,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3007,
                                  "end": 3008,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "body": {
                "type": "CallExpression",
                "start": 3019,
                "end": 3303,
                "callee": {
                  "type": "Identifier",
                  "start": 3019,
                  "end": 3023,
                  "decorators": [],
                  "name": "dual",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 3033,
                    "end": 3034,
                    "value": 3,
                    "raw": "3"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 3044,
                    "end": 3297,
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 3044,
                      "end": 3077,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 3045,
                          "end": 3047,
                          "name": {
                            "type": "Identifier",
                            "start": 3045,
                            "end": 3047,
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3049,
                          "end": 3051,
                          "name": {
                            "type": "Identifier",
                            "start": 3049,
                            "end": 3051,
                            "decorators": [],
                            "name": "O1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3053,
                          "end": 3055,
                          "name": {
                            "type": "Identifier",
                            "start": 3053,
                            "end": 3055,
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3057,
                          "end": 3058,
                          "name": {
                            "type": "Identifier",
                            "start": 3057,
                            "end": 3058,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3060,
                          "end": 3062,
                          "name": {
                            "type": "Identifier",
                            "start": 3060,
                            "end": 3062,
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3064,
                          "end": 3066,
                          "name": {
                            "type": "Identifier",
                            "start": 3064,
                            "end": 3066,
                            "decorators": [],
                            "name": "O2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3068,
                          "end": 3070,
                          "name": {
                            "type": "Identifier",
                            "start": 3068,
                            "end": 3070,
                            "decorators": [],
                            "name": "E2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3072,
                          "end": 3073,
                          "name": {
                            "type": "Identifier",
                            "start": 3072,
                            "end": 3073,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3075,
                          "end": 3076,
                          "name": {
                            "type": "Identifier",
                            "start": 3075,
                            "end": 3076,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 3091,
                        "end": 3119,
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3095,
                          "end": 3119,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3097,
                            "end": 3119,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3097,
                              "end": 3101,
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3101,
                              "end": 3119,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3102,
                                  "end": 3103,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3102,
                                    "end": 3103,
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3105,
                                  "end": 3107,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3105,
                                    "end": 3107,
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3109,
                                  "end": 3111,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3109,
                                    "end": 3111,
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3113,
                                  "end": 3115,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3113,
                                    "end": 3115,
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3117,
                                  "end": 3118,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3117,
                                    "end": 3118,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3133,
                        "end": 3161,
                        "decorators": [],
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3137,
                          "end": 3161,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3139,
                            "end": 3161,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3139,
                              "end": 3143,
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3143,
                              "end": 3161,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3144,
                                  "end": 3145,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3144,
                                    "end": 3145,
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3147,
                                  "end": 3149,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3147,
                                    "end": 3149,
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3151,
                                  "end": 3153,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3151,
                                    "end": 3153,
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3155,
                                  "end": 3157,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3155,
                                    "end": 3157,
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3159,
                                  "end": 3160,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3159,
                                    "end": 3160,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3175,
                        "end": 3195,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3176,
                          "end": 3195,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3178,
                            "end": 3195,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3179,
                                "end": 3183,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3180,
                                  "end": 3183,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3182,
                                    "end": 3183,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3182,
                                      "end": 3183,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 3185,
                                "end": 3189,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3186,
                                  "end": 3189,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3188,
                                    "end": 3189,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3188,
                                      "end": 3189,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3191,
                              "end": 3195,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3194,
                                "end": 3195,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3194,
                                  "end": 3195,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3205,
                      "end": 3244,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3207,
                        "end": 3244,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3207,
                          "end": 3211,
                          "decorators": [],
                          "name": "Kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3211,
                          "end": 3244,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3212,
                              "end": 3213,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3212,
                                "end": 3213,
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSIntersectionType",
                              "start": 3215,
                              "end": 3222,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3215,
                                  "end": 3217,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3215,
                                    "end": 3217,
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3220,
                                  "end": 3222,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3220,
                                    "end": 3222,
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSUnionType",
                              "start": 3224,
                              "end": 3231,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3224,
                                  "end": 3226,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3224,
                                    "end": 3226,
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3229,
                                  "end": 3231,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3229,
                                    "end": 3231,
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSUnionType",
                              "start": 3233,
                              "end": 3240,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3233,
                                  "end": 3235,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3233,
                                    "end": 3235,
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3238,
                                  "end": 3240,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3238,
                                    "end": 3240,
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 3242,
                              "end": 3243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3242,
                                "end": 3243,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": {
                      "type": "CallExpression",
                      "start": 3248,
                      "end": 3297,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3248,
                        "end": 3253,
                        "object": {
                          "type": "Identifier",
                          "start": 3248,
                          "end": 3249,
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3250,
                          "end": 3253,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 3254,
                          "end": 3275,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3254,
                            "end": 3263,
                            "object": {
                              "type": "Identifier",
                              "start": 3254,
                              "end": 3255,
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3256,
                              "end": 3263,
                              "decorators": [],
                              "name": "product",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 3264,
                              "end": 3268,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 3270,
                              "end": 3274,
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3277,
                          "end": 3296,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "start": 3278,
                              "end": 3284,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 3279,
                                  "end": 3280,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 3282,
                                  "end": 3283,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "start": 3289,
                            "end": 3296,
                            "callee": {
                              "type": "Identifier",
                              "start": 3289,
                              "end": 3290,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 3291,
                                "end": 3292,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 3294,
                                "end": 3295,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3307,
      "end": 3888,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3314,
        "end": 3888,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3320,
            "end": 3887,
            "id": {
              "type": "Identifier",
              "start": 3320,
              "end": 3328,
              "decorators": [],
              "name": "zipRight",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 3331,
              "end": 3887,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3331,
                "end": 3353,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3332,
                    "end": 3352,
                    "name": {
                      "type": "Identifier",
                      "start": 3332,
                      "end": 3333,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3342,
                      "end": 3352,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3342,
                        "end": 3352,
                        "decorators": [],
                        "name": "TypeLambda",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
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
                  "start": 3354,
                  "end": 3375,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3355,
                    "end": 3375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3357,
                      "end": 3375,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3357,
                        "end": 3372,
                        "decorators": [],
                        "name": "SemiApplicative",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3372,
                        "end": 3375,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3373,
                            "end": 3374,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3373,
                              "end": 3374,
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3376,
                "end": 3689,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 3378,
                  "end": 3689,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 3384,
                      "end": 3531,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3384,
                        "end": 3399,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3385,
                            "end": 3387,
                            "name": {
                              "type": "Identifier",
                              "start": 3385,
                              "end": 3387,
                              "decorators": [],
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3389,
                            "end": 3391,
                            "name": {
                              "type": "Identifier",
                              "start": 3389,
                              "end": 3391,
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3393,
                            "end": 3395,
                            "name": {
                              "type": "Identifier",
                              "start": 3393,
                              "end": 3395,
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3397,
                            "end": 3398,
                            "name": {
                              "type": "Identifier",
                              "start": 3397,
                              "end": 3398,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 3409,
                          "end": 3437,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3413,
                            "end": 3437,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3415,
                              "end": 3437,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3415,
                                "end": 3419,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3419,
                                "end": 3437,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3420,
                                    "end": 3421,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3420,
                                      "end": 3421,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3423,
                                    "end": 3425,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3423,
                                      "end": 3425,
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3427,
                                    "end": 3429,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3427,
                                      "end": 3429,
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3431,
                                    "end": 3433,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3431,
                                      "end": 3433,
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3435,
                                    "end": 3436,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3435,
                                      "end": 3436,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3443,
                        "end": 3531,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 3445,
                          "end": 3531,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 3445,
                            "end": 3460,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 3446,
                                "end": 3448,
                                "name": {
                                  "type": "Identifier",
                                  "start": 3446,
                                  "end": 3448,
                                  "decorators": [],
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 3450,
                                "end": 3452,
                                "name": {
                                  "type": "Identifier",
                                  "start": 3450,
                                  "end": 3452,
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 3454,
                                "end": 3456,
                                "name": {
                                  "type": "Identifier",
                                  "start": 3454,
                                  "end": 3456,
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 3458,
                                "end": 3459,
                                "name": {
                                  "type": "Identifier",
                                  "start": 3458,
                                  "end": 3459,
                                  "decorators": [],
                                  "name": "_",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 3461,
                              "end": 3489,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3465,
                                "end": 3489,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3467,
                                  "end": 3489,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3467,
                                    "end": 3471,
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 3471,
                                    "end": 3489,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3472,
                                        "end": 3473,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3472,
                                          "end": 3473,
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3475,
                                        "end": 3477,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3475,
                                          "end": 3477,
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3479,
                                        "end": 3481,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3479,
                                          "end": 3481,
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3483,
                                        "end": 3485,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3483,
                                          "end": 3485,
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3487,
                                        "end": 3488,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3487,
                                          "end": 3488,
                                          "decorators": [],
                                          "name": "_",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3491,
                            "end": 3531,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3494,
                              "end": 3531,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3494,
                                "end": 3498,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3498,
                                "end": 3531,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3499,
                                    "end": 3500,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3499,
                                      "end": 3500,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "start": 3502,
                                    "end": 3509,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3502,
                                        "end": 3504,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3502,
                                          "end": 3504,
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3507,
                                        "end": 3509,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3507,
                                          "end": 3509,
                                          "decorators": [],
                                          "name": "R2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "start": 3511,
                                    "end": 3518,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3511,
                                        "end": 3513,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3511,
                                          "end": 3513,
                                          "decorators": [],
                                          "name": "O2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3516,
                                        "end": 3518,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3516,
                                          "end": 3518,
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "start": 3520,
                                    "end": 3527,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3520,
                                        "end": 3522,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3520,
                                          "end": 3522,
                                          "decorators": [],
                                          "name": "E2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3525,
                                        "end": 3527,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3525,
                                          "end": 3527,
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3529,
                                    "end": 3530,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3529,
                                      "end": 3530,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 3536,
                      "end": 3687,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3536,
                        "end": 3566,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3537,
                            "end": 3539,
                            "name": {
                              "type": "Identifier",
                              "start": 3537,
                              "end": 3539,
                              "decorators": [],
                              "name": "R1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3541,
                            "end": 3543,
                            "name": {
                              "type": "Identifier",
                              "start": 3541,
                              "end": 3543,
                              "decorators": [],
                              "name": "O1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3545,
                            "end": 3547,
                            "name": {
                              "type": "Identifier",
                              "start": 3545,
                              "end": 3547,
                              "decorators": [],
                              "name": "E1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3549,
                            "end": 3550,
                            "name": {
                              "type": "Identifier",
                              "start": 3549,
                              "end": 3550,
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3552,
                            "end": 3554,
                            "name": {
                              "type": "Identifier",
                              "start": 3552,
                              "end": 3554,
                              "decorators": [],
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3556,
                            "end": 3558,
                            "name": {
                              "type": "Identifier",
                              "start": 3556,
                              "end": 3558,
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3560,
                            "end": 3562,
                            "name": {
                              "type": "Identifier",
                              "start": 3560,
                              "end": 3562,
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 3564,
                            "end": 3565,
                            "name": {
                              "type": "Identifier",
                              "start": 3564,
                              "end": 3565,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 3576,
                          "end": 3604,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3580,
                            "end": 3604,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3582,
                              "end": 3604,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3582,
                                "end": 3586,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3586,
                                "end": 3604,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3587,
                                    "end": 3588,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3587,
                                      "end": 3588,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3590,
                                    "end": 3592,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3590,
                                      "end": 3592,
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3594,
                                    "end": 3596,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3594,
                                      "end": 3596,
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3598,
                                    "end": 3600,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3598,
                                      "end": 3600,
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3602,
                                    "end": 3603,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3602,
                                      "end": 3603,
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 3614,
                          "end": 3642,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3618,
                            "end": 3642,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3620,
                              "end": 3642,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3620,
                                "end": 3624,
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3624,
                                "end": 3642,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3625,
                                    "end": 3626,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3625,
                                      "end": 3626,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3628,
                                    "end": 3630,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3628,
                                      "end": 3630,
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3632,
                                    "end": 3634,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3632,
                                      "end": 3634,
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3636,
                                    "end": 3638,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3636,
                                      "end": 3638,
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3640,
                                    "end": 3641,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3640,
                                      "end": 3641,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3648,
                        "end": 3687,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3650,
                          "end": 3687,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3650,
                            "end": 3654,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3654,
                            "end": 3687,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3655,
                                "end": 3656,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3655,
                                  "end": 3656,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSIntersectionType",
                                "start": 3658,
                                "end": 3665,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3658,
                                    "end": 3660,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3658,
                                      "end": 3660,
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3663,
                                    "end": 3665,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3663,
                                      "end": 3665,
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              },
                              {
                                "type": "TSUnionType",
                                "start": 3667,
                                "end": 3674,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3667,
                                    "end": 3669,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3667,
                                      "end": 3669,
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3672,
                                    "end": 3674,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3672,
                                      "end": 3674,
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              },
                              {
                                "type": "TSUnionType",
                                "start": 3676,
                                "end": 3683,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3676,
                                    "end": 3678,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3676,
                                      "end": 3678,
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3681,
                                    "end": 3683,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3681,
                                      "end": 3683,
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 3685,
                                "end": 3686,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3685,
                                  "end": 3686,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "body": {
                "type": "CallExpression",
                "start": 3697,
                "end": 3887,
                "callee": {
                  "type": "Identifier",
                  "start": 3697,
                  "end": 3701,
                  "decorators": [],
                  "name": "dual",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 3702,
                    "end": 3703,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 3705,
                    "end": 3886,
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 3705,
                      "end": 3735,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 3706,
                          "end": 3708,
                          "name": {
                            "type": "Identifier",
                            "start": 3706,
                            "end": 3708,
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3710,
                          "end": 3712,
                          "name": {
                            "type": "Identifier",
                            "start": 3710,
                            "end": 3712,
                            "decorators": [],
                            "name": "O1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3714,
                          "end": 3716,
                          "name": {
                            "type": "Identifier",
                            "start": 3714,
                            "end": 3716,
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3718,
                          "end": 3719,
                          "name": {
                            "type": "Identifier",
                            "start": 3718,
                            "end": 3719,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3721,
                          "end": 3723,
                          "name": {
                            "type": "Identifier",
                            "start": 3721,
                            "end": 3723,
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3725,
                          "end": 3727,
                          "name": {
                            "type": "Identifier",
                            "start": 3725,
                            "end": 3727,
                            "decorators": [],
                            "name": "O2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3729,
                          "end": 3731,
                          "name": {
                            "type": "Identifier",
                            "start": 3729,
                            "end": 3731,
                            "decorators": [],
                            "name": "E2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 3733,
                          "end": 3734,
                          "name": {
                            "type": "Identifier",
                            "start": 3733,
                            "end": 3734,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 3745,
                        "end": 3773,
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3749,
                          "end": 3773,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3751,
                            "end": 3773,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3751,
                              "end": 3755,
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3755,
                              "end": 3773,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3756,
                                  "end": 3757,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3756,
                                    "end": 3757,
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3759,
                                  "end": 3761,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3759,
                                    "end": 3761,
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3763,
                                  "end": 3765,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3763,
                                    "end": 3765,
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3767,
                                  "end": 3769,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3767,
                                    "end": 3769,
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3771,
                                  "end": 3772,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3771,
                                    "end": 3772,
                                    "decorators": [],
                                    "name": "_",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3783,
                        "end": 3811,
                        "decorators": [],
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3787,
                          "end": 3811,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3789,
                            "end": 3811,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3789,
                              "end": 3793,
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3793,
                              "end": 3811,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3794,
                                  "end": 3795,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3794,
                                    "end": 3795,
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3797,
                                  "end": 3799,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3797,
                                    "end": 3799,
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3801,
                                  "end": 3803,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3801,
                                    "end": 3803,
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3805,
                                  "end": 3807,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3805,
                                    "end": 3807,
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3809,
                                  "end": 3810,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3809,
                                    "end": 3810,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3817,
                      "end": 3856,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3819,
                        "end": 3856,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3819,
                          "end": 3823,
                          "decorators": [],
                          "name": "Kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3823,
                          "end": 3856,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3824,
                              "end": 3825,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3824,
                                "end": 3825,
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSIntersectionType",
                              "start": 3827,
                              "end": 3834,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3827,
                                  "end": 3829,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3827,
                                    "end": 3829,
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3832,
                                  "end": 3834,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3832,
                                    "end": 3834,
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSUnionType",
                              "start": 3836,
                              "end": 3843,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3836,
                                  "end": 3838,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3836,
                                    "end": 3838,
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3841,
                                  "end": 3843,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3841,
                                    "end": 3843,
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSUnionType",
                              "start": 3845,
                              "end": 3852,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3845,
                                  "end": 3847,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3845,
                                    "end": 3847,
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3850,
                                  "end": 3852,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3850,
                                    "end": 3852,
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 3854,
                              "end": 3855,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3854,
                                "end": 3855,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": {
                      "type": "CallExpression",
                      "start": 3860,
                      "end": 3886,
                      "callee": {
                        "type": "CallExpression",
                        "start": 3860,
                        "end": 3870,
                        "callee": {
                          "type": "Identifier",
                          "start": 3860,
                          "end": 3867,
                          "decorators": [],
                          "name": "zipWith",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3868,
                            "end": 3869,
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3871,
                          "end": 3875,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 3877,
                          "end": 3881,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 3883,
                          "end": 3885,
                          "decorators": [],
                          "name": "SK",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
