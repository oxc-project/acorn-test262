__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "String",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 30
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 41
          }
        ],
        "start": 17,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotString",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 64
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
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 78
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 71,
            "end": 89
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 102
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 94,
            "end": 113
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "charAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 124
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "pos",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 130,
                    "end": 136
                  },
                  "start": 128,
                  "end": 136
                },
                "start": 125,
                "end": 136
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "start": 137,
              "end": 145
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 118,
            "end": 146
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "charCodeAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 161
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 169,
                    "end": 175
                  },
                  "start": 167,
                  "end": 175
                },
                "start": 162,
                "end": 175
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 151,
            "end": 185
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 207
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 209,
                      "end": 215
                    },
                    "start": 209,
                    "end": 217
                  },
                  "start": 207,
                  "end": 217
                },
                "value": null,
                "start": 197,
                "end": 217
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 190,
            "end": 227
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 239
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchString",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 254,
                    "end": 260
                  },
                  "start": 252,
                  "end": 260
                },
                "start": 240,
                "end": 260
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "position",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 273,
                    "end": 279
                  },
                  "start": 271,
                  "end": 279
                },
                "start": 262,
                "end": 279
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 232,
            "end": 289
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lastIndexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 305
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchString",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 320,
                    "end": 326
                  },
                  "start": 318,
                  "end": 326
                },
                "start": 306,
                "end": 326
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "position",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
                  },
                  "start": 337,
                  "end": 345
                },
                "start": 328,
                "end": 345
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 348,
                "end": 354
              },
              "start": 346,
              "end": 354
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 294,
            "end": 355
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "localeCompare",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 373
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "that",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 380,
                    "end": 386
                  },
                  "start": 378,
                  "end": 386
                },
                "start": 374,
                "end": 386
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 389,
                "end": 395
              },
              "start": 387,
              "end": 395
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 360,
            "end": 396
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 406
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  },
                  "start": 413,
                  "end": 421
                },
                "start": 407,
                "end": 421
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 440
                },
                "typeArguments": null,
                "start": 424,
                "end": 440
              },
              "start": 422,
              "end": 440
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 401,
            "end": 441
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 451
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 460,
                    "end": 466
                  },
                  "start": 458,
                  "end": 466
                },
                "start": 452,
                "end": 466
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 485
                },
                "typeArguments": null,
                "start": 469,
                "end": 485
              },
              "start": 467,
              "end": 485
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 446,
            "end": 486
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 498
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  },
                  "start": 510,
                  "end": 518
                },
                "start": 499,
                "end": 518
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 534,
                    "end": 540
                  },
                  "start": 532,
                  "end": 540
                },
                "start": 520,
                "end": 540
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 543,
                "end": 549
              },
              "start": 541,
              "end": 549
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 491,
            "end": 550
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 562
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 576,
                    "end": 582
                  },
                  "start": 574,
                  "end": 582
                },
                "start": 563,
                "end": 582
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
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
                        "name": "substring",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 610,
                            "end": 616
                          },
                          "start": 608,
                          "end": 616
                        },
                        "start": 599,
                        "end": 616
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 625
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 627,
                              "end": 630
                            },
                            "start": 627,
                            "end": 632
                          },
                          "start": 625,
                          "end": 632
                        },
                        "value": null,
                        "start": 618,
                        "end": 632
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 637,
                        "end": 643
                      },
                      "start": 634,
                      "end": 643
                    },
                    "start": 598,
                    "end": 643
                  },
                  "start": 596,
                  "end": 643
                },
                "start": 584,
                "end": 643
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 646,
                "end": 652
              },
              "start": 644,
              "end": 652
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 555,
            "end": 653
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 665
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 685
                    },
                    "typeArguments": null,
                    "start": 679,
                    "end": 685
                  },
                  "start": 677,
                  "end": 685
                },
                "start": 666,
                "end": 685
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 701,
                    "end": 707
                  },
                  "start": 699,
                  "end": 707
                },
                "start": 687,
                "end": 707
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 710,
                "end": 716
              },
              "start": 708,
              "end": 716
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 658,
            "end": 717
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 729
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 749
                    },
                    "typeArguments": null,
                    "start": 743,
                    "end": 749
                  },
                  "start": 741,
                  "end": 749
                },
                "start": 730,
                "end": 749
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
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
                        "name": "substring",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 777,
                            "end": 783
                          },
                          "start": 775,
                          "end": 783
                        },
                        "start": 766,
                        "end": 783
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 788,
                          "end": 792
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 794,
                              "end": 797
                            },
                            "start": 794,
                            "end": 799
                          },
                          "start": 792,
                          "end": 799
                        },
                        "value": null,
                        "start": 785,
                        "end": 799
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 804,
                        "end": 810
                      },
                      "start": 801,
                      "end": 810
                    },
                    "start": 765,
                    "end": 810
                  },
                  "start": 763,
                  "end": 810
                },
                "start": 751,
                "end": 810
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 813,
                "end": 819
              },
              "start": 811,
              "end": 819
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 722,
            "end": 820
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "search",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 831
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 840,
                    "end": 846
                  },
                  "start": 838,
                  "end": 846
                },
                "start": 832,
                "end": 846
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 849,
                "end": 855
              },
              "start": 847,
              "end": 855
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 825,
            "end": 856
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "search",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 867
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 882
                    },
                    "typeArguments": null,
                    "start": 876,
                    "end": 882
                  },
                  "start": 874,
                  "end": 882
                },
                "start": 868,
                "end": 882
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 885,
                "end": 891
              },
              "start": 883,
              "end": 891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 861,
            "end": 892
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 902
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 911,
                    "end": 917
                  },
                  "start": 909,
                  "end": 917
                },
                "start": 903,
                "end": 917
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 925,
                    "end": 931
                  },
                  "start": 923,
                  "end": 931
                },
                "start": 919,
                "end": 931
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 934,
                "end": 940
              },
              "start": 932,
              "end": 940
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 897,
            "end": 941
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "split",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 951
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "separator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 963,
                    "end": 969
                  },
                  "start": 961,
                  "end": 969
                },
                "start": 952,
                "end": 969
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 979,
                    "end": 985
                  },
                  "start": 977,
                  "end": 985
                },
                "start": 971,
                "end": 985
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 988,
                  "end": 994
                },
                "start": 988,
                "end": 996
              },
              "start": 986,
              "end": 996
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 946,
            "end": 997
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "split",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1007
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "separator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1025
                    },
                    "typeArguments": null,
                    "start": 1019,
                    "end": 1025
                  },
                  "start": 1017,
                  "end": 1025
                },
                "start": 1008,
                "end": 1025
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1035,
                    "end": 1041
                  },
                  "start": 1033,
                  "end": 1041
                },
                "start": 1027,
                "end": 1041
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1044,
                  "end": 1050
                },
                "start": 1044,
                "end": 1052
              },
              "start": 1042,
              "end": 1052
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1002,
            "end": 1053
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "substring",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1067
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1075,
                    "end": 1081
                  },
                  "start": 1073,
                  "end": 1081
                },
                "start": 1068,
                "end": 1081
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1089,
                    "end": 1095
                  },
                  "start": 1087,
                  "end": 1095
                },
                "start": 1083,
                "end": 1095
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1098,
                "end": 1104
              },
              "start": 1096,
              "end": 1104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1058,
            "end": 1105
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1121
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1110,
            "end": 1132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1154
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1158,
                "end": 1164
              },
              "start": 1156,
              "end": 1164
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1137,
            "end": 1165
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toUpperCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1170,
              "end": 1181
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1185,
                "end": 1191
              },
              "start": 1183,
              "end": 1191
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1170,
            "end": 1192
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleUpperCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1214
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1218,
                "end": 1224
              },
              "start": 1216,
              "end": 1224
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1197,
            "end": 1225
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "trim",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1234
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1238,
                "end": 1244
              },
              "start": 1236,
              "end": 1244
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1230,
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1250,
              "end": 1256
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1258,
                "end": 1264
              },
              "start": 1256,
              "end": 1264
            },
            "accessibility": null,
            "static": false,
            "start": 1250,
            "end": 1265
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "substr",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1276
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1283,
                    "end": 1289
                  },
                  "start": 1281,
                  "end": 1289
                },
                "start": 1277,
                "end": 1289
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  },
                  "start": 1298,
                  "end": 1306
                },
                "start": 1291,
                "end": 1306
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1309,
                "end": 1315
              },
              "start": 1307,
              "end": 1315
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1270,
            "end": 1316
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1328
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1332,
                "end": 1338
              },
              "start": 1330,
              "end": 1338
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1321,
            "end": 1339
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1352,
                    "end": 1358
                  },
                  "start": 1350,
                  "end": 1358
                },
                "start": 1345,
                "end": 1358
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1361,
                "end": 1367
              },
              "start": 1359,
              "end": 1367
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1344,
            "end": 1368
          }
        ],
        "start": 65,
        "end": 1370
      },
      "declare": false,
      "start": 45,
      "end": 1370
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1376,
            "end": 1377
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1380,
            "end": 1382
          },
          "definite": false,
          "start": 1376,
          "end": 1382
        }
      ],
      "declare": false,
      "start": 1372,
      "end": 1383
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
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1397
                },
                "typeArguments": null,
                "start": 1391,
                "end": 1397
              },
              "start": 1389,
              "end": 1397
            },
            "start": 1388,
            "end": 1397
          },
          "init": null,
          "definite": false,
          "start": 1388,
          "end": 1397
        }
      ],
      "declare": false,
      "start": 1384,
      "end": 1398
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
                  "name": "NotString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1415
                },
                "typeArguments": null,
                "start": 1406,
                "end": 1415
              },
              "start": 1404,
              "end": 1415
            },
            "start": 1403,
            "end": 1415
          },
          "init": null,
          "definite": false,
          "start": 1403,
          "end": 1415
        }
      ],
      "declare": false,
      "start": 1399,
      "end": 1416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1418,
          "end": 1419
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1422,
          "end": 1423
        },
        "start": 1418,
        "end": 1423
      },
      "directive": null,
      "start": 1418,
      "end": 1424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1425,
          "end": 1426
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1429,
          "end": 1430
        },
        "start": 1425,
        "end": 1430
      },
      "directive": null,
      "start": 1425,
      "end": 1431
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1433,
          "end": 1434
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1437,
          "end": 1438
        },
        "start": 1433,
        "end": 1438
      },
      "directive": null,
      "start": 1433,
      "end": 1439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1440,
          "end": 1441
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1444,
          "end": 1445
        },
        "start": 1440,
        "end": 1445
      },
      "directive": null,
      "start": 1440,
      "end": 1446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1448,
          "end": 1449
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1452,
          "end": 1453
        },
        "start": 1448,
        "end": 1453
      },
      "directive": null,
      "start": 1448,
      "end": 1454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1473,
          "end": 1474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1478
        },
        "start": 1473,
        "end": 1478
      },
      "directive": null,
      "start": 1473,
      "end": 1479
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1498
}
```
