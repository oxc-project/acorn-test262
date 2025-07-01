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
          "start": 218,
          "end": 228
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "AstWalkerWithDetailCallback",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 256
        },
        "start": 218,
        "end": 256
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
                "start": 280,
                "end": 303
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
                      "start": 314,
                      "end": 327
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
                        "start": 330,
                        "end": 333
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
                              "start": 340,
                              "end": 343
                            },
                            "typeArguments": null,
                            "start": 340,
                            "end": 343
                          },
                          "start": 338,
                          "end": 343
                        },
                        "start": 335,
                        "end": 343
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 346,
                        "end": 353
                      },
                      "start": 344,
                      "end": 353
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 314,
                    "end": 354
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmptyExprCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 363,
                      "end": 380
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
                        "start": 383,
                        "end": 386
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
                              "start": 393,
                              "end": 396
                            },
                            "typeArguments": null,
                            "start": 393,
                            "end": 396
                          },
                          "start": 391,
                          "end": 396
                        },
                        "start": 388,
                        "end": 396
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 399,
                        "end": 406
                      },
                      "start": 397,
                      "end": 406
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 363,
                    "end": 407
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TrueCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 428
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
                        "start": 431,
                        "end": 434
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
                              "start": 441,
                              "end": 444
                            },
                            "typeArguments": null,
                            "start": 441,
                            "end": 444
                          },
                          "start": 439,
                          "end": 444
                        },
                        "start": 436,
                        "end": 444
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 447,
                        "end": 454
                      },
                      "start": 445,
                      "end": 454
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 416,
                    "end": 455
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FalseCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 477
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
                        "start": 480,
                        "end": 483
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
                              "start": 490,
                              "end": 493
                            },
                            "typeArguments": null,
                            "start": 490,
                            "end": 493
                          },
                          "start": 488,
                          "end": 493
                        },
                        "start": 485,
                        "end": 493
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 496,
                        "end": 503
                      },
                      "start": 494,
                      "end": 503
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 464,
                    "end": 504
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 525
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
                        "start": 528,
                        "end": 531
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
                              "start": 538,
                              "end": 541
                            },
                            "typeArguments": null,
                            "start": 538,
                            "end": 541
                          },
                          "start": 536,
                          "end": 541
                        },
                        "start": 533,
                        "end": 541
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 544,
                        "end": 551
                      },
                      "start": 542,
                      "end": 551
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 513,
                    "end": 552
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SuperCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 574
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
                        "start": 577,
                        "end": 580
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
                              "start": 587,
                              "end": 590
                            },
                            "typeArguments": null,
                            "start": 587,
                            "end": 590
                          },
                          "start": 585,
                          "end": 590
                        },
                        "start": 582,
                        "end": 590
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 593,
                        "end": 600
                      },
                      "start": 591,
                      "end": 600
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 561,
                    "end": 601
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QStringCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 625
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
                        "start": 628,
                        "end": 631
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
                              "start": 638,
                              "end": 641
                            },
                            "typeArguments": null,
                            "start": 638,
                            "end": 641
                          },
                          "start": 636,
                          "end": 641
                        },
                        "start": 633,
                        "end": 641
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 644,
                        "end": 651
                      },
                      "start": 642,
                      "end": 651
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 610,
                    "end": 652
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegexCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 674
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
                        "start": 677,
                        "end": 680
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
                              "start": 687,
                              "end": 690
                            },
                            "typeArguments": null,
                            "start": 687,
                            "end": 690
                          },
                          "start": 685,
                          "end": 690
                        },
                        "start": 682,
                        "end": 690
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 693,
                        "end": 700
                      },
                      "start": 691,
                      "end": 700
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 661,
                    "end": 701
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NullCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 710,
                      "end": 722
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
                        "start": 725,
                        "end": 728
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
                              "start": 735,
                              "end": 738
                            },
                            "typeArguments": null,
                            "start": 735,
                            "end": 738
                          },
                          "start": 733,
                          "end": 738
                        },
                        "start": 730,
                        "end": 738
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 741,
                        "end": 748
                      },
                      "start": 739,
                      "end": 748
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 710,
                    "end": 749
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArrayLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 758,
                      "end": 774
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
                        "start": 777,
                        "end": 780
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
                              "start": 787,
                              "end": 790
                            },
                            "typeArguments": null,
                            "start": 787,
                            "end": 790
                          },
                          "start": 785,
                          "end": 790
                        },
                        "start": 782,
                        "end": 790
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 793,
                        "end": 800
                      },
                      "start": 791,
                      "end": 800
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 758,
                    "end": 801
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 810,
                      "end": 827
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
                        "start": 830,
                        "end": 833
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
                              "start": 840,
                              "end": 843
                            },
                            "typeArguments": null,
                            "start": 840,
                            "end": 843
                          },
                          "start": 838,
                          "end": 843
                        },
                        "start": 835,
                        "end": 843
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 846,
                        "end": 853
                      },
                      "start": 844,
                      "end": 853
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 810,
                    "end": 854
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VoidCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 875
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
                        "start": 878,
                        "end": 881
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
                              "start": 888,
                              "end": 891
                            },
                            "typeArguments": null,
                            "start": 888,
                            "end": 891
                          },
                          "start": 886,
                          "end": 891
                        },
                        "start": 883,
                        "end": 891
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 894,
                        "end": 901
                      },
                      "start": 892,
                      "end": 901
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 863,
                    "end": 902
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CommaCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 911,
                      "end": 924
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
                        "start": 927,
                        "end": 930
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
                              "start": 937,
                              "end": 940
                            },
                            "typeArguments": null,
                            "start": 937,
                            "end": 940
                          },
                          "start": 935,
                          "end": 940
                        },
                        "start": 932,
                        "end": 940
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 943,
                        "end": 950
                      },
                      "start": 941,
                      "end": 950
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 911,
                    "end": 951
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PosCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 960,
                      "end": 971
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
                        "start": 974,
                        "end": 977
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
                              "start": 984,
                              "end": 987
                            },
                            "typeArguments": null,
                            "start": 984,
                            "end": 987
                          },
                          "start": 982,
                          "end": 987
                        },
                        "start": 979,
                        "end": 987
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 990,
                        "end": 997
                      },
                      "start": 988,
                      "end": 997
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 960,
                    "end": 998
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NegCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1018
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
                        "start": 1021,
                        "end": 1024
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
                              "start": 1031,
                              "end": 1034
                            },
                            "typeArguments": null,
                            "start": 1031,
                            "end": 1034
                          },
                          "start": 1029,
                          "end": 1034
                        },
                        "start": 1026,
                        "end": 1034
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1037,
                        "end": 1044
                      },
                      "start": 1035,
                      "end": 1044
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1007,
                    "end": 1045
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DeleteCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1068
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
                        "start": 1071,
                        "end": 1074
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
                              "start": 1081,
                              "end": 1084
                            },
                            "typeArguments": null,
                            "start": 1081,
                            "end": 1084
                          },
                          "start": 1079,
                          "end": 1084
                        },
                        "start": 1076,
                        "end": 1084
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1087,
                        "end": 1094
                      },
                      "start": 1085,
                      "end": 1094
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1054,
                    "end": 1095
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AwaitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1117
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
                        "start": 1120,
                        "end": 1123
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
                              "start": 1130,
                              "end": 1133
                            },
                            "typeArguments": null,
                            "start": 1130,
                            "end": 1133
                          },
                          "start": 1128,
                          "end": 1133
                        },
                        "start": 1125,
                        "end": 1133
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1136,
                        "end": 1143
                      },
                      "start": 1134,
                      "end": 1143
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1104,
                    "end": 1144
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1163
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
                        "start": 1166,
                        "end": 1169
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
                              "start": 1176,
                              "end": 1179
                            },
                            "typeArguments": null,
                            "start": 1176,
                            "end": 1179
                          },
                          "start": 1174,
                          "end": 1179
                        },
                        "start": 1171,
                        "end": 1179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1182,
                        "end": 1189
                      },
                      "start": 1180,
                      "end": 1189
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1153,
                    "end": 1190
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1199,
                      "end": 1210
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
                        "start": 1213,
                        "end": 1216
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
                              "start": 1223,
                              "end": 1226
                            },
                            "typeArguments": null,
                            "start": 1223,
                            "end": 1226
                          },
                          "start": 1221,
                          "end": 1226
                        },
                        "start": 1218,
                        "end": 1226
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1229,
                        "end": 1236
                      },
                      "start": 1227,
                      "end": 1236
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1199,
                    "end": 1237
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FromCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1246,
                      "end": 1258
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
                        "start": 1261,
                        "end": 1264
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
                              "start": 1271,
                              "end": 1274
                            },
                            "typeArguments": null,
                            "start": 1271,
                            "end": 1274
                          },
                          "start": 1269,
                          "end": 1274
                        },
                        "start": 1266,
                        "end": 1274
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1277,
                        "end": 1284
                      },
                      "start": 1275,
                      "end": 1284
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1246,
                    "end": 1285
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1294,
                      "end": 1304
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
                        "start": 1307,
                        "end": 1310
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
                              "start": 1317,
                              "end": 1320
                            },
                            "typeArguments": null,
                            "start": 1317,
                            "end": 1320
                          },
                          "start": 1315,
                          "end": 1320
                        },
                        "start": 1312,
                        "end": 1320
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1323,
                        "end": 1330
                      },
                      "start": 1321,
                      "end": 1330
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1294,
                    "end": 1331
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InstOfCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1340,
                      "end": 1354
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
                        "start": 1357,
                        "end": 1360
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
                              "start": 1367,
                              "end": 1370
                            },
                            "typeArguments": null,
                            "start": 1367,
                            "end": 1370
                          },
                          "start": 1365,
                          "end": 1370
                        },
                        "start": 1362,
                        "end": 1370
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1373,
                        "end": 1380
                      },
                      "start": 1371,
                      "end": 1380
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1340,
                    "end": 1381
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeofCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1390,
                      "end": 1404
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
                        "start": 1407,
                        "end": 1410
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
                              "start": 1417,
                              "end": 1420
                            },
                            "typeArguments": null,
                            "start": 1417,
                            "end": 1420
                          },
                          "start": 1415,
                          "end": 1420
                        },
                        "start": 1412,
                        "end": 1420
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1423,
                        "end": 1430
                      },
                      "start": 1421,
                      "end": 1430
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1390,
                    "end": 1431
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1440,
                      "end": 1457
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
                        "start": 1460,
                        "end": 1463
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
                              "start": 1470,
                              "end": 1473
                            },
                            "typeArguments": null,
                            "start": 1470,
                            "end": 1473
                          },
                          "start": 1468,
                          "end": 1473
                        },
                        "start": 1465,
                        "end": 1473
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1476,
                        "end": 1483
                      },
                      "start": 1474,
                      "end": 1483
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1440,
                    "end": 1484
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NameCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1493,
                      "end": 1505
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
                        "start": 1508,
                        "end": 1511
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
                              "start": 1528,
                              "end": 1538
                            },
                            "typeArguments": null,
                            "start": 1528,
                            "end": 1538
                          },
                          "start": 1526,
                          "end": 1538
                        },
                        "start": 1513,
                        "end": 1538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1541,
                        "end": 1548
                      },
                      "start": 1539,
                      "end": 1548
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1493,
                    "end": 1549
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeRefCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1558,
                      "end": 1573
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
                        "start": 1576,
                        "end": 1579
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
                              "start": 1586,
                              "end": 1589
                            },
                            "typeArguments": null,
                            "start": 1586,
                            "end": 1589
                          },
                          "start": 1584,
                          "end": 1589
                        },
                        "start": 1581,
                        "end": 1589
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1592,
                        "end": 1599
                      },
                      "start": 1590,
                      "end": 1599
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1558,
                    "end": 1600
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndexCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1622
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
                        "start": 1625,
                        "end": 1628
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
                              "start": 1635,
                              "end": 1638
                            },
                            "typeArguments": null,
                            "start": 1635,
                            "end": 1638
                          },
                          "start": 1633,
                          "end": 1638
                        },
                        "start": 1630,
                        "end": 1638
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1641,
                        "end": 1648
                      },
                      "start": 1639,
                      "end": 1648
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1609,
                    "end": 1649
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CallCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1658,
                      "end": 1670
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
                        "start": 1673,
                        "end": 1676
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
                              "start": 1683,
                              "end": 1686
                            },
                            "typeArguments": null,
                            "start": 1683,
                            "end": 1686
                          },
                          "start": 1681,
                          "end": 1686
                        },
                        "start": 1678,
                        "end": 1686
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1689,
                        "end": 1696
                      },
                      "start": 1687,
                      "end": 1696
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1658,
                    "end": 1697
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NewCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1706,
                      "end": 1717
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
                        "start": 1720,
                        "end": 1723
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
                              "start": 1730,
                              "end": 1733
                            },
                            "typeArguments": null,
                            "start": 1730,
                            "end": 1733
                          },
                          "start": 1728,
                          "end": 1733
                        },
                        "start": 1725,
                        "end": 1733
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1736,
                        "end": 1743
                      },
                      "start": 1734,
                      "end": 1743
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1706,
                    "end": 1744
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1753,
                      "end": 1764
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
                        "start": 1767,
                        "end": 1770
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
                              "start": 1777,
                              "end": 1780
                            },
                            "typeArguments": null,
                            "start": 1777,
                            "end": 1780
                          },
                          "start": 1775,
                          "end": 1780
                        },
                        "start": 1772,
                        "end": 1780
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1783,
                        "end": 1790
                      },
                      "start": 1781,
                      "end": 1790
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1753,
                    "end": 1791
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgAddCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1814
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
                        "start": 1817,
                        "end": 1820
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
                              "start": 1827,
                              "end": 1830
                            },
                            "typeArguments": null,
                            "start": 1827,
                            "end": 1830
                          },
                          "start": 1825,
                          "end": 1830
                        },
                        "start": 1822,
                        "end": 1830
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1833,
                        "end": 1840
                      },
                      "start": 1831,
                      "end": 1840
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1800,
                    "end": 1841
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgSubCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1850,
                      "end": 1864
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
                        "start": 1867,
                        "end": 1870
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
                              "start": 1877,
                              "end": 1880
                            },
                            "typeArguments": null,
                            "start": 1877,
                            "end": 1880
                          },
                          "start": 1875,
                          "end": 1880
                        },
                        "start": 1872,
                        "end": 1880
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1883,
                        "end": 1890
                      },
                      "start": 1881,
                      "end": 1890
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1850,
                    "end": 1891
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgDivCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1914
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
                        "start": 1917,
                        "end": 1920
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
                              "start": 1927,
                              "end": 1930
                            },
                            "typeArguments": null,
                            "start": 1927,
                            "end": 1930
                          },
                          "start": 1925,
                          "end": 1930
                        },
                        "start": 1922,
                        "end": 1930
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1933,
                        "end": 1940
                      },
                      "start": 1931,
                      "end": 1940
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1900,
                    "end": 1941
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgMulCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1950,
                      "end": 1964
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
                        "start": 1967,
                        "end": 1970
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
                              "start": 1977,
                              "end": 1980
                            },
                            "typeArguments": null,
                            "start": 1977,
                            "end": 1980
                          },
                          "start": 1975,
                          "end": 1980
                        },
                        "start": 1972,
                        "end": 1980
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1983,
                        "end": 1990
                      },
                      "start": 1981,
                      "end": 1990
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1950,
                    "end": 1991
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgModCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2014
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
                        "start": 2017,
                        "end": 2020
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
                              "start": 2027,
                              "end": 2030
                            },
                            "typeArguments": null,
                            "start": 2027,
                            "end": 2030
                          },
                          "start": 2025,
                          "end": 2030
                        },
                        "start": 2022,
                        "end": 2030
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2033,
                        "end": 2040
                      },
                      "start": 2031,
                      "end": 2040
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2000,
                    "end": 2041
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgAndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2050,
                      "end": 2064
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
                        "start": 2067,
                        "end": 2070
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
                              "start": 2077,
                              "end": 2080
                            },
                            "typeArguments": null,
                            "start": 2077,
                            "end": 2080
                          },
                          "start": 2075,
                          "end": 2080
                        },
                        "start": 2072,
                        "end": 2080
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2083,
                        "end": 2090
                      },
                      "start": 2081,
                      "end": 2090
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2050,
                    "end": 2091
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgXorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2100,
                      "end": 2114
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
                        "start": 2117,
                        "end": 2120
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
                              "start": 2127,
                              "end": 2130
                            },
                            "typeArguments": null,
                            "start": 2127,
                            "end": 2130
                          },
                          "start": 2125,
                          "end": 2130
                        },
                        "start": 2122,
                        "end": 2130
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2133,
                        "end": 2140
                      },
                      "start": 2131,
                      "end": 2140
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2100,
                    "end": 2141
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgOrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2150,
                      "end": 2163
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
                        "start": 2166,
                        "end": 2169
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
                              "start": 2176,
                              "end": 2179
                            },
                            "typeArguments": null,
                            "start": 2176,
                            "end": 2179
                          },
                          "start": 2174,
                          "end": 2179
                        },
                        "start": 2171,
                        "end": 2179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2182,
                        "end": 2189
                      },
                      "start": 2180,
                      "end": 2189
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2150,
                    "end": 2190
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgLshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2199,
                      "end": 2213
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
                        "start": 2216,
                        "end": 2219
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
                              "start": 2226,
                              "end": 2229
                            },
                            "typeArguments": null,
                            "start": 2226,
                            "end": 2229
                          },
                          "start": 2224,
                          "end": 2229
                        },
                        "start": 2221,
                        "end": 2229
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2232,
                        "end": 2239
                      },
                      "start": 2230,
                      "end": 2239
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2199,
                    "end": 2240
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgRshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2249,
                      "end": 2263
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
                        "start": 2266,
                        "end": 2269
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
                              "start": 2276,
                              "end": 2279
                            },
                            "typeArguments": null,
                            "start": 2276,
                            "end": 2279
                          },
                          "start": 2274,
                          "end": 2279
                        },
                        "start": 2271,
                        "end": 2279
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2282,
                        "end": 2289
                      },
                      "start": 2280,
                      "end": 2289
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2249,
                    "end": 2290
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgRs2Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2313
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
                        "start": 2316,
                        "end": 2319
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
                              "start": 2326,
                              "end": 2329
                            },
                            "typeArguments": null,
                            "start": 2326,
                            "end": 2329
                          },
                          "start": 2324,
                          "end": 2329
                        },
                        "start": 2321,
                        "end": 2329
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2332,
                        "end": 2339
                      },
                      "start": 2330,
                      "end": 2339
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2299,
                    "end": 2340
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QMarkCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2349,
                      "end": 2362
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
                        "start": 2365,
                        "end": 2368
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
                              "start": 2375,
                              "end": 2378
                            },
                            "typeArguments": null,
                            "start": 2375,
                            "end": 2378
                          },
                          "start": 2373,
                          "end": 2378
                        },
                        "start": 2370,
                        "end": 2378
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2381,
                        "end": 2388
                      },
                      "start": 2379,
                      "end": 2388
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2349,
                    "end": 2389
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogOrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2398,
                      "end": 2411
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
                        "start": 2414,
                        "end": 2417
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
                              "start": 2424,
                              "end": 2427
                            },
                            "typeArguments": null,
                            "start": 2424,
                            "end": 2427
                          },
                          "start": 2422,
                          "end": 2427
                        },
                        "start": 2419,
                        "end": 2427
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2430,
                        "end": 2437
                      },
                      "start": 2428,
                      "end": 2437
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2398,
                    "end": 2438
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogAndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2447,
                      "end": 2461
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
                        "start": 2464,
                        "end": 2467
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
                              "start": 2474,
                              "end": 2477
                            },
                            "typeArguments": null,
                            "start": 2474,
                            "end": 2477
                          },
                          "start": 2472,
                          "end": 2477
                        },
                        "start": 2469,
                        "end": 2477
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2480,
                        "end": 2487
                      },
                      "start": 2478,
                      "end": 2487
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2447,
                    "end": 2488
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2497,
                      "end": 2507
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
                        "start": 2510,
                        "end": 2513
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
                              "start": 2520,
                              "end": 2523
                            },
                            "typeArguments": null,
                            "start": 2520,
                            "end": 2523
                          },
                          "start": 2518,
                          "end": 2523
                        },
                        "start": 2515,
                        "end": 2523
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2526,
                        "end": 2533
                      },
                      "start": 2524,
                      "end": 2533
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2497,
                    "end": 2534
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2543,
                      "end": 2554
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
                        "start": 2557,
                        "end": 2560
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
                              "start": 2567,
                              "end": 2570
                            },
                            "typeArguments": null,
                            "start": 2567,
                            "end": 2570
                          },
                          "start": 2565,
                          "end": 2570
                        },
                        "start": 2562,
                        "end": 2570
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2573,
                        "end": 2580
                      },
                      "start": 2571,
                      "end": 2580
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2543,
                    "end": 2581
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2590,
                      "end": 2601
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
                        "start": 2604,
                        "end": 2607
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
                              "start": 2614,
                              "end": 2617
                            },
                            "typeArguments": null,
                            "start": 2614,
                            "end": 2617
                          },
                          "start": 2612,
                          "end": 2617
                        },
                        "start": 2609,
                        "end": 2617
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2620,
                        "end": 2627
                      },
                      "start": 2618,
                      "end": 2627
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2590,
                    "end": 2628
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EqCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2637,
                      "end": 2647
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
                        "start": 2650,
                        "end": 2653
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
                              "start": 2660,
                              "end": 2663
                            },
                            "typeArguments": null,
                            "start": 2660,
                            "end": 2663
                          },
                          "start": 2658,
                          "end": 2663
                        },
                        "start": 2655,
                        "end": 2663
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2666,
                        "end": 2673
                      },
                      "start": 2664,
                      "end": 2673
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2637,
                    "end": 2674
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2683,
                      "end": 2693
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
                        "start": 2696,
                        "end": 2699
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
                              "start": 2706,
                              "end": 2709
                            },
                            "typeArguments": null,
                            "start": 2706,
                            "end": 2709
                          },
                          "start": 2704,
                          "end": 2709
                        },
                        "start": 2701,
                        "end": 2709
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2712,
                        "end": 2719
                      },
                      "start": 2710,
                      "end": 2719
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2683,
                    "end": 2720
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EqvCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2729,
                      "end": 2740
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
                        "start": 2743,
                        "end": 2746
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
                              "start": 2753,
                              "end": 2756
                            },
                            "typeArguments": null,
                            "start": 2753,
                            "end": 2756
                          },
                          "start": 2751,
                          "end": 2756
                        },
                        "start": 2748,
                        "end": 2756
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2759,
                        "end": 2766
                      },
                      "start": 2757,
                      "end": 2766
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2729,
                    "end": 2767
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NEqvCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2776,
                      "end": 2788
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
                        "start": 2791,
                        "end": 2794
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
                              "start": 2801,
                              "end": 2804
                            },
                            "typeArguments": null,
                            "start": 2801,
                            "end": 2804
                          },
                          "start": 2799,
                          "end": 2804
                        },
                        "start": 2796,
                        "end": 2804
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2807,
                        "end": 2814
                      },
                      "start": 2805,
                      "end": 2814
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2776,
                    "end": 2815
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LtCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2824,
                      "end": 2834
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
                        "start": 2837,
                        "end": 2840
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
                              "start": 2847,
                              "end": 2850
                            },
                            "typeArguments": null,
                            "start": 2847,
                            "end": 2850
                          },
                          "start": 2845,
                          "end": 2850
                        },
                        "start": 2842,
                        "end": 2850
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2853,
                        "end": 2860
                      },
                      "start": 2851,
                      "end": 2860
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2824,
                    "end": 2861
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2870,
                      "end": 2880
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
                        "start": 2883,
                        "end": 2886
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
                              "start": 2893,
                              "end": 2896
                            },
                            "typeArguments": null,
                            "start": 2893,
                            "end": 2896
                          },
                          "start": 2891,
                          "end": 2896
                        },
                        "start": 2888,
                        "end": 2896
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2899,
                        "end": 2906
                      },
                      "start": 2897,
                      "end": 2906
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2870,
                    "end": 2907
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GtCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2916,
                      "end": 2926
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
                        "start": 2929,
                        "end": 2932
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
                              "start": 2939,
                              "end": 2942
                            },
                            "typeArguments": null,
                            "start": 2939,
                            "end": 2942
                          },
                          "start": 2937,
                          "end": 2942
                        },
                        "start": 2934,
                        "end": 2942
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2945,
                        "end": 2952
                      },
                      "start": 2943,
                      "end": 2952
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2916,
                    "end": 2953
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2962,
                      "end": 2972
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
                        "start": 2975,
                        "end": 2978
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
                              "start": 2985,
                              "end": 2988
                            },
                            "typeArguments": null,
                            "start": 2985,
                            "end": 2988
                          },
                          "start": 2983,
                          "end": 2988
                        },
                        "start": 2980,
                        "end": 2988
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2991,
                        "end": 2998
                      },
                      "start": 2989,
                      "end": 2998
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2962,
                    "end": 2999
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3008,
                      "end": 3019
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
                        "start": 3022,
                        "end": 3025
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
                              "start": 3032,
                              "end": 3035
                            },
                            "typeArguments": null,
                            "start": 3032,
                            "end": 3035
                          },
                          "start": 3030,
                          "end": 3035
                        },
                        "start": 3027,
                        "end": 3035
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3038,
                        "end": 3045
                      },
                      "start": 3036,
                      "end": 3045
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3008,
                    "end": 3046
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SubCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3055,
                      "end": 3066
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
                        "start": 3069,
                        "end": 3072
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
                              "start": 3079,
                              "end": 3082
                            },
                            "typeArguments": null,
                            "start": 3079,
                            "end": 3082
                          },
                          "start": 3077,
                          "end": 3082
                        },
                        "start": 3074,
                        "end": 3082
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3085,
                        "end": 3092
                      },
                      "start": 3083,
                      "end": 3092
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3055,
                    "end": 3093
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MulCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3102,
                      "end": 3113
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
                        "start": 3116,
                        "end": 3119
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
                              "start": 3126,
                              "end": 3129
                            },
                            "typeArguments": null,
                            "start": 3126,
                            "end": 3129
                          },
                          "start": 3124,
                          "end": 3129
                        },
                        "start": 3121,
                        "end": 3129
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3132,
                        "end": 3139
                      },
                      "start": 3130,
                      "end": 3139
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3102,
                    "end": 3140
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DivCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3149,
                      "end": 3160
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
                        "start": 3163,
                        "end": 3166
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
                              "start": 3173,
                              "end": 3176
                            },
                            "typeArguments": null,
                            "start": 3173,
                            "end": 3176
                          },
                          "start": 3171,
                          "end": 3176
                        },
                        "start": 3168,
                        "end": 3176
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3179,
                        "end": 3186
                      },
                      "start": 3177,
                      "end": 3186
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3149,
                    "end": 3187
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3196,
                      "end": 3207
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
                        "start": 3210,
                        "end": 3213
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
                              "start": 3220,
                              "end": 3223
                            },
                            "typeArguments": null,
                            "start": 3220,
                            "end": 3223
                          },
                          "start": 3218,
                          "end": 3223
                        },
                        "start": 3215,
                        "end": 3223
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3226,
                        "end": 3233
                      },
                      "start": 3224,
                      "end": 3233
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3196,
                    "end": 3234
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3243,
                      "end": 3254
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
                        "start": 3257,
                        "end": 3260
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
                              "start": 3267,
                              "end": 3270
                            },
                            "typeArguments": null,
                            "start": 3267,
                            "end": 3270
                          },
                          "start": 3265,
                          "end": 3270
                        },
                        "start": 3262,
                        "end": 3270
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3273,
                        "end": 3280
                      },
                      "start": 3271,
                      "end": 3280
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3243,
                    "end": 3281
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3290,
                      "end": 3301
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
                        "start": 3304,
                        "end": 3307
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
                              "start": 3314,
                              "end": 3317
                            },
                            "typeArguments": null,
                            "start": 3314,
                            "end": 3317
                          },
                          "start": 3312,
                          "end": 3317
                        },
                        "start": 3309,
                        "end": 3317
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3320,
                        "end": 3327
                      },
                      "start": 3318,
                      "end": 3327
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3290,
                    "end": 3328
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Rs2Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3337,
                      "end": 3348
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
                        "start": 3351,
                        "end": 3354
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
                              "start": 3361,
                              "end": 3364
                            },
                            "typeArguments": null,
                            "start": 3361,
                            "end": 3364
                          },
                          "start": 3359,
                          "end": 3364
                        },
                        "start": 3356,
                        "end": 3364
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3367,
                        "end": 3374
                      },
                      "start": 3365,
                      "end": 3374
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3337,
                    "end": 3375
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3384,
                      "end": 3395
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
                        "start": 3398,
                        "end": 3401
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
                              "start": 3408,
                              "end": 3411
                            },
                            "typeArguments": null,
                            "start": 3408,
                            "end": 3411
                          },
                          "start": 3406,
                          "end": 3411
                        },
                        "start": 3403,
                        "end": 3411
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3414,
                        "end": 3421
                      },
                      "start": 3412,
                      "end": 3421
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3384,
                    "end": 3422
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogNotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3431,
                      "end": 3445
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
                        "start": 3448,
                        "end": 3451
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
                              "start": 3458,
                              "end": 3461
                            },
                            "typeArguments": null,
                            "start": 3458,
                            "end": 3461
                          },
                          "start": 3456,
                          "end": 3461
                        },
                        "start": 3453,
                        "end": 3461
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3464,
                        "end": 3471
                      },
                      "start": 3462,
                      "end": 3471
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3431,
                    "end": 3472
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncPreCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3481,
                      "end": 3495
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
                        "start": 3498,
                        "end": 3501
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
                              "start": 3508,
                              "end": 3511
                            },
                            "typeArguments": null,
                            "start": 3508,
                            "end": 3511
                          },
                          "start": 3506,
                          "end": 3511
                        },
                        "start": 3503,
                        "end": 3511
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3514,
                        "end": 3521
                      },
                      "start": 3512,
                      "end": 3521
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3481,
                    "end": 3522
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecPreCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3531,
                      "end": 3545
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
                        "start": 3548,
                        "end": 3551
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
                              "start": 3558,
                              "end": 3561
                            },
                            "typeArguments": null,
                            "start": 3558,
                            "end": 3561
                          },
                          "start": 3556,
                          "end": 3561
                        },
                        "start": 3553,
                        "end": 3561
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3564,
                        "end": 3571
                      },
                      "start": 3562,
                      "end": 3571
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3531,
                    "end": 3572
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncPostCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3581,
                      "end": 3596
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
                        "start": 3599,
                        "end": 3602
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
                              "start": 3609,
                              "end": 3612
                            },
                            "typeArguments": null,
                            "start": 3609,
                            "end": 3612
                          },
                          "start": 3607,
                          "end": 3612
                        },
                        "start": 3604,
                        "end": 3612
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3615,
                        "end": 3622
                      },
                      "start": 3613,
                      "end": 3622
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3581,
                    "end": 3623
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecPostCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3632,
                      "end": 3647
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
                        "start": 3650,
                        "end": 3653
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
                              "start": 3660,
                              "end": 3663
                            },
                            "typeArguments": null,
                            "start": 3660,
                            "end": 3663
                          },
                          "start": 3658,
                          "end": 3663
                        },
                        "start": 3655,
                        "end": 3663
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3666,
                        "end": 3673
                      },
                      "start": 3664,
                      "end": 3673
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3632,
                    "end": 3674
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeAssertionCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3683,
                      "end": 3704
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
                        "start": 3707,
                        "end": 3710
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
                              "start": 3717,
                              "end": 3720
                            },
                            "typeArguments": null,
                            "start": 3717,
                            "end": 3720
                          },
                          "start": 3715,
                          "end": 3720
                        },
                        "start": 3712,
                        "end": 3720
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3723,
                        "end": 3730
                      },
                      "start": 3721,
                      "end": 3730
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3683,
                    "end": 3731
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FuncDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3740,
                      "end": 3756
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
                        "start": 3759,
                        "end": 3762
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
                              "start": 3774,
                              "end": 3782
                            },
                            "typeArguments": null,
                            "start": 3774,
                            "end": 3782
                          },
                          "start": 3772,
                          "end": 3782
                        },
                        "start": 3764,
                        "end": 3782
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3785,
                        "end": 3792
                      },
                      "start": 3783,
                      "end": 3792
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3740,
                    "end": 3793
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MemberCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3802,
                      "end": 3816
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
                        "start": 3819,
                        "end": 3822
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
                              "start": 3829,
                              "end": 3832
                            },
                            "typeArguments": null,
                            "start": 3829,
                            "end": 3832
                          },
                          "start": 3827,
                          "end": 3832
                        },
                        "start": 3824,
                        "end": 3832
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3835,
                        "end": 3842
                      },
                      "start": 3833,
                      "end": 3842
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3802,
                    "end": 3843
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VarDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3852,
                      "end": 3867
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
                        "start": 3870,
                        "end": 3873
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
                              "start": 3884,
                              "end": 3891
                            },
                            "typeArguments": null,
                            "start": 3884,
                            "end": 3891
                          },
                          "start": 3882,
                          "end": 3891
                        },
                        "start": 3875,
                        "end": 3891
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3894,
                        "end": 3901
                      },
                      "start": 3892,
                      "end": 3901
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3852,
                    "end": 3902
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArgDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3911,
                      "end": 3926
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
                        "start": 3929,
                        "end": 3932
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
                              "start": 3939,
                              "end": 3942
                            },
                            "typeArguments": null,
                            "start": 3939,
                            "end": 3942
                          },
                          "start": 3937,
                          "end": 3942
                        },
                        "start": 3934,
                        "end": 3942
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3945,
                        "end": 3952
                      },
                      "start": 3943,
                      "end": 3952
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3911,
                    "end": 3953
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3962,
                      "end": 3976
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
                        "start": 3979,
                        "end": 3982
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
                              "start": 3989,
                              "end": 3992
                            },
                            "typeArguments": null,
                            "start": 3989,
                            "end": 3992
                          },
                          "start": 3987,
                          "end": 3992
                        },
                        "start": 3984,
                        "end": 3992
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3995,
                        "end": 4002
                      },
                      "start": 3993,
                      "end": 4002
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3962,
                    "end": 4003
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BreakCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4012,
                      "end": 4025
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
                        "start": 4028,
                        "end": 4031
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
                              "start": 4038,
                              "end": 4041
                            },
                            "typeArguments": null,
                            "start": 4038,
                            "end": 4041
                          },
                          "start": 4036,
                          "end": 4041
                        },
                        "start": 4033,
                        "end": 4041
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4044,
                        "end": 4051
                      },
                      "start": 4042,
                      "end": 4051
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4012,
                    "end": 4052
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ContinueCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4061,
                      "end": 4077
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
                        "start": 4080,
                        "end": 4083
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
                              "start": 4090,
                              "end": 4093
                            },
                            "typeArguments": null,
                            "start": 4090,
                            "end": 4093
                          },
                          "start": 4088,
                          "end": 4093
                        },
                        "start": 4085,
                        "end": 4093
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4096,
                        "end": 4103
                      },
                      "start": 4094,
                      "end": 4103
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4061,
                    "end": 4104
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThrowCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4113,
                      "end": 4126
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
                        "start": 4129,
                        "end": 4132
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
                              "start": 4139,
                              "end": 4142
                            },
                            "typeArguments": null,
                            "start": 4139,
                            "end": 4142
                          },
                          "start": 4137,
                          "end": 4142
                        },
                        "start": 4134,
                        "end": 4142
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4145,
                        "end": 4152
                      },
                      "start": 4143,
                      "end": 4152
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4113,
                    "end": 4153
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4162,
                      "end": 4173
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
                        "start": 4176,
                        "end": 4179
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
                              "start": 4186,
                              "end": 4189
                            },
                            "typeArguments": null,
                            "start": 4186,
                            "end": 4189
                          },
                          "start": 4184,
                          "end": 4189
                        },
                        "start": 4181,
                        "end": 4189
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4192,
                        "end": 4199
                      },
                      "start": 4190,
                      "end": 4199
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4162,
                    "end": 4200
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForInCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4209,
                      "end": 4222
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
                        "start": 4225,
                        "end": 4228
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
                              "start": 4235,
                              "end": 4238
                            },
                            "typeArguments": null,
                            "start": 4235,
                            "end": 4238
                          },
                          "start": 4233,
                          "end": 4238
                        },
                        "start": 4230,
                        "end": 4238
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4241,
                        "end": 4248
                      },
                      "start": 4239,
                      "end": 4248
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4209,
                    "end": 4249
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IfCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4258,
                      "end": 4268
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
                        "start": 4271,
                        "end": 4274
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
                              "start": 4281,
                              "end": 4284
                            },
                            "typeArguments": null,
                            "start": 4281,
                            "end": 4284
                          },
                          "start": 4279,
                          "end": 4284
                        },
                        "start": 4276,
                        "end": 4284
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4287,
                        "end": 4294
                      },
                      "start": 4285,
                      "end": 4294
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4258,
                    "end": 4295
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WhileCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4304,
                      "end": 4317
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
                        "start": 4320,
                        "end": 4323
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
                              "start": 4330,
                              "end": 4333
                            },
                            "typeArguments": null,
                            "start": 4330,
                            "end": 4333
                          },
                          "start": 4328,
                          "end": 4333
                        },
                        "start": 4325,
                        "end": 4333
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4336,
                        "end": 4343
                      },
                      "start": 4334,
                      "end": 4343
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4304,
                    "end": 4344
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DoWhileCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4353,
                      "end": 4368
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
                        "start": 4371,
                        "end": 4374
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
                              "start": 4381,
                              "end": 4384
                            },
                            "typeArguments": null,
                            "start": 4381,
                            "end": 4384
                          },
                          "start": 4379,
                          "end": 4384
                        },
                        "start": 4376,
                        "end": 4384
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4387,
                        "end": 4394
                      },
                      "start": 4385,
                      "end": 4394
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4353,
                    "end": 4395
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BlockCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4404,
                      "end": 4417
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
                        "start": 4420,
                        "end": 4423
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
                              "start": 4432,
                              "end": 4437
                            },
                            "typeArguments": null,
                            "start": 4432,
                            "end": 4437
                          },
                          "start": 4430,
                          "end": 4437
                        },
                        "start": 4425,
                        "end": 4437
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4440,
                        "end": 4447
                      },
                      "start": 4438,
                      "end": 4447
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4404,
                    "end": 4448
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CaseCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4457,
                      "end": 4469
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
                        "start": 4472,
                        "end": 4475
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
                              "start": 4482,
                              "end": 4485
                            },
                            "typeArguments": null,
                            "start": 4482,
                            "end": 4485
                          },
                          "start": 4480,
                          "end": 4485
                        },
                        "start": 4477,
                        "end": 4485
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4488,
                        "end": 4495
                      },
                      "start": 4486,
                      "end": 4495
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4457,
                    "end": 4496
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SwitchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4505,
                      "end": 4519
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
                        "start": 4522,
                        "end": 4525
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
                              "start": 4532,
                              "end": 4535
                            },
                            "typeArguments": null,
                            "start": 4532,
                            "end": 4535
                          },
                          "start": 4530,
                          "end": 4535
                        },
                        "start": 4527,
                        "end": 4535
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4538,
                        "end": 4545
                      },
                      "start": 4536,
                      "end": 4545
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4505,
                    "end": 4546
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4555,
                      "end": 4566
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
                        "start": 4569,
                        "end": 4572
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
                              "start": 4579,
                              "end": 4582
                            },
                            "typeArguments": null,
                            "start": 4579,
                            "end": 4582
                          },
                          "start": 4577,
                          "end": 4582
                        },
                        "start": 4574,
                        "end": 4582
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4585,
                        "end": 4592
                      },
                      "start": 4583,
                      "end": 4592
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4555,
                    "end": 4593
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryCatchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4602,
                      "end": 4618
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
                        "start": 4621,
                        "end": 4624
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
                              "start": 4631,
                              "end": 4634
                            },
                            "typeArguments": null,
                            "start": 4631,
                            "end": 4634
                          },
                          "start": 4629,
                          "end": 4634
                        },
                        "start": 4626,
                        "end": 4634
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4637,
                        "end": 4644
                      },
                      "start": 4635,
                      "end": 4644
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4602,
                    "end": 4645
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryFinallyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4654,
                      "end": 4672
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
                        "start": 4675,
                        "end": 4678
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
                              "start": 4685,
                              "end": 4688
                            },
                            "typeArguments": null,
                            "start": 4685,
                            "end": 4688
                          },
                          "start": 4683,
                          "end": 4688
                        },
                        "start": 4680,
                        "end": 4688
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4691,
                        "end": 4698
                      },
                      "start": 4689,
                      "end": 4698
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4654,
                    "end": 4699
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FinallyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4708,
                      "end": 4723
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
                        "start": 4726,
                        "end": 4729
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
                              "start": 4736,
                              "end": 4739
                            },
                            "typeArguments": null,
                            "start": 4736,
                            "end": 4739
                          },
                          "start": 4734,
                          "end": 4739
                        },
                        "start": 4731,
                        "end": 4739
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4742,
                        "end": 4749
                      },
                      "start": 4740,
                      "end": 4749
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4708,
                    "end": 4750
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CatchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4759,
                      "end": 4772
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
                        "start": 4775,
                        "end": 4778
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
                              "start": 4785,
                              "end": 4788
                            },
                            "typeArguments": null,
                            "start": 4785,
                            "end": 4788
                          },
                          "start": 4783,
                          "end": 4788
                        },
                        "start": 4780,
                        "end": 4788
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4791,
                        "end": 4798
                      },
                      "start": 4789,
                      "end": 4798
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4759,
                    "end": 4799
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4808,
                      "end": 4820
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
                        "start": 4823,
                        "end": 4826
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
                              "start": 4837,
                              "end": 4844
                            },
                            "typeArguments": null,
                            "start": 4837,
                            "end": 4844
                          },
                          "start": 4835,
                          "end": 4844
                        },
                        "start": 4828,
                        "end": 4844
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4847,
                        "end": 4854
                      },
                      "start": 4845,
                      "end": 4854
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4808,
                    "end": 4855
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ScriptCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4864,
                      "end": 4878
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
                        "start": 4881,
                        "end": 4884
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
                              "start": 4894,
                              "end": 4900
                            },
                            "typeArguments": null,
                            "start": 4894,
                            "end": 4900
                          },
                          "start": 4892,
                          "end": 4900
                        },
                        "start": 4886,
                        "end": 4900
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4903,
                        "end": 4910
                      },
                      "start": 4901,
                      "end": 4910
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4864,
                    "end": 4911
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4920,
                      "end": 4944
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
                        "start": 4947,
                        "end": 4950
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
                              "start": 4957,
                              "end": 4960
                            },
                            "typeArguments": null,
                            "start": 4957,
                            "end": 4960
                          },
                          "start": 4955,
                          "end": 4960
                        },
                        "start": 4952,
                        "end": 4960
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4963,
                        "end": 4970
                      },
                      "start": 4961,
                      "end": 4970
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4920,
                    "end": 4971
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4980,
                      "end": 5008
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
                        "start": 5011,
                        "end": 5014
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
                              "start": 5031,
                              "end": 5051
                            },
                            "typeArguments": null,
                            "start": 5031,
                            "end": 5051
                          },
                          "start": 5029,
                          "end": 5051
                        },
                        "start": 5016,
                        "end": 5051
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5054,
                        "end": 5061
                      },
                      "start": 5052,
                      "end": 5061
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4980,
                    "end": 5062
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5071,
                      "end": 5096
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
                        "start": 5099,
                        "end": 5102
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
                              "start": 5116,
                              "end": 5133
                            },
                            "typeArguments": null,
                            "start": 5116,
                            "end": 5133
                          },
                          "start": 5114,
                          "end": 5133
                        },
                        "start": 5104,
                        "end": 5133
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5136,
                        "end": 5143
                      },
                      "start": 5134,
                      "end": 5143
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5071,
                    "end": 5144
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ImportDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5153,
                      "end": 5178
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
                        "start": 5181,
                        "end": 5184
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
                              "start": 5191,
                              "end": 5194
                            },
                            "typeArguments": null,
                            "start": 5191,
                            "end": 5194
                          },
                          "start": 5189,
                          "end": 5194
                        },
                        "start": 5186,
                        "end": 5194
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5197,
                        "end": 5204
                      },
                      "start": 5195,
                      "end": 5204
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5153,
                    "end": 5205
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WithCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5214,
                      "end": 5226
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
                        "start": 5229,
                        "end": 5232
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
                              "start": 5239,
                              "end": 5242
                            },
                            "typeArguments": null,
                            "start": 5239,
                            "end": 5242
                          },
                          "start": 5237,
                          "end": 5242
                        },
                        "start": 5234,
                        "end": 5242
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5245,
                        "end": 5252
                      },
                      "start": 5243,
                      "end": 5252
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5214,
                    "end": 5253
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LabelCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5262,
                      "end": 5275
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
                        "start": 5278,
                        "end": 5281
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
                              "start": 5293,
                              "end": 5296
                            },
                            "typeArguments": null,
                            "start": 5293,
                            "end": 5296
                          },
                          "start": 5291,
                          "end": 5296
                        },
                        "start": 5283,
                        "end": 5296
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5299,
                        "end": 5306
                      },
                      "start": 5297,
                      "end": 5306
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5262,
                    "end": 5307
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LabeledStatementCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5316,
                      "end": 5340
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
                        "start": 5343,
                        "end": 5346
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
                              "start": 5353,
                              "end": 5356
                            },
                            "typeArguments": null,
                            "start": 5353,
                            "end": 5356
                          },
                          "start": 5351,
                          "end": 5356
                        },
                        "start": 5348,
                        "end": 5356
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5359,
                        "end": 5366
                      },
                      "start": 5357,
                      "end": 5366
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5316,
                    "end": 5367
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EBStartCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5376,
                      "end": 5391
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
                        "start": 5394,
                        "end": 5397
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
                              "start": 5404,
                              "end": 5407
                            },
                            "typeArguments": null,
                            "start": 5404,
                            "end": 5407
                          },
                          "start": 5402,
                          "end": 5407
                        },
                        "start": 5399,
                        "end": 5407
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5410,
                        "end": 5417
                      },
                      "start": 5408,
                      "end": 5417
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5376,
                    "end": 5418
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GotoEBCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5427,
                      "end": 5441
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
                        "start": 5444,
                        "end": 5447
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
                              "start": 5454,
                              "end": 5457
                            },
                            "typeArguments": null,
                            "start": 5454,
                            "end": 5457
                          },
                          "start": 5452,
                          "end": 5457
                        },
                        "start": 5449,
                        "end": 5457
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5460,
                        "end": 5467
                      },
                      "start": 5458,
                      "end": 5467
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5427,
                    "end": 5468
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EndCodeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5477,
                      "end": 5492
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
                        "start": 5495,
                        "end": 5498
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
                              "start": 5505,
                              "end": 5508
                            },
                            "typeArguments": null,
                            "start": 5505,
                            "end": 5508
                          },
                          "start": 5503,
                          "end": 5508
                        },
                        "start": 5500,
                        "end": 5508
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5511,
                        "end": 5518
                      },
                      "start": 5509,
                      "end": 5518
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5477,
                    "end": 5519
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5528,
                      "end": 5541
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
                        "start": 5544,
                        "end": 5547
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
                              "start": 5554,
                              "end": 5557
                            },
                            "typeArguments": null,
                            "start": 5554,
                            "end": 5557
                          },
                          "start": 5552,
                          "end": 5557
                        },
                        "start": 5549,
                        "end": 5557
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5560,
                        "end": 5567
                      },
                      "start": 5558,
                      "end": 5567
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5528,
                    "end": 5568
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CommentCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5577,
                      "end": 5592
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
                        "start": 5595,
                        "end": 5598
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
                              "start": 5605,
                              "end": 5608
                            },
                            "typeArguments": null,
                            "start": 5605,
                            "end": 5608
                          },
                          "start": 5603,
                          "end": 5608
                        },
                        "start": 5600,
                        "end": 5608
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5611,
                        "end": 5618
                      },
                      "start": 5609,
                      "end": 5618
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5577,
                    "end": 5619
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DebuggerCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5628,
                      "end": 5644
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
                        "start": 5647,
                        "end": 5650
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
                              "start": 5657,
                              "end": 5660
                            },
                            "typeArguments": null,
                            "start": 5657,
                            "end": 5660
                          },
                          "start": 5655,
                          "end": 5660
                        },
                        "start": 5652,
                        "end": 5660
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5663,
                        "end": 5670
                      },
                      "start": 5661,
                      "end": 5670
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5628,
                    "end": 5671
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5680,
                      "end": 5695
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
                        "start": 5698,
                        "end": 5701
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
                              "start": 5708,
                              "end": 5711
                            },
                            "typeArguments": null,
                            "start": 5708,
                            "end": 5711
                          },
                          "start": 5706,
                          "end": 5711
                        },
                        "start": 5703,
                        "end": 5711
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5714,
                        "end": 5721
                      },
                      "start": 5712,
                      "end": 5721
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5680,
                    "end": 5722
                  }
                ],
                "start": 304,
                "end": 5728
              },
              "declare": false,
              "start": 270,
              "end": 5728
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 263,
            "end": 5728
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
                "start": 5750,
                "end": 5754
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
                        "start": 5763,
                        "end": 5769
                      },
                      "typeArguments": null,
                      "start": 5763,
                      "end": 5769
                    },
                    "start": 5761,
                    "end": 5769
                  },
                  "start": 5755,
                  "end": 5769
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
                        "start": 5781,
                        "end": 5804
                      },
                      "typeArguments": null,
                      "start": 5781,
                      "end": 5804
                    },
                    "start": 5779,
                    "end": 5804
                  },
                  "start": 5771,
                  "end": 5804
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 5807,
                  "end": 5811
                },
                "start": 5805,
                "end": 5811
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
                          "start": 5826,
                          "end": 5829
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
                                    "start": 5838,
                                    "end": 5841
                                  },
                                  "typeArguments": null,
                                  "start": 5838,
                                  "end": 5841
                                },
                                "start": 5836,
                                "end": 5841
                              },
                              "start": 5833,
                              "end": 5841
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
                                    "start": 5851,
                                    "end": 5854
                                  },
                                  "typeArguments": null,
                                  "start": 5851,
                                  "end": 5854
                                },
                                "start": 5849,
                                "end": 5854
                              },
                              "start": 5843,
                              "end": 5854
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
                                        "start": 5873,
                                        "end": 5879
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "options",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5880,
                                        "end": 5887
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 5873,
                                      "end": 5887
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "goChildren",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5888,
                                      "end": 5898
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 5873,
                                    "end": 5898
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "AstWalkerCallback",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5901,
                                      "end": 5918
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 5919,
                                        "end": 5923
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "cur",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5925,
                                        "end": 5928
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5930,
                                        "end": 5938
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5901,
                                    "end": 5939
                                  },
                                  "start": 5873,
                                  "end": 5939
                                },
                                "directive": null,
                                "start": 5873,
                                "end": 5940
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cur",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5960,
                                  "end": 5963
                                },
                                "start": 5953,
                                "end": 5964
                              }
                            ],
                            "start": 5859,
                            "end": 5974
                          },
                          "id": null,
                          "generator": false,
                          "start": 5832,
                          "end": 5974
                        },
                        "definite": false,
                        "start": 5826,
                        "end": 5974
                      }
                    ],
                    "declare": false,
                    "start": 5822,
                    "end": 5974
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
                          "start": 5988,
                          "end": 5992
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
                                    "start": 6001,
                                    "end": 6004
                                  },
                                  "typeArguments": null,
                                  "start": 6001,
                                  "end": 6004
                                },
                                "start": 5999,
                                "end": 6004
                              },
                              "start": 5996,
                              "end": 6004
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
                                    "start": 6014,
                                    "end": 6017
                                  },
                                  "typeArguments": null,
                                  "start": 6014,
                                  "end": 6017
                                },
                                "start": 6012,
                                "end": 6017
                              },
                              "start": 6006,
                              "end": 6017
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
                                    "start": 6036,
                                    "end": 6053
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 6054,
                                      "end": 6059
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "cur",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6061,
                                      "end": 6064
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "callback",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6066,
                                      "end": 6074
                                    }
                                  ],
                                  "optional": false,
                                  "start": 6036,
                                  "end": 6075
                                },
                                "directive": null,
                                "start": 6036,
                                "end": 6076
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cur",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6096,
                                  "end": 6099
                                },
                                "start": 6089,
                                "end": 6100
                              }
                            ],
                            "start": 6022,
                            "end": 6110
                          },
                          "id": null,
                          "generator": false,
                          "start": 5995,
                          "end": 6110
                        },
                        "definite": false,
                        "start": 5988,
                        "end": 6110
                      }
                    ],
                    "declare": false,
                    "start": 5984,
                    "end": 6110
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
                          "start": 6124,
                          "end": 6130
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
                                  "start": 6133,
                                  "end": 6143
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getAstWalkerFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6144,
                                  "end": 6163
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6133,
                                "end": 6163
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 6133,
                              "end": 6165
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getWalker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6166,
                              "end": 6175
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6133,
                            "end": 6175
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6176,
                              "end": 6179
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "post",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6181,
                              "end": 6185
                            }
                          ],
                          "optional": false,
                          "start": 6133,
                          "end": 6186
                        },
                        "definite": false,
                        "start": 6124,
                        "end": 6186
                      }
                    ],
                    "declare": false,
                    "start": 6120,
                    "end": 6187
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
                          "start": 6196,
                          "end": 6202
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "walk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6203,
                          "end": 6207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6196,
                        "end": 6207
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "script",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6208,
                          "end": 6214
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6216,
                          "end": 6220
                        }
                      ],
                      "optional": false,
                      "start": 6196,
                      "end": 6221
                    },
                    "directive": null,
                    "start": 6196,
                    "end": 6222
                  }
                ],
                "start": 5812,
                "end": 6228
              },
              "expression": false,
              "start": 5741,
              "end": 6228
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5734,
            "end": 6228
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AstWalkerCallback",
              "optional": false,
              "typeAnnotation": null,
              "start": 6243,
              "end": 6260
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
                    "start": 6266,
                    "end": 6273
                  },
                  "start": 6264,
                  "end": 6273
                },
                "start": 6261,
                "end": 6273
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
                      "start": 6280,
                      "end": 6283
                    },
                    "typeArguments": null,
                    "start": 6280,
                    "end": 6283
                  },
                  "start": 6278,
                  "end": 6283
                },
                "start": 6275,
                "end": 6283
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
                      "start": 6295,
                      "end": 6318
                    },
                    "typeArguments": null,
                    "start": 6295,
                    "end": 6318
                  },
                  "start": 6293,
                  "end": 6318
                },
                "start": 6285,
                "end": 6318
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6321,
                "end": 6328
              },
              "start": 6319,
              "end": 6328
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
                        "start": 6428,
                        "end": 6436
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6439,
                          "end": 6442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nodeType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6443,
                          "end": 6451
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6439,
                        "end": 6451
                      },
                      "definite": false,
                      "start": 6428,
                      "end": 6451
                    }
                  ],
                  "declare": false,
                  "start": 6424,
                  "end": 6452
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
                        "start": 6465,
                        "end": 6479
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
                                "start": 6484,
                                "end": 6487
                              },
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6488,
                                "end": 6496
                              },
                              "start": 6483,
                              "end": 6496
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_map",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6498,
                              "end": 6502
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6482,
                            "end": 6502
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nodeType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6503,
                            "end": 6511
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6482,
                          "end": 6512
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "Callback",
                          "raw": "\"Callback\"",
                          "start": 6515,
                          "end": 6525
                        },
                        "start": 6482,
                        "end": 6525
                      },
                      "definite": false,
                      "start": 6465,
                      "end": 6525
                    }
                  ],
                  "declare": false,
                  "start": 6461,
                  "end": 6526
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
                      "start": 6539,
                      "end": 6547
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callbackString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6548,
                      "end": 6562
                    },
                    "optional": false,
                    "computed": true,
                    "start": 6539,
                    "end": 6563
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
                              "start": 6586,
                              "end": 6594
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callbackString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6595,
                              "end": 6609
                            },
                            "optional": false,
                            "computed": true,
                            "start": 6586,
                            "end": 6610
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6611,
                              "end": 6614
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6616,
                              "end": 6619
                            }
                          ],
                          "optional": false,
                          "start": 6586,
                          "end": 6620
                        },
                        "start": 6579,
                        "end": 6621
                      }
                    ],
                    "start": 6565,
                    "end": 6631
                  },
                  "alternate": null,
                  "start": 6535,
                  "end": 6631
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
                      "start": 6645,
                      "end": 6653
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6654,
                      "end": 6669
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6645,
                    "end": 6669
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
                              "start": 6692,
                              "end": 6700
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DefaultCallback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6701,
                              "end": 6716
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6692,
                            "end": 6716
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6717,
                              "end": 6720
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6722,
                              "end": 6725
                            }
                          ],
                          "optional": false,
                          "start": 6692,
                          "end": 6726
                        },
                        "start": 6685,
                        "end": 6727
                      }
                    ],
                    "start": 6671,
                    "end": 6737
                  },
                  "alternate": null,
                  "start": 6641,
                  "end": 6737
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 6754,
                    "end": 6758
                  },
                  "start": 6747,
                  "end": 6759
                }
              ],
              "start": 6329,
              "end": 6765
            },
            "expression": false,
            "start": 6234,
            "end": 6765
          }
        ],
        "start": 257,
        "end": 6767
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 6767
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 6767
}
```
