__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 211,
  "end": 6767,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 6767,
      "id": {
        "type": "TSQualifiedName",
        "start": 218,
        "end": 256,
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 228,
          "name": "TypeScript",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 256,
          "name": "AstWalkerWithDetailCallback",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 257,
        "end": 6767,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 263,
            "end": 5728,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 270,
              "end": 5728,
              "id": {
                "type": "Identifier",
                "start": 280,
                "end": 303,
                "name": "AstWalkerDetailCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 304,
                "end": 5728,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 314,
                    "end": 354,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 327,
                      "name": "EmptyCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 330,
                        "end": 333,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 335,
                        "end": 343,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 338,
                          "end": 343,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 340,
                            "end": 343,
                            "typeName": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 343,
                              "name": "AST",
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
                      "start": 344,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 346,
                        "end": 353
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 363,
                    "end": 407,
                    "key": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 380,
                      "name": "EmptyExprCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 383,
                        "end": 386,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 388,
                        "end": 396,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 391,
                          "end": 396,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 393,
                            "end": 396,
                            "typeName": {
                              "type": "Identifier",
                              "start": 393,
                              "end": 396,
                              "name": "AST",
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
                      "start": 397,
                      "end": 406,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 399,
                        "end": 406
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 416,
                    "end": 455,
                    "key": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 428,
                      "name": "TrueCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 431,
                        "end": 434,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 436,
                        "end": 444,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 439,
                          "end": 444,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 441,
                            "end": 444,
                            "typeName": {
                              "type": "Identifier",
                              "start": 441,
                              "end": 444,
                              "name": "AST",
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
                      "start": 445,
                      "end": 454,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 447,
                        "end": 454
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 464,
                    "end": 504,
                    "key": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 477,
                      "name": "FalseCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 480,
                        "end": 483,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 485,
                        "end": 493,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 488,
                          "end": 493,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 490,
                            "end": 493,
                            "typeName": {
                              "type": "Identifier",
                              "start": 490,
                              "end": 493,
                              "name": "AST",
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
                      "start": 494,
                      "end": 503,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 496,
                        "end": 503
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 513,
                    "end": 552,
                    "key": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 525,
                      "name": "ThisCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 528,
                        "end": 531,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 533,
                        "end": 541,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 536,
                          "end": 541,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 538,
                            "end": 541,
                            "typeName": {
                              "type": "Identifier",
                              "start": 538,
                              "end": 541,
                              "name": "AST",
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
                      "start": 542,
                      "end": 551,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 544,
                        "end": 551
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 561,
                    "end": 601,
                    "key": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 574,
                      "name": "SuperCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 577,
                        "end": 580,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 582,
                        "end": 590,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 585,
                          "end": 590,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 587,
                            "end": 590,
                            "typeName": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 590,
                              "name": "AST",
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
                      "start": 591,
                      "end": 600,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 593,
                        "end": 600
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 610,
                    "end": 652,
                    "key": {
                      "type": "Identifier",
                      "start": 610,
                      "end": 625,
                      "name": "QStringCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 628,
                        "end": 631,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 633,
                        "end": 641,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 636,
                          "end": 641,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 638,
                            "end": 641,
                            "typeName": {
                              "type": "Identifier",
                              "start": 638,
                              "end": 641,
                              "name": "AST",
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
                      "start": 642,
                      "end": 651,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 644,
                        "end": 651
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 661,
                    "end": 701,
                    "key": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 674,
                      "name": "RegexCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 677,
                        "end": 680,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 682,
                        "end": 690,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 685,
                          "end": 690,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 687,
                            "end": 690,
                            "typeName": {
                              "type": "Identifier",
                              "start": 687,
                              "end": 690,
                              "name": "AST",
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
                      "start": 691,
                      "end": 700,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 693,
                        "end": 700
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 710,
                    "end": 749,
                    "key": {
                      "type": "Identifier",
                      "start": 710,
                      "end": 722,
                      "name": "NullCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 725,
                        "end": 728,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 730,
                        "end": 738,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 733,
                          "end": 738,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 735,
                            "end": 738,
                            "typeName": {
                              "type": "Identifier",
                              "start": 735,
                              "end": 738,
                              "name": "AST",
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
                      "start": 739,
                      "end": 748,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 741,
                        "end": 748
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 758,
                    "end": 801,
                    "key": {
                      "type": "Identifier",
                      "start": 758,
                      "end": 774,
                      "name": "ArrayLitCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 777,
                        "end": 780,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 782,
                        "end": 790,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 785,
                          "end": 790,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 787,
                            "end": 790,
                            "typeName": {
                              "type": "Identifier",
                              "start": 787,
                              "end": 790,
                              "name": "AST",
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
                      "start": 791,
                      "end": 800,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 793,
                        "end": 800
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 810,
                    "end": 854,
                    "key": {
                      "type": "Identifier",
                      "start": 810,
                      "end": 827,
                      "name": "ObjectLitCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 830,
                        "end": 833,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 835,
                        "end": 843,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 838,
                          "end": 843,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 840,
                            "end": 843,
                            "typeName": {
                              "type": "Identifier",
                              "start": 840,
                              "end": 843,
                              "name": "AST",
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
                      "start": 844,
                      "end": 853,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 846,
                        "end": 853
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 863,
                    "end": 902,
                    "key": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 875,
                      "name": "VoidCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 878,
                        "end": 881,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 883,
                        "end": 891,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 886,
                          "end": 891,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 888,
                            "end": 891,
                            "typeName": {
                              "type": "Identifier",
                              "start": 888,
                              "end": 891,
                              "name": "AST",
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
                      "start": 892,
                      "end": 901,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 894,
                        "end": 901
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 911,
                    "end": 951,
                    "key": {
                      "type": "Identifier",
                      "start": 911,
                      "end": 924,
                      "name": "CommaCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 927,
                        "end": 930,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 932,
                        "end": 940,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 935,
                          "end": 940,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 937,
                            "end": 940,
                            "typeName": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 940,
                              "name": "AST",
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
                      "start": 941,
                      "end": 950,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 943,
                        "end": 950
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 960,
                    "end": 998,
                    "key": {
                      "type": "Identifier",
                      "start": 960,
                      "end": 971,
                      "name": "PosCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 974,
                        "end": 977,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 979,
                        "end": 987,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 982,
                          "end": 987,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 984,
                            "end": 987,
                            "typeName": {
                              "type": "Identifier",
                              "start": 984,
                              "end": 987,
                              "name": "AST",
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
                      "start": 988,
                      "end": 997,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 990,
                        "end": 997
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1007,
                    "end": 1045,
                    "key": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1018,
                      "name": "NegCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1024,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1026,
                        "end": 1034,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1029,
                          "end": 1034,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1031,
                            "end": 1034,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1031,
                              "end": 1034,
                              "name": "AST",
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
                      "start": 1035,
                      "end": 1044,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1037,
                        "end": 1044
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1054,
                    "end": 1095,
                    "key": {
                      "type": "Identifier",
                      "start": 1054,
                      "end": 1068,
                      "name": "DeleteCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1071,
                        "end": 1074,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1084,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1079,
                          "end": 1084,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1081,
                            "end": 1084,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1081,
                              "end": 1084,
                              "name": "AST",
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
                      "start": 1085,
                      "end": 1094,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1087,
                        "end": 1094
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1104,
                    "end": 1144,
                    "key": {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1117,
                      "name": "AwaitCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1120,
                        "end": 1123,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1125,
                        "end": 1133,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1128,
                          "end": 1133,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1130,
                            "end": 1133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1133,
                              "name": "AST",
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
                      "start": 1134,
                      "end": 1143,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1136,
                        "end": 1143
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1153,
                    "end": 1190,
                    "key": {
                      "type": "Identifier",
                      "start": 1153,
                      "end": 1163,
                      "name": "InCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1166,
                        "end": 1169,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1171,
                        "end": 1179,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1174,
                          "end": 1179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1176,
                            "end": 1179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1176,
                              "end": 1179,
                              "name": "AST",
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
                      "start": 1180,
                      "end": 1189,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1182,
                        "end": 1189
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1199,
                    "end": 1237,
                    "key": {
                      "type": "Identifier",
                      "start": 1199,
                      "end": 1210,
                      "name": "DotCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1213,
                        "end": 1216,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1218,
                        "end": 1226,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1221,
                          "end": 1226,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1223,
                            "end": 1226,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1223,
                              "end": 1226,
                              "name": "AST",
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
                      "end": 1236,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1229,
                        "end": 1236
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1246,
                    "end": 1285,
                    "key": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1258,
                      "name": "FromCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1261,
                        "end": 1264,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1266,
                        "end": 1274,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1269,
                          "end": 1274,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1271,
                            "end": 1274,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1271,
                              "end": 1274,
                              "name": "AST",
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
                      "start": 1275,
                      "end": 1284,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1277,
                        "end": 1284
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1294,
                    "end": 1331,
                    "key": {
                      "type": "Identifier",
                      "start": 1294,
                      "end": 1304,
                      "name": "IsCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1307,
                        "end": 1310,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1312,
                        "end": 1320,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1315,
                          "end": 1320,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1317,
                            "end": 1320,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1317,
                              "end": 1320,
                              "name": "AST",
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
                      "start": 1321,
                      "end": 1330,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1323,
                        "end": 1330
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1340,
                    "end": 1381,
                    "key": {
                      "type": "Identifier",
                      "start": 1340,
                      "end": 1354,
                      "name": "InstOfCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1360,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1362,
                        "end": 1370,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1365,
                          "end": 1370,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1367,
                            "end": 1370,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1367,
                              "end": 1370,
                              "name": "AST",
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
                      "start": 1371,
                      "end": 1380,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1373,
                        "end": 1380
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1390,
                    "end": 1431,
                    "key": {
                      "type": "Identifier",
                      "start": 1390,
                      "end": 1404,
                      "name": "TypeofCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1407,
                        "end": 1410,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1412,
                        "end": 1420,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1415,
                          "end": 1420,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1417,
                            "end": 1420,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1417,
                              "end": 1420,
                              "name": "AST",
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
                      "start": 1421,
                      "end": 1430,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1423,
                        "end": 1430
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1440,
                    "end": 1484,
                    "key": {
                      "type": "Identifier",
                      "start": 1440,
                      "end": 1457,
                      "name": "NumberLitCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1460,
                        "end": 1463,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1465,
                        "end": 1473,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1468,
                          "end": 1473,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1470,
                            "end": 1473,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1470,
                              "end": 1473,
                              "name": "AST",
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
                      "start": 1474,
                      "end": 1483,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1476,
                        "end": 1483
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1493,
                    "end": 1549,
                    "key": {
                      "type": "Identifier",
                      "start": 1493,
                      "end": 1505,
                      "name": "NameCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1511,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1513,
                        "end": 1538,
                        "name": "identifierAst",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1526,
                          "end": 1538,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1528,
                            "end": 1538,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1528,
                              "end": 1538,
                              "name": "Identifier",
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
                      "start": 1539,
                      "end": 1548,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1541,
                        "end": 1548
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1558,
                    "end": 1600,
                    "key": {
                      "type": "Identifier",
                      "start": 1558,
                      "end": 1573,
                      "name": "TypeRefCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1576,
                        "end": 1579,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1581,
                        "end": 1589,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1584,
                          "end": 1589,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1586,
                            "end": 1589,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1586,
                              "end": 1589,
                              "name": "AST",
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
                      "start": 1590,
                      "end": 1599,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1592,
                        "end": 1599
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1609,
                    "end": 1649,
                    "key": {
                      "type": "Identifier",
                      "start": 1609,
                      "end": 1622,
                      "name": "IndexCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1625,
                        "end": 1628,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1630,
                        "end": 1638,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1633,
                          "end": 1638,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1635,
                            "end": 1638,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1635,
                              "end": 1638,
                              "name": "AST",
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
                      "start": 1639,
                      "end": 1648,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1641,
                        "end": 1648
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1658,
                    "end": 1697,
                    "key": {
                      "type": "Identifier",
                      "start": 1658,
                      "end": 1670,
                      "name": "CallCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1673,
                        "end": 1676,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1678,
                        "end": 1686,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1681,
                          "end": 1686,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1683,
                            "end": 1686,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1683,
                              "end": 1686,
                              "name": "AST",
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
                      "start": 1687,
                      "end": 1696,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1689,
                        "end": 1696
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1706,
                    "end": 1744,
                    "key": {
                      "type": "Identifier",
                      "start": 1706,
                      "end": 1717,
                      "name": "NewCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1720,
                        "end": 1723,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1725,
                        "end": 1733,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1728,
                          "end": 1733,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1730,
                            "end": 1733,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1730,
                              "end": 1733,
                              "name": "AST",
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
                      "start": 1734,
                      "end": 1743,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1736,
                        "end": 1743
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1753,
                    "end": 1791,
                    "key": {
                      "type": "Identifier",
                      "start": 1753,
                      "end": 1764,
                      "name": "AsgCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1767,
                        "end": 1770,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1772,
                        "end": 1780,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1775,
                          "end": 1780,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1777,
                            "end": 1780,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1777,
                              "end": 1780,
                              "name": "AST",
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
                      "start": 1781,
                      "end": 1790,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1783,
                        "end": 1790
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1800,
                    "end": 1841,
                    "key": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1814,
                      "name": "AsgAddCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1817,
                        "end": 1820,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1822,
                        "end": 1830,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1825,
                          "end": 1830,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1827,
                            "end": 1830,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1827,
                              "end": 1830,
                              "name": "AST",
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
                      "start": 1831,
                      "end": 1840,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1833,
                        "end": 1840
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1850,
                    "end": 1891,
                    "key": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1864,
                      "name": "AsgSubCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1867,
                        "end": 1870,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1872,
                        "end": 1880,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1875,
                          "end": 1880,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1877,
                            "end": 1880,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1877,
                              "end": 1880,
                              "name": "AST",
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
                      "start": 1881,
                      "end": 1890,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1883,
                        "end": 1890
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1900,
                    "end": 1941,
                    "key": {
                      "type": "Identifier",
                      "start": 1900,
                      "end": 1914,
                      "name": "AsgDivCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1917,
                        "end": 1920,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1922,
                        "end": 1930,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1925,
                          "end": 1930,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1927,
                            "end": 1930,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1927,
                              "end": 1930,
                              "name": "AST",
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
                      "start": 1931,
                      "end": 1940,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1933,
                        "end": 1940
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1950,
                    "end": 1991,
                    "key": {
                      "type": "Identifier",
                      "start": 1950,
                      "end": 1964,
                      "name": "AsgMulCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1967,
                        "end": 1970,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1972,
                        "end": 1980,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1975,
                          "end": 1980,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1977,
                            "end": 1980,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1977,
                              "end": 1980,
                              "name": "AST",
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
                      "start": 1981,
                      "end": 1990,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1983,
                        "end": 1990
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2000,
                    "end": 2041,
                    "key": {
                      "type": "Identifier",
                      "start": 2000,
                      "end": 2014,
                      "name": "AsgModCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2017,
                        "end": 2020,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2022,
                        "end": 2030,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2025,
                          "end": 2030,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2027,
                            "end": 2030,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2027,
                              "end": 2030,
                              "name": "AST",
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
                      "start": 2031,
                      "end": 2040,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2033,
                        "end": 2040
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2050,
                    "end": 2091,
                    "key": {
                      "type": "Identifier",
                      "start": 2050,
                      "end": 2064,
                      "name": "AsgAndCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2067,
                        "end": 2070,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2072,
                        "end": 2080,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2075,
                          "end": 2080,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2077,
                            "end": 2080,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2077,
                              "end": 2080,
                              "name": "AST",
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
                      "start": 2081,
                      "end": 2090,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2083,
                        "end": 2090
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2100,
                    "end": 2141,
                    "key": {
                      "type": "Identifier",
                      "start": 2100,
                      "end": 2114,
                      "name": "AsgXorCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2117,
                        "end": 2120,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2122,
                        "end": 2130,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2125,
                          "end": 2130,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2127,
                            "end": 2130,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2127,
                              "end": 2130,
                              "name": "AST",
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
                      "start": 2131,
                      "end": 2140,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2133,
                        "end": 2140
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2150,
                    "end": 2190,
                    "key": {
                      "type": "Identifier",
                      "start": 2150,
                      "end": 2163,
                      "name": "AsgOrCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2166,
                        "end": 2169,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2171,
                        "end": 2179,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2174,
                          "end": 2179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2176,
                            "end": 2179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2176,
                              "end": 2179,
                              "name": "AST",
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
                      "start": 2180,
                      "end": 2189,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2182,
                        "end": 2189
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2199,
                    "end": 2240,
                    "key": {
                      "type": "Identifier",
                      "start": 2199,
                      "end": 2213,
                      "name": "AsgLshCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2216,
                        "end": 2219,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2221,
                        "end": 2229,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2224,
                          "end": 2229,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2226,
                            "end": 2229,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2226,
                              "end": 2229,
                              "name": "AST",
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
                      "start": 2230,
                      "end": 2239,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2232,
                        "end": 2239
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2249,
                    "end": 2290,
                    "key": {
                      "type": "Identifier",
                      "start": 2249,
                      "end": 2263,
                      "name": "AsgRshCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2266,
                        "end": 2269,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2271,
                        "end": 2279,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2274,
                          "end": 2279,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2276,
                            "end": 2279,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2276,
                              "end": 2279,
                              "name": "AST",
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
                      "start": 2280,
                      "end": 2289,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2282,
                        "end": 2289
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2299,
                    "end": 2340,
                    "key": {
                      "type": "Identifier",
                      "start": 2299,
                      "end": 2313,
                      "name": "AsgRs2Callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2316,
                        "end": 2319,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2329,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2324,
                          "end": 2329,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2326,
                            "end": 2329,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2326,
                              "end": 2329,
                              "name": "AST",
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
                      "start": 2330,
                      "end": 2339,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2332,
                        "end": 2339
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2349,
                    "end": 2389,
                    "key": {
                      "type": "Identifier",
                      "start": 2349,
                      "end": 2362,
                      "name": "QMarkCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2365,
                        "end": 2368,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2370,
                        "end": 2378,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2373,
                          "end": 2378,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2375,
                            "end": 2378,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2375,
                              "end": 2378,
                              "name": "AST",
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
                      "start": 2379,
                      "end": 2388,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2381,
                        "end": 2388
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2398,
                    "end": 2438,
                    "key": {
                      "type": "Identifier",
                      "start": 2398,
                      "end": 2411,
                      "name": "LogOrCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2414,
                        "end": 2417,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2419,
                        "end": 2427,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2422,
                          "end": 2427,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2424,
                            "end": 2427,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2424,
                              "end": 2427,
                              "name": "AST",
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
                      "start": 2428,
                      "end": 2437,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2430,
                        "end": 2437
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2447,
                    "end": 2488,
                    "key": {
                      "type": "Identifier",
                      "start": 2447,
                      "end": 2461,
                      "name": "LogAndCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2464,
                        "end": 2467,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2469,
                        "end": 2477,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2472,
                          "end": 2477,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2474,
                            "end": 2477,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2474,
                              "end": 2477,
                              "name": "AST",
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
                      "start": 2478,
                      "end": 2487,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2480,
                        "end": 2487
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2497,
                    "end": 2534,
                    "key": {
                      "type": "Identifier",
                      "start": 2497,
                      "end": 2507,
                      "name": "OrCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2510,
                        "end": 2513,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2515,
                        "end": 2523,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2518,
                          "end": 2523,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2520,
                            "end": 2523,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2520,
                              "end": 2523,
                              "name": "AST",
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
                      "start": 2524,
                      "end": 2533,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2526,
                        "end": 2533
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2543,
                    "end": 2581,
                    "key": {
                      "type": "Identifier",
                      "start": 2543,
                      "end": 2554,
                      "name": "XorCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2557,
                        "end": 2560,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2562,
                        "end": 2570,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2565,
                          "end": 2570,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2567,
                            "end": 2570,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2567,
                              "end": 2570,
                              "name": "AST",
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
                      "start": 2571,
                      "end": 2580,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2573,
                        "end": 2580
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2590,
                    "end": 2628,
                    "key": {
                      "type": "Identifier",
                      "start": 2590,
                      "end": 2601,
                      "name": "AndCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2604,
                        "end": 2607,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2609,
                        "end": 2617,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2612,
                          "end": 2617,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2614,
                            "end": 2617,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2614,
                              "end": 2617,
                              "name": "AST",
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
                      "start": 2618,
                      "end": 2627,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2620,
                        "end": 2627
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2637,
                    "end": 2674,
                    "key": {
                      "type": "Identifier",
                      "start": 2637,
                      "end": 2647,
                      "name": "EqCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2650,
                        "end": 2653,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2655,
                        "end": 2663,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2658,
                          "end": 2663,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2660,
                            "end": 2663,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2663,
                              "name": "AST",
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
                      "start": 2664,
                      "end": 2673,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2666,
                        "end": 2673
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2683,
                    "end": 2720,
                    "key": {
                      "type": "Identifier",
                      "start": 2683,
                      "end": 2693,
                      "name": "NeCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2696,
                        "end": 2699,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2701,
                        "end": 2709,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2704,
                          "end": 2709,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2706,
                            "end": 2709,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2706,
                              "end": 2709,
                              "name": "AST",
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
                      "start": 2710,
                      "end": 2719,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2712,
                        "end": 2719
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2729,
                    "end": 2767,
                    "key": {
                      "type": "Identifier",
                      "start": 2729,
                      "end": 2740,
                      "name": "EqvCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2743,
                        "end": 2746,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2748,
                        "end": 2756,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2751,
                          "end": 2756,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2753,
                            "end": 2756,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2753,
                              "end": 2756,
                              "name": "AST",
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
                      "start": 2757,
                      "end": 2766,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2759,
                        "end": 2766
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2776,
                    "end": 2815,
                    "key": {
                      "type": "Identifier",
                      "start": 2776,
                      "end": 2788,
                      "name": "NEqvCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2791,
                        "end": 2794,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2796,
                        "end": 2804,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2799,
                          "end": 2804,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2801,
                            "end": 2804,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2801,
                              "end": 2804,
                              "name": "AST",
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
                      "start": 2805,
                      "end": 2814,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2807,
                        "end": 2814
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2824,
                    "end": 2861,
                    "key": {
                      "type": "Identifier",
                      "start": 2824,
                      "end": 2834,
                      "name": "LtCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2837,
                        "end": 2840,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2842,
                        "end": 2850,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2845,
                          "end": 2850,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2847,
                            "end": 2850,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2847,
                              "end": 2850,
                              "name": "AST",
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
                      "start": 2851,
                      "end": 2860,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2853,
                        "end": 2860
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2870,
                    "end": 2907,
                    "key": {
                      "type": "Identifier",
                      "start": 2870,
                      "end": 2880,
                      "name": "LeCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2883,
                        "end": 2886,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2888,
                        "end": 2896,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2891,
                          "end": 2896,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2893,
                            "end": 2896,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2893,
                              "end": 2896,
                              "name": "AST",
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
                      "start": 2897,
                      "end": 2906,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2899,
                        "end": 2906
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2916,
                    "end": 2953,
                    "key": {
                      "type": "Identifier",
                      "start": 2916,
                      "end": 2926,
                      "name": "GtCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2929,
                        "end": 2932,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2934,
                        "end": 2942,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2937,
                          "end": 2942,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2939,
                            "end": 2942,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2939,
                              "end": 2942,
                              "name": "AST",
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
                      "start": 2943,
                      "end": 2952,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2945,
                        "end": 2952
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2962,
                    "end": 2999,
                    "key": {
                      "type": "Identifier",
                      "start": 2962,
                      "end": 2972,
                      "name": "GeCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2975,
                        "end": 2978,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2980,
                        "end": 2988,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2983,
                          "end": 2988,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2985,
                            "end": 2988,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2985,
                              "end": 2988,
                              "name": "AST",
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
                      "start": 2989,
                      "end": 2998,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2991,
                        "end": 2998
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3008,
                    "end": 3046,
                    "key": {
                      "type": "Identifier",
                      "start": 3008,
                      "end": 3019,
                      "name": "AddCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3022,
                        "end": 3025,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3027,
                        "end": 3035,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3030,
                          "end": 3035,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3032,
                            "end": 3035,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3032,
                              "end": 3035,
                              "name": "AST",
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
                      "end": 3045,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3038,
                        "end": 3045
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3055,
                    "end": 3093,
                    "key": {
                      "type": "Identifier",
                      "start": 3055,
                      "end": 3066,
                      "name": "SubCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3069,
                        "end": 3072,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3074,
                        "end": 3082,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3077,
                          "end": 3082,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3079,
                            "end": 3082,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3079,
                              "end": 3082,
                              "name": "AST",
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
                      "start": 3083,
                      "end": 3092,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3085,
                        "end": 3092
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3102,
                    "end": 3140,
                    "key": {
                      "type": "Identifier",
                      "start": 3102,
                      "end": 3113,
                      "name": "MulCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3116,
                        "end": 3119,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3121,
                        "end": 3129,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3124,
                          "end": 3129,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3126,
                            "end": 3129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3126,
                              "end": 3129,
                              "name": "AST",
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
                      "start": 3130,
                      "end": 3139,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3132,
                        "end": 3139
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3149,
                    "end": 3187,
                    "key": {
                      "type": "Identifier",
                      "start": 3149,
                      "end": 3160,
                      "name": "DivCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3163,
                        "end": 3166,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3168,
                        "end": 3176,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3171,
                          "end": 3176,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3173,
                            "end": 3176,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3173,
                              "end": 3176,
                              "name": "AST",
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
                      "start": 3177,
                      "end": 3186,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3179,
                        "end": 3186
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3196,
                    "end": 3234,
                    "key": {
                      "type": "Identifier",
                      "start": 3196,
                      "end": 3207,
                      "name": "ModCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3210,
                        "end": 3213,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3215,
                        "end": 3223,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3218,
                          "end": 3223,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3220,
                            "end": 3223,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3220,
                              "end": 3223,
                              "name": "AST",
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
                      "start": 3224,
                      "end": 3233,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3226,
                        "end": 3233
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3243,
                    "end": 3281,
                    "key": {
                      "type": "Identifier",
                      "start": 3243,
                      "end": 3254,
                      "name": "LshCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3257,
                        "end": 3260,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3262,
                        "end": 3270,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3265,
                          "end": 3270,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3267,
                            "end": 3270,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3267,
                              "end": 3270,
                              "name": "AST",
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
                      "start": 3271,
                      "end": 3280,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3273,
                        "end": 3280
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3290,
                    "end": 3328,
                    "key": {
                      "type": "Identifier",
                      "start": 3290,
                      "end": 3301,
                      "name": "RshCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3304,
                        "end": 3307,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3309,
                        "end": 3317,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3312,
                          "end": 3317,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3314,
                            "end": 3317,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3314,
                              "end": 3317,
                              "name": "AST",
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
                      "start": 3318,
                      "end": 3327,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3320,
                        "end": 3327
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3337,
                    "end": 3375,
                    "key": {
                      "type": "Identifier",
                      "start": 3337,
                      "end": 3348,
                      "name": "Rs2Callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3351,
                        "end": 3354,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3356,
                        "end": 3364,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3359,
                          "end": 3364,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3361,
                            "end": 3364,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3361,
                              "end": 3364,
                              "name": "AST",
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
                      "start": 3365,
                      "end": 3374,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3367,
                        "end": 3374
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3384,
                    "end": 3422,
                    "key": {
                      "type": "Identifier",
                      "start": 3384,
                      "end": 3395,
                      "name": "NotCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3398,
                        "end": 3401,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3403,
                        "end": 3411,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3406,
                          "end": 3411,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3408,
                            "end": 3411,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3408,
                              "end": 3411,
                              "name": "AST",
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
                      "start": 3412,
                      "end": 3421,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3414,
                        "end": 3421
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3431,
                    "end": 3472,
                    "key": {
                      "type": "Identifier",
                      "start": 3431,
                      "end": 3445,
                      "name": "LogNotCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3448,
                        "end": 3451,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3453,
                        "end": 3461,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3456,
                          "end": 3461,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3458,
                            "end": 3461,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3458,
                              "end": 3461,
                              "name": "AST",
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
                      "start": 3462,
                      "end": 3471,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3464,
                        "end": 3471
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3481,
                    "end": 3522,
                    "key": {
                      "type": "Identifier",
                      "start": 3481,
                      "end": 3495,
                      "name": "IncPreCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3498,
                        "end": 3501,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3503,
                        "end": 3511,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3506,
                          "end": 3511,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3508,
                            "end": 3511,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3508,
                              "end": 3511,
                              "name": "AST",
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
                      "start": 3512,
                      "end": 3521,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3514,
                        "end": 3521
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3531,
                    "end": 3572,
                    "key": {
                      "type": "Identifier",
                      "start": 3531,
                      "end": 3545,
                      "name": "DecPreCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3548,
                        "end": 3551,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3553,
                        "end": 3561,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3556,
                          "end": 3561,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3558,
                            "end": 3561,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3558,
                              "end": 3561,
                              "name": "AST",
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
                      "start": 3562,
                      "end": 3571,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3564,
                        "end": 3571
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3581,
                    "end": 3623,
                    "key": {
                      "type": "Identifier",
                      "start": 3581,
                      "end": 3596,
                      "name": "IncPostCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3599,
                        "end": 3602,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3604,
                        "end": 3612,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3607,
                          "end": 3612,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3609,
                            "end": 3612,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3609,
                              "end": 3612,
                              "name": "AST",
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
                      "start": 3613,
                      "end": 3622,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3615,
                        "end": 3622
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3632,
                    "end": 3674,
                    "key": {
                      "type": "Identifier",
                      "start": 3632,
                      "end": 3647,
                      "name": "DecPostCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3650,
                        "end": 3653,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3655,
                        "end": 3663,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3658,
                          "end": 3663,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3660,
                            "end": 3663,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3660,
                              "end": 3663,
                              "name": "AST",
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
                      "start": 3664,
                      "end": 3673,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3666,
                        "end": 3673
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3683,
                    "end": 3731,
                    "key": {
                      "type": "Identifier",
                      "start": 3683,
                      "end": 3704,
                      "name": "TypeAssertionCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3707,
                        "end": 3710,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3712,
                        "end": 3720,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3715,
                          "end": 3720,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3717,
                            "end": 3720,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3717,
                              "end": 3720,
                              "name": "AST",
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
                      "start": 3721,
                      "end": 3730,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3723,
                        "end": 3730
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3740,
                    "end": 3793,
                    "key": {
                      "type": "Identifier",
                      "start": 3740,
                      "end": 3756,
                      "name": "FuncDeclCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3759,
                        "end": 3762,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3764,
                        "end": 3782,
                        "name": "funcDecl",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3772,
                          "end": 3782,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3774,
                            "end": 3782,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3774,
                              "end": 3782,
                              "name": "FuncDecl",
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
                      "start": 3783,
                      "end": 3792,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3785,
                        "end": 3792
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3802,
                    "end": 3843,
                    "key": {
                      "type": "Identifier",
                      "start": 3802,
                      "end": 3816,
                      "name": "MemberCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3819,
                        "end": 3822,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3824,
                        "end": 3832,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3827,
                          "end": 3832,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3829,
                            "end": 3832,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3829,
                              "end": 3832,
                              "name": "AST",
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
                      "start": 3833,
                      "end": 3842,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3835,
                        "end": 3842
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3852,
                    "end": 3902,
                    "key": {
                      "type": "Identifier",
                      "start": 3852,
                      "end": 3867,
                      "name": "VarDeclCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3870,
                        "end": 3873,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3875,
                        "end": 3891,
                        "name": "varDecl",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3882,
                          "end": 3891,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3884,
                            "end": 3891,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3884,
                              "end": 3891,
                              "name": "VarDecl",
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
                      "start": 3892,
                      "end": 3901,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3894,
                        "end": 3901
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3911,
                    "end": 3953,
                    "key": {
                      "type": "Identifier",
                      "start": 3911,
                      "end": 3926,
                      "name": "ArgDeclCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3929,
                        "end": 3932,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3934,
                        "end": 3942,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3937,
                          "end": 3942,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3939,
                            "end": 3942,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3939,
                              "end": 3942,
                              "name": "AST",
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
                      "start": 3943,
                      "end": 3952,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3945,
                        "end": 3952
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3962,
                    "end": 4003,
                    "key": {
                      "type": "Identifier",
                      "start": 3962,
                      "end": 3976,
                      "name": "ReturnCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3979,
                        "end": 3982,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3984,
                        "end": 3992,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3987,
                          "end": 3992,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3989,
                            "end": 3992,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3989,
                              "end": 3992,
                              "name": "AST",
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
                      "start": 3993,
                      "end": 4002,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3995,
                        "end": 4002
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4012,
                    "end": 4052,
                    "key": {
                      "type": "Identifier",
                      "start": 4012,
                      "end": 4025,
                      "name": "BreakCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4028,
                        "end": 4031,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4033,
                        "end": 4041,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4036,
                          "end": 4041,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4038,
                            "end": 4041,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4038,
                              "end": 4041,
                              "name": "AST",
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
                      "start": 4042,
                      "end": 4051,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4044,
                        "end": 4051
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4061,
                    "end": 4104,
                    "key": {
                      "type": "Identifier",
                      "start": 4061,
                      "end": 4077,
                      "name": "ContinueCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4080,
                        "end": 4083,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4085,
                        "end": 4093,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4088,
                          "end": 4093,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4090,
                            "end": 4093,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4090,
                              "end": 4093,
                              "name": "AST",
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
                      "start": 4094,
                      "end": 4103,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4096,
                        "end": 4103
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4113,
                    "end": 4153,
                    "key": {
                      "type": "Identifier",
                      "start": 4113,
                      "end": 4126,
                      "name": "ThrowCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4129,
                        "end": 4132,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4134,
                        "end": 4142,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4137,
                          "end": 4142,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4139,
                            "end": 4142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4139,
                              "end": 4142,
                              "name": "AST",
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
                      "start": 4143,
                      "end": 4152,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4145,
                        "end": 4152
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4162,
                    "end": 4200,
                    "key": {
                      "type": "Identifier",
                      "start": 4162,
                      "end": 4173,
                      "name": "ForCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4176,
                        "end": 4179,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4181,
                        "end": 4189,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4184,
                          "end": 4189,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4186,
                            "end": 4189,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4186,
                              "end": 4189,
                              "name": "AST",
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
                      "start": 4190,
                      "end": 4199,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4192,
                        "end": 4199
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4209,
                    "end": 4249,
                    "key": {
                      "type": "Identifier",
                      "start": 4209,
                      "end": 4222,
                      "name": "ForInCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4225,
                        "end": 4228,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4230,
                        "end": 4238,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4233,
                          "end": 4238,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4235,
                            "end": 4238,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4235,
                              "end": 4238,
                              "name": "AST",
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
                      "start": 4239,
                      "end": 4248,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4241,
                        "end": 4248
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4258,
                    "end": 4295,
                    "key": {
                      "type": "Identifier",
                      "start": 4258,
                      "end": 4268,
                      "name": "IfCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4271,
                        "end": 4274,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4276,
                        "end": 4284,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4279,
                          "end": 4284,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4281,
                            "end": 4284,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4281,
                              "end": 4284,
                              "name": "AST",
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
                      "start": 4285,
                      "end": 4294,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4287,
                        "end": 4294
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4304,
                    "end": 4344,
                    "key": {
                      "type": "Identifier",
                      "start": 4304,
                      "end": 4317,
                      "name": "WhileCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4320,
                        "end": 4323,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4325,
                        "end": 4333,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4328,
                          "end": 4333,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4330,
                            "end": 4333,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4330,
                              "end": 4333,
                              "name": "AST",
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
                      "start": 4334,
                      "end": 4343,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4336,
                        "end": 4343
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4353,
                    "end": 4395,
                    "key": {
                      "type": "Identifier",
                      "start": 4353,
                      "end": 4368,
                      "name": "DoWhileCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4371,
                        "end": 4374,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4376,
                        "end": 4384,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4379,
                          "end": 4384,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4381,
                            "end": 4384,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4381,
                              "end": 4384,
                              "name": "AST",
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
                      "start": 4385,
                      "end": 4394,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4387,
                        "end": 4394
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4404,
                    "end": 4448,
                    "key": {
                      "type": "Identifier",
                      "start": 4404,
                      "end": 4417,
                      "name": "BlockCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4420,
                        "end": 4423,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4425,
                        "end": 4437,
                        "name": "block",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4430,
                          "end": 4437,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4432,
                            "end": 4437,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4432,
                              "end": 4437,
                              "name": "Block",
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
                      "start": 4438,
                      "end": 4447,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4440,
                        "end": 4447
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4457,
                    "end": 4496,
                    "key": {
                      "type": "Identifier",
                      "start": 4457,
                      "end": 4469,
                      "name": "CaseCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4472,
                        "end": 4475,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4477,
                        "end": 4485,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4480,
                          "end": 4485,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4482,
                            "end": 4485,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4482,
                              "end": 4485,
                              "name": "AST",
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
                      "start": 4486,
                      "end": 4495,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4488,
                        "end": 4495
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4505,
                    "end": 4546,
                    "key": {
                      "type": "Identifier",
                      "start": 4505,
                      "end": 4519,
                      "name": "SwitchCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4522,
                        "end": 4525,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4527,
                        "end": 4535,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4530,
                          "end": 4535,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4532,
                            "end": 4535,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4532,
                              "end": 4535,
                              "name": "AST",
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
                      "start": 4536,
                      "end": 4545,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4538,
                        "end": 4545
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4555,
                    "end": 4593,
                    "key": {
                      "type": "Identifier",
                      "start": 4555,
                      "end": 4566,
                      "name": "TryCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4569,
                        "end": 4572,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4574,
                        "end": 4582,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4577,
                          "end": 4582,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4579,
                            "end": 4582,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4579,
                              "end": 4582,
                              "name": "AST",
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
                      "start": 4583,
                      "end": 4592,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4585,
                        "end": 4592
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4602,
                    "end": 4645,
                    "key": {
                      "type": "Identifier",
                      "start": 4602,
                      "end": 4618,
                      "name": "TryCatchCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4621,
                        "end": 4624,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4626,
                        "end": 4634,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4629,
                          "end": 4634,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4631,
                            "end": 4634,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4631,
                              "end": 4634,
                              "name": "AST",
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
                      "start": 4635,
                      "end": 4644,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4637,
                        "end": 4644
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4654,
                    "end": 4699,
                    "key": {
                      "type": "Identifier",
                      "start": 4654,
                      "end": 4672,
                      "name": "TryFinallyCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4675,
                        "end": 4678,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4680,
                        "end": 4688,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4683,
                          "end": 4688,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4685,
                            "end": 4688,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4685,
                              "end": 4688,
                              "name": "AST",
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
                      "start": 4689,
                      "end": 4698,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4691,
                        "end": 4698
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4708,
                    "end": 4750,
                    "key": {
                      "type": "Identifier",
                      "start": 4708,
                      "end": 4723,
                      "name": "FinallyCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4726,
                        "end": 4729,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4731,
                        "end": 4739,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4734,
                          "end": 4739,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4736,
                            "end": 4739,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4736,
                              "end": 4739,
                              "name": "AST",
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
                      "start": 4740,
                      "end": 4749,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4742,
                        "end": 4749
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4759,
                    "end": 4799,
                    "key": {
                      "type": "Identifier",
                      "start": 4759,
                      "end": 4772,
                      "name": "CatchCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4775,
                        "end": 4778,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4780,
                        "end": 4788,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4783,
                          "end": 4788,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4785,
                            "end": 4788,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4785,
                              "end": 4788,
                              "name": "AST",
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
                      "start": 4789,
                      "end": 4798,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4791,
                        "end": 4798
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4808,
                    "end": 4855,
                    "key": {
                      "type": "Identifier",
                      "start": 4808,
                      "end": 4820,
                      "name": "ListCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4823,
                        "end": 4826,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4828,
                        "end": 4844,
                        "name": "astList",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4835,
                          "end": 4844,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4837,
                            "end": 4844,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4837,
                              "end": 4844,
                              "name": "ASTList",
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
                      "start": 4845,
                      "end": 4854,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4847,
                        "end": 4854
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4864,
                    "end": 4911,
                    "key": {
                      "type": "Identifier",
                      "start": 4864,
                      "end": 4878,
                      "name": "ScriptCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4881,
                        "end": 4884,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4886,
                        "end": 4900,
                        "name": "script",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4892,
                          "end": 4900,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4894,
                            "end": 4900,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4894,
                              "end": 4900,
                              "name": "Script",
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
                      "start": 4901,
                      "end": 4910,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4903,
                        "end": 4910
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4920,
                    "end": 4971,
                    "key": {
                      "type": "Identifier",
                      "start": 4920,
                      "end": 4944,
                      "name": "ClassDeclarationCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4947,
                        "end": 4950,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4952,
                        "end": 4960,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4955,
                          "end": 4960,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4957,
                            "end": 4960,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4957,
                              "end": 4960,
                              "name": "AST",
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
                      "start": 4961,
                      "end": 4970,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4963,
                        "end": 4970
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4980,
                    "end": 5062,
                    "key": {
                      "type": "Identifier",
                      "start": 4980,
                      "end": 5008,
                      "name": "InterfaceDeclarationCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5011,
                        "end": 5014,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5016,
                        "end": 5051,
                        "name": "interfaceDecl",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5029,
                          "end": 5051,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5031,
                            "end": 5051,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5031,
                              "end": 5051,
                              "name": "InterfaceDeclaration",
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
                      "start": 5052,
                      "end": 5061,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5054,
                        "end": 5061
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5071,
                    "end": 5144,
                    "key": {
                      "type": "Identifier",
                      "start": 5071,
                      "end": 5096,
                      "name": "ModuleDeclarationCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5099,
                        "end": 5102,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5104,
                        "end": 5133,
                        "name": "moduleDecl",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5114,
                          "end": 5133,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5116,
                            "end": 5133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5116,
                              "end": 5133,
                              "name": "ModuleDeclaration",
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
                      "start": 5134,
                      "end": 5143,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5136,
                        "end": 5143
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5153,
                    "end": 5205,
                    "key": {
                      "type": "Identifier",
                      "start": 5153,
                      "end": 5178,
                      "name": "ImportDeclarationCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5181,
                        "end": 5184,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5186,
                        "end": 5194,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5189,
                          "end": 5194,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5191,
                            "end": 5194,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5191,
                              "end": 5194,
                              "name": "AST",
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
                      "start": 5195,
                      "end": 5204,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5197,
                        "end": 5204
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5214,
                    "end": 5253,
                    "key": {
                      "type": "Identifier",
                      "start": 5214,
                      "end": 5226,
                      "name": "WithCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5229,
                        "end": 5232,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5234,
                        "end": 5242,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5237,
                          "end": 5242,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5239,
                            "end": 5242,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5239,
                              "end": 5242,
                              "name": "AST",
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
                      "start": 5243,
                      "end": 5252,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5245,
                        "end": 5252
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5262,
                    "end": 5307,
                    "key": {
                      "type": "Identifier",
                      "start": 5262,
                      "end": 5275,
                      "name": "LabelCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5278,
                        "end": 5281,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5283,
                        "end": 5296,
                        "name": "labelAST",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5291,
                          "end": 5296,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5293,
                            "end": 5296,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5293,
                              "end": 5296,
                              "name": "AST",
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
                      "start": 5297,
                      "end": 5306,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5299,
                        "end": 5306
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5316,
                    "end": 5367,
                    "key": {
                      "type": "Identifier",
                      "start": 5316,
                      "end": 5340,
                      "name": "LabeledStatementCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5343,
                        "end": 5346,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5348,
                        "end": 5356,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5351,
                          "end": 5356,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5353,
                            "end": 5356,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5353,
                              "end": 5356,
                              "name": "AST",
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
                      "start": 5357,
                      "end": 5366,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5359,
                        "end": 5366
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5376,
                    "end": 5418,
                    "key": {
                      "type": "Identifier",
                      "start": 5376,
                      "end": 5391,
                      "name": "EBStartCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5394,
                        "end": 5397,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5399,
                        "end": 5407,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5402,
                          "end": 5407,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5404,
                            "end": 5407,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5404,
                              "end": 5407,
                              "name": "AST",
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
                      "start": 5408,
                      "end": 5417,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5410,
                        "end": 5417
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5427,
                    "end": 5468,
                    "key": {
                      "type": "Identifier",
                      "start": 5427,
                      "end": 5441,
                      "name": "GotoEBCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5444,
                        "end": 5447,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5449,
                        "end": 5457,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5452,
                          "end": 5457,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5454,
                            "end": 5457,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5454,
                              "end": 5457,
                              "name": "AST",
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
                      "start": 5458,
                      "end": 5467,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5460,
                        "end": 5467
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5477,
                    "end": 5519,
                    "key": {
                      "type": "Identifier",
                      "start": 5477,
                      "end": 5492,
                      "name": "EndCodeCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5495,
                        "end": 5498,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5500,
                        "end": 5508,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5503,
                          "end": 5508,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5505,
                            "end": 5508,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5505,
                              "end": 5508,
                              "name": "AST",
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
                      "start": 5509,
                      "end": 5518,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5511,
                        "end": 5518
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5528,
                    "end": 5568,
                    "key": {
                      "type": "Identifier",
                      "start": 5528,
                      "end": 5541,
                      "name": "ErrorCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5544,
                        "end": 5547,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5549,
                        "end": 5557,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5552,
                          "end": 5557,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5554,
                            "end": 5557,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5554,
                              "end": 5557,
                              "name": "AST",
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
                      "start": 5558,
                      "end": 5567,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5560,
                        "end": 5567
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5577,
                    "end": 5619,
                    "key": {
                      "type": "Identifier",
                      "start": 5577,
                      "end": 5592,
                      "name": "CommentCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5595,
                        "end": 5598,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5600,
                        "end": 5608,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5603,
                          "end": 5608,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5605,
                            "end": 5608,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5605,
                              "end": 5608,
                              "name": "AST",
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
                      "start": 5609,
                      "end": 5618,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5611,
                        "end": 5618
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5628,
                    "end": 5671,
                    "key": {
                      "type": "Identifier",
                      "start": 5628,
                      "end": 5644,
                      "name": "DebuggerCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5647,
                        "end": 5650,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5652,
                        "end": 5660,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5655,
                          "end": 5660,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5657,
                            "end": 5660,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5657,
                              "end": 5660,
                              "name": "AST",
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
                      "start": 5661,
                      "end": 5670,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5663,
                        "end": 5670
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5680,
                    "end": 5722,
                    "key": {
                      "type": "Identifier",
                      "start": 5680,
                      "end": 5695,
                      "name": "DefaultCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5698,
                        "end": 5701,
                        "name": "pre",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5703,
                        "end": 5711,
                        "name": "ast",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5706,
                          "end": 5711,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5708,
                            "end": 5711,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5708,
                              "end": 5711,
                              "name": "AST",
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
                      "start": 5712,
                      "end": 5721,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5714,
                        "end": 5721
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5734,
            "end": 6228,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 5741,
              "end": 6228,
              "id": {
                "type": "Identifier",
                "start": 5750,
                "end": 5754,
                "name": "walk",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5755,
                  "end": 5769,
                  "name": "script",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5761,
                    "end": 5769,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5763,
                      "end": 5769,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5763,
                        "end": 5769,
                        "name": "Script",
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
                  "start": 5771,
                  "end": 5804,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5779,
                    "end": 5804,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5781,
                      "end": 5804,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5781,
                        "end": 5804,
                        "name": "AstWalkerDetailCallback",
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
              "body": {
                "type": "BlockStatement",
                "start": 5812,
                "end": 6228,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5822,
                    "end": 5974,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5826,
                        "end": 5974,
                        "id": {
                          "type": "Identifier",
                          "start": 5826,
                          "end": 5829,
                          "name": "pre",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 5832,
                          "end": 5974,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5833,
                              "end": 5841,
                              "name": "cur",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5836,
                                "end": 5841,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5838,
                                  "end": 5841,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5838,
                                    "end": 5841,
                                    "name": "AST",
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
                              "start": 5843,
                              "end": 5854,
                              "name": "parent",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5849,
                                "end": 5854,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5851,
                                  "end": 5854,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5851,
                                    "end": 5854,
                                    "name": "AST",
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 5859,
                            "end": 5974,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 5873,
                                "end": 5940,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 5873,
                                  "end": 5939,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 5873,
                                    "end": 5898,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 5873,
                                      "end": 5887,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 5873,
                                        "end": 5879,
                                        "name": "walker",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 5880,
                                        "end": 5887,
                                        "name": "options",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 5888,
                                      "end": 5898,
                                      "name": "goChildren",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 5901,
                                    "end": 5939,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 5901,
                                      "end": 5918,
                                      "name": "AstWalkerCallback",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 5919,
                                        "end": 5923,
                                        "value": true,
                                        "raw": "true"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 5925,
                                        "end": 5928,
                                        "name": "cur",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 5930,
                                        "end": 5938,
                                        "name": "callback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 5953,
                                "end": 5964,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 5960,
                                  "end": 5963,
                                  "name": "cur",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5984,
                    "end": 6110,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5988,
                        "end": 6110,
                        "id": {
                          "type": "Identifier",
                          "start": 5988,
                          "end": 5992,
                          "name": "post",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 5995,
                          "end": 6110,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5996,
                              "end": 6004,
                              "name": "cur",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5999,
                                "end": 6004,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6001,
                                  "end": 6004,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6001,
                                    "end": 6004,
                                    "name": "AST",
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
                              "start": 6006,
                              "end": 6017,
                              "name": "parent",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6012,
                                "end": 6017,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6014,
                                  "end": 6017,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6014,
                                    "end": 6017,
                                    "name": "AST",
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 6022,
                            "end": 6110,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 6036,
                                "end": 6076,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 6036,
                                  "end": 6075,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 6036,
                                    "end": 6053,
                                    "name": "AstWalkerCallback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 6054,
                                      "end": 6059,
                                      "value": false,
                                      "raw": "false"
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 6061,
                                      "end": 6064,
                                      "name": "cur",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 6066,
                                      "end": 6074,
                                      "name": "callback",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 6089,
                                "end": 6100,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 6096,
                                  "end": 6099,
                                  "name": "cur",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 6120,
                    "end": 6187,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6124,
                        "end": 6186,
                        "id": {
                          "type": "Identifier",
                          "start": 6124,
                          "end": 6130,
                          "name": "walker",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 6133,
                          "end": 6186,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6133,
                            "end": 6175,
                            "object": {
                              "type": "CallExpression",
                              "start": 6133,
                              "end": 6165,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 6133,
                                "end": 6163,
                                "object": {
                                  "type": "Identifier",
                                  "start": 6133,
                                  "end": 6143,
                                  "name": "TypeScript",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6144,
                                  "end": 6163,
                                  "name": "getAstWalkerFactory",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6166,
                              "end": 6175,
                              "name": "getWalker",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 6176,
                              "end": 6179,
                              "name": "pre",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 6181,
                              "end": 6185,
                              "name": "post",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6196,
                    "end": 6222,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6196,
                      "end": 6221,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 6196,
                        "end": 6207,
                        "object": {
                          "type": "Identifier",
                          "start": 6196,
                          "end": 6202,
                          "name": "walker",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6203,
                          "end": 6207,
                          "name": "walk",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6208,
                          "end": 6214,
                          "name": "script",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 6216,
                          "end": 6220,
                          "value": null,
                          "raw": "null"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 5805,
                "end": 5811,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 5807,
                  "end": 5811
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 6234,
            "end": 6765,
            "id": {
              "type": "Identifier",
              "start": 6243,
              "end": 6260,
              "name": "AstWalkerCallback",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 6261,
                "end": 6273,
                "name": "pre",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6264,
                  "end": 6273,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 6266,
                    "end": 6273
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6275,
                "end": 6283,
                "name": "ast",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6278,
                  "end": 6283,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6280,
                    "end": 6283,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6280,
                      "end": 6283,
                      "name": "AST",
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
                "start": 6285,
                "end": 6318,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6293,
                  "end": 6318,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6295,
                    "end": 6318,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6295,
                      "end": 6318,
                      "name": "AstWalkerDetailCallback",
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
            "body": {
              "type": "BlockStatement",
              "start": 6329,
              "end": 6765,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6424,
                  "end": 6452,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6428,
                      "end": 6451,
                      "id": {
                        "type": "Identifier",
                        "start": 6428,
                        "end": 6436,
                        "name": "nodeType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 6439,
                        "end": 6451,
                        "object": {
                          "type": "Identifier",
                          "start": 6439,
                          "end": 6442,
                          "name": "ast",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6443,
                          "end": 6451,
                          "name": "nodeType",
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
                  "start": 6461,
                  "end": 6526,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6465,
                      "end": 6525,
                      "id": {
                        "type": "Identifier",
                        "start": 6465,
                        "end": 6479,
                        "name": "callbackString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 6482,
                        "end": 6525,
                        "left": {
                          "type": "MemberExpression",
                          "start": 6482,
                          "end": 6512,
                          "object": {
                            "type": "MemberExpression",
                            "start": 6482,
                            "end": 6502,
                            "object": {
                              "type": "TSTypeAssertion",
                              "start": 6483,
                              "end": 6496,
                              "expression": {
                                "type": "Identifier",
                                "start": 6488,
                                "end": 6496,
                                "name": "NodeType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 6484,
                                "end": 6487
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6498,
                              "end": 6502,
                              "name": "_map",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 6503,
                            "end": 6511,
                            "name": "nodeType",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 6515,
                          "end": 6525,
                          "value": "Callback",
                          "raw": "\"Callback\""
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 6535,
                  "end": 6631,
                  "test": {
                    "type": "MemberExpression",
                    "start": 6539,
                    "end": 6563,
                    "object": {
                      "type": "Identifier",
                      "start": 6539,
                      "end": 6547,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6548,
                      "end": 6562,
                      "name": "callbackString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 6565,
                    "end": 6631,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 6579,
                        "end": 6621,
                        "argument": {
                          "type": "CallExpression",
                          "start": 6586,
                          "end": 6620,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6586,
                            "end": 6610,
                            "object": {
                              "type": "Identifier",
                              "start": 6586,
                              "end": 6594,
                              "name": "callback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6595,
                              "end": 6609,
                              "name": "callbackString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 6611,
                              "end": 6614,
                              "name": "pre",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 6616,
                              "end": 6619,
                              "name": "ast",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 6641,
                  "end": 6737,
                  "test": {
                    "type": "MemberExpression",
                    "start": 6645,
                    "end": 6669,
                    "object": {
                      "type": "Identifier",
                      "start": 6645,
                      "end": 6653,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6654,
                      "end": 6669,
                      "name": "DefaultCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 6671,
                    "end": 6737,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 6685,
                        "end": 6727,
                        "argument": {
                          "type": "CallExpression",
                          "start": 6692,
                          "end": 6726,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6692,
                            "end": 6716,
                            "object": {
                              "type": "Identifier",
                              "start": 6692,
                              "end": 6700,
                              "name": "callback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6701,
                              "end": 6716,
                              "name": "DefaultCallback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 6717,
                              "end": 6720,
                              "name": "pre",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 6722,
                              "end": 6725,
                              "name": "ast",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 6747,
                  "end": 6759,
                  "argument": {
                    "type": "Literal",
                    "start": 6754,
                    "end": 6758,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6319,
              "end": 6328,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6321,
                "end": 6328
              }
            }
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
