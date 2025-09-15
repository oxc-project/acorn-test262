__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "AstWalkerWithDetailCallback",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 259
        },
        "start": 221,
        "end": 259
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
                "name": "AstWalkerDetailCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 306
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmptyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 330
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 336
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 343,
                              "end": 346
                            },
                            "typeArguments": null,
                            "start": 343,
                            "end": 346
                          },
                          "start": 341,
                          "end": 346
                        },
                        "start": 338,
                        "end": 346
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 349,
                        "end": 356
                      },
                      "start": 347,
                      "end": 356
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 317,
                    "end": 357
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmptyExprCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 383
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 389
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 396,
                              "end": 399
                            },
                            "typeArguments": null,
                            "start": 396,
                            "end": 399
                          },
                          "start": 394,
                          "end": 399
                        },
                        "start": 391,
                        "end": 399
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 402,
                        "end": 409
                      },
                      "start": 400,
                      "end": 409
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 366,
                    "end": 410
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TrueCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 431
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 437
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 444,
                              "end": 447
                            },
                            "typeArguments": null,
                            "start": 444,
                            "end": 447
                          },
                          "start": 442,
                          "end": 447
                        },
                        "start": 439,
                        "end": 447
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 450,
                        "end": 457
                      },
                      "start": 448,
                      "end": 457
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 419,
                    "end": 458
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FalseCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 480
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 486
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 496
                            },
                            "typeArguments": null,
                            "start": 493,
                            "end": 496
                          },
                          "start": 491,
                          "end": 496
                        },
                        "start": 488,
                        "end": 496
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 499,
                        "end": 506
                      },
                      "start": 497,
                      "end": 506
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 467,
                    "end": 507
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 528
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 534
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 541,
                              "end": 544
                            },
                            "typeArguments": null,
                            "start": 541,
                            "end": 544
                          },
                          "start": 539,
                          "end": 544
                        },
                        "start": 536,
                        "end": 544
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 547,
                        "end": 554
                      },
                      "start": 545,
                      "end": 554
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 516,
                    "end": 555
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SuperCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 577
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 583
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 593
                            },
                            "typeArguments": null,
                            "start": 590,
                            "end": 593
                          },
                          "start": 588,
                          "end": 593
                        },
                        "start": 585,
                        "end": 593
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 596,
                        "end": 603
                      },
                      "start": 594,
                      "end": 603
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 564,
                    "end": 604
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QStringCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 628
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 634
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 644
                            },
                            "typeArguments": null,
                            "start": 641,
                            "end": 644
                          },
                          "start": 639,
                          "end": 644
                        },
                        "start": 636,
                        "end": 644
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 647,
                        "end": 654
                      },
                      "start": 645,
                      "end": 654
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 613,
                    "end": 655
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegexCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 677
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 683
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 690,
                              "end": 693
                            },
                            "typeArguments": null,
                            "start": 690,
                            "end": 693
                          },
                          "start": 688,
                          "end": 693
                        },
                        "start": 685,
                        "end": 693
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 696,
                        "end": 703
                      },
                      "start": 694,
                      "end": 703
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 664,
                    "end": 704
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NullCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 713,
                      "end": 725
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 731
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 738,
                              "end": 741
                            },
                            "typeArguments": null,
                            "start": 738,
                            "end": 741
                          },
                          "start": 736,
                          "end": 741
                        },
                        "start": 733,
                        "end": 741
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 744,
                        "end": 751
                      },
                      "start": 742,
                      "end": 751
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 713,
                    "end": 752
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArrayLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 761,
                      "end": 777
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 780,
                        "end": 783
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 790,
                              "end": 793
                            },
                            "typeArguments": null,
                            "start": 790,
                            "end": 793
                          },
                          "start": 788,
                          "end": 793
                        },
                        "start": 785,
                        "end": 793
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 796,
                        "end": 803
                      },
                      "start": 794,
                      "end": 803
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 761,
                    "end": 804
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 830
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 833,
                        "end": 836
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 843,
                              "end": 846
                            },
                            "typeArguments": null,
                            "start": 843,
                            "end": 846
                          },
                          "start": 841,
                          "end": 846
                        },
                        "start": 838,
                        "end": 846
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 849,
                        "end": 856
                      },
                      "start": 847,
                      "end": 856
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 813,
                    "end": 857
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VoidCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 878
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 881,
                        "end": 884
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 891,
                              "end": 894
                            },
                            "typeArguments": null,
                            "start": 891,
                            "end": 894
                          },
                          "start": 889,
                          "end": 894
                        },
                        "start": 886,
                        "end": 894
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 897,
                        "end": 904
                      },
                      "start": 895,
                      "end": 904
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 866,
                    "end": 905
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CommaCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 914,
                      "end": 927
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 930,
                        "end": 933
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 940,
                              "end": 943
                            },
                            "typeArguments": null,
                            "start": 940,
                            "end": 943
                          },
                          "start": 938,
                          "end": 943
                        },
                        "start": 935,
                        "end": 943
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 946,
                        "end": 953
                      },
                      "start": 944,
                      "end": 953
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 914,
                    "end": 954
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PosCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 974
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 977,
                        "end": 980
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 990
                            },
                            "typeArguments": null,
                            "start": 987,
                            "end": 990
                          },
                          "start": 985,
                          "end": 990
                        },
                        "start": 982,
                        "end": 990
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 993,
                        "end": 1000
                      },
                      "start": 991,
                      "end": 1000
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 963,
                    "end": 1001
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NegCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1021
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1024,
                        "end": 1027
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1034,
                              "end": 1037
                            },
                            "typeArguments": null,
                            "start": 1034,
                            "end": 1037
                          },
                          "start": 1032,
                          "end": 1037
                        },
                        "start": 1029,
                        "end": 1037
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1040,
                        "end": 1047
                      },
                      "start": 1038,
                      "end": 1047
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1010,
                    "end": 1048
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DeleteCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1057,
                      "end": 1071
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1077
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1084,
                              "end": 1087
                            },
                            "typeArguments": null,
                            "start": 1084,
                            "end": 1087
                          },
                          "start": 1082,
                          "end": 1087
                        },
                        "start": 1079,
                        "end": 1087
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1090,
                        "end": 1097
                      },
                      "start": 1088,
                      "end": 1097
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1057,
                    "end": 1098
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AwaitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1107,
                      "end": 1120
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1123,
                        "end": 1126
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1133,
                              "end": 1136
                            },
                            "typeArguments": null,
                            "start": 1133,
                            "end": 1136
                          },
                          "start": 1131,
                          "end": 1136
                        },
                        "start": 1128,
                        "end": 1136
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1139,
                        "end": 1146
                      },
                      "start": 1137,
                      "end": 1146
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1107,
                    "end": 1147
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1156,
                      "end": 1166
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1172
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1179,
                              "end": 1182
                            },
                            "typeArguments": null,
                            "start": 1179,
                            "end": 1182
                          },
                          "start": 1177,
                          "end": 1182
                        },
                        "start": 1174,
                        "end": 1182
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1185,
                        "end": 1192
                      },
                      "start": 1183,
                      "end": 1192
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1156,
                    "end": 1193
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1202,
                      "end": 1213
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1219
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1226,
                              "end": 1229
                            },
                            "typeArguments": null,
                            "start": 1226,
                            "end": 1229
                          },
                          "start": 1224,
                          "end": 1229
                        },
                        "start": 1221,
                        "end": 1229
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1232,
                        "end": 1239
                      },
                      "start": 1230,
                      "end": 1239
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1202,
                    "end": 1240
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FromCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1249,
                      "end": 1261
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1267
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1274,
                              "end": 1277
                            },
                            "typeArguments": null,
                            "start": 1274,
                            "end": 1277
                          },
                          "start": 1272,
                          "end": 1277
                        },
                        "start": 1269,
                        "end": 1277
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1280,
                        "end": 1287
                      },
                      "start": 1278,
                      "end": 1287
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1249,
                    "end": 1288
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1297,
                      "end": 1307
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1310,
                        "end": 1313
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1320,
                              "end": 1323
                            },
                            "typeArguments": null,
                            "start": 1320,
                            "end": 1323
                          },
                          "start": 1318,
                          "end": 1323
                        },
                        "start": 1315,
                        "end": 1323
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1326,
                        "end": 1333
                      },
                      "start": 1324,
                      "end": 1333
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1297,
                    "end": 1334
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InstOfCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1343,
                      "end": 1357
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1363
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1370,
                              "end": 1373
                            },
                            "typeArguments": null,
                            "start": 1370,
                            "end": 1373
                          },
                          "start": 1368,
                          "end": 1373
                        },
                        "start": 1365,
                        "end": 1373
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1376,
                        "end": 1383
                      },
                      "start": 1374,
                      "end": 1383
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1343,
                    "end": 1384
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeofCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1407
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1413
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1420,
                              "end": 1423
                            },
                            "typeArguments": null,
                            "start": 1420,
                            "end": 1423
                          },
                          "start": 1418,
                          "end": 1423
                        },
                        "start": 1415,
                        "end": 1423
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1426,
                        "end": 1433
                      },
                      "start": 1424,
                      "end": 1433
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1393,
                    "end": 1434
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1443,
                      "end": 1460
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1463,
                        "end": 1466
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1473,
                              "end": 1476
                            },
                            "typeArguments": null,
                            "start": 1473,
                            "end": 1476
                          },
                          "start": 1471,
                          "end": 1476
                        },
                        "start": 1468,
                        "end": 1476
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1479,
                        "end": 1486
                      },
                      "start": 1477,
                      "end": 1486
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1443,
                    "end": 1487
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NameCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1496,
                      "end": 1508
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1511,
                        "end": 1514
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "identifierAst",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Identifier",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1531,
                              "end": 1541
                            },
                            "typeArguments": null,
                            "start": 1531,
                            "end": 1541
                          },
                          "start": 1529,
                          "end": 1541
                        },
                        "start": 1516,
                        "end": 1541
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1544,
                        "end": 1551
                      },
                      "start": 1542,
                      "end": 1551
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1496,
                    "end": 1552
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeRefCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1561,
                      "end": 1576
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1579,
                        "end": 1582
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1589,
                              "end": 1592
                            },
                            "typeArguments": null,
                            "start": 1589,
                            "end": 1592
                          },
                          "start": 1587,
                          "end": 1592
                        },
                        "start": 1584,
                        "end": 1592
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1595,
                        "end": 1602
                      },
                      "start": 1593,
                      "end": 1602
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1561,
                    "end": 1603
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndexCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1612,
                      "end": 1625
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1628,
                        "end": 1631
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1638,
                              "end": 1641
                            },
                            "typeArguments": null,
                            "start": 1638,
                            "end": 1641
                          },
                          "start": 1636,
                          "end": 1641
                        },
                        "start": 1633,
                        "end": 1641
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1644,
                        "end": 1651
                      },
                      "start": 1642,
                      "end": 1651
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1612,
                    "end": 1652
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CallCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1673
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1679
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1686,
                              "end": 1689
                            },
                            "typeArguments": null,
                            "start": 1686,
                            "end": 1689
                          },
                          "start": 1684,
                          "end": 1689
                        },
                        "start": 1681,
                        "end": 1689
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1692,
                        "end": 1699
                      },
                      "start": 1690,
                      "end": 1699
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1661,
                    "end": 1700
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NewCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1720
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1723,
                        "end": 1726
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1733,
                              "end": 1736
                            },
                            "typeArguments": null,
                            "start": 1733,
                            "end": 1736
                          },
                          "start": 1731,
                          "end": 1736
                        },
                        "start": 1728,
                        "end": 1736
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1739,
                        "end": 1746
                      },
                      "start": 1737,
                      "end": 1746
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1709,
                    "end": 1747
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1756,
                      "end": 1767
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1770,
                        "end": 1773
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1780,
                              "end": 1783
                            },
                            "typeArguments": null,
                            "start": 1780,
                            "end": 1783
                          },
                          "start": 1778,
                          "end": 1783
                        },
                        "start": 1775,
                        "end": 1783
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1786,
                        "end": 1793
                      },
                      "start": 1784,
                      "end": 1793
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1756,
                    "end": 1794
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgAddCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1803,
                      "end": 1817
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1820,
                        "end": 1823
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1830,
                              "end": 1833
                            },
                            "typeArguments": null,
                            "start": 1830,
                            "end": 1833
                          },
                          "start": 1828,
                          "end": 1833
                        },
                        "start": 1825,
                        "end": 1833
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1836,
                        "end": 1843
                      },
                      "start": 1834,
                      "end": 1843
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1803,
                    "end": 1844
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgSubCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1853,
                      "end": 1867
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1870,
                        "end": 1873
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1880,
                              "end": 1883
                            },
                            "typeArguments": null,
                            "start": 1880,
                            "end": 1883
                          },
                          "start": 1878,
                          "end": 1883
                        },
                        "start": 1875,
                        "end": 1883
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1886,
                        "end": 1893
                      },
                      "start": 1884,
                      "end": 1893
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1853,
                    "end": 1894
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgDivCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1903,
                      "end": 1917
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1920,
                        "end": 1923
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1930,
                              "end": 1933
                            },
                            "typeArguments": null,
                            "start": 1930,
                            "end": 1933
                          },
                          "start": 1928,
                          "end": 1933
                        },
                        "start": 1925,
                        "end": 1933
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1936,
                        "end": 1943
                      },
                      "start": 1934,
                      "end": 1943
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1903,
                    "end": 1944
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgMulCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1953,
                      "end": 1967
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1970,
                        "end": 1973
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1980,
                              "end": 1983
                            },
                            "typeArguments": null,
                            "start": 1980,
                            "end": 1983
                          },
                          "start": 1978,
                          "end": 1983
                        },
                        "start": 1975,
                        "end": 1983
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1986,
                        "end": 1993
                      },
                      "start": 1984,
                      "end": 1993
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1953,
                    "end": 1994
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgModCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2003,
                      "end": 2017
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2020,
                        "end": 2023
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2030,
                              "end": 2033
                            },
                            "typeArguments": null,
                            "start": 2030,
                            "end": 2033
                          },
                          "start": 2028,
                          "end": 2033
                        },
                        "start": 2025,
                        "end": 2033
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2036,
                        "end": 2043
                      },
                      "start": 2034,
                      "end": 2043
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2003,
                    "end": 2044
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgAndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2067
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2073
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2080,
                              "end": 2083
                            },
                            "typeArguments": null,
                            "start": 2080,
                            "end": 2083
                          },
                          "start": 2078,
                          "end": 2083
                        },
                        "start": 2075,
                        "end": 2083
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2086,
                        "end": 2093
                      },
                      "start": 2084,
                      "end": 2093
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2053,
                    "end": 2094
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgXorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2103,
                      "end": 2117
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2120,
                        "end": 2123
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2130,
                              "end": 2133
                            },
                            "typeArguments": null,
                            "start": 2130,
                            "end": 2133
                          },
                          "start": 2128,
                          "end": 2133
                        },
                        "start": 2125,
                        "end": 2133
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2136,
                        "end": 2143
                      },
                      "start": 2134,
                      "end": 2143
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2103,
                    "end": 2144
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgOrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2153,
                      "end": 2166
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2169,
                        "end": 2172
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2179,
                              "end": 2182
                            },
                            "typeArguments": null,
                            "start": 2179,
                            "end": 2182
                          },
                          "start": 2177,
                          "end": 2182
                        },
                        "start": 2174,
                        "end": 2182
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2185,
                        "end": 2192
                      },
                      "start": 2183,
                      "end": 2192
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2153,
                    "end": 2193
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgLshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2202,
                      "end": 2216
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2219,
                        "end": 2222
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2229,
                              "end": 2232
                            },
                            "typeArguments": null,
                            "start": 2229,
                            "end": 2232
                          },
                          "start": 2227,
                          "end": 2232
                        },
                        "start": 2224,
                        "end": 2232
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2235,
                        "end": 2242
                      },
                      "start": 2233,
                      "end": 2242
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2202,
                    "end": 2243
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgRshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2252,
                      "end": 2266
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2269,
                        "end": 2272
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2279,
                              "end": 2282
                            },
                            "typeArguments": null,
                            "start": 2279,
                            "end": 2282
                          },
                          "start": 2277,
                          "end": 2282
                        },
                        "start": 2274,
                        "end": 2282
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2285,
                        "end": 2292
                      },
                      "start": 2283,
                      "end": 2292
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2252,
                    "end": 2293
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgRs2Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2302,
                      "end": 2316
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2319,
                        "end": 2322
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2329,
                              "end": 2332
                            },
                            "typeArguments": null,
                            "start": 2329,
                            "end": 2332
                          },
                          "start": 2327,
                          "end": 2332
                        },
                        "start": 2324,
                        "end": 2332
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2335,
                        "end": 2342
                      },
                      "start": 2333,
                      "end": 2342
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2302,
                    "end": 2343
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QMarkCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2352,
                      "end": 2365
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2368,
                        "end": 2371
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2378,
                              "end": 2381
                            },
                            "typeArguments": null,
                            "start": 2378,
                            "end": 2381
                          },
                          "start": 2376,
                          "end": 2381
                        },
                        "start": 2373,
                        "end": 2381
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2384,
                        "end": 2391
                      },
                      "start": 2382,
                      "end": 2391
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2352,
                    "end": 2392
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogOrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2401,
                      "end": 2414
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2417,
                        "end": 2420
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2427,
                              "end": 2430
                            },
                            "typeArguments": null,
                            "start": 2427,
                            "end": 2430
                          },
                          "start": 2425,
                          "end": 2430
                        },
                        "start": 2422,
                        "end": 2430
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2433,
                        "end": 2440
                      },
                      "start": 2431,
                      "end": 2440
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2401,
                    "end": 2441
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogAndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2450,
                      "end": 2464
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2467,
                        "end": 2470
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2477,
                              "end": 2480
                            },
                            "typeArguments": null,
                            "start": 2477,
                            "end": 2480
                          },
                          "start": 2475,
                          "end": 2480
                        },
                        "start": 2472,
                        "end": 2480
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2483,
                        "end": 2490
                      },
                      "start": 2481,
                      "end": 2490
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2450,
                    "end": 2491
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2500,
                      "end": 2510
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2513,
                        "end": 2516
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2523,
                              "end": 2526
                            },
                            "typeArguments": null,
                            "start": 2523,
                            "end": 2526
                          },
                          "start": 2521,
                          "end": 2526
                        },
                        "start": 2518,
                        "end": 2526
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2529,
                        "end": 2536
                      },
                      "start": 2527,
                      "end": 2536
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2500,
                    "end": 2537
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2546,
                      "end": 2557
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2560,
                        "end": 2563
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2570,
                              "end": 2573
                            },
                            "typeArguments": null,
                            "start": 2570,
                            "end": 2573
                          },
                          "start": 2568,
                          "end": 2573
                        },
                        "start": 2565,
                        "end": 2573
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2576,
                        "end": 2583
                      },
                      "start": 2574,
                      "end": 2583
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2546,
                    "end": 2584
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2593,
                      "end": 2604
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2607,
                        "end": 2610
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2617,
                              "end": 2620
                            },
                            "typeArguments": null,
                            "start": 2617,
                            "end": 2620
                          },
                          "start": 2615,
                          "end": 2620
                        },
                        "start": 2612,
                        "end": 2620
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2623,
                        "end": 2630
                      },
                      "start": 2621,
                      "end": 2630
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2593,
                    "end": 2631
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EqCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2640,
                      "end": 2650
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2653,
                        "end": 2656
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2663,
                              "end": 2666
                            },
                            "typeArguments": null,
                            "start": 2663,
                            "end": 2666
                          },
                          "start": 2661,
                          "end": 2666
                        },
                        "start": 2658,
                        "end": 2666
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2669,
                        "end": 2676
                      },
                      "start": 2667,
                      "end": 2676
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2640,
                    "end": 2677
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2686,
                      "end": 2696
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2699,
                        "end": 2702
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2709,
                              "end": 2712
                            },
                            "typeArguments": null,
                            "start": 2709,
                            "end": 2712
                          },
                          "start": 2707,
                          "end": 2712
                        },
                        "start": 2704,
                        "end": 2712
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2715,
                        "end": 2722
                      },
                      "start": 2713,
                      "end": 2722
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2686,
                    "end": 2723
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EqvCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2732,
                      "end": 2743
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2746,
                        "end": 2749
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2756,
                              "end": 2759
                            },
                            "typeArguments": null,
                            "start": 2756,
                            "end": 2759
                          },
                          "start": 2754,
                          "end": 2759
                        },
                        "start": 2751,
                        "end": 2759
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2762,
                        "end": 2769
                      },
                      "start": 2760,
                      "end": 2769
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2732,
                    "end": 2770
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NEqvCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2779,
                      "end": 2791
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2794,
                        "end": 2797
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2804,
                              "end": 2807
                            },
                            "typeArguments": null,
                            "start": 2804,
                            "end": 2807
                          },
                          "start": 2802,
                          "end": 2807
                        },
                        "start": 2799,
                        "end": 2807
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2810,
                        "end": 2817
                      },
                      "start": 2808,
                      "end": 2817
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2779,
                    "end": 2818
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LtCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2827,
                      "end": 2837
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2840,
                        "end": 2843
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2850,
                              "end": 2853
                            },
                            "typeArguments": null,
                            "start": 2850,
                            "end": 2853
                          },
                          "start": 2848,
                          "end": 2853
                        },
                        "start": 2845,
                        "end": 2853
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2856,
                        "end": 2863
                      },
                      "start": 2854,
                      "end": 2863
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2827,
                    "end": 2864
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2873,
                      "end": 2883
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2886,
                        "end": 2889
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2896,
                              "end": 2899
                            },
                            "typeArguments": null,
                            "start": 2896,
                            "end": 2899
                          },
                          "start": 2894,
                          "end": 2899
                        },
                        "start": 2891,
                        "end": 2899
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2902,
                        "end": 2909
                      },
                      "start": 2900,
                      "end": 2909
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2873,
                    "end": 2910
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GtCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2919,
                      "end": 2929
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2932,
                        "end": 2935
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2942,
                              "end": 2945
                            },
                            "typeArguments": null,
                            "start": 2942,
                            "end": 2945
                          },
                          "start": 2940,
                          "end": 2945
                        },
                        "start": 2937,
                        "end": 2945
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2948,
                        "end": 2955
                      },
                      "start": 2946,
                      "end": 2955
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2919,
                    "end": 2956
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2965,
                      "end": 2975
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2978,
                        "end": 2981
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2988,
                              "end": 2991
                            },
                            "typeArguments": null,
                            "start": 2988,
                            "end": 2991
                          },
                          "start": 2986,
                          "end": 2991
                        },
                        "start": 2983,
                        "end": 2991
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2994,
                        "end": 3001
                      },
                      "start": 2992,
                      "end": 3001
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2965,
                    "end": 3002
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3011,
                      "end": 3022
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3025,
                        "end": 3028
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3035,
                              "end": 3038
                            },
                            "typeArguments": null,
                            "start": 3035,
                            "end": 3038
                          },
                          "start": 3033,
                          "end": 3038
                        },
                        "start": 3030,
                        "end": 3038
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3041,
                        "end": 3048
                      },
                      "start": 3039,
                      "end": 3048
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3011,
                    "end": 3049
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SubCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3058,
                      "end": 3069
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3072,
                        "end": 3075
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3082,
                              "end": 3085
                            },
                            "typeArguments": null,
                            "start": 3082,
                            "end": 3085
                          },
                          "start": 3080,
                          "end": 3085
                        },
                        "start": 3077,
                        "end": 3085
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3088,
                        "end": 3095
                      },
                      "start": 3086,
                      "end": 3095
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3058,
                    "end": 3096
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MulCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3116
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3122
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3129,
                              "end": 3132
                            },
                            "typeArguments": null,
                            "start": 3129,
                            "end": 3132
                          },
                          "start": 3127,
                          "end": 3132
                        },
                        "start": 3124,
                        "end": 3132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3135,
                        "end": 3142
                      },
                      "start": 3133,
                      "end": 3142
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3105,
                    "end": 3143
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DivCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3152,
                      "end": 3163
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3166,
                        "end": 3169
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3176,
                              "end": 3179
                            },
                            "typeArguments": null,
                            "start": 3176,
                            "end": 3179
                          },
                          "start": 3174,
                          "end": 3179
                        },
                        "start": 3171,
                        "end": 3179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3182,
                        "end": 3189
                      },
                      "start": 3180,
                      "end": 3189
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3152,
                    "end": 3190
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3199,
                      "end": 3210
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3213,
                        "end": 3216
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3223,
                              "end": 3226
                            },
                            "typeArguments": null,
                            "start": 3223,
                            "end": 3226
                          },
                          "start": 3221,
                          "end": 3226
                        },
                        "start": 3218,
                        "end": 3226
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3229,
                        "end": 3236
                      },
                      "start": 3227,
                      "end": 3236
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3199,
                    "end": 3237
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3246,
                      "end": 3257
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3260,
                        "end": 3263
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3270,
                              "end": 3273
                            },
                            "typeArguments": null,
                            "start": 3270,
                            "end": 3273
                          },
                          "start": 3268,
                          "end": 3273
                        },
                        "start": 3265,
                        "end": 3273
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3276,
                        "end": 3283
                      },
                      "start": 3274,
                      "end": 3283
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3246,
                    "end": 3284
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3293,
                      "end": 3304
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3307,
                        "end": 3310
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3317,
                              "end": 3320
                            },
                            "typeArguments": null,
                            "start": 3317,
                            "end": 3320
                          },
                          "start": 3315,
                          "end": 3320
                        },
                        "start": 3312,
                        "end": 3320
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3323,
                        "end": 3330
                      },
                      "start": 3321,
                      "end": 3330
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3293,
                    "end": 3331
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Rs2Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3340,
                      "end": 3351
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3354,
                        "end": 3357
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3364,
                              "end": 3367
                            },
                            "typeArguments": null,
                            "start": 3364,
                            "end": 3367
                          },
                          "start": 3362,
                          "end": 3367
                        },
                        "start": 3359,
                        "end": 3367
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3370,
                        "end": 3377
                      },
                      "start": 3368,
                      "end": 3377
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3340,
                    "end": 3378
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3387,
                      "end": 3398
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3401,
                        "end": 3404
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3411,
                              "end": 3414
                            },
                            "typeArguments": null,
                            "start": 3411,
                            "end": 3414
                          },
                          "start": 3409,
                          "end": 3414
                        },
                        "start": 3406,
                        "end": 3414
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3417,
                        "end": 3424
                      },
                      "start": 3415,
                      "end": 3424
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3387,
                    "end": 3425
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogNotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3448
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3451,
                        "end": 3454
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3461,
                              "end": 3464
                            },
                            "typeArguments": null,
                            "start": 3461,
                            "end": 3464
                          },
                          "start": 3459,
                          "end": 3464
                        },
                        "start": 3456,
                        "end": 3464
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3467,
                        "end": 3474
                      },
                      "start": 3465,
                      "end": 3474
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3434,
                    "end": 3475
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncPreCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3484,
                      "end": 3498
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3501,
                        "end": 3504
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3511,
                              "end": 3514
                            },
                            "typeArguments": null,
                            "start": 3511,
                            "end": 3514
                          },
                          "start": 3509,
                          "end": 3514
                        },
                        "start": 3506,
                        "end": 3514
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3517,
                        "end": 3524
                      },
                      "start": 3515,
                      "end": 3524
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3484,
                    "end": 3525
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecPreCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3534,
                      "end": 3548
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3551,
                        "end": 3554
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3561,
                              "end": 3564
                            },
                            "typeArguments": null,
                            "start": 3561,
                            "end": 3564
                          },
                          "start": 3559,
                          "end": 3564
                        },
                        "start": 3556,
                        "end": 3564
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3567,
                        "end": 3574
                      },
                      "start": 3565,
                      "end": 3574
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3534,
                    "end": 3575
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncPostCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3584,
                      "end": 3599
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3602,
                        "end": 3605
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3612,
                              "end": 3615
                            },
                            "typeArguments": null,
                            "start": 3612,
                            "end": 3615
                          },
                          "start": 3610,
                          "end": 3615
                        },
                        "start": 3607,
                        "end": 3615
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3618,
                        "end": 3625
                      },
                      "start": 3616,
                      "end": 3625
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3584,
                    "end": 3626
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecPostCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3635,
                      "end": 3650
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3653,
                        "end": 3656
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3663,
                              "end": 3666
                            },
                            "typeArguments": null,
                            "start": 3663,
                            "end": 3666
                          },
                          "start": 3661,
                          "end": 3666
                        },
                        "start": 3658,
                        "end": 3666
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3669,
                        "end": 3676
                      },
                      "start": 3667,
                      "end": 3676
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3635,
                    "end": 3677
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeAssertionCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3686,
                      "end": 3707
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3710,
                        "end": 3713
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3720,
                              "end": 3723
                            },
                            "typeArguments": null,
                            "start": 3720,
                            "end": 3723
                          },
                          "start": 3718,
                          "end": 3723
                        },
                        "start": 3715,
                        "end": 3723
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3726,
                        "end": 3733
                      },
                      "start": 3724,
                      "end": 3733
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3686,
                    "end": 3734
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FuncDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3743,
                      "end": 3759
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3762,
                        "end": 3765
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FuncDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3777,
                              "end": 3785
                            },
                            "typeArguments": null,
                            "start": 3777,
                            "end": 3785
                          },
                          "start": 3775,
                          "end": 3785
                        },
                        "start": 3767,
                        "end": 3785
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3788,
                        "end": 3795
                      },
                      "start": 3786,
                      "end": 3795
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3743,
                    "end": 3796
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MemberCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3805,
                      "end": 3819
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3822,
                        "end": 3825
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3832,
                              "end": 3835
                            },
                            "typeArguments": null,
                            "start": 3832,
                            "end": 3835
                          },
                          "start": 3830,
                          "end": 3835
                        },
                        "start": 3827,
                        "end": 3835
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3838,
                        "end": 3845
                      },
                      "start": 3836,
                      "end": 3845
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3805,
                    "end": 3846
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VarDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3855,
                      "end": 3870
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3873,
                        "end": 3876
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "varDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VarDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3887,
                              "end": 3894
                            },
                            "typeArguments": null,
                            "start": 3887,
                            "end": 3894
                          },
                          "start": 3885,
                          "end": 3894
                        },
                        "start": 3878,
                        "end": 3894
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3897,
                        "end": 3904
                      },
                      "start": 3895,
                      "end": 3904
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3855,
                    "end": 3905
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArgDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3914,
                      "end": 3929
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3932,
                        "end": 3935
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3942,
                              "end": 3945
                            },
                            "typeArguments": null,
                            "start": 3942,
                            "end": 3945
                          },
                          "start": 3940,
                          "end": 3945
                        },
                        "start": 3937,
                        "end": 3945
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3948,
                        "end": 3955
                      },
                      "start": 3946,
                      "end": 3955
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3914,
                    "end": 3956
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3965,
                      "end": 3979
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3982,
                        "end": 3985
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3992,
                              "end": 3995
                            },
                            "typeArguments": null,
                            "start": 3992,
                            "end": 3995
                          },
                          "start": 3990,
                          "end": 3995
                        },
                        "start": 3987,
                        "end": 3995
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3998,
                        "end": 4005
                      },
                      "start": 3996,
                      "end": 4005
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3965,
                    "end": 4006
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BreakCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4015,
                      "end": 4028
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4031,
                        "end": 4034
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4041,
                              "end": 4044
                            },
                            "typeArguments": null,
                            "start": 4041,
                            "end": 4044
                          },
                          "start": 4039,
                          "end": 4044
                        },
                        "start": 4036,
                        "end": 4044
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4047,
                        "end": 4054
                      },
                      "start": 4045,
                      "end": 4054
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4015,
                    "end": 4055
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ContinueCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4064,
                      "end": 4080
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4083,
                        "end": 4086
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4093,
                              "end": 4096
                            },
                            "typeArguments": null,
                            "start": 4093,
                            "end": 4096
                          },
                          "start": 4091,
                          "end": 4096
                        },
                        "start": 4088,
                        "end": 4096
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4099,
                        "end": 4106
                      },
                      "start": 4097,
                      "end": 4106
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4064,
                    "end": 4107
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThrowCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4116,
                      "end": 4129
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4132,
                        "end": 4135
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4142,
                              "end": 4145
                            },
                            "typeArguments": null,
                            "start": 4142,
                            "end": 4145
                          },
                          "start": 4140,
                          "end": 4145
                        },
                        "start": 4137,
                        "end": 4145
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4148,
                        "end": 4155
                      },
                      "start": 4146,
                      "end": 4155
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4116,
                    "end": 4156
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4165,
                      "end": 4176
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4179,
                        "end": 4182
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4189,
                              "end": 4192
                            },
                            "typeArguments": null,
                            "start": 4189,
                            "end": 4192
                          },
                          "start": 4187,
                          "end": 4192
                        },
                        "start": 4184,
                        "end": 4192
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4195,
                        "end": 4202
                      },
                      "start": 4193,
                      "end": 4202
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4165,
                    "end": 4203
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForInCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4212,
                      "end": 4225
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4228,
                        "end": 4231
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4238,
                              "end": 4241
                            },
                            "typeArguments": null,
                            "start": 4238,
                            "end": 4241
                          },
                          "start": 4236,
                          "end": 4241
                        },
                        "start": 4233,
                        "end": 4241
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4244,
                        "end": 4251
                      },
                      "start": 4242,
                      "end": 4251
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4212,
                    "end": 4252
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IfCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4261,
                      "end": 4271
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4274,
                        "end": 4277
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4284,
                              "end": 4287
                            },
                            "typeArguments": null,
                            "start": 4284,
                            "end": 4287
                          },
                          "start": 4282,
                          "end": 4287
                        },
                        "start": 4279,
                        "end": 4287
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4290,
                        "end": 4297
                      },
                      "start": 4288,
                      "end": 4297
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4261,
                    "end": 4298
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WhileCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4307,
                      "end": 4320
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4323,
                        "end": 4326
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4333,
                              "end": 4336
                            },
                            "typeArguments": null,
                            "start": 4333,
                            "end": 4336
                          },
                          "start": 4331,
                          "end": 4336
                        },
                        "start": 4328,
                        "end": 4336
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4339,
                        "end": 4346
                      },
                      "start": 4337,
                      "end": 4346
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4307,
                    "end": 4347
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DoWhileCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4356,
                      "end": 4371
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4374,
                        "end": 4377
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4384,
                              "end": 4387
                            },
                            "typeArguments": null,
                            "start": 4384,
                            "end": 4387
                          },
                          "start": 4382,
                          "end": 4387
                        },
                        "start": 4379,
                        "end": 4387
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4390,
                        "end": 4397
                      },
                      "start": 4388,
                      "end": 4397
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4356,
                    "end": 4398
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BlockCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4407,
                      "end": 4420
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4423,
                        "end": 4426
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "block",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Block",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4435,
                              "end": 4440
                            },
                            "typeArguments": null,
                            "start": 4435,
                            "end": 4440
                          },
                          "start": 4433,
                          "end": 4440
                        },
                        "start": 4428,
                        "end": 4440
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4443,
                        "end": 4450
                      },
                      "start": 4441,
                      "end": 4450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4407,
                    "end": 4451
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CaseCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4460,
                      "end": 4472
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4475,
                        "end": 4478
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4485,
                              "end": 4488
                            },
                            "typeArguments": null,
                            "start": 4485,
                            "end": 4488
                          },
                          "start": 4483,
                          "end": 4488
                        },
                        "start": 4480,
                        "end": 4488
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4491,
                        "end": 4498
                      },
                      "start": 4489,
                      "end": 4498
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4460,
                    "end": 4499
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SwitchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4508,
                      "end": 4522
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4525,
                        "end": 4528
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4535,
                              "end": 4538
                            },
                            "typeArguments": null,
                            "start": 4535,
                            "end": 4538
                          },
                          "start": 4533,
                          "end": 4538
                        },
                        "start": 4530,
                        "end": 4538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4541,
                        "end": 4548
                      },
                      "start": 4539,
                      "end": 4548
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4508,
                    "end": 4549
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4558,
                      "end": 4569
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4572,
                        "end": 4575
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4582,
                              "end": 4585
                            },
                            "typeArguments": null,
                            "start": 4582,
                            "end": 4585
                          },
                          "start": 4580,
                          "end": 4585
                        },
                        "start": 4577,
                        "end": 4585
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4588,
                        "end": 4595
                      },
                      "start": 4586,
                      "end": 4595
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4558,
                    "end": 4596
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryCatchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4605,
                      "end": 4621
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4624,
                        "end": 4627
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4634,
                              "end": 4637
                            },
                            "typeArguments": null,
                            "start": 4634,
                            "end": 4637
                          },
                          "start": 4632,
                          "end": 4637
                        },
                        "start": 4629,
                        "end": 4637
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4640,
                        "end": 4647
                      },
                      "start": 4638,
                      "end": 4647
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4605,
                    "end": 4648
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryFinallyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4657,
                      "end": 4675
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4678,
                        "end": 4681
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4688,
                              "end": 4691
                            },
                            "typeArguments": null,
                            "start": 4688,
                            "end": 4691
                          },
                          "start": 4686,
                          "end": 4691
                        },
                        "start": 4683,
                        "end": 4691
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4694,
                        "end": 4701
                      },
                      "start": 4692,
                      "end": 4701
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4657,
                    "end": 4702
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FinallyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4711,
                      "end": 4726
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4729,
                        "end": 4732
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4739,
                              "end": 4742
                            },
                            "typeArguments": null,
                            "start": 4739,
                            "end": 4742
                          },
                          "start": 4737,
                          "end": 4742
                        },
                        "start": 4734,
                        "end": 4742
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4745,
                        "end": 4752
                      },
                      "start": 4743,
                      "end": 4752
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4711,
                    "end": 4753
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CatchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4762,
                      "end": 4775
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4778,
                        "end": 4781
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4788,
                              "end": 4791
                            },
                            "typeArguments": null,
                            "start": 4788,
                            "end": 4791
                          },
                          "start": 4786,
                          "end": 4791
                        },
                        "start": 4783,
                        "end": 4791
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4794,
                        "end": 4801
                      },
                      "start": 4792,
                      "end": 4801
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4762,
                    "end": 4802
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4811,
                      "end": 4823
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4826,
                        "end": 4829
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "astList",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ASTList",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4840,
                              "end": 4847
                            },
                            "typeArguments": null,
                            "start": 4840,
                            "end": 4847
                          },
                          "start": 4838,
                          "end": 4847
                        },
                        "start": 4831,
                        "end": 4847
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4850,
                        "end": 4857
                      },
                      "start": 4848,
                      "end": 4857
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4811,
                    "end": 4858
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ScriptCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4867,
                      "end": 4881
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4884,
                        "end": 4887
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "script",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Script",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4897,
                              "end": 4903
                            },
                            "typeArguments": null,
                            "start": 4897,
                            "end": 4903
                          },
                          "start": 4895,
                          "end": 4903
                        },
                        "start": 4889,
                        "end": 4903
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4906,
                        "end": 4913
                      },
                      "start": 4904,
                      "end": 4913
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4867,
                    "end": 4914
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4923,
                      "end": 4947
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4950,
                        "end": 4953
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4960,
                              "end": 4963
                            },
                            "typeArguments": null,
                            "start": 4960,
                            "end": 4963
                          },
                          "start": 4958,
                          "end": 4963
                        },
                        "start": 4955,
                        "end": 4963
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4966,
                        "end": 4973
                      },
                      "start": 4964,
                      "end": 4973
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4923,
                    "end": 4974
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4983,
                      "end": 5011
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5014,
                        "end": 5017
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InterfaceDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5034,
                              "end": 5054
                            },
                            "typeArguments": null,
                            "start": 5034,
                            "end": 5054
                          },
                          "start": 5032,
                          "end": 5054
                        },
                        "start": 5019,
                        "end": 5054
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5057,
                        "end": 5064
                      },
                      "start": 5055,
                      "end": 5064
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4983,
                    "end": 5065
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5074,
                      "end": 5099
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5102,
                        "end": 5105
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ModuleDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5119,
                              "end": 5136
                            },
                            "typeArguments": null,
                            "start": 5119,
                            "end": 5136
                          },
                          "start": 5117,
                          "end": 5136
                        },
                        "start": 5107,
                        "end": 5136
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5139,
                        "end": 5146
                      },
                      "start": 5137,
                      "end": 5146
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5074,
                    "end": 5147
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ImportDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5156,
                      "end": 5181
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5184,
                        "end": 5187
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5194,
                              "end": 5197
                            },
                            "typeArguments": null,
                            "start": 5194,
                            "end": 5197
                          },
                          "start": 5192,
                          "end": 5197
                        },
                        "start": 5189,
                        "end": 5197
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5200,
                        "end": 5207
                      },
                      "start": 5198,
                      "end": 5207
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5156,
                    "end": 5208
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WithCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5217,
                      "end": 5229
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5232,
                        "end": 5235
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5242,
                              "end": 5245
                            },
                            "typeArguments": null,
                            "start": 5242,
                            "end": 5245
                          },
                          "start": 5240,
                          "end": 5245
                        },
                        "start": 5237,
                        "end": 5245
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5248,
                        "end": 5255
                      },
                      "start": 5246,
                      "end": 5255
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5217,
                    "end": 5256
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LabelCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5265,
                      "end": 5278
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5281,
                        "end": 5284
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelAST",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5296,
                              "end": 5299
                            },
                            "typeArguments": null,
                            "start": 5296,
                            "end": 5299
                          },
                          "start": 5294,
                          "end": 5299
                        },
                        "start": 5286,
                        "end": 5299
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5302,
                        "end": 5309
                      },
                      "start": 5300,
                      "end": 5309
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5265,
                    "end": 5310
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LabeledStatementCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5319,
                      "end": 5343
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5346,
                        "end": 5349
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5356,
                              "end": 5359
                            },
                            "typeArguments": null,
                            "start": 5356,
                            "end": 5359
                          },
                          "start": 5354,
                          "end": 5359
                        },
                        "start": 5351,
                        "end": 5359
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5362,
                        "end": 5369
                      },
                      "start": 5360,
                      "end": 5369
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5319,
                    "end": 5370
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EBStartCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5379,
                      "end": 5394
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5397,
                        "end": 5400
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5407,
                              "end": 5410
                            },
                            "typeArguments": null,
                            "start": 5407,
                            "end": 5410
                          },
                          "start": 5405,
                          "end": 5410
                        },
                        "start": 5402,
                        "end": 5410
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5413,
                        "end": 5420
                      },
                      "start": 5411,
                      "end": 5420
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5379,
                    "end": 5421
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GotoEBCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5430,
                      "end": 5444
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5447,
                        "end": 5450
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5457,
                              "end": 5460
                            },
                            "typeArguments": null,
                            "start": 5457,
                            "end": 5460
                          },
                          "start": 5455,
                          "end": 5460
                        },
                        "start": 5452,
                        "end": 5460
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5463,
                        "end": 5470
                      },
                      "start": 5461,
                      "end": 5470
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5430,
                    "end": 5471
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EndCodeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5480,
                      "end": 5495
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5498,
                        "end": 5501
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5508,
                              "end": 5511
                            },
                            "typeArguments": null,
                            "start": 5508,
                            "end": 5511
                          },
                          "start": 5506,
                          "end": 5511
                        },
                        "start": 5503,
                        "end": 5511
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5514,
                        "end": 5521
                      },
                      "start": 5512,
                      "end": 5521
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5480,
                    "end": 5522
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5531,
                      "end": 5544
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5547,
                        "end": 5550
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5557,
                              "end": 5560
                            },
                            "typeArguments": null,
                            "start": 5557,
                            "end": 5560
                          },
                          "start": 5555,
                          "end": 5560
                        },
                        "start": 5552,
                        "end": 5560
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5563,
                        "end": 5570
                      },
                      "start": 5561,
                      "end": 5570
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5531,
                    "end": 5571
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CommentCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5580,
                      "end": 5595
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5598,
                        "end": 5601
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5608,
                              "end": 5611
                            },
                            "typeArguments": null,
                            "start": 5608,
                            "end": 5611
                          },
                          "start": 5606,
                          "end": 5611
                        },
                        "start": 5603,
                        "end": 5611
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5614,
                        "end": 5621
                      },
                      "start": 5612,
                      "end": 5621
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5580,
                    "end": 5622
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DebuggerCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5631,
                      "end": 5647
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5650,
                        "end": 5653
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5660,
                              "end": 5663
                            },
                            "typeArguments": null,
                            "start": 5660,
                            "end": 5663
                          },
                          "start": 5658,
                          "end": 5663
                        },
                        "start": 5655,
                        "end": 5663
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5666,
                        "end": 5673
                      },
                      "start": 5664,
                      "end": 5673
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5631,
                    "end": 5674
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5683,
                      "end": 5698
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5701,
                        "end": 5704
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5711,
                              "end": 5714
                            },
                            "typeArguments": null,
                            "start": 5711,
                            "end": 5714
                          },
                          "start": 5709,
                          "end": 5714
                        },
                        "start": 5706,
                        "end": 5714
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5717,
                        "end": 5724
                      },
                      "start": 5715,
                      "end": 5724
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5683,
                    "end": 5725
                  }
                ],
                "start": 307,
                "end": 5731
              },
              "declare": false,
              "start": 273,
              "end": 5731
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 266,
            "end": 5731
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "walk",
                "optional": false,
                "typeAnnotation": null,
                "start": 5753,
                "end": 5757
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "script",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Script",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5766,
                        "end": 5772
                      },
                      "typeArguments": null,
                      "start": 5766,
                      "end": 5772
                    },
                    "start": 5764,
                    "end": 5772
                  },
                  "start": 5758,
                  "end": 5772
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AstWalkerDetailCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5784,
                        "end": 5807
                      },
                      "typeArguments": null,
                      "start": 5784,
                      "end": 5807
                    },
                    "start": 5782,
                    "end": 5807
                  },
                  "start": 5774,
                  "end": 5807
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 5810,
                  "end": 5814
                },
                "start": 5808,
                "end": 5814
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pre",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5829,
                          "end": 5832
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cur",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5841,
                                    "end": 5844
                                  },
                                  "typeArguments": null,
                                  "start": 5841,
                                  "end": 5844
                                },
                                "start": 5839,
                                "end": 5844
                              },
                              "start": 5836,
                              "end": 5844
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parent",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5854,
                                    "end": 5857
                                  },
                                  "typeArguments": null,
                                  "start": 5854,
                                  "end": 5857
                                },
                                "start": 5852,
                                "end": 5857
                              },
                              "start": 5846,
                              "end": 5857
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "walker",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5876,
                                        "end": 5882
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "options",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5883,
                                        "end": 5890
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 5876,
                                      "end": 5890
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "goChildren",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5891,
                                      "end": 5901
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 5876,
                                    "end": 5901
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "AstWalkerCallback",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5904,
                                      "end": 5921
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 5922,
                                        "end": 5926
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "cur",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5928,
                                        "end": 5931
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5933,
                                        "end": 5941
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5904,
                                    "end": 5942
                                  },
                                  "start": 5876,
                                  "end": 5942
                                },
                                "directive": null,
                                "start": 5876,
                                "end": 5943
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cur",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5963,
                                  "end": 5966
                                },
                                "start": 5956,
                                "end": 5967
                              }
                            ],
                            "start": 5862,
                            "end": 5977
                          },
                          "id": null,
                          "generator": false,
                          "start": 5835,
                          "end": 5977
                        },
                        "definite": false,
                        "start": 5829,
                        "end": 5977
                      }
                    ],
                    "declare": false,
                    "start": 5825,
                    "end": 5977
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
                          "name": "post",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5991,
                          "end": 5995
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cur",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6004,
                                    "end": 6007
                                  },
                                  "typeArguments": null,
                                  "start": 6004,
                                  "end": 6007
                                },
                                "start": 6002,
                                "end": 6007
                              },
                              "start": 5999,
                              "end": 6007
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parent",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6017,
                                    "end": 6020
                                  },
                                  "typeArguments": null,
                                  "start": 6017,
                                  "end": 6020
                                },
                                "start": 6015,
                                "end": 6020
                              },
                              "start": 6009,
                              "end": 6020
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AstWalkerCallback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6039,
                                    "end": 6056
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 6057,
                                      "end": 6062
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "cur",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6064,
                                      "end": 6067
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "callback",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6069,
                                      "end": 6077
                                    }
                                  ],
                                  "optional": false,
                                  "start": 6039,
                                  "end": 6078
                                },
                                "directive": null,
                                "start": 6039,
                                "end": 6079
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cur",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6099,
                                  "end": 6102
                                },
                                "start": 6092,
                                "end": 6103
                              }
                            ],
                            "start": 6025,
                            "end": 6113
                          },
                          "id": null,
                          "generator": false,
                          "start": 5998,
                          "end": 6113
                        },
                        "definite": false,
                        "start": 5991,
                        "end": 6113
                      }
                    ],
                    "declare": false,
                    "start": 5987,
                    "end": 6113
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
                          "name": "walker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6127,
                          "end": 6133
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TypeScript",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6136,
                                  "end": 6146
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getAstWalkerFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6147,
                                  "end": 6166
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6136,
                                "end": 6166
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 6136,
                              "end": 6168
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getWalker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6169,
                              "end": 6178
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6136,
                            "end": 6178
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6179,
                              "end": 6182
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "post",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6184,
                              "end": 6188
                            }
                          ],
                          "optional": false,
                          "start": 6136,
                          "end": 6189
                        },
                        "definite": false,
                        "start": 6127,
                        "end": 6189
                      }
                    ],
                    "declare": false,
                    "start": 6123,
                    "end": 6190
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "walker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6199,
                          "end": 6205
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "walk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6206,
                          "end": 6210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6199,
                        "end": 6210
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "script",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6211,
                          "end": 6217
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6219,
                          "end": 6223
                        }
                      ],
                      "optional": false,
                      "start": 6199,
                      "end": 6224
                    },
                    "directive": null,
                    "start": 6199,
                    "end": 6225
                  }
                ],
                "start": 5815,
                "end": 6231
              },
              "expression": false,
              "start": 5744,
              "end": 6231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5737,
            "end": 6231
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AstWalkerCallback",
              "optional": false,
              "typeAnnotation": null,
              "start": 6246,
              "end": 6263
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "pre",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 6269,
                    "end": 6276
                  },
                  "start": 6267,
                  "end": 6276
                },
                "start": 6264,
                "end": 6276
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ast",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AST",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6283,
                      "end": 6286
                    },
                    "typeArguments": null,
                    "start": 6283,
                    "end": 6286
                  },
                  "start": 6281,
                  "end": 6286
                },
                "start": 6278,
                "end": 6286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AstWalkerDetailCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6298,
                      "end": 6321
                    },
                    "typeArguments": null,
                    "start": 6298,
                    "end": 6321
                  },
                  "start": 6296,
                  "end": 6321
                },
                "start": 6288,
                "end": 6321
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6324,
                "end": 6331
              },
              "start": 6322,
              "end": 6331
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6431,
                        "end": 6439
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6442,
                          "end": 6445
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nodeType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6446,
                          "end": 6454
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6442,
                        "end": 6454
                      },
                      "definite": false,
                      "start": 6431,
                      "end": 6454
                    }
                  ],
                  "declare": false,
                  "start": 6427,
                  "end": 6455
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
                        "name": "callbackString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6468,
                        "end": 6482
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "TSTypeAssertion",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 6487,
                                "end": 6490
                              },
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6491,
                                "end": 6499
                              },
                              "start": 6486,
                              "end": 6499
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_map",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6501,
                              "end": 6505
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6485,
                            "end": 6505
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nodeType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6506,
                            "end": 6514
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6485,
                          "end": 6515
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "Callback",
                          "raw": "\"Callback\"",
                          "start": 6518,
                          "end": 6528
                        },
                        "start": 6485,
                        "end": 6528
                      },
                      "definite": false,
                      "start": 6468,
                      "end": 6528
                    }
                  ],
                  "declare": false,
                  "start": 6464,
                  "end": 6529
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6542,
                      "end": 6550
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callbackString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6551,
                      "end": 6565
                    },
                    "optional": false,
                    "computed": true,
                    "start": 6542,
                    "end": 6566
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6589,
                              "end": 6597
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callbackString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6598,
                              "end": 6612
                            },
                            "optional": false,
                            "computed": true,
                            "start": 6589,
                            "end": 6613
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6614,
                              "end": 6617
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6619,
                              "end": 6622
                            }
                          ],
                          "optional": false,
                          "start": 6589,
                          "end": 6623
                        },
                        "start": 6582,
                        "end": 6624
                      }
                    ],
                    "start": 6568,
                    "end": 6634
                  },
                  "alternate": null,
                  "start": 6538,
                  "end": 6634
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6648,
                      "end": 6656
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6657,
                      "end": 6672
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6648,
                    "end": 6672
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6695,
                              "end": 6703
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DefaultCallback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6704,
                              "end": 6719
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6695,
                            "end": 6719
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6720,
                              "end": 6723
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6725,
                              "end": 6728
                            }
                          ],
                          "optional": false,
                          "start": 6695,
                          "end": 6729
                        },
                        "start": 6688,
                        "end": 6730
                      }
                    ],
                    "start": 6674,
                    "end": 6740
                  },
                  "alternate": null,
                  "start": 6644,
                  "end": 6740
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 6757,
                    "end": 6761
                  },
                  "start": 6750,
                  "end": 6762
                }
              ],
              "start": 6332,
              "end": 6768
            },
            "expression": false,
            "start": 6237,
            "end": 6768
          }
        ],
        "start": 260,
        "end": 6770
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 6770
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 6770
}
```
