__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1499,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "String",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 43,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 41,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "name": "doStuff",
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
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
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
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 1370,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "name": "NotString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 1370,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 89,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 78,
              "name": "doStuff",
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
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 94,
            "end": 113,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 102,
              "name": "toString",
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
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 118,
            "end": 146,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 124,
              "name": "charAt",
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
                "start": 125,
                "end": 136,
                "name": "pos",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 128,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 130,
                    "end": 136
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 145,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 151,
            "end": 185,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 161,
              "name": "charCodeAt",
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
                "start": 162,
                "end": 175,
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 169,
                    "end": 175
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 178,
                "end": 184
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 190,
            "end": 227,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 196,
              "name": "concat",
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
                "type": "RestElement",
                "start": 197,
                "end": 217,
                "argument": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 207,
                  "name": "strings",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 217,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 209,
                    "end": 217,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 209,
                      "end": 215
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 226,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 220,
                "end": 226
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 232,
            "end": 289,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 239,
              "name": "indexOf",
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
                "start": 240,
                "end": 260,
                "name": "searchString",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 254,
                    "end": 260
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 262,
                "end": 279,
                "name": "position",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 271,
                  "end": 279,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 273,
                    "end": 279
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 288,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 294,
            "end": 355,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 305,
              "name": "lastIndexOf",
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
                "start": 306,
                "end": 326,
                "name": "searchString",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 320,
                    "end": 326
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 345,
                "name": "position",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 337,
                  "end": 345,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 354,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 348,
                "end": 354
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 360,
            "end": 396,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 373,
              "name": "localeCompare",
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
                "start": 374,
                "end": 386,
                "name": "that",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 378,
                  "end": 386,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
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
              "start": 387,
              "end": 395,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 389,
                "end": 395
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 401,
            "end": 441,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 406,
              "name": "match",
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
                "start": 407,
                "end": 421,
                "name": "regexp",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 424,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 440,
                  "name": "RegExpMatchArray",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 446,
            "end": 486,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 451,
              "name": "match",
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
                "start": 452,
                "end": 466,
                "name": "regexp",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 458,
                  "end": 466,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 460,
                    "end": 466,
                    "typeName": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 466,
                      "name": "RegExp",
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
              "start": 467,
              "end": 485,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 469,
                "end": 485,
                "typeName": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 485,
                  "name": "RegExpMatchArray",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 491,
            "end": 550,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 498,
              "name": "replace",
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
                "start": 499,
                "end": 518,
                "name": "searchValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 510,
                  "end": 518,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 520,
                "end": 540,
                "name": "replaceValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 532,
                  "end": 540,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 534,
                    "end": 540
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 541,
              "end": 549,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 543,
                "end": 549
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 555,
            "end": 653,
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 562,
              "name": "replace",
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
                "start": 563,
                "end": 582,
                "name": "searchValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 574,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 576,
                    "end": 582
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 584,
                "end": 643,
                "name": "replaceValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 596,
                  "end": 643,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 598,
                    "end": 643,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 599,
                        "end": 616,
                        "name": "substring",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 608,
                          "end": 616,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 610,
                            "end": 616
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 618,
                        "end": 632,
                        "argument": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 625,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 625,
                          "end": 632,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 627,
                            "end": 632,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 627,
                              "end": 630
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 634,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 637,
                        "end": 643
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
              "start": 644,
              "end": 652,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 646,
                "end": 652
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 658,
            "end": 717,
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 665,
              "name": "replace",
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
                "start": 666,
                "end": 685,
                "name": "searchValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 677,
                  "end": 685,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 679,
                    "end": 685,
                    "typeName": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 685,
                      "name": "RegExp",
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
                "start": 687,
                "end": 707,
                "name": "replaceValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 699,
                  "end": 707,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 701,
                    "end": 707
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 708,
              "end": 716,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 710,
                "end": 716
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 722,
            "end": 820,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 729,
              "name": "replace",
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
                "start": 730,
                "end": 749,
                "name": "searchValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 741,
                  "end": 749,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 743,
                    "end": 749,
                    "typeName": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 749,
                      "name": "RegExp",
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
                "start": 751,
                "end": 810,
                "name": "replaceValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 810,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 765,
                    "end": 810,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 783,
                        "name": "substring",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 775,
                          "end": 783,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 777,
                            "end": 783
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 785,
                        "end": 799,
                        "argument": {
                          "type": "Identifier",
                          "start": 788,
                          "end": 792,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 792,
                          "end": 799,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 794,
                            "end": 799,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 794,
                              "end": 797
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 801,
                      "end": 810,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 804,
                        "end": 810
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
              "start": 811,
              "end": 819,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 813,
                "end": 819
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 825,
            "end": 856,
            "key": {
              "type": "Identifier",
              "start": 825,
              "end": 831,
              "name": "search",
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
                "start": 832,
                "end": 846,
                "name": "regexp",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 838,
                  "end": 846,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 840,
                    "end": 846
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 847,
              "end": 855,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 849,
                "end": 855
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 861,
            "end": 892,
            "key": {
              "type": "Identifier",
              "start": 861,
              "end": 867,
              "name": "search",
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
                "start": 868,
                "end": 882,
                "name": "regexp",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 874,
                  "end": 882,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 876,
                    "end": 882,
                    "typeName": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 882,
                      "name": "RegExp",
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
              "start": 883,
              "end": 891,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 885,
                "end": 891
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 897,
            "end": 941,
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 902,
              "name": "slice",
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
                "start": 903,
                "end": 917,
                "name": "start",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 909,
                  "end": 917,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 911,
                    "end": 917
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 919,
                "end": 931,
                "name": "end",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 923,
                  "end": 931,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 925,
                    "end": 931
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 932,
              "end": 940,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 934,
                "end": 940
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 946,
            "end": 997,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 951,
              "name": "split",
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
                "start": 952,
                "end": 969,
                "name": "separator",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 961,
                  "end": 969,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 963,
                    "end": 969
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 971,
                "end": 985,
                "name": "limit",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 977,
                  "end": 985,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 979,
                    "end": 985
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 986,
              "end": 996,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 988,
                "end": 996,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 988,
                  "end": 994
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1002,
            "end": 1053,
            "key": {
              "type": "Identifier",
              "start": 1002,
              "end": 1007,
              "name": "split",
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
                "start": 1008,
                "end": 1025,
                "name": "separator",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1017,
                  "end": 1025,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1019,
                    "end": 1025,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1025,
                      "name": "RegExp",
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
                "start": 1027,
                "end": 1041,
                "name": "limit",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1033,
                  "end": 1041,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1035,
                    "end": 1041
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1042,
              "end": 1052,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1044,
                "end": 1052,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1044,
                  "end": 1050
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1058,
            "end": 1105,
            "key": {
              "type": "Identifier",
              "start": 1058,
              "end": 1067,
              "name": "substring",
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
                "start": 1068,
                "end": 1081,
                "name": "start",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1073,
                  "end": 1081,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1075,
                    "end": 1081
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1083,
                "end": 1095,
                "name": "end",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1087,
                  "end": 1095,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1089,
                    "end": 1095
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1096,
              "end": 1104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1098,
                "end": 1104
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1110,
            "end": 1132,
            "key": {
              "type": "Identifier",
              "start": 1110,
              "end": 1121,
              "name": "toLowerCase",
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
              "start": 1123,
              "end": 1131,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1125,
                "end": 1131
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1137,
            "end": 1165,
            "key": {
              "type": "Identifier",
              "start": 1137,
              "end": 1154,
              "name": "toLocaleLowerCase",
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
              "start": 1156,
              "end": 1164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1158,
                "end": 1164
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1170,
            "end": 1192,
            "key": {
              "type": "Identifier",
              "start": 1170,
              "end": 1181,
              "name": "toUpperCase",
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
              "start": 1183,
              "end": 1191,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1185,
                "end": 1191
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1197,
            "end": 1225,
            "key": {
              "type": "Identifier",
              "start": 1197,
              "end": 1214,
              "name": "toLocaleUpperCase",
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
              "start": 1216,
              "end": 1224,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1218,
                "end": 1224
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1230,
            "end": 1245,
            "key": {
              "type": "Identifier",
              "start": 1230,
              "end": 1234,
              "name": "trim",
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
              "start": 1236,
              "end": 1244,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1238,
                "end": 1244
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1250,
            "end": 1265,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1250,
              "end": 1256,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1256,
              "end": 1264,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1258,
                "end": 1264
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1270,
            "end": 1316,
            "key": {
              "type": "Identifier",
              "start": 1270,
              "end": 1276,
              "name": "substr",
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
                "start": 1277,
                "end": 1289,
                "name": "from",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1281,
                  "end": 1289,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1283,
                    "end": 1289
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1291,
                "end": 1306,
                "name": "length",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1298,
                  "end": 1306,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1307,
              "end": 1315,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1309,
                "end": 1315
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1321,
            "end": 1339,
            "key": {
              "type": "Identifier",
              "start": 1321,
              "end": 1328,
              "name": "valueOf",
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
              "start": 1330,
              "end": 1338,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1332,
                "end": 1338
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 1344,
            "end": 1368,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1345,
                "end": 1358,
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1350,
                  "end": 1358,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1352,
                    "end": 1358
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1359,
              "end": 1367,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1361,
                "end": 1367
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
      "type": "VariableDeclaration",
      "start": 1372,
      "end": 1383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1376,
          "end": 1382,
          "id": {
            "type": "Identifier",
            "start": 1376,
            "end": 1377,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1380,
            "end": 1382,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1384,
      "end": 1398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1388,
          "end": 1397,
          "id": {
            "type": "Identifier",
            "start": 1388,
            "end": 1397,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1389,
              "end": 1397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1391,
                "end": 1397,
                "typeName": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1397,
                  "name": "String",
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
      "start": 1399,
      "end": 1416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1403,
          "end": 1415,
          "id": {
            "type": "Identifier",
            "start": 1403,
            "end": 1415,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1404,
              "end": 1415,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1406,
                "end": 1415,
                "typeName": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1415,
                  "name": "NotString",
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
      "type": "ExpressionStatement",
      "start": 1418,
      "end": 1424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1418,
        "end": 1423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1418,
          "end": 1419,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1422,
          "end": 1423,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1425,
      "end": 1431,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1425,
        "end": 1430,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1425,
          "end": 1426,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1429,
          "end": 1430,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1433,
      "end": 1439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1433,
        "end": 1438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1433,
          "end": 1434,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1437,
          "end": 1438,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1440,
      "end": 1446,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1440,
        "end": 1445,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1440,
          "end": 1441,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1444,
          "end": 1445,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1448,
      "end": 1454,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1448,
        "end": 1453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1448,
          "end": 1449,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1452,
          "end": 1453,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1473,
      "end": 1479,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1473,
        "end": 1478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1473,
          "end": 1474,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1477,
          "end": 1478,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
