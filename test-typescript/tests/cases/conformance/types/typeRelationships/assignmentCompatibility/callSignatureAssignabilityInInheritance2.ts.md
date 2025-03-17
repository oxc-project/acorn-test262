__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 3100,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "foo",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "name": "bar",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "name": "baz",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
              "name": "bing",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 273,
      "end": 1571,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 284,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 285,
        "end": 1571,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 334,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 333,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 310,
                "end": 333,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 311,
                    "end": 320,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 322,
                  "end": 333,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 325,
                    "end": 333,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 325,
                      "end": 331
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
            "start": 339,
            "end": 367,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 341,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 366,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 343,
                "end": 366,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 344,
                    "end": 353,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 345,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 347,
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
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 358,
                    "end": 366,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 358,
                      "end": 364
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
            "start": 372,
            "end": 396,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 374,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 395,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 376,
                "end": 395,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 377,
                    "end": 386,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 378,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 380,
                        "end": 386
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 388,
                  "end": 395,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 391,
                    "end": 395
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 401,
            "end": 438,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 403,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 437,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 405,
                "end": 437,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 406,
                    "end": 415,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 407,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 417,
                    "end": 426,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 418,
                      "end": 426,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 420,
                        "end": 426
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 437,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 443,
            "end": 486,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 445,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 485,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 447,
                "end": 485,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 448,
                    "end": 474,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 449,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 451,
                        "end": 474,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 452,
                            "end": 463,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 455,
                              "end": 463,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 457,
                                "end": 463
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 465,
                          "end": 474,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 468,
                            "end": 474
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 476,
                  "end": 485,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 479,
                    "end": 485
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 491,
            "end": 531,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 530,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 495,
                "end": 530,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 496,
                    "end": 521,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 521,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 499,
                        "end": 521,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 500,
                            "end": 509,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 503,
                              "end": 509,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 505,
                                "end": 509,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 509,
                                  "name": "Base",
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
                          "start": 511,
                          "end": 521,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 514,
                            "end": 521,
                            "typeName": {
                              "type": "Identifier",
                              "start": 514,
                              "end": 521,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 523,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 526,
                    "end": 530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 530,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 536,
            "end": 592,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 538,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 591,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 540,
                "end": 591,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 541,
                    "end": 566,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 542,
                      "end": 566,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 544,
                        "end": 566,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 545,
                            "end": 554,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 548,
                              "end": 554,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 550,
                                "end": 554,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 550,
                                  "end": 554,
                                  "name": "Base",
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
                          "start": 556,
                          "end": 566,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 559,
                            "end": 566,
                            "typeName": {
                              "type": "Identifier",
                              "start": 559,
                              "end": 566,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 568,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 571,
                    "end": 591,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 572,
                        "end": 579,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 573,
                          "end": 579,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 575,
                            "end": 579,
                            "typeName": {
                              "type": "Identifier",
                              "start": 575,
                              "end": 579,
                              "name": "Base",
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
                      "start": 581,
                      "end": 591,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 584,
                        "end": 591,
                        "typeName": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 591,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
            "start": 597,
            "end": 681,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 599,
              "end": 680,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 601,
                "end": 680,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 602,
                    "end": 627,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 627,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 605,
                        "end": 627,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 606,
                            "end": 615,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 609,
                              "end": 615,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 611,
                                "end": 615,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 611,
                                  "end": 615,
                                  "name": "Base",
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
                          "start": 617,
                          "end": 627,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 620,
                            "end": 627,
                            "typeName": {
                              "type": "Identifier",
                              "start": 620,
                              "end": 627,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 629,
                    "end": 655,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 630,
                      "end": 655,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 632,
                        "end": 655,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 633,
                            "end": 643,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 637,
                              "end": 643,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 639,
                                "end": 643,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 639,
                                  "end": 643,
                                  "name": "Base",
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
                          "start": 645,
                          "end": 655,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 648,
                            "end": 655,
                            "typeName": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 655,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 657,
                  "end": 680,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 660,
                    "end": 680,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 661,
                        "end": 668,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 662,
                          "end": 668,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 664,
                            "end": 668,
                            "typeName": {
                              "type": "Identifier",
                              "start": 664,
                              "end": 668,
                              "name": "Base",
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
                      "start": 670,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 673,
                        "end": 680,
                        "typeName": {
                          "type": "Identifier",
                          "start": 673,
                          "end": 680,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
            "start": 686,
            "end": 770,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 686,
              "end": 688,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 769,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 690,
                "end": 769,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 691,
                    "end": 716,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 692,
                      "end": 716,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 694,
                        "end": 716,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 695,
                            "end": 704,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 698,
                              "end": 704,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 700,
                                "end": 704,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 700,
                                  "end": 704,
                                  "name": "Base",
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
                          "start": 706,
                          "end": 716,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 709,
                            "end": 716,
                            "typeName": {
                              "type": "Identifier",
                              "start": 709,
                              "end": 716,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 718,
                    "end": 744,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 719,
                      "end": 744,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 721,
                        "end": 744,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 722,
                            "end": 732,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 726,
                              "end": 732,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 728,
                                "end": 732,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 728,
                                  "end": 732,
                                  "name": "Base",
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
                          "start": 734,
                          "end": 744,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 737,
                            "end": 744,
                            "typeName": {
                              "type": "Identifier",
                              "start": 737,
                              "end": 744,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 746,
                  "end": 769,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 749,
                    "end": 769,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 750,
                        "end": 757,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 751,
                          "end": 757,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 753,
                            "end": 757,
                            "typeName": {
                              "type": "Identifier",
                              "start": 753,
                              "end": 757,
                              "name": "Base",
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
                      "start": 759,
                      "end": 769,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 762,
                        "end": 769,
                        "typeName": {
                          "type": "Identifier",
                          "start": 762,
                          "end": 769,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
            "start": 775,
            "end": 809,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 775,
              "end": 778,
              "name": "a10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 778,
              "end": 808,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 780,
                "end": 808,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 781,
                    "end": 796,
                    "argument": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 785,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 785,
                      "end": 796,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 787,
                        "end": 796,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 787,
                          "end": 794,
                          "typeName": {
                            "type": "Identifier",
                            "start": 787,
                            "end": 794,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 798,
                  "end": 808,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 801,
                    "end": 808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 808,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 814,
            "end": 881,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 817,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 817,
              "end": 880,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 819,
                "end": 880,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 820,
                    "end": 838,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 821,
                      "end": 838,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 823,
                        "end": 838,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 825,
                            "end": 836,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 825,
                              "end": 828,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 828,
                              "end": 836,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 830,
                                "end": 836
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 840,
                    "end": 871,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 841,
                      "end": 871,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 843,
                        "end": 871,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 845,
                            "end": 857,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 845,
                              "end": 848,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 848,
                              "end": 856,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 850,
                                "end": 856
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 858,
                            "end": 869,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 858,
                              "end": 861,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 861,
                              "end": 869,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 863,
                                "end": 869
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 873,
                  "end": 880,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 876,
                    "end": 880,
                    "typeName": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 880,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 886,
            "end": 946,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 886,
              "end": 889,
              "name": "a12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 889,
              "end": 945,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 891,
                "end": 945,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 892,
                    "end": 906,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 893,
                      "end": 906,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 895,
                        "end": 906,
                        "typeName": {
                          "type": "Identifier",
                          "start": 895,
                          "end": 900,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 900,
                          "end": 906,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 901,
                              "end": 905,
                              "typeName": {
                                "type": "Identifier",
                                "start": 901,
                                "end": 905,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 908,
                    "end": 926,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 909,
                      "end": 926,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 911,
                        "end": 926,
                        "typeName": {
                          "type": "Identifier",
                          "start": 911,
                          "end": 916,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 916,
                          "end": 926,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 917,
                              "end": 925,
                              "typeName": {
                                "type": "Identifier",
                                "start": 917,
                                "end": 925,
                                "name": "Derived2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 928,
                  "end": 945,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 931,
                    "end": 945,
                    "typeName": {
                      "type": "Identifier",
                      "start": 931,
                      "end": 936,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 936,
                      "end": 945,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 937,
                          "end": 944,
                          "typeName": {
                            "type": "Identifier",
                            "start": 937,
                            "end": 944,
                            "name": "Derived",
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
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 951,
            "end": 1010,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 951,
              "end": 954,
              "name": "a13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 954,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 956,
                "end": 1009,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 957,
                    "end": 971,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 958,
                      "end": 971,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 960,
                        "end": 971,
                        "typeName": {
                          "type": "Identifier",
                          "start": 960,
                          "end": 965,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 965,
                          "end": 971,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 966,
                              "end": 970,
                              "typeName": {
                                "type": "Identifier",
                                "start": 966,
                                "end": 970,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 973,
                    "end": 990,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 974,
                      "end": 990,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 976,
                        "end": 990,
                        "typeName": {
                          "type": "Identifier",
                          "start": 976,
                          "end": 981,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 981,
                          "end": 990,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 982,
                              "end": 989,
                              "typeName": {
                                "type": "Identifier",
                                "start": 982,
                                "end": 989,
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 992,
                  "end": 1009,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 995,
                    "end": 1009,
                    "typeName": {
                      "type": "Identifier",
                      "start": 995,
                      "end": 1000,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1000,
                      "end": 1009,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1001,
                          "end": 1008,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1001,
                            "end": 1008,
                            "name": "Derived",
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
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1015,
            "end": 1060,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1018,
              "name": "a14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1018,
              "end": 1059,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1020,
                "end": 1059,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1021,
                    "end": 1048,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1022,
                      "end": 1048,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1024,
                        "end": 1048,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1026,
                            "end": 1036,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1026,
                              "end": 1027,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1027,
                              "end": 1035,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1029,
                                "end": 1035
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1037,
                            "end": 1046,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1037,
                              "end": 1038,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1038,
                              "end": 1046,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1040,
                                "end": 1046
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1050,
                  "end": 1059,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1053,
                    "end": 1059,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1053,
                      "end": 1059,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1065,
            "end": 1140,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1065,
              "end": 1068,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1068,
              "end": 1139,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1070,
                "end": 1139,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1080,
                    "end": 1102,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1081,
                        "end": 1090,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1082,
                          "end": 1090,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1084,
                            "end": 1090
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1091,
                      "end": 1101,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1093,
                        "end": 1101,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1093,
                          "end": 1099
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1111,
                    "end": 1133,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1112,
                        "end": 1121,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1113,
                          "end": 1121,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1115,
                            "end": 1121
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1122,
                      "end": 1132,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1124,
                        "end": 1132,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1124,
                          "end": 1130
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1145,
            "end": 1245,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1145,
              "end": 1148,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1148,
              "end": 1244,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1150,
                "end": 1244,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1160,
                    "end": 1196,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1160,
                      "end": 1179,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1161,
                          "end": 1178,
                          "name": {
                            "type": "Identifier",
                            "start": 1161,
                            "end": 1162,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1171,
                            "end": 1178,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1171,
                              "end": 1178,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "start": 1180,
                        "end": 1184,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1181,
                          "end": 1184,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1183,
                            "end": 1184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1183,
                              "end": 1184,
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
                      "start": 1185,
                      "end": 1195,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1187,
                        "end": 1195,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1187,
                          "end": 1193
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1205,
                    "end": 1238,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1205,
                      "end": 1221,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1206,
                          "end": 1220,
                          "name": {
                            "type": "Identifier",
                            "start": 1206,
                            "end": 1207,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1216,
                            "end": 1220,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1216,
                              "end": 1220,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "start": 1222,
                        "end": 1226,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1223,
                          "end": 1226,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1225,
                            "end": 1226,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1225,
                              "end": 1226,
                              "name": "U",
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
                      "start": 1227,
                      "end": 1237,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1229,
                        "end": 1237,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1229,
                          "end": 1235
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1250,
            "end": 1355,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1250,
              "end": 1253,
              "name": "a17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1253,
              "end": 1354,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1255,
                "end": 1354,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1265,
                    "end": 1302,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1266,
                        "end": 1290,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1267,
                          "end": 1290,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1269,
                            "end": 1290,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1270,
                                "end": 1279,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1271,
                                  "end": 1279,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1273,
                                    "end": 1279
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1281,
                              "end": 1290,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1284,
                                "end": 1290
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1291,
                      "end": 1301,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1293,
                        "end": 1301,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1293,
                          "end": 1299
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1311,
                    "end": 1348,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1312,
                        "end": 1336,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1313,
                          "end": 1336,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1315,
                            "end": 1336,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1316,
                                "end": 1325,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1317,
                                  "end": 1325,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1319,
                                    "end": 1325
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1327,
                              "end": 1336,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1330,
                                "end": 1336
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1337,
                      "end": 1347,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1339,
                        "end": 1347,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1339,
                          "end": 1345
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1360,
            "end": 1569,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1360,
              "end": 1363,
              "name": "a18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1363,
              "end": 1568,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1365,
                "end": 1568,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1375,
                    "end": 1465,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1376,
                        "end": 1456,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1377,
                          "end": 1456,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1379,
                            "end": 1456,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1393,
                                "end": 1413,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1394,
                                    "end": 1403,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1395,
                                      "end": 1403,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1397,
                                        "end": 1403
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1404,
                                  "end": 1412,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1406,
                                    "end": 1412
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1426,
                                "end": 1446,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1427,
                                    "end": 1436,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1428,
                                      "end": 1436,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1430,
                                        "end": 1436
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1437,
                                  "end": 1445,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1439,
                                    "end": 1445
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1457,
                      "end": 1464,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1459,
                        "end": 1464,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1459,
                          "end": 1462
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1474,
                    "end": 1562,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1475,
                        "end": 1553,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1476,
                          "end": 1553,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1478,
                            "end": 1553,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1492,
                                "end": 1514,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1493,
                                    "end": 1503,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1494,
                                      "end": 1503,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1496,
                                        "end": 1503
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1504,
                                  "end": 1513,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1506,
                                    "end": 1513
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1527,
                                "end": 1543,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1528,
                                    "end": 1535,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1529,
                                      "end": 1535,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1531,
                                        "end": 1535,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1531,
                                          "end": 1535,
                                          "name": "Date",
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
                                  "start": 1536,
                                  "end": 1542,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1538,
                                    "end": 1542,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1538,
                                      "end": 1542,
                                      "name": "Date",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1554,
                      "end": 1561,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1556,
                        "end": 1561,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1556,
                          "end": 1559
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1580,
      "end": 3100,
      "id": {
        "type": "Identifier",
        "start": 1590,
        "end": 1591,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1600,
          "end": 1601,
          "expression": {
            "type": "Identifier",
            "start": 1600,
            "end": 1601,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1602,
        "end": 3100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1619,
            "end": 1639,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1619,
              "end": 1620,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1620,
              "end": 1638,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1622,
                "end": 1638,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1622,
                  "end": 1625,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1623,
                      "end": 1624,
                      "name": {
                        "type": "Identifier",
                        "start": 1623,
                        "end": 1624,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1626,
                    "end": 1630,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1627,
                      "end": 1630,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1629,
                        "end": 1630,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1629,
                          "end": 1630,
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
                  "start": 1632,
                  "end": 1638,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1635,
                    "end": 1638,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1635,
                      "end": 1636,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1635,
                        "end": 1636,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 1701,
            "end": 1727,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1701,
              "end": 1703,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1703,
              "end": 1726,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1705,
                "end": 1726,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1705,
                  "end": 1708,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1706,
                      "end": 1707,
                      "name": {
                        "type": "Identifier",
                        "start": 1706,
                        "end": 1707,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1709,
                    "end": 1713,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1710,
                      "end": 1713,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1712,
                        "end": 1713,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1712,
                          "end": 1713,
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
                  "start": 1715,
                  "end": 1726,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1718,
                    "end": 1726,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1718,
                      "end": 1724
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
            "start": 1738,
            "end": 1757,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1738,
              "end": 1740,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1740,
              "end": 1756,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1742,
                "end": 1756,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1742,
                  "end": 1745,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1743,
                      "end": 1744,
                      "name": {
                        "type": "Identifier",
                        "start": 1743,
                        "end": 1744,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1746,
                    "end": 1750,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1747,
                      "end": 1750,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1749,
                        "end": 1750,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1749,
                          "end": 1750,
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
                  "start": 1752,
                  "end": 1756,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1755,
                    "end": 1756,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1755,
                      "end": 1756,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1792,
            "end": 1820,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1792,
              "end": 1794,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1794,
              "end": 1819,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1796,
                "end": 1819,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1796,
                  "end": 1802,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1797,
                      "end": 1798,
                      "name": {
                        "type": "Identifier",
                        "start": 1797,
                        "end": 1798,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1800,
                      "end": 1801,
                      "name": {
                        "type": "Identifier",
                        "start": 1800,
                        "end": 1801,
                        "name": "U",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1803,
                    "end": 1807,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1804,
                      "end": 1807,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1806,
                        "end": 1807,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1806,
                          "end": 1807,
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
                    "start": 1809,
                    "end": 1813,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1810,
                      "end": 1813,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1812,
                        "end": 1813,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1812,
                          "end": 1813,
                          "name": "U",
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
                  "start": 1815,
                  "end": 1819,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1818,
                    "end": 1819,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1819,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1895,
            "end": 1929,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1895,
              "end": 1897,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1897,
              "end": 1928,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1899,
                "end": 1928,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1899,
                  "end": 1905,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1900,
                      "end": 1901,
                      "name": {
                        "type": "Identifier",
                        "start": 1900,
                        "end": 1901,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1903,
                      "end": 1904,
                      "name": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1904,
                        "name": "U",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1922,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1907,
                      "end": 1922,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1909,
                        "end": 1922,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1910,
                            "end": 1916,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1913,
                              "end": 1916,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1915,
                                "end": 1916,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1915,
                                  "end": 1916,
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
                          "start": 1918,
                          "end": 1922,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1921,
                            "end": 1922,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1921,
                              "end": 1922,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1924,
                  "end": 1928,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1927,
                    "end": 1928,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1927,
                      "end": 1928,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1996,
            "end": 2059,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1996,
              "end": 1998,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1998,
              "end": 2058,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2000,
                "end": 2058,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2000,
                  "end": 2035,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2001,
                      "end": 2015,
                      "name": {
                        "type": "Identifier",
                        "start": 2001,
                        "end": 2002,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2011,
                        "end": 2015,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2011,
                          "end": 2015,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "start": 2017,
                      "end": 2034,
                      "name": {
                        "type": "Identifier",
                        "start": 2017,
                        "end": 2018,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2027,
                        "end": 2034,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2027,
                          "end": 2034,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 2036,
                    "end": 2052,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2037,
                      "end": 2052,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2039,
                        "end": 2052,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2040,
                            "end": 2046,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2043,
                              "end": 2046,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2045,
                                "end": 2046,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2045,
                                  "end": 2046,
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
                          "start": 2048,
                          "end": 2052,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2051,
                            "end": 2052,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2051,
                              "end": 2052,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2054,
                  "end": 2058,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2057,
                    "end": 2058,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2057,
                      "end": 2058,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2113,
            "end": 2186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2113,
              "end": 2115,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2115,
              "end": 2185,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2117,
                "end": 2185,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2117,
                  "end": 2152,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2118,
                      "end": 2132,
                      "name": {
                        "type": "Identifier",
                        "start": 2118,
                        "end": 2119,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2128,
                        "end": 2132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2128,
                          "end": 2132,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "start": 2134,
                      "end": 2151,
                      "name": {
                        "type": "Identifier",
                        "start": 2134,
                        "end": 2135,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2144,
                        "end": 2151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2144,
                          "end": 2151,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 2153,
                    "end": 2169,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2154,
                      "end": 2169,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2156,
                        "end": 2169,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2157,
                            "end": 2163,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2160,
                              "end": 2163,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2162,
                                "end": 2163,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2162,
                                  "end": 2163,
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
                          "start": 2165,
                          "end": 2169,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2168,
                            "end": 2169,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2168,
                              "end": 2169,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2171,
                  "end": 2185,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2174,
                    "end": 2185,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2175,
                        "end": 2179,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2176,
                          "end": 2179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2178,
                            "end": 2179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2178,
                              "end": 2179,
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
                      "start": 2181,
                      "end": 2185,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2184,
                        "end": 2185,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2184,
                          "end": 2185,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
            "start": 2197,
            "end": 2289,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2197,
              "end": 2199,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2199,
              "end": 2288,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2201,
                "end": 2288,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2201,
                  "end": 2236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2202,
                      "end": 2216,
                      "name": {
                        "type": "Identifier",
                        "start": 2202,
                        "end": 2203,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2212,
                        "end": 2216,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2212,
                          "end": 2216,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "start": 2218,
                      "end": 2235,
                      "name": {
                        "type": "Identifier",
                        "start": 2218,
                        "end": 2219,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2228,
                        "end": 2235,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2228,
                          "end": 2235,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 2237,
                    "end": 2253,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2238,
                      "end": 2253,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2240,
                        "end": 2253,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2241,
                            "end": 2247,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2244,
                              "end": 2247,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2246,
                                "end": 2247,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2246,
                                  "end": 2247,
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
                          "start": 2249,
                          "end": 2253,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2252,
                            "end": 2253,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2252,
                              "end": 2253,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2255,
                    "end": 2272,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2256,
                      "end": 2272,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2258,
                        "end": 2272,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2259,
                            "end": 2266,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2263,
                              "end": 2266,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2265,
                                "end": 2266,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2265,
                                  "end": 2266,
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
                          "start": 2268,
                          "end": 2272,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2271,
                            "end": 2272,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2271,
                              "end": 2272,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2274,
                  "end": 2288,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2277,
                    "end": 2288,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2278,
                        "end": 2282,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2279,
                          "end": 2282,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2281,
                            "end": 2282,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2281,
                              "end": 2282,
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
                      "start": 2284,
                      "end": 2288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2287,
                        "end": 2288,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2287,
                          "end": 2288,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
            "start": 2300,
            "end": 2420,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2300,
              "end": 2302,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2302,
              "end": 2419,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2304,
                "end": 2419,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2304,
                  "end": 2339,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2305,
                      "end": 2319,
                      "name": {
                        "type": "Identifier",
                        "start": 2305,
                        "end": 2306,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2315,
                        "end": 2319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2315,
                          "end": 2319,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "start": 2321,
                      "end": 2338,
                      "name": {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2322,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2331,
                        "end": 2338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2331,
                          "end": 2338,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 2340,
                    "end": 2356,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2341,
                      "end": 2356,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2343,
                        "end": 2356,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2344,
                            "end": 2350,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2347,
                              "end": 2350,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2349,
                                "end": 2350,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2349,
                                  "end": 2350,
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
                          "start": 2352,
                          "end": 2356,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2355,
                            "end": 2356,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2355,
                              "end": 2356,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2358,
                    "end": 2403,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2359,
                      "end": 2403,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2361,
                        "end": 2403,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2362,
                            "end": 2397,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2366,
                              "end": 2397,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2368,
                                "end": 2397,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2370,
                                    "end": 2382,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2370,
                                      "end": 2373,
                                      "name": "foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2373,
                                      "end": 2381,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2375,
                                        "end": 2381
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2383,
                                    "end": 2395,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2383,
                                      "end": 2387,
                                      "name": "bing",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2387,
                                      "end": 2395,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2389,
                                        "end": 2395
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2399,
                          "end": 2403,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2402,
                            "end": 2403,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2402,
                              "end": 2403,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2405,
                  "end": 2419,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2408,
                    "end": 2419,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2409,
                        "end": 2413,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2410,
                          "end": 2413,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2412,
                            "end": 2413,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2412,
                              "end": 2413,
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
                      "start": 2415,
                      "end": 2419,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2418,
                        "end": 2419,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2418,
                          "end": 2419,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
            "start": 2474,
            "end": 2515,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2474,
              "end": 2477,
              "name": "a10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2477,
              "end": 2514,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2479,
                "end": 2514,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2479,
                  "end": 2498,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2480,
                      "end": 2497,
                      "name": {
                        "type": "Identifier",
                        "start": 2480,
                        "end": 2481,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2490,
                        "end": 2497,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2490,
                          "end": 2497,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "type": "RestElement",
                    "start": 2499,
                    "end": 2508,
                    "argument": {
                      "type": "Identifier",
                      "start": 2502,
                      "end": 2503,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2503,
                      "end": 2508,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2505,
                        "end": 2508,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2505,
                          "end": 2506,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2505,
                            "end": 2506,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2510,
                  "end": 2514,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2513,
                    "end": 2514,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2513,
                      "end": 2514,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2526,
            "end": 2565,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2526,
              "end": 2529,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2529,
              "end": 2564,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2531,
                "end": 2564,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2531,
                  "end": 2547,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2532,
                      "end": 2546,
                      "name": {
                        "type": "Identifier",
                        "start": 2532,
                        "end": 2533,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2542,
                        "end": 2546,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2542,
                          "end": 2546,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 2548,
                    "end": 2552,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2549,
                      "end": 2552,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2551,
                        "end": 2552,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2551,
                          "end": 2552,
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
                    "start": 2554,
                    "end": 2558,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2555,
                      "end": 2558,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2557,
                        "end": 2558,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2557,
                          "end": 2558,
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
                  "start": 2560,
                  "end": 2564,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2563,
                    "end": 2564,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2563,
                      "end": 2564,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2576,
            "end": 2645,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2576,
              "end": 2579,
              "name": "a12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2579,
              "end": 2644,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2581,
                "end": 2644,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2581,
                  "end": 2604,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2582,
                      "end": 2603,
                      "name": {
                        "type": "Identifier",
                        "start": 2582,
                        "end": 2583,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2592,
                        "end": 2603,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2592,
                          "end": 2597,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2597,
                          "end": 2603,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2598,
                              "end": 2602,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2598,
                                "end": 2602,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
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
                    "start": 2605,
                    "end": 2619,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2606,
                      "end": 2619,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2608,
                        "end": 2619,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2608,
                          "end": 2613,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2613,
                          "end": 2619,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2614,
                              "end": 2618,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2614,
                                "end": 2618,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2621,
                    "end": 2625,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2622,
                      "end": 2625,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2624,
                        "end": 2625,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2624,
                          "end": 2625,
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
                  "start": 2627,
                  "end": 2644,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2630,
                    "end": 2644,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2630,
                      "end": 2635,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2635,
                      "end": 2644,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2636,
                          "end": 2643,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2636,
                            "end": 2643,
                            "name": "Derived",
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
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2686,
            "end": 2745,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2686,
              "end": 2689,
              "name": "a13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2689,
              "end": 2744,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2691,
                "end": 2744,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2691,
                  "end": 2717,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2692,
                      "end": 2716,
                      "name": {
                        "type": "Identifier",
                        "start": 2692,
                        "end": 2693,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2702,
                        "end": 2716,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2702,
                          "end": 2707,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2707,
                          "end": 2716,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2708,
                              "end": 2715,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2708,
                                "end": 2715,
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
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
                    "start": 2718,
                    "end": 2732,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2719,
                      "end": 2732,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2721,
                        "end": 2732,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2721,
                          "end": 2726,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2726,
                          "end": 2732,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2727,
                              "end": 2731,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2727,
                                "end": 2731,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2734,
                    "end": 2738,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2735,
                      "end": 2738,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2737,
                        "end": 2738,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2737,
                          "end": 2738,
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
                  "start": 2740,
                  "end": 2744,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2743,
                    "end": 2744,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2743,
                      "end": 2744,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2843,
            "end": 2879,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2843,
              "end": 2846,
              "name": "a14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2846,
              "end": 2878,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2848,
                "end": 2878,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2848,
                  "end": 2854,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2849,
                      "end": 2850,
                      "name": {
                        "type": "Identifier",
                        "start": 2849,
                        "end": 2850,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2852,
                      "end": 2853,
                      "name": {
                        "type": "Identifier",
                        "start": 2852,
                        "end": 2853,
                        "name": "U",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2855,
                    "end": 2872,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2856,
                      "end": 2872,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2858,
                        "end": 2872,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2860,
                            "end": 2865,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2860,
                              "end": 2861,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2861,
                              "end": 2864,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2863,
                                "end": 2864,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2863,
                                  "end": 2864,
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 2866,
                            "end": 2870,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2866,
                              "end": 2867,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2867,
                              "end": 2870,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2869,
                                "end": 2870,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2869,
                                  "end": 2870,
                                  "name": "U",
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2874,
                  "end": 2878,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2877,
                    "end": 2878,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2877,
                      "end": 2878,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2890,
            "end": 2912,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2890,
              "end": 2893,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2893,
              "end": 2911,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2895,
                "end": 2911,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2895,
                  "end": 2898,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2896,
                      "end": 2897,
                      "name": {
                        "type": "Identifier",
                        "start": 2896,
                        "end": 2897,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2899,
                    "end": 2903,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2900,
                      "end": 2903,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2902,
                        "end": 2903,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2902,
                          "end": 2903,
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
                  "start": 2905,
                  "end": 2911,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2908,
                    "end": 2911,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2908,
                      "end": 2909,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2908,
                        "end": 2909,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 2923,
            "end": 2963,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2923,
              "end": 2926,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2926,
              "end": 2962,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2928,
                "end": 2962,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2928,
                  "end": 2944,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2929,
                      "end": 2943,
                      "name": {
                        "type": "Identifier",
                        "start": 2929,
                        "end": 2930,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2939,
                        "end": 2943,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2939,
                          "end": 2943,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 2945,
                    "end": 2949,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2946,
                      "end": 2949,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2948,
                        "end": 2949,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2948,
                          "end": 2949,
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
                  "start": 2951,
                  "end": 2962,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2954,
                    "end": 2962,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
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
            "start": 2974,
            "end": 3006,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2974,
              "end": 2977,
              "name": "a17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2977,
              "end": 3005,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2979,
                "end": 3005,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2979,
                  "end": 2982,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2980,
                      "end": 2981,
                      "name": {
                        "type": "Identifier",
                        "start": 2980,
                        "end": 2981,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2983,
                    "end": 2997,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2984,
                      "end": 2997,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2986,
                        "end": 2997,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2987,
                            "end": 2991,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2988,
                              "end": 2991,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2990,
                                "end": 2991,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2990,
                                  "end": 2991,
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
                          "start": 2993,
                          "end": 2997,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2996,
                            "end": 2997,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2996,
                              "end": 2997,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2999,
                  "end": 3005,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3002,
                    "end": 3005,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3002,
                      "end": 3003,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3002,
                        "end": 3003,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 3017,
            "end": 3049,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3017,
              "end": 3020,
              "name": "a18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3020,
              "end": 3048,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3022,
                "end": 3048,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3022,
                  "end": 3025,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3023,
                      "end": 3024,
                      "name": {
                        "type": "Identifier",
                        "start": 3023,
                        "end": 3024,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3026,
                    "end": 3040,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3027,
                      "end": 3040,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 3029,
                        "end": 3040,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3030,
                            "end": 3034,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3031,
                              "end": 3034,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3033,
                                "end": 3034,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3033,
                                  "end": 3034,
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
                          "start": 3036,
                          "end": 3040,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3039,
                            "end": 3040,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3039,
                              "end": 3040,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3042,
                  "end": 3048,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3045,
                    "end": 3048,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3045,
                      "end": 3046,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3045,
                        "end": 3046,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
