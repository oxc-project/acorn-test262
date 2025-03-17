__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3622,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1810,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 25,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 1810,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 52,
              "name": "IIndexable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 52,
              "end": 55,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 53,
                  "end": 54,
                  "name": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
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
              "start": 56,
              "end": 87,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 66,
                  "end": 81,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 76,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 68,
                        "end": 76,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 70,
                          "end": 76
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 79,
                      "end": 80,
                      "typeName": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 92,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 123,
              "name": "createIntrinsicsObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 123,
              "end": 126,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 124,
                  "end": 125,
                  "name": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 143,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 140,
                  "name": "IIndexable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 140,
                  "end": 143,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "T",
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 149,
            "end": 620,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 169,
              "name": "IHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 169,
              "end": 172,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 170,
                  "end": 171,
                  "name": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
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
              "start": 173,
              "end": 620,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 183,
                  "end": 206,
                  "key": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 193,
                    "name": "getAllKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 197,
                      "end": 205,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      }
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 215,
                  "end": 250,
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 219,
                      "end": 230,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 222,
                        "end": 230,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 224,
                          "end": 230
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 232,
                      "end": 239,
                      "name": "data",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 236,
                        "end": 239,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 238,
                          "end": 239,
                          "typeName": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
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
                    "start": 240,
                    "end": 249,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 242,
                      "end": 249
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 259,
                  "end": 302,
                  "key": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 270,
                    "name": "addOrUpdate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 271,
                      "end": 282,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 274,
                        "end": 282,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 276,
                          "end": 282
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 284,
                      "end": 291,
                      "name": "data",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 288,
                        "end": 291,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 290,
                          "end": 291,
                          "typeName": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 291,
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
                    "start": 292,
                    "end": 301,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 294,
                      "end": 301
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 311,
                  "end": 384,
                  "key": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 314,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 315,
                      "end": 362,
                      "name": "fn",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 317,
                        "end": 362,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 319,
                          "end": 362,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 320,
                              "end": 329,
                              "name": "k",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 321,
                                "end": 329,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 323,
                                  "end": 329
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 331,
                              "end": 339,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 336,
                                "end": 339,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 338,
                                  "end": 339,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 338,
                                    "end": 339,
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
                            },
                            {
                              "type": "Identifier",
                              "start": 341,
                              "end": 353,
                              "name": "context",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 348,
                                "end": 353,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 350,
                                  "end": 353
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 355,
                            "end": 362,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 358,
                              "end": 362
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 364,
                      "end": 376,
                      "name": "context",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 371,
                        "end": 376,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 373,
                          "end": 376
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 379,
                      "end": 383
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 393,
                  "end": 471,
                  "key": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 398,
                    "name": "every",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 399,
                      "end": 446,
                      "name": "fn",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 401,
                        "end": 446,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 403,
                          "end": 446,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 404,
                              "end": 413,
                              "name": "k",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 405,
                                "end": 413,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 407,
                                  "end": 413
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 415,
                              "end": 423,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 420,
                                "end": 423,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 422,
                                  "end": 423,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 422,
                                    "end": 423,
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
                            },
                            {
                              "type": "Identifier",
                              "start": 425,
                              "end": 437,
                              "name": "context",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 432,
                                "end": 437,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 434,
                                  "end": 437
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 439,
                            "end": 446,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 442,
                              "end": 446
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 448,
                      "end": 460,
                      "name": "context",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 455,
                        "end": 460,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 457,
                          "end": 460
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 461,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 463,
                      "end": 470
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 480,
                  "end": 557,
                  "key": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 484,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 485,
                      "end": 532,
                      "name": "fn",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 487,
                        "end": 532,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 489,
                          "end": 532,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 490,
                              "end": 499,
                              "name": "k",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 491,
                                "end": 499,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 493,
                                  "end": 499
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 501,
                              "end": 509,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 506,
                                "end": 509,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 508,
                                  "end": 509,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 508,
                                    "end": 509,
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
                            },
                            {
                              "type": "Identifier",
                              "start": 511,
                              "end": 523,
                              "name": "context",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 518,
                                "end": 523,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 520,
                                  "end": 523
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 525,
                            "end": 532,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 528,
                              "end": 532
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 534,
                      "end": 546,
                      "name": "context",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 541,
                        "end": 546,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 543,
                          "end": 546
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 547,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 549,
                      "end": 556
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 566,
                  "end": 582,
                  "key": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 571,
                    "name": "count",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 573,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 591,
                  "end": 614,
                  "key": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 597,
                    "name": "lookup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 598,
                      "end": 609,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 601,
                        "end": 609,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 603,
                          "end": 609
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 610,
                    "end": 613,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 612,
                      "end": 613,
                      "typeName": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 613,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "type": "ClassDeclaration",
            "start": 625,
            "end": 1270,
            "id": {
              "type": "Identifier",
              "start": 631,
              "end": 646,
              "name": "StringHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 675,
              "end": 1270,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 685,
                  "end": 703,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 702,
                    "name": "itemCount",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 712,
                  "end": 726,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 725,
                    "name": "table",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 735,
                  "end": 765,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 752,
                    "name": "getAllKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 752,
                    "end": 765,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 754,
                      "end": 764,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 756,
                        "end": 764,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 756,
                          "end": 762
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 774,
                  "end": 816,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 781,
                    "end": 784,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 784,
                    "end": 816,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 785,
                        "end": 796,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 788,
                          "end": 796,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 790,
                            "end": 796
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 798,
                        "end": 805,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 802,
                          "end": 805,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 804,
                            "end": 805,
                            "typeName": {
                              "type": "Identifier",
                              "start": 804,
                              "end": 805,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 806,
                      "end": 815,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 808,
                        "end": 815
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 825,
                  "end": 875,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 843,
                    "name": "addOrUpdate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 843,
                    "end": 875,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 844,
                        "end": 855,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 847,
                          "end": 855,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 849,
                            "end": 855
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 857,
                        "end": 864,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 861,
                          "end": 864,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 863,
                            "end": 864,
                            "typeName": {
                              "type": "Identifier",
                              "start": 863,
                              "end": 864,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 865,
                      "end": 874,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 867,
                        "end": 874
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 884,
                  "end": 964,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 894,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 894,
                    "end": 964,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 895,
                        "end": 942,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 897,
                          "end": 942,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 899,
                            "end": 942,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 900,
                                "end": 909,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 901,
                                  "end": 909,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 903,
                                    "end": 909
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 911,
                                "end": 919,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 916,
                                  "end": 919,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 918,
                                    "end": 919,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 918,
                                      "end": 919,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 921,
                                "end": 933,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 928,
                                  "end": 933,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 930,
                                    "end": 933
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 935,
                              "end": 942,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 938,
                                "end": 942
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 944,
                        "end": 956,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 951,
                          "end": 956,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 953,
                            "end": 956
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 957,
                      "end": 963,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 959,
                        "end": 963
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 973,
                  "end": 1058,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 980,
                    "end": 985,
                    "name": "every",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 985,
                    "end": 1058,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 986,
                        "end": 1033,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 988,
                          "end": 1033,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 990,
                            "end": 1033,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 991,
                                "end": 1000,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 992,
                                  "end": 1000,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 994,
                                    "end": 1000
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1002,
                                "end": 1010,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1007,
                                  "end": 1010,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1009,
                                    "end": 1010,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1009,
                                      "end": 1010,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 1012,
                                "end": 1024,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1019,
                                  "end": 1024,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1021,
                                    "end": 1024
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1026,
                              "end": 1033,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1029,
                                "end": 1033
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1035,
                        "end": 1047,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1042,
                          "end": 1047,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1044,
                            "end": 1047
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1048,
                      "end": 1057,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1050,
                        "end": 1057
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1067,
                  "end": 1151,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1074,
                    "end": 1078,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1078,
                    "end": 1151,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1126,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1081,
                          "end": 1126,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1083,
                            "end": 1126,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1084,
                                "end": 1093,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1085,
                                  "end": 1093,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1087,
                                    "end": 1093
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1095,
                                "end": 1103,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1100,
                                  "end": 1103,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1102,
                                    "end": 1103,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1102,
                                      "end": 1103,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 1105,
                                "end": 1117,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1112,
                                  "end": 1117,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1114,
                                    "end": 1117
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1119,
                              "end": 1126,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1122,
                                "end": 1126
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1128,
                        "end": 1140,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1135,
                          "end": 1140,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1137,
                            "end": 1140
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1141,
                      "end": 1150,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1143,
                        "end": 1150
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1160,
                  "end": 1183,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1167,
                    "end": 1172,
                    "name": "count",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1172,
                    "end": 1183,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1174,
                      "end": 1182,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1176,
                        "end": 1182
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1192,
                  "end": 1222,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1199,
                    "end": 1205,
                    "name": "lookup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1205,
                    "end": 1222,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1206,
                        "end": 1217,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1209,
                          "end": 1217,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1211,
                            "end": 1217
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1218,
                      "end": 1221,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1220,
                        "end": 1221,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1220,
                          "end": 1221,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1231,
                  "end": 1264,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1238,
                    "end": 1244,
                    "name": "remove",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1244,
                    "end": 1264,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1245,
                        "end": 1256,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1248,
                          "end": 1256,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1250,
                            "end": 1256
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1257,
                      "end": 1263,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1259,
                        "end": 1263
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 646,
              "end": 649,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 647,
                  "end": 648,
                  "name": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 648,
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
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 661,
                "end": 674,
                "expression": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 671,
                  "name": "IHashTable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 671,
                  "end": 674,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 672,
                      "end": 673,
                      "typeName": {
                        "type": "Identifier",
                        "start": 672,
                        "end": 673,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1275,
            "end": 1808,
            "id": {
              "type": "Identifier",
              "start": 1281,
              "end": 1304,
              "name": "IdentifierNameHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1316,
              "end": 1331,
              "name": "StringHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1335,
              "end": 1808,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1345,
                  "end": 1375,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1352,
                    "end": 1362,
                    "name": "getAllKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1362,
                    "end": 1375,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1364,
                      "end": 1374,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1366,
                        "end": 1374,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1366,
                          "end": 1372
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1384,
                  "end": 1426,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1391,
                    "end": 1394,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1394,
                    "end": 1426,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1395,
                        "end": 1406,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1398,
                          "end": 1406,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1400,
                            "end": 1406
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1415,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1412,
                          "end": 1415,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1414,
                            "end": 1415,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1414,
                              "end": 1415,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1416,
                      "end": 1425,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1418,
                        "end": 1425
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1435,
                  "end": 1485,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1453,
                    "name": "addOrUpdate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1453,
                    "end": 1485,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1454,
                        "end": 1465,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1457,
                          "end": 1465,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1459,
                            "end": 1465
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1467,
                        "end": 1474,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1471,
                          "end": 1474,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1473,
                            "end": 1474,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1473,
                              "end": 1474,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1475,
                      "end": 1484,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1477,
                        "end": 1484
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1494,
                  "end": 1574,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1501,
                    "end": 1504,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1504,
                    "end": 1574,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1505,
                        "end": 1552,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1507,
                          "end": 1552,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1509,
                            "end": 1552,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1510,
                                "end": 1519,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1511,
                                  "end": 1519,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1513,
                                    "end": 1519
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1521,
                                "end": 1529,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1526,
                                  "end": 1529,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1528,
                                    "end": 1529,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1528,
                                      "end": 1529,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 1531,
                                "end": 1543,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1538,
                                  "end": 1543,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1540,
                                    "end": 1543
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1545,
                              "end": 1552,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1548,
                                "end": 1552
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1554,
                        "end": 1566,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1561,
                          "end": 1566,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1563,
                            "end": 1566
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1567,
                      "end": 1573,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1569,
                        "end": 1573
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1583,
                  "end": 1668,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1590,
                    "end": 1595,
                    "name": "every",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1595,
                    "end": 1668,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1643,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1598,
                          "end": 1643,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1600,
                            "end": 1643,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1601,
                                "end": 1610,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1602,
                                  "end": 1610,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1604,
                                    "end": 1610
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1612,
                                "end": 1620,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1617,
                                  "end": 1620,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1619,
                                    "end": 1620,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1619,
                                      "end": 1620,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 1622,
                                "end": 1634,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1629,
                                  "end": 1634,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1631,
                                    "end": 1634
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1636,
                              "end": 1643,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1639,
                                "end": 1643
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1645,
                        "end": 1657,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1652,
                          "end": 1657,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1654,
                            "end": 1657
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1658,
                      "end": 1667,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1660,
                        "end": 1667
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1677,
                  "end": 1763,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1684,
                    "end": 1688,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1688,
                    "end": 1763,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1689,
                        "end": 1738,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1691,
                          "end": 1738,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1693,
                            "end": 1738,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1694,
                                "end": 1703,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1695,
                                  "end": 1703,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1697,
                                    "end": 1703
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1705,
                                "end": 1715,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1710,
                                  "end": 1715,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1712,
                                    "end": 1715
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1717,
                                "end": 1729,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1724,
                                  "end": 1729,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1726,
                                    "end": 1729
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1731,
                              "end": 1738,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1734,
                                "end": 1738
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1740,
                        "end": 1752,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1747,
                          "end": 1752,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1749,
                            "end": 1752
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1753,
                      "end": 1762,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1755,
                        "end": 1762
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1772,
                  "end": 1802,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1779,
                    "end": 1785,
                    "name": "lookup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1785,
                    "end": 1802,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1786,
                        "end": 1797,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1789,
                          "end": 1797,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1791,
                            "end": 1797
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1798,
                      "end": 1801,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1800,
                        "end": 1801,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1800,
                          "end": 1801,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1304,
              "end": 1307,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1305,
                  "end": 1306,
                  "name": {
                    "type": "Identifier",
                    "start": 1305,
                    "end": 1306,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1331,
              "end": 1334,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1332,
                  "end": 1333,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1332,
                    "end": 1333,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1812,
      "end": 3622,
      "id": {
        "type": "Identifier",
        "start": 1827,
        "end": 1837,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1838,
        "end": 3622,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 1844,
            "end": 1899,
            "id": {
              "type": "Identifier",
              "start": 1854,
              "end": 1864,
              "name": "IIndexable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1864,
              "end": 1867,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1865,
                  "end": 1866,
                  "name": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1866,
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
              "start": 1868,
              "end": 1899,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1878,
                  "end": 1893,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1879,
                      "end": 1888,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1880,
                        "end": 1888,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1882,
                          "end": 1888
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1889,
                    "end": 1892,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1891,
                      "end": 1892,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1891,
                        "end": 1892,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1904,
            "end": 1956,
            "id": {
              "type": "Identifier",
              "start": 1913,
              "end": 1935,
              "name": "createIntrinsicsObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1935,
              "end": 1938,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1936,
                  "end": 1937,
                  "name": {
                    "type": "Identifier",
                    "start": 1936,
                    "end": 1937,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1940,
              "end": 1955,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1942,
                "end": 1955,
                "typeName": {
                  "type": "Identifier",
                  "start": 1942,
                  "end": 1952,
                  "name": "IIndexable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1952,
                  "end": 1955,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1953,
                      "end": 1954,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1953,
                        "end": 1954,
                        "name": "T",
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1961,
            "end": 2432,
            "id": {
              "type": "Identifier",
              "start": 1971,
              "end": 1981,
              "name": "IHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1981,
              "end": 1984,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1982,
                  "end": 1983,
                  "name": {
                    "type": "Identifier",
                    "start": 1982,
                    "end": 1983,
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
              "start": 1985,
              "end": 2432,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1995,
                  "end": 2018,
                  "key": {
                    "type": "Identifier",
                    "start": 1995,
                    "end": 2005,
                    "name": "getAllKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2007,
                    "end": 2017,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2009,
                      "end": 2017,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2009,
                        "end": 2015
                      }
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2027,
                  "end": 2062,
                  "key": {
                    "type": "Identifier",
                    "start": 2027,
                    "end": 2030,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2031,
                      "end": 2042,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2034,
                        "end": 2042,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2036,
                          "end": 2042
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2044,
                      "end": 2051,
                      "name": "data",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2048,
                        "end": 2051,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2050,
                          "end": 2051,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2050,
                            "end": 2051,
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
                    "start": 2052,
                    "end": 2061,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2054,
                      "end": 2061
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2071,
                  "end": 2114,
                  "key": {
                    "type": "Identifier",
                    "start": 2071,
                    "end": 2082,
                    "name": "addOrUpdate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2083,
                      "end": 2094,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2086,
                        "end": 2094,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2088,
                          "end": 2094
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2096,
                      "end": 2103,
                      "name": "data",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2100,
                        "end": 2103,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2102,
                          "end": 2103,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2102,
                            "end": 2103,
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
                    "start": 2104,
                    "end": 2113,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2106,
                      "end": 2113
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2123,
                  "end": 2196,
                  "key": {
                    "type": "Identifier",
                    "start": 2123,
                    "end": 2126,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2127,
                      "end": 2174,
                      "name": "fn",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2129,
                        "end": 2174,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2131,
                          "end": 2174,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2132,
                              "end": 2141,
                              "name": "k",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2133,
                                "end": 2141,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2135,
                                  "end": 2141
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2143,
                              "end": 2151,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2148,
                                "end": 2151,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2150,
                                  "end": 2151,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2150,
                                    "end": 2151,
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
                            },
                            {
                              "type": "Identifier",
                              "start": 2153,
                              "end": 2165,
                              "name": "context",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2160,
                                "end": 2165,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2162,
                                  "end": 2165
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2167,
                            "end": 2174,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2170,
                              "end": 2174
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2176,
                      "end": 2188,
                      "name": "context",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2183,
                        "end": 2188,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2185,
                          "end": 2188
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2189,
                    "end": 2195,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2191,
                      "end": 2195
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2205,
                  "end": 2283,
                  "key": {
                    "type": "Identifier",
                    "start": 2205,
                    "end": 2210,
                    "name": "every",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2211,
                      "end": 2258,
                      "name": "fn",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2213,
                        "end": 2258,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2215,
                          "end": 2258,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2216,
                              "end": 2225,
                              "name": "k",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2217,
                                "end": 2225,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2219,
                                  "end": 2225
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2227,
                              "end": 2235,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2232,
                                "end": 2235,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2234,
                                  "end": 2235,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2234,
                                    "end": 2235,
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
                            },
                            {
                              "type": "Identifier",
                              "start": 2237,
                              "end": 2249,
                              "name": "context",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2244,
                                "end": 2249,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2246,
                                  "end": 2249
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2251,
                            "end": 2258,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2254,
                              "end": 2258
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2260,
                      "end": 2272,
                      "name": "context",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2267,
                        "end": 2272,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2269,
                          "end": 2272
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2273,
                    "end": 2282,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2275,
                      "end": 2282
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2292,
                  "end": 2369,
                  "key": {
                    "type": "Identifier",
                    "start": 2292,
                    "end": 2296,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2297,
                      "end": 2344,
                      "name": "fn",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2299,
                        "end": 2344,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2301,
                          "end": 2344,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2302,
                              "end": 2311,
                              "name": "k",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2303,
                                "end": 2311,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2305,
                                  "end": 2311
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2313,
                              "end": 2321,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2318,
                                "end": 2321,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2320,
                                  "end": 2321,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2320,
                                    "end": 2321,
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
                            },
                            {
                              "type": "Identifier",
                              "start": 2323,
                              "end": 2335,
                              "name": "context",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2330,
                                "end": 2335,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2332,
                                  "end": 2335
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2337,
                            "end": 2344,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2340,
                              "end": 2344
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2346,
                      "end": 2358,
                      "name": "context",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2353,
                        "end": 2358,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2355,
                          "end": 2358
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2359,
                    "end": 2368,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2361,
                      "end": 2368
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2378,
                  "end": 2394,
                  "key": {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2383,
                    "name": "count",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2385,
                    "end": 2393,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2387,
                      "end": 2393
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 2403,
                  "end": 2426,
                  "key": {
                    "type": "Identifier",
                    "start": 2403,
                    "end": 2409,
                    "name": "lookup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2410,
                      "end": 2421,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2413,
                        "end": 2421,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2415,
                          "end": 2421
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2422,
                    "end": 2425,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2424,
                      "end": 2425,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2424,
                        "end": 2425,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "type": "ClassDeclaration",
            "start": 2437,
            "end": 3082,
            "id": {
              "type": "Identifier",
              "start": 2443,
              "end": 2458,
              "name": "StringHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 2487,
              "end": 3082,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2497,
                  "end": 2515,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2505,
                    "end": 2514,
                    "name": "itemCount",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2524,
                  "end": 2538,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2532,
                    "end": 2537,
                    "name": "table",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2547,
                  "end": 2577,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2554,
                    "end": 2564,
                    "name": "getAllKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2564,
                    "end": 2577,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2566,
                      "end": 2576,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2568,
                        "end": 2576,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2568,
                          "end": 2574
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2586,
                  "end": 2628,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2593,
                    "end": 2596,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2596,
                    "end": 2628,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2597,
                        "end": 2608,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2600,
                          "end": 2608,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2602,
                            "end": 2608
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2610,
                        "end": 2617,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2614,
                          "end": 2617,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2616,
                            "end": 2617,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2616,
                              "end": 2617,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2618,
                      "end": 2627,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2620,
                        "end": 2627
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2637,
                  "end": 2687,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2644,
                    "end": 2655,
                    "name": "addOrUpdate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2655,
                    "end": 2687,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2656,
                        "end": 2667,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2659,
                          "end": 2667,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2661,
                            "end": 2667
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2669,
                        "end": 2676,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2673,
                          "end": 2676,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2675,
                            "end": 2676,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2675,
                              "end": 2676,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2677,
                      "end": 2686,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2679,
                        "end": 2686
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2696,
                  "end": 2776,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2703,
                    "end": 2706,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2706,
                    "end": 2776,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2707,
                        "end": 2754,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2709,
                          "end": 2754,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2711,
                            "end": 2754,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2712,
                                "end": 2721,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2713,
                                  "end": 2721,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2715,
                                    "end": 2721
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2723,
                                "end": 2731,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2728,
                                  "end": 2731,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2730,
                                    "end": 2731,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2730,
                                      "end": 2731,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 2733,
                                "end": 2745,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2740,
                                  "end": 2745,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2742,
                                    "end": 2745
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2747,
                              "end": 2754,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2750,
                                "end": 2754
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2756,
                        "end": 2768,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2763,
                          "end": 2768,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2765,
                            "end": 2768
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2769,
                      "end": 2775,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2771,
                        "end": 2775
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2785,
                  "end": 2870,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2792,
                    "end": 2797,
                    "name": "every",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2797,
                    "end": 2870,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2798,
                        "end": 2845,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2800,
                          "end": 2845,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2802,
                            "end": 2845,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2803,
                                "end": 2812,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2804,
                                  "end": 2812,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2806,
                                    "end": 2812
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2814,
                                "end": 2822,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2819,
                                  "end": 2822,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2821,
                                    "end": 2822,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2821,
                                      "end": 2822,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 2824,
                                "end": 2836,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2831,
                                  "end": 2836,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2833,
                                    "end": 2836
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2838,
                              "end": 2845,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2841,
                                "end": 2845
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2847,
                        "end": 2859,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2854,
                          "end": 2859,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2856,
                            "end": 2859
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2860,
                      "end": 2869,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2862,
                        "end": 2869
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2879,
                  "end": 2963,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2886,
                    "end": 2890,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2890,
                    "end": 2963,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2891,
                        "end": 2938,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2893,
                          "end": 2938,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2895,
                            "end": 2938,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2896,
                                "end": 2905,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2897,
                                  "end": 2905,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2899,
                                    "end": 2905
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2907,
                                "end": 2915,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2912,
                                  "end": 2915,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2914,
                                    "end": 2915,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2914,
                                      "end": 2915,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 2917,
                                "end": 2929,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2924,
                                  "end": 2929,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2926,
                                    "end": 2929
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2931,
                              "end": 2938,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2934,
                                "end": 2938
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2940,
                        "end": 2952,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2947,
                          "end": 2952,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2949,
                            "end": 2952
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2953,
                      "end": 2962,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2955,
                        "end": 2962
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2972,
                  "end": 2995,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2979,
                    "end": 2984,
                    "name": "count",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2984,
                    "end": 2995,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2986,
                      "end": 2994,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2988,
                        "end": 2994
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3004,
                  "end": 3034,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3011,
                    "end": 3017,
                    "name": "lookup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3017,
                    "end": 3034,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3018,
                        "end": 3029,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3021,
                          "end": 3029,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3023,
                            "end": 3029
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3030,
                      "end": 3033,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3032,
                        "end": 3033,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3032,
                          "end": 3033,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3043,
                  "end": 3076,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3050,
                    "end": 3056,
                    "name": "remove",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3056,
                    "end": 3076,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3057,
                        "end": 3068,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3060,
                          "end": 3068,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3062,
                            "end": 3068
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3069,
                      "end": 3075,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3071,
                        "end": 3075
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2458,
              "end": 2461,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2459,
                  "end": 2460,
                  "name": {
                    "type": "Identifier",
                    "start": 2459,
                    "end": 2460,
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
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2473,
                "end": 2486,
                "expression": {
                  "type": "Identifier",
                  "start": 2473,
                  "end": 2483,
                  "name": "IHashTable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2483,
                  "end": 2486,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2484,
                      "end": 2485,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2484,
                        "end": 2485,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 3087,
            "end": 3620,
            "id": {
              "type": "Identifier",
              "start": 3093,
              "end": 3116,
              "name": "IdentifierNameHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 3128,
              "end": 3143,
              "name": "StringHashTable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 3147,
              "end": 3620,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 3157,
                  "end": 3187,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3164,
                    "end": 3174,
                    "name": "getAllKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3174,
                    "end": 3187,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3176,
                      "end": 3186,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3178,
                        "end": 3186,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3178,
                          "end": 3184
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3196,
                  "end": 3238,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3203,
                    "end": 3206,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3206,
                    "end": 3238,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3207,
                        "end": 3218,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3210,
                          "end": 3218,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3212,
                            "end": 3218
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3220,
                        "end": 3227,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3224,
                          "end": 3227,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3226,
                            "end": 3227,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3226,
                              "end": 3227,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3228,
                      "end": 3237,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3230,
                        "end": 3237
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3247,
                  "end": 3297,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3254,
                    "end": 3265,
                    "name": "addOrUpdate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3265,
                    "end": 3297,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3266,
                        "end": 3277,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3269,
                          "end": 3277,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3271,
                            "end": 3277
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3279,
                        "end": 3286,
                        "name": "data",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3283,
                          "end": 3286,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3285,
                            "end": 3286,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3285,
                              "end": 3286,
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3287,
                      "end": 3296,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3289,
                        "end": 3296
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3306,
                  "end": 3386,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3313,
                    "end": 3316,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3316,
                    "end": 3386,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3317,
                        "end": 3364,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3319,
                          "end": 3364,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3321,
                            "end": 3364,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3322,
                                "end": 3331,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3323,
                                  "end": 3331,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3325,
                                    "end": 3331
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 3333,
                                "end": 3341,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3338,
                                  "end": 3341,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3340,
                                    "end": 3341,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3340,
                                      "end": 3341,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 3343,
                                "end": 3355,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3350,
                                  "end": 3355,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3352,
                                    "end": 3355
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3357,
                              "end": 3364,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3360,
                                "end": 3364
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3366,
                        "end": 3378,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3373,
                          "end": 3378,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3375,
                            "end": 3378
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3379,
                      "end": 3385,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3381,
                        "end": 3385
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3395,
                  "end": 3480,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3402,
                    "end": 3407,
                    "name": "every",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3407,
                    "end": 3480,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3408,
                        "end": 3455,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3410,
                          "end": 3455,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3412,
                            "end": 3455,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3413,
                                "end": 3422,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3414,
                                  "end": 3422,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3416,
                                    "end": 3422
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 3424,
                                "end": 3432,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3429,
                                  "end": 3432,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3431,
                                    "end": 3432,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3431,
                                      "end": 3432,
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
                              },
                              {
                                "type": "Identifier",
                                "start": 3434,
                                "end": 3446,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3441,
                                  "end": 3446,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3443,
                                    "end": 3446
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3448,
                              "end": 3455,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3451,
                                "end": 3455
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3457,
                        "end": 3469,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3464,
                          "end": 3469,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3466,
                            "end": 3469
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3470,
                      "end": 3479,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3472,
                        "end": 3479
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3489,
                  "end": 3575,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3496,
                    "end": 3500,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3500,
                    "end": 3575,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3501,
                        "end": 3550,
                        "name": "fn",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3503,
                          "end": 3550,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3505,
                            "end": 3550,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3506,
                                "end": 3515,
                                "name": "k",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3507,
                                  "end": 3515,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3509,
                                    "end": 3515
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 3517,
                                "end": 3527,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3522,
                                  "end": 3527,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3524,
                                    "end": 3527
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 3529,
                                "end": 3541,
                                "name": "context",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3536,
                                  "end": 3541,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3538,
                                    "end": 3541
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3543,
                              "end": 3550,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3546,
                                "end": 3550
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3552,
                        "end": 3564,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3559,
                          "end": 3564,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3561,
                            "end": 3564
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3565,
                      "end": 3574,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3567,
                        "end": 3574
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 3584,
                  "end": 3614,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3591,
                    "end": 3597,
                    "name": "lookup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 3597,
                    "end": 3614,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3598,
                        "end": 3609,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3601,
                          "end": 3609,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3603,
                            "end": 3609
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3610,
                      "end": 3613,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3612,
                        "end": 3613,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3612,
                          "end": 3613,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3116,
              "end": 3119,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3117,
                  "end": 3118,
                  "name": {
                    "type": "Identifier",
                    "start": 3117,
                    "end": 3118,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3143,
              "end": 3146,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3144,
                  "end": 3145,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3144,
                    "end": 3145,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
