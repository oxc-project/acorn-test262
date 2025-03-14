assignFromStringInterface2.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 43,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 41,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "doStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "String",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 1370,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 1370,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 89,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 78,
              "decorators": [],
              "name": "doStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 94,
            "end": 113,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 102,
              "decorators": [],
              "name": "toString",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 118,
            "end": 146,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 124,
              "decorators": [],
              "name": "charAt",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 136,
                "decorators": [],
                "name": "pos",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 128,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 130,
                    "end": 136
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 151,
            "end": 185,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 161,
              "decorators": [],
              "name": "charCodeAt",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 162,
                "end": 175,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 169,
                    "end": 175
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 190,
            "end": 227,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 196,
              "decorators": [],
              "name": "concat",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 197,
                "end": 217,
                "argument": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 207,
                  "decorators": [],
                  "name": "strings",
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
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 232,
            "end": 289,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 239,
              "decorators": [],
              "name": "indexOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 240,
                "end": 260,
                "decorators": [],
                "name": "searchString",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 254,
                    "end": 260
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 262,
                "end": 279,
                "decorators": [],
                "name": "position",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 271,
                  "end": 279,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 273,
                    "end": 279
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 294,
            "end": 355,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 305,
              "decorators": [],
              "name": "lastIndexOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 306,
                "end": 326,
                "decorators": [],
                "name": "searchString",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 320,
                    "end": 326
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 345,
                "decorators": [],
                "name": "position",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 337,
                  "end": 345,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 360,
            "end": 396,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 373,
              "decorators": [],
              "name": "localeCompare",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 374,
                "end": 386,
                "decorators": [],
                "name": "that",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 378,
                  "end": 386,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 380,
                    "end": 386
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 401,
            "end": 441,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 406,
              "decorators": [],
              "name": "match",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 407,
                "end": 421,
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 446,
            "end": 486,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 451,
              "decorators": [],
              "name": "match",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 466,
                "decorators": [],
                "name": "regexp",
                "optional": false,
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
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 491,
            "end": 550,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 498,
              "decorators": [],
              "name": "replace",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 499,
                "end": 518,
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 510,
                  "end": 518,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 520,
                "end": 540,
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 532,
                  "end": 540,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 534,
                    "end": 540
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 555,
            "end": 653,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 562,
              "decorators": [],
              "name": "replace",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 563,
                "end": 582,
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 574,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 576,
                    "end": 582
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 584,
                "end": 643,
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 596,
                  "end": 643,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 598,
                    "end": 643,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 599,
                        "end": 616,
                        "decorators": [],
                        "name": "substring",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 608,
                          "end": 616,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 610,
                            "end": 616
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 618,
                        "end": 632,
                        "argument": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 625,
                          "decorators": [],
                          "name": "args",
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
                        }
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
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 658,
            "end": 717,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 665,
              "decorators": [],
              "name": "replace",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 666,
                "end": 685,
                "decorators": [],
                "name": "searchValue",
                "optional": false,
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
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 687,
                "end": 707,
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 699,
                  "end": 707,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 701,
                    "end": 707
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 722,
            "end": 820,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 729,
              "decorators": [],
              "name": "replace",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 730,
                "end": 749,
                "decorators": [],
                "name": "searchValue",
                "optional": false,
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
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 751,
                "end": 810,
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 810,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 765,
                    "end": 810,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 783,
                        "decorators": [],
                        "name": "substring",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 775,
                          "end": 783,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 777,
                            "end": 783
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 785,
                        "end": 799,
                        "argument": {
                          "type": "Identifier",
                          "start": 788,
                          "end": 792,
                          "decorators": [],
                          "name": "args",
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
                        }
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
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 825,
            "end": 856,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 825,
              "end": 831,
              "decorators": [],
              "name": "search",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 832,
                "end": 846,
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 838,
                  "end": 846,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 840,
                    "end": 846
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 861,
            "end": 892,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 861,
              "end": 867,
              "decorators": [],
              "name": "search",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 868,
                "end": 882,
                "decorators": [],
                "name": "regexp",
                "optional": false,
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
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 897,
            "end": 941,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 902,
              "decorators": [],
              "name": "slice",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 903,
                "end": 917,
                "decorators": [],
                "name": "start",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 909,
                  "end": 917,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 911,
                    "end": 917
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 919,
                "end": 931,
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 923,
                  "end": 931,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 925,
                    "end": 931
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 946,
            "end": 997,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 951,
              "decorators": [],
              "name": "split",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 952,
                "end": 969,
                "decorators": [],
                "name": "separator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 961,
                  "end": 969,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 963,
                    "end": 969
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 971,
                "end": 985,
                "decorators": [],
                "name": "limit",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 977,
                  "end": 985,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 979,
                    "end": 985
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1002,
            "end": 1053,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1002,
              "end": 1007,
              "decorators": [],
              "name": "split",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1008,
                "end": 1025,
                "decorators": [],
                "name": "separator",
                "optional": false,
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
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1027,
                "end": 1041,
                "decorators": [],
                "name": "limit",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1033,
                  "end": 1041,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1035,
                    "end": 1041
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1058,
            "end": 1105,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1058,
              "end": 1067,
              "decorators": [],
              "name": "substring",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1068,
                "end": 1081,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1073,
                  "end": 1081,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1075,
                    "end": 1081
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1083,
                "end": 1095,
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1087,
                  "end": 1095,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1089,
                    "end": 1095
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1110,
            "end": 1132,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1110,
              "end": 1121,
              "decorators": [],
              "name": "toLowerCase",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1137,
            "end": 1165,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1137,
              "end": 1154,
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1170,
            "end": 1192,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1170,
              "end": 1181,
              "decorators": [],
              "name": "toUpperCase",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1197,
            "end": 1225,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1197,
              "end": 1214,
              "decorators": [],
              "name": "toLocaleUpperCase",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1230,
            "end": 1245,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1230,
              "end": 1234,
              "decorators": [],
              "name": "trim",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1250,
            "end": 1265,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1250,
              "end": 1256,
              "decorators": [],
              "name": "length",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1256,
              "end": 1264,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1258,
                "end": 1264
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1270,
            "end": 1316,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1270,
              "end": 1276,
              "decorators": [],
              "name": "substr",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1277,
                "end": 1289,
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1281,
                  "end": 1289,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1283,
                    "end": 1289
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1291,
                "end": 1306,
                "decorators": [],
                "name": "length",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1298,
                  "end": 1306,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1321,
            "end": 1339,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1321,
              "end": 1328,
              "decorators": [],
              "name": "valueOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1350,
                  "end": 1358,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1352,
                    "end": 1358
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1359,
              "end": 1367,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1361,
                "end": 1367
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "decorators": [],
        "name": "NotString",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1376,
            "end": 1377,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1380,
            "end": 1382,
            "raw": "''",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1388,
            "end": 1397,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "String",
                  "optional": false
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
      "start": 1399,
      "end": 1416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1403,
          "end": 1415,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1403,
            "end": 1415,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "NotString",
                  "optional": false
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1422,
          "end": 1423,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1429,
          "end": 1430,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1437,
          "end": 1438,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1444,
          "end": 1445,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1452,
          "end": 1453,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1477,
          "end": 1478,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
