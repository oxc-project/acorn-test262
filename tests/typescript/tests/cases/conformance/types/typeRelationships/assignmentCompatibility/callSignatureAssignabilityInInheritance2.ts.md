__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 112
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 118,
              "end": 126
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 127
          }
        ],
        "start": 113,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 129
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 143
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 159,
            "end": 171
          }
        ],
        "start": 157,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 173
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 204
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 207,
            "end": 219
          }
        ],
        "start": 205,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 221
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 240
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              },
              "start": 260,
              "end": 268
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 256,
            "end": 269
          }
        ],
        "start": 254,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 284
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
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
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      },
                      "start": 312,
                      "end": 320
                    },
                    "start": 311,
                    "end": 320
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 325,
                      "end": 331
                    },
                    "start": 325,
                    "end": 333
                  },
                  "start": 322,
                  "end": 333
                },
                "start": 310,
                "end": 333
              },
              "start": 308,
              "end": 333
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 334
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 341
            },
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
                        "type": "TSNumberKeyword",
                        "start": 347,
                        "end": 353
                      },
                      "start": 345,
                      "end": 353
                    },
                    "start": 344,
                    "end": 353
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 358,
                      "end": 364
                    },
                    "start": 358,
                    "end": 366
                  },
                  "start": 355,
                  "end": 366
                },
                "start": 343,
                "end": 366
              },
              "start": 341,
              "end": 366
            },
            "accessibility": null,
            "static": false,
            "start": 339,
            "end": 367
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 374
            },
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
                        "type": "TSNumberKeyword",
                        "start": 380,
                        "end": 386
                      },
                      "start": 378,
                      "end": 386
                    },
                    "start": 377,
                    "end": 386
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 391,
                    "end": 395
                  },
                  "start": 388,
                  "end": 395
                },
                "start": 376,
                "end": 395
              },
              "start": 374,
              "end": 395
            },
            "accessibility": null,
            "static": false,
            "start": 372,
            "end": 396
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 403
            },
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
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
                      },
                      "start": 407,
                      "end": 415
                    },
                    "start": 406,
                    "end": 415
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
                        "start": 420,
                        "end": 426
                      },
                      "start": 418,
                      "end": 426
                    },
                    "start": 417,
                    "end": 426
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  },
                  "start": 428,
                  "end": 437
                },
                "start": 405,
                "end": 437
              },
              "start": 403,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 401,
            "end": 438
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 445
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 457,
                                "end": 463
                              },
                              "start": 455,
                              "end": 463
                            },
                            "start": 452,
                            "end": 463
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 468,
                            "end": 474
                          },
                          "start": 465,
                          "end": 474
                        },
                        "start": 451,
                        "end": 474
                      },
                      "start": 449,
                      "end": 474
                    },
                    "start": 448,
                    "end": 474
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 479,
                    "end": 485
                  },
                  "start": 476,
                  "end": 485
                },
                "start": 447,
                "end": 485
              },
              "start": 445,
              "end": 485
            },
            "accessibility": null,
            "static": false,
            "start": 443,
            "end": 486
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 493
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 509
                                },
                                "typeArguments": null,
                                "start": 505,
                                "end": 509
                              },
                              "start": 503,
                              "end": 509
                            },
                            "start": 500,
                            "end": 509
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 514,
                              "end": 521
                            },
                            "typeArguments": null,
                            "start": 514,
                            "end": 521
                          },
                          "start": 511,
                          "end": 521
                        },
                        "start": 499,
                        "end": 521
                      },
                      "start": 497,
                      "end": 521
                    },
                    "start": 496,
                    "end": 521
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 526,
                    "end": 530
                  },
                  "start": 523,
                  "end": 530
                },
                "start": 495,
                "end": 530
              },
              "start": 493,
              "end": 530
            },
            "accessibility": null,
            "static": false,
            "start": 491,
            "end": 531
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 538
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 550,
                                  "end": 554
                                },
                                "typeArguments": null,
                                "start": 550,
                                "end": 554
                              },
                              "start": 548,
                              "end": 554
                            },
                            "start": 545,
                            "end": 554
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 559,
                              "end": 566
                            },
                            "typeArguments": null,
                            "start": 559,
                            "end": 566
                          },
                          "start": 556,
                          "end": 566
                        },
                        "start": 544,
                        "end": 566
                      },
                      "start": 542,
                      "end": 566
                    },
                    "start": 541,
                    "end": 566
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 575,
                              "end": 579
                            },
                            "typeArguments": null,
                            "start": 575,
                            "end": 579
                          },
                          "start": 573,
                          "end": 579
                        },
                        "start": 572,
                        "end": 579
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 591
                        },
                        "typeArguments": null,
                        "start": 584,
                        "end": 591
                      },
                      "start": 581,
                      "end": 591
                    },
                    "start": 571,
                    "end": 591
                  },
                  "start": 568,
                  "end": 591
                },
                "start": 540,
                "end": 591
              },
              "start": 538,
              "end": 591
            },
            "accessibility": null,
            "static": false,
            "start": 536,
            "end": 592
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 599
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 611,
                                  "end": 615
                                },
                                "typeArguments": null,
                                "start": 611,
                                "end": 615
                              },
                              "start": 609,
                              "end": 615
                            },
                            "start": 606,
                            "end": 615
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 620,
                              "end": 627
                            },
                            "typeArguments": null,
                            "start": 620,
                            "end": 627
                          },
                          "start": 617,
                          "end": 627
                        },
                        "start": 605,
                        "end": 627
                      },
                      "start": 603,
                      "end": 627
                    },
                    "start": 602,
                    "end": 627
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 639,
                                  "end": 643
                                },
                                "typeArguments": null,
                                "start": 639,
                                "end": 643
                              },
                              "start": 637,
                              "end": 643
                            },
                            "start": 633,
                            "end": 643
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 648,
                              "end": 655
                            },
                            "typeArguments": null,
                            "start": 648,
                            "end": 655
                          },
                          "start": 645,
                          "end": 655
                        },
                        "start": 632,
                        "end": 655
                      },
                      "start": 630,
                      "end": 655
                    },
                    "start": 629,
                    "end": 655
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 664,
                              "end": 668
                            },
                            "typeArguments": null,
                            "start": 664,
                            "end": 668
                          },
                          "start": 662,
                          "end": 668
                        },
                        "start": 661,
                        "end": 668
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 673,
                          "end": 680
                        },
                        "typeArguments": null,
                        "start": 673,
                        "end": 680
                      },
                      "start": 670,
                      "end": 680
                    },
                    "start": 660,
                    "end": 680
                  },
                  "start": 657,
                  "end": 680
                },
                "start": 601,
                "end": 680
              },
              "start": 599,
              "end": 680
            },
            "accessibility": null,
            "static": false,
            "start": 597,
            "end": 681
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 688
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 700,
                                  "end": 704
                                },
                                "typeArguments": null,
                                "start": 700,
                                "end": 704
                              },
                              "start": 698,
                              "end": 704
                            },
                            "start": 695,
                            "end": 704
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 709,
                              "end": 716
                            },
                            "typeArguments": null,
                            "start": 709,
                            "end": 716
                          },
                          "start": 706,
                          "end": 716
                        },
                        "start": 694,
                        "end": 716
                      },
                      "start": 692,
                      "end": 716
                    },
                    "start": 691,
                    "end": 716
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 728,
                                  "end": 732
                                },
                                "typeArguments": null,
                                "start": 728,
                                "end": 732
                              },
                              "start": 726,
                              "end": 732
                            },
                            "start": 722,
                            "end": 732
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 737,
                              "end": 744
                            },
                            "typeArguments": null,
                            "start": 737,
                            "end": 744
                          },
                          "start": 734,
                          "end": 744
                        },
                        "start": 721,
                        "end": 744
                      },
                      "start": 719,
                      "end": 744
                    },
                    "start": 718,
                    "end": 744
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 753,
                              "end": 757
                            },
                            "typeArguments": null,
                            "start": 753,
                            "end": 757
                          },
                          "start": 751,
                          "end": 757
                        },
                        "start": 750,
                        "end": 757
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 762,
                          "end": 769
                        },
                        "typeArguments": null,
                        "start": 762,
                        "end": 769
                      },
                      "start": 759,
                      "end": 769
                    },
                    "start": 749,
                    "end": 769
                  },
                  "start": 746,
                  "end": 769
                },
                "start": 690,
                "end": 769
              },
              "start": 688,
              "end": 769
            },
            "accessibility": null,
            "static": false,
            "start": 686,
            "end": 770
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 778
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 785
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 787,
                            "end": 794
                          },
                          "typeArguments": null,
                          "start": 787,
                          "end": 794
                        },
                        "start": 787,
                        "end": 796
                      },
                      "start": 785,
                      "end": 796
                    },
                    "value": null,
                    "start": 781,
                    "end": 796
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 801,
                      "end": 808
                    },
                    "typeArguments": null,
                    "start": 801,
                    "end": 808
                  },
                  "start": 798,
                  "end": 808
                },
                "start": 780,
                "end": 808
              },
              "start": 778,
              "end": 808
            },
            "accessibility": null,
            "static": false,
            "start": 775,
            "end": 809
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 817
            },
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
                        "type": "TSTypeLiteral",
                        "members": [
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
                              "start": 825,
                              "end": 828
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 830,
                                "end": 836
                              },
                              "start": 828,
                              "end": 836
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 825,
                            "end": 836
                          }
                        ],
                        "start": 823,
                        "end": 838
                      },
                      "start": 821,
                      "end": 838
                    },
                    "start": 820,
                    "end": 838
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
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
                              "start": 845,
                              "end": 848
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 850,
                                "end": 856
                              },
                              "start": 848,
                              "end": 856
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 845,
                            "end": 857
                          },
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
                              "start": 858,
                              "end": 861
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 863,
                                "end": 869
                              },
                              "start": 861,
                              "end": 869
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 858,
                            "end": 869
                          }
                        ],
                        "start": 843,
                        "end": 871
                      },
                      "start": 841,
                      "end": 871
                    },
                    "start": 840,
                    "end": 871
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 876,
                    "end": 880
                  },
                  "start": 873,
                  "end": 880
                },
                "start": 819,
                "end": 880
              },
              "start": 817,
              "end": 880
            },
            "accessibility": null,
            "static": false,
            "start": 814,
            "end": 881
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 889
            },
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 895,
                          "end": 900
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 901,
                                "end": 905
                              },
                              "typeArguments": null,
                              "start": 901,
                              "end": 905
                            }
                          ],
                          "start": 900,
                          "end": 906
                        },
                        "start": 895,
                        "end": 906
                      },
                      "start": 893,
                      "end": 906
                    },
                    "start": 892,
                    "end": 906
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 916
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 917,
                                "end": 925
                              },
                              "typeArguments": null,
                              "start": 917,
                              "end": 925
                            }
                          ],
                          "start": 916,
                          "end": 926
                        },
                        "start": 911,
                        "end": 926
                      },
                      "start": 909,
                      "end": 926
                    },
                    "start": 908,
                    "end": 926
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 931,
                      "end": 936
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 937,
                            "end": 944
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 944
                        }
                      ],
                      "start": 936,
                      "end": 945
                    },
                    "start": 931,
                    "end": 945
                  },
                  "start": 928,
                  "end": 945
                },
                "start": 891,
                "end": 945
              },
              "start": 889,
              "end": 945
            },
            "accessibility": null,
            "static": false,
            "start": 886,
            "end": 946
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 954
            },
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 965
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 966,
                                "end": 970
                              },
                              "typeArguments": null,
                              "start": 966,
                              "end": 970
                            }
                          ],
                          "start": 965,
                          "end": 971
                        },
                        "start": 960,
                        "end": 971
                      },
                      "start": 958,
                      "end": 971
                    },
                    "start": 957,
                    "end": 971
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 976,
                          "end": 981
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 982,
                                "end": 989
                              },
                              "typeArguments": null,
                              "start": 982,
                              "end": 989
                            }
                          ],
                          "start": 981,
                          "end": 990
                        },
                        "start": 976,
                        "end": 990
                      },
                      "start": 974,
                      "end": 990
                    },
                    "start": 973,
                    "end": 990
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 1000
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1001,
                            "end": 1008
                          },
                          "typeArguments": null,
                          "start": 1001,
                          "end": 1008
                        }
                      ],
                      "start": 1000,
                      "end": 1009
                    },
                    "start": 995,
                    "end": 1009
                  },
                  "start": 992,
                  "end": 1009
                },
                "start": 956,
                "end": 1009
              },
              "start": 954,
              "end": 1009
            },
            "accessibility": null,
            "static": false,
            "start": 951,
            "end": 1010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1018
            },
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
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1026,
                              "end": 1027
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1029,
                                "end": 1035
                              },
                              "start": 1027,
                              "end": 1035
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1026,
                            "end": 1036
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1037,
                              "end": 1038
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1040,
                                "end": 1046
                              },
                              "start": 1038,
                              "end": 1046
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1037,
                            "end": 1046
                          }
                        ],
                        "start": 1024,
                        "end": 1048
                      },
                      "start": 1022,
                      "end": 1048
                    },
                    "start": 1021,
                    "end": 1048
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1059
                    },
                    "typeArguments": null,
                    "start": 1053,
                    "end": 1059
                  },
                  "start": 1050,
                  "end": 1059
                },
                "start": 1020,
                "end": 1059
              },
              "start": 1018,
              "end": 1059
            },
            "accessibility": null,
            "static": false,
            "start": 1015,
            "end": 1060
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1068
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1084,
                            "end": 1090
                          },
                          "start": 1082,
                          "end": 1090
                        },
                        "start": 1081,
                        "end": 1090
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1093,
                          "end": 1099
                        },
                        "start": 1093,
                        "end": 1101
                      },
                      "start": 1091,
                      "end": 1101
                    },
                    "start": 1080,
                    "end": 1102
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSStringKeyword",
                            "start": 1115,
                            "end": 1121
                          },
                          "start": 1113,
                          "end": 1121
                        },
                        "start": 1112,
                        "end": 1121
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1124,
                          "end": 1130
                        },
                        "start": 1124,
                        "end": 1132
                      },
                      "start": 1122,
                      "end": 1132
                    },
                    "start": 1111,
                    "end": 1133
                  }
                ],
                "start": 1070,
                "end": 1139
              },
              "start": 1068,
              "end": 1139
            },
            "accessibility": null,
            "static": false,
            "start": 1065,
            "end": 1140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1145,
              "end": 1148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1161,
                            "end": 1162
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1171,
                              "end": 1178
                            },
                            "typeArguments": null,
                            "start": 1171,
                            "end": 1178
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1161,
                          "end": 1178
                        }
                      ],
                      "start": 1160,
                      "end": 1179
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
                              "start": 1183,
                              "end": 1184
                            },
                            "typeArguments": null,
                            "start": 1183,
                            "end": 1184
                          },
                          "start": 1181,
                          "end": 1184
                        },
                        "start": 1180,
                        "end": 1184
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1187,
                          "end": 1193
                        },
                        "start": 1187,
                        "end": 1195
                      },
                      "start": 1185,
                      "end": 1195
                    },
                    "start": 1160,
                    "end": 1196
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1206,
                            "end": 1207
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1216,
                              "end": 1220
                            },
                            "typeArguments": null,
                            "start": 1216,
                            "end": 1220
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1206,
                          "end": 1220
                        }
                      ],
                      "start": 1205,
                      "end": 1221
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1225,
                              "end": 1226
                            },
                            "typeArguments": null,
                            "start": 1225,
                            "end": 1226
                          },
                          "start": 1223,
                          "end": 1226
                        },
                        "start": 1222,
                        "end": 1226
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1229,
                          "end": 1235
                        },
                        "start": 1229,
                        "end": 1237
                      },
                      "start": 1227,
                      "end": 1237
                    },
                    "start": 1205,
                    "end": 1238
                  }
                ],
                "start": 1150,
                "end": 1244
              },
              "start": 1148,
              "end": 1244
            },
            "accessibility": null,
            "static": false,
            "start": 1145,
            "end": 1245
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1250,
              "end": 1253
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1273,
                                    "end": 1279
                                  },
                                  "start": 1271,
                                  "end": 1279
                                },
                                "start": 1270,
                                "end": 1279
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1284,
                                "end": 1290
                              },
                              "start": 1281,
                              "end": 1290
                            },
                            "start": 1269,
                            "end": 1290
                          },
                          "start": 1267,
                          "end": 1290
                        },
                        "start": 1266,
                        "end": 1290
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1293,
                          "end": 1299
                        },
                        "start": 1293,
                        "end": 1301
                      },
                      "start": 1291,
                      "end": 1301
                    },
                    "start": 1265,
                    "end": 1302
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1319,
                                    "end": 1325
                                  },
                                  "start": 1317,
                                  "end": 1325
                                },
                                "start": 1316,
                                "end": 1325
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1330,
                                "end": 1336
                              },
                              "start": 1327,
                              "end": 1336
                            },
                            "start": 1315,
                            "end": 1336
                          },
                          "start": 1313,
                          "end": 1336
                        },
                        "start": 1312,
                        "end": 1336
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1339,
                          "end": 1345
                        },
                        "start": 1339,
                        "end": 1347
                      },
                      "start": 1337,
                      "end": 1347
                    },
                    "start": 1311,
                    "end": 1348
                  }
                ],
                "start": 1255,
                "end": 1354
              },
              "start": 1253,
              "end": 1354
            },
            "accessibility": null,
            "static": false,
            "start": 1250,
            "end": 1355
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 1360,
              "end": 1363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1397,
                                        "end": 1403
                                      },
                                      "start": 1395,
                                      "end": 1403
                                    },
                                    "start": 1394,
                                    "end": 1403
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1406,
                                    "end": 1412
                                  },
                                  "start": 1404,
                                  "end": 1412
                                },
                                "start": 1393,
                                "end": 1413
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1430,
                                        "end": 1436
                                      },
                                      "start": 1428,
                                      "end": 1436
                                    },
                                    "start": 1427,
                                    "end": 1436
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1439,
                                    "end": 1445
                                  },
                                  "start": 1437,
                                  "end": 1445
                                },
                                "start": 1426,
                                "end": 1446
                              }
                            ],
                            "start": 1379,
                            "end": 1456
                          },
                          "start": 1377,
                          "end": 1456
                        },
                        "start": 1376,
                        "end": 1456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1459,
                          "end": 1462
                        },
                        "start": 1459,
                        "end": 1464
                      },
                      "start": 1457,
                      "end": 1464
                    },
                    "start": 1375,
                    "end": 1465
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1496,
                                        "end": 1503
                                      },
                                      "start": 1494,
                                      "end": 1503
                                    },
                                    "start": 1493,
                                    "end": 1503
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1506,
                                    "end": 1513
                                  },
                                  "start": 1504,
                                  "end": 1513
                                },
                                "start": 1492,
                                "end": 1514
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
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
                                          "name": "Date",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1531,
                                          "end": 1535
                                        },
                                        "typeArguments": null,
                                        "start": 1531,
                                        "end": 1535
                                      },
                                      "start": 1529,
                                      "end": 1535
                                    },
                                    "start": 1528,
                                    "end": 1535
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1538,
                                      "end": 1542
                                    },
                                    "typeArguments": null,
                                    "start": 1538,
                                    "end": 1542
                                  },
                                  "start": 1536,
                                  "end": 1542
                                },
                                "start": 1527,
                                "end": 1543
                              }
                            ],
                            "start": 1478,
                            "end": 1553
                          },
                          "start": 1476,
                          "end": 1553
                        },
                        "start": 1475,
                        "end": 1553
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1556,
                          "end": 1559
                        },
                        "start": 1556,
                        "end": 1561
                      },
                      "start": 1554,
                      "end": 1561
                    },
                    "start": 1474,
                    "end": 1562
                  }
                ],
                "start": 1365,
                "end": 1568
              },
              "start": 1363,
              "end": 1568
            },
            "accessibility": null,
            "static": false,
            "start": 1360,
            "end": 1569
          }
        ],
        "start": 285,
        "end": 1571
      },
      "declare": false,
      "start": 273,
      "end": 1571
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1590,
        "end": 1591
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1600,
            "end": 1601
          },
          "typeArguments": null,
          "start": 1600,
          "end": 1601
        }
      ],
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1620
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1623,
                        "end": 1624
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1623,
                      "end": 1624
                    }
                  ],
                  "start": 1622,
                  "end": 1625
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1635,
                        "end": 1636
                      },
                      "typeArguments": null,
                      "start": 1635,
                      "end": 1636
                    },
                    "start": 1635,
                    "end": 1638
                  },
                  "start": 1632,
                  "end": 1638
                },
                "start": 1622,
                "end": 1638
              },
              "start": 1620,
              "end": 1638
            },
            "accessibility": null,
            "static": false,
            "start": 1619,
            "end": 1639
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1701,
              "end": 1703
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1706,
                        "end": 1707
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1706,
                      "end": 1707
                    }
                  ],
                  "start": 1705,
                  "end": 1708
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
                          "start": 1712,
                          "end": 1713
                        },
                        "typeArguments": null,
                        "start": 1712,
                        "end": 1713
                      },
                      "start": 1710,
                      "end": 1713
                    },
                    "start": 1709,
                    "end": 1713
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1718,
                      "end": 1724
                    },
                    "start": 1718,
                    "end": 1726
                  },
                  "start": 1715,
                  "end": 1726
                },
                "start": 1705,
                "end": 1726
              },
              "start": 1703,
              "end": 1726
            },
            "accessibility": null,
            "static": false,
            "start": 1701,
            "end": 1727
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1738,
              "end": 1740
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1743,
                        "end": 1744
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1743,
                      "end": 1744
                    }
                  ],
                  "start": 1742,
                  "end": 1745
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
                          "start": 1749,
                          "end": 1750
                        },
                        "typeArguments": null,
                        "start": 1749,
                        "end": 1750
                      },
                      "start": 1747,
                      "end": 1750
                    },
                    "start": 1746,
                    "end": 1750
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1755,
                      "end": 1756
                    },
                    "typeArguments": null,
                    "start": 1755,
                    "end": 1756
                  },
                  "start": 1752,
                  "end": 1756
                },
                "start": 1742,
                "end": 1756
              },
              "start": 1740,
              "end": 1756
            },
            "accessibility": null,
            "static": false,
            "start": 1738,
            "end": 1757
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1792,
              "end": 1794
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1797,
                        "end": 1798
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1797,
                      "end": 1798
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1800,
                        "end": 1801
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1800,
                      "end": 1801
                    }
                  ],
                  "start": 1796,
                  "end": 1802
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
                          "start": 1806,
                          "end": 1807
                        },
                        "typeArguments": null,
                        "start": 1806,
                        "end": 1807
                      },
                      "start": 1804,
                      "end": 1807
                    },
                    "start": 1803,
                    "end": 1807
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1812,
                          "end": 1813
                        },
                        "typeArguments": null,
                        "start": 1812,
                        "end": 1813
                      },
                      "start": 1810,
                      "end": 1813
                    },
                    "start": 1809,
                    "end": 1813
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1819
                    },
                    "typeArguments": null,
                    "start": 1818,
                    "end": 1819
                  },
                  "start": 1815,
                  "end": 1819
                },
                "start": 1796,
                "end": 1819
              },
              "start": 1794,
              "end": 1819
            },
            "accessibility": null,
            "static": false,
            "start": 1792,
            "end": 1820
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1895,
              "end": 1897
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1900,
                        "end": 1901
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1900,
                      "end": 1901
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1903,
                        "end": 1904
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1903,
                      "end": 1904
                    }
                  ],
                  "start": 1899,
                  "end": 1905
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1915,
                                  "end": 1916
                                },
                                "typeArguments": null,
                                "start": 1915,
                                "end": 1916
                              },
                              "start": 1913,
                              "end": 1916
                            },
                            "start": 1910,
                            "end": 1916
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
                              "start": 1921,
                              "end": 1922
                            },
                            "typeArguments": null,
                            "start": 1921,
                            "end": 1922
                          },
                          "start": 1918,
                          "end": 1922
                        },
                        "start": 1909,
                        "end": 1922
                      },
                      "start": 1907,
                      "end": 1922
                    },
                    "start": 1906,
                    "end": 1922
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1927,
                      "end": 1928
                    },
                    "typeArguments": null,
                    "start": 1927,
                    "end": 1928
                  },
                  "start": 1924,
                  "end": 1928
                },
                "start": 1899,
                "end": 1928
              },
              "start": 1897,
              "end": 1928
            },
            "accessibility": null,
            "static": false,
            "start": 1895,
            "end": 1929
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1996,
              "end": 1998
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2001,
                        "end": 2002
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2011,
                          "end": 2015
                        },
                        "typeArguments": null,
                        "start": 2011,
                        "end": 2015
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2001,
                      "end": 2015
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2017,
                        "end": 2018
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2027,
                          "end": 2034
                        },
                        "typeArguments": null,
                        "start": 2027,
                        "end": 2034
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2017,
                      "end": 2034
                    }
                  ],
                  "start": 2000,
                  "end": 2035
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 2045,
                                  "end": 2046
                                },
                                "typeArguments": null,
                                "start": 2045,
                                "end": 2046
                              },
                              "start": 2043,
                              "end": 2046
                            },
                            "start": 2040,
                            "end": 2046
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
                              "start": 2051,
                              "end": 2052
                            },
                            "typeArguments": null,
                            "start": 2051,
                            "end": 2052
                          },
                          "start": 2048,
                          "end": 2052
                        },
                        "start": 2039,
                        "end": 2052
                      },
                      "start": 2037,
                      "end": 2052
                    },
                    "start": 2036,
                    "end": 2052
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2057,
                      "end": 2058
                    },
                    "typeArguments": null,
                    "start": 2057,
                    "end": 2058
                  },
                  "start": 2054,
                  "end": 2058
                },
                "start": 2000,
                "end": 2058
              },
              "start": 1998,
              "end": 2058
            },
            "accessibility": null,
            "static": false,
            "start": 1996,
            "end": 2059
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2118,
                        "end": 2119
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2128,
                          "end": 2132
                        },
                        "typeArguments": null,
                        "start": 2128,
                        "end": 2132
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2118,
                      "end": 2132
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2134,
                        "end": 2135
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2144,
                          "end": 2151
                        },
                        "typeArguments": null,
                        "start": 2144,
                        "end": 2151
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2134,
                      "end": 2151
                    }
                  ],
                  "start": 2117,
                  "end": 2152
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 2162,
                                  "end": 2163
                                },
                                "typeArguments": null,
                                "start": 2162,
                                "end": 2163
                              },
                              "start": 2160,
                              "end": 2163
                            },
                            "start": 2157,
                            "end": 2163
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
                              "start": 2168,
                              "end": 2169
                            },
                            "typeArguments": null,
                            "start": 2168,
                            "end": 2169
                          },
                          "start": 2165,
                          "end": 2169
                        },
                        "start": 2156,
                        "end": 2169
                      },
                      "start": 2154,
                      "end": 2169
                    },
                    "start": 2153,
                    "end": 2169
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2178,
                              "end": 2179
                            },
                            "typeArguments": null,
                            "start": 2178,
                            "end": 2179
                          },
                          "start": 2176,
                          "end": 2179
                        },
                        "start": 2175,
                        "end": 2179
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
                          "start": 2184,
                          "end": 2185
                        },
                        "typeArguments": null,
                        "start": 2184,
                        "end": 2185
                      },
                      "start": 2181,
                      "end": 2185
                    },
                    "start": 2174,
                    "end": 2185
                  },
                  "start": 2171,
                  "end": 2185
                },
                "start": 2117,
                "end": 2185
              },
              "start": 2115,
              "end": 2185
            },
            "accessibility": null,
            "static": false,
            "start": 2113,
            "end": 2186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2202,
                        "end": 2203
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2212,
                          "end": 2216
                        },
                        "typeArguments": null,
                        "start": 2212,
                        "end": 2216
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2202,
                      "end": 2216
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2218,
                        "end": 2219
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2228,
                          "end": 2235
                        },
                        "typeArguments": null,
                        "start": 2228,
                        "end": 2235
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2218,
                      "end": 2235
                    }
                  ],
                  "start": 2201,
                  "end": 2236
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 2246,
                                  "end": 2247
                                },
                                "typeArguments": null,
                                "start": 2246,
                                "end": 2247
                              },
                              "start": 2244,
                              "end": 2247
                            },
                            "start": 2241,
                            "end": 2247
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
                              "start": 2252,
                              "end": 2253
                            },
                            "typeArguments": null,
                            "start": 2252,
                            "end": 2253
                          },
                          "start": 2249,
                          "end": 2253
                        },
                        "start": 2240,
                        "end": 2253
                      },
                      "start": 2238,
                      "end": 2253
                    },
                    "start": 2237,
                    "end": 2253
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
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
                                  "start": 2265,
                                  "end": 2266
                                },
                                "typeArguments": null,
                                "start": 2265,
                                "end": 2266
                              },
                              "start": 2263,
                              "end": 2266
                            },
                            "start": 2259,
                            "end": 2266
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
                              "start": 2271,
                              "end": 2272
                            },
                            "typeArguments": null,
                            "start": 2271,
                            "end": 2272
                          },
                          "start": 2268,
                          "end": 2272
                        },
                        "start": 2258,
                        "end": 2272
                      },
                      "start": 2256,
                      "end": 2272
                    },
                    "start": 2255,
                    "end": 2272
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2281,
                              "end": 2282
                            },
                            "typeArguments": null,
                            "start": 2281,
                            "end": 2282
                          },
                          "start": 2279,
                          "end": 2282
                        },
                        "start": 2278,
                        "end": 2282
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
                          "start": 2287,
                          "end": 2288
                        },
                        "typeArguments": null,
                        "start": 2287,
                        "end": 2288
                      },
                      "start": 2284,
                      "end": 2288
                    },
                    "start": 2277,
                    "end": 2288
                  },
                  "start": 2274,
                  "end": 2288
                },
                "start": 2201,
                "end": 2288
              },
              "start": 2199,
              "end": 2288
            },
            "accessibility": null,
            "static": false,
            "start": 2197,
            "end": 2289
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2302
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2305,
                        "end": 2306
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2315,
                          "end": 2319
                        },
                        "typeArguments": null,
                        "start": 2315,
                        "end": 2319
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2305,
                      "end": 2319
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2321,
                        "end": 2322
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2331,
                          "end": 2338
                        },
                        "typeArguments": null,
                        "start": 2331,
                        "end": 2338
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2321,
                      "end": 2338
                    }
                  ],
                  "start": 2304,
                  "end": 2339
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 2349,
                                  "end": 2350
                                },
                                "typeArguments": null,
                                "start": 2349,
                                "end": 2350
                              },
                              "start": 2347,
                              "end": 2350
                            },
                            "start": 2344,
                            "end": 2350
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
                              "start": 2355,
                              "end": 2356
                            },
                            "typeArguments": null,
                            "start": 2355,
                            "end": 2356
                          },
                          "start": 2352,
                          "end": 2356
                        },
                        "start": 2343,
                        "end": 2356
                      },
                      "start": 2341,
                      "end": 2356
                    },
                    "start": 2340,
                    "end": 2356
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
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
                                      "start": 2370,
                                      "end": 2373
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2375,
                                        "end": 2381
                                      },
                                      "start": 2373,
                                      "end": 2381
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2370,
                                    "end": 2382
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2383,
                                      "end": 2387
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2389,
                                        "end": 2395
                                      },
                                      "start": 2387,
                                      "end": 2395
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2383,
                                    "end": 2395
                                  }
                                ],
                                "start": 2368,
                                "end": 2397
                              },
                              "start": 2366,
                              "end": 2397
                            },
                            "start": 2362,
                            "end": 2397
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
                              "start": 2402,
                              "end": 2403
                            },
                            "typeArguments": null,
                            "start": 2402,
                            "end": 2403
                          },
                          "start": 2399,
                          "end": 2403
                        },
                        "start": 2361,
                        "end": 2403
                      },
                      "start": 2359,
                      "end": 2403
                    },
                    "start": 2358,
                    "end": 2403
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2412,
                              "end": 2413
                            },
                            "typeArguments": null,
                            "start": 2412,
                            "end": 2413
                          },
                          "start": 2410,
                          "end": 2413
                        },
                        "start": 2409,
                        "end": 2413
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
                          "start": 2418,
                          "end": 2419
                        },
                        "typeArguments": null,
                        "start": 2418,
                        "end": 2419
                      },
                      "start": 2415,
                      "end": 2419
                    },
                    "start": 2408,
                    "end": 2419
                  },
                  "start": 2405,
                  "end": 2419
                },
                "start": 2304,
                "end": 2419
              },
              "start": 2302,
              "end": 2419
            },
            "accessibility": null,
            "static": false,
            "start": 2300,
            "end": 2420
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2474,
              "end": 2477
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2480,
                        "end": 2481
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2490,
                          "end": 2497
                        },
                        "typeArguments": null,
                        "start": 2490,
                        "end": 2497
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2480,
                      "end": 2497
                    }
                  ],
                  "start": 2479,
                  "end": 2498
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2502,
                      "end": 2503
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2505,
                            "end": 2506
                          },
                          "typeArguments": null,
                          "start": 2505,
                          "end": 2506
                        },
                        "start": 2505,
                        "end": 2508
                      },
                      "start": 2503,
                      "end": 2508
                    },
                    "value": null,
                    "start": 2499,
                    "end": 2508
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2513,
                      "end": 2514
                    },
                    "typeArguments": null,
                    "start": 2513,
                    "end": 2514
                  },
                  "start": 2510,
                  "end": 2514
                },
                "start": 2479,
                "end": 2514
              },
              "start": 2477,
              "end": 2514
            },
            "accessibility": null,
            "static": false,
            "start": 2474,
            "end": 2515
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2526,
              "end": 2529
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2532,
                        "end": 2533
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2542,
                          "end": 2546
                        },
                        "typeArguments": null,
                        "start": 2542,
                        "end": 2546
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2532,
                      "end": 2546
                    }
                  ],
                  "start": 2531,
                  "end": 2547
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
                          "start": 2551,
                          "end": 2552
                        },
                        "typeArguments": null,
                        "start": 2551,
                        "end": 2552
                      },
                      "start": 2549,
                      "end": 2552
                    },
                    "start": 2548,
                    "end": 2552
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                          "start": 2557,
                          "end": 2558
                        },
                        "typeArguments": null,
                        "start": 2557,
                        "end": 2558
                      },
                      "start": 2555,
                      "end": 2558
                    },
                    "start": 2554,
                    "end": 2558
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2563,
                      "end": 2564
                    },
                    "typeArguments": null,
                    "start": 2563,
                    "end": 2564
                  },
                  "start": 2560,
                  "end": 2564
                },
                "start": 2531,
                "end": 2564
              },
              "start": 2529,
              "end": 2564
            },
            "accessibility": null,
            "static": false,
            "start": 2526,
            "end": 2565
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2576,
              "end": 2579
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2582,
                        "end": 2583
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2592,
                          "end": 2597
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2598,
                                "end": 2602
                              },
                              "typeArguments": null,
                              "start": 2598,
                              "end": 2602
                            }
                          ],
                          "start": 2597,
                          "end": 2603
                        },
                        "start": 2592,
                        "end": 2603
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2582,
                      "end": 2603
                    }
                  ],
                  "start": 2581,
                  "end": 2604
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2608,
                          "end": 2613
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2614,
                                "end": 2618
                              },
                              "typeArguments": null,
                              "start": 2614,
                              "end": 2618
                            }
                          ],
                          "start": 2613,
                          "end": 2619
                        },
                        "start": 2608,
                        "end": 2619
                      },
                      "start": 2606,
                      "end": 2619
                    },
                    "start": 2605,
                    "end": 2619
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                          "start": 2624,
                          "end": 2625
                        },
                        "typeArguments": null,
                        "start": 2624,
                        "end": 2625
                      },
                      "start": 2622,
                      "end": 2625
                    },
                    "start": 2621,
                    "end": 2625
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2630,
                      "end": 2635
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2636,
                            "end": 2643
                          },
                          "typeArguments": null,
                          "start": 2636,
                          "end": 2643
                        }
                      ],
                      "start": 2635,
                      "end": 2644
                    },
                    "start": 2630,
                    "end": 2644
                  },
                  "start": 2627,
                  "end": 2644
                },
                "start": 2581,
                "end": 2644
              },
              "start": 2579,
              "end": 2644
            },
            "accessibility": null,
            "static": false,
            "start": 2576,
            "end": 2645
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2686,
              "end": 2689
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2692,
                        "end": 2693
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2702,
                          "end": 2707
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2708,
                                "end": 2715
                              },
                              "typeArguments": null,
                              "start": 2708,
                              "end": 2715
                            }
                          ],
                          "start": 2707,
                          "end": 2716
                        },
                        "start": 2702,
                        "end": 2716
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2692,
                      "end": 2716
                    }
                  ],
                  "start": 2691,
                  "end": 2717
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2721,
                          "end": 2726
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2727,
                                "end": 2731
                              },
                              "typeArguments": null,
                              "start": 2727,
                              "end": 2731
                            }
                          ],
                          "start": 2726,
                          "end": 2732
                        },
                        "start": 2721,
                        "end": 2732
                      },
                      "start": 2719,
                      "end": 2732
                    },
                    "start": 2718,
                    "end": 2732
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                          "start": 2737,
                          "end": 2738
                        },
                        "typeArguments": null,
                        "start": 2737,
                        "end": 2738
                      },
                      "start": 2735,
                      "end": 2738
                    },
                    "start": 2734,
                    "end": 2738
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2743,
                      "end": 2744
                    },
                    "typeArguments": null,
                    "start": 2743,
                    "end": 2744
                  },
                  "start": 2740,
                  "end": 2744
                },
                "start": 2691,
                "end": 2744
              },
              "start": 2689,
              "end": 2744
            },
            "accessibility": null,
            "static": false,
            "start": 2686,
            "end": 2745
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2843,
              "end": 2846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2849,
                        "end": 2850
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2849,
                      "end": 2850
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2852,
                        "end": 2853
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2852,
                      "end": 2853
                    }
                  ],
                  "start": 2848,
                  "end": 2854
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
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2860,
                              "end": 2861
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
                                  "start": 2863,
                                  "end": 2864
                                },
                                "typeArguments": null,
                                "start": 2863,
                                "end": 2864
                              },
                              "start": 2861,
                              "end": 2864
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2860,
                            "end": 2865
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2866,
                              "end": 2867
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2869,
                                  "end": 2870
                                },
                                "typeArguments": null,
                                "start": 2869,
                                "end": 2870
                              },
                              "start": 2867,
                              "end": 2870
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2866,
                            "end": 2870
                          }
                        ],
                        "start": 2858,
                        "end": 2872
                      },
                      "start": 2856,
                      "end": 2872
                    },
                    "start": 2855,
                    "end": 2872
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2877,
                      "end": 2878
                    },
                    "typeArguments": null,
                    "start": 2877,
                    "end": 2878
                  },
                  "start": 2874,
                  "end": 2878
                },
                "start": 2848,
                "end": 2878
              },
              "start": 2846,
              "end": 2878
            },
            "accessibility": null,
            "static": false,
            "start": 2843,
            "end": 2879
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 2890,
              "end": 2893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2896,
                        "end": 2897
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2896,
                      "end": 2897
                    }
                  ],
                  "start": 2895,
                  "end": 2898
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
                          "start": 2902,
                          "end": 2903
                        },
                        "typeArguments": null,
                        "start": 2902,
                        "end": 2903
                      },
                      "start": 2900,
                      "end": 2903
                    },
                    "start": 2899,
                    "end": 2903
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2908,
                        "end": 2909
                      },
                      "typeArguments": null,
                      "start": 2908,
                      "end": 2909
                    },
                    "start": 2908,
                    "end": 2911
                  },
                  "start": 2905,
                  "end": 2911
                },
                "start": 2895,
                "end": 2911
              },
              "start": 2893,
              "end": 2911
            },
            "accessibility": null,
            "static": false,
            "start": 2890,
            "end": 2912
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 2923,
              "end": 2926
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2929,
                        "end": 2930
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2939,
                          "end": 2943
                        },
                        "typeArguments": null,
                        "start": 2939,
                        "end": 2943
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2929,
                      "end": 2943
                    }
                  ],
                  "start": 2928,
                  "end": 2944
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
                          "start": 2948,
                          "end": 2949
                        },
                        "typeArguments": null,
                        "start": 2948,
                        "end": 2949
                      },
                      "start": 2946,
                      "end": 2949
                    },
                    "start": 2945,
                    "end": 2949
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
                    },
                    "start": 2954,
                    "end": 2962
                  },
                  "start": 2951,
                  "end": 2962
                },
                "start": 2928,
                "end": 2962
              },
              "start": 2926,
              "end": 2962
            },
            "accessibility": null,
            "static": false,
            "start": 2923,
            "end": 2963
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2974,
              "end": 2977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2980,
                        "end": 2981
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2980,
                      "end": 2981
                    }
                  ],
                  "start": 2979,
                  "end": 2982
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2990,
                                  "end": 2991
                                },
                                "typeArguments": null,
                                "start": 2990,
                                "end": 2991
                              },
                              "start": 2988,
                              "end": 2991
                            },
                            "start": 2987,
                            "end": 2991
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2996,
                              "end": 2997
                            },
                            "typeArguments": null,
                            "start": 2996,
                            "end": 2997
                          },
                          "start": 2993,
                          "end": 2997
                        },
                        "start": 2986,
                        "end": 2997
                      },
                      "start": 2984,
                      "end": 2997
                    },
                    "start": 2983,
                    "end": 2997
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3002,
                        "end": 3003
                      },
                      "typeArguments": null,
                      "start": 3002,
                      "end": 3003
                    },
                    "start": 3002,
                    "end": 3005
                  },
                  "start": 2999,
                  "end": 3005
                },
                "start": 2979,
                "end": 3005
              },
              "start": 2977,
              "end": 3005
            },
            "accessibility": null,
            "static": false,
            "start": 2974,
            "end": 3006
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3017,
              "end": 3020
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 3023,
                        "end": 3024
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3023,
                      "end": 3024
                    }
                  ],
                  "start": 3022,
                  "end": 3025
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3033,
                                  "end": 3034
                                },
                                "typeArguments": null,
                                "start": 3033,
                                "end": 3034
                              },
                              "start": 3031,
                              "end": 3034
                            },
                            "start": 3030,
                            "end": 3034
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3039,
                              "end": 3040
                            },
                            "typeArguments": null,
                            "start": 3039,
                            "end": 3040
                          },
                          "start": 3036,
                          "end": 3040
                        },
                        "start": 3029,
                        "end": 3040
                      },
                      "start": 3027,
                      "end": 3040
                    },
                    "start": 3026,
                    "end": 3040
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3045,
                        "end": 3046
                      },
                      "typeArguments": null,
                      "start": 3045,
                      "end": 3046
                    },
                    "start": 3045,
                    "end": 3048
                  },
                  "start": 3042,
                  "end": 3048
                },
                "start": 3022,
                "end": 3048
              },
              "start": 3020,
              "end": 3048
            },
            "accessibility": null,
            "static": false,
            "start": 3017,
            "end": 3049
          }
        ],
        "start": 1602,
        "end": 3100
      },
      "declare": false,
      "start": 1580,
      "end": 3100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3100
}
```
