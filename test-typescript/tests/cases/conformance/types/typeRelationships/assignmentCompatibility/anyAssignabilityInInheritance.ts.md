anyAssignabilityInInheritance.ts
```json
{
  "type": "Program",
  "start": 117,
  "end": 2368,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 117,
      "end": 199,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 199,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 135,
            "end": 152,
            "parameters": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 151,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 148,
                "end": 151
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 166,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 162,
                "end": 165
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 211,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 211,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 208,
                "end": 211
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
      "type": "TSDeclareFunction",
      "start": 214,
      "end": 255,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 235,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 236,
          "end": 245,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 245,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 239,
              "end": 245
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 246,
        "end": 254,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 248,
          "end": 254
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 256,
      "end": 291,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 277,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 278,
          "end": 284,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 284,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 281,
              "end": 284
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 285,
        "end": 290,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 287,
          "end": 290
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 308,
            "arguments": [
              {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 305,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 462,
      "end": 503,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 483,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 484,
          "end": 493,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 485,
            "end": 493,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 487,
              "end": 493
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 494,
        "end": 502,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 496,
          "end": 502
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 504,
      "end": 539,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 525,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 526,
          "end": 532,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 527,
            "end": 532,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 529,
              "end": 532
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 533,
        "end": 538,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 535,
          "end": 538
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 540,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 544,
          "end": 556,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 546,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 549,
            "end": 556,
            "arguments": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 555,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 549,
              "end": 553,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 566,
      "end": 609,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 587,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 588,
          "end": 598,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 589,
            "end": 598,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 591,
              "end": 598
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 599,
        "end": 608,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 601,
          "end": 608
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 610,
      "end": 645,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 627,
        "end": 631,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 632,
          "end": 638,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 633,
            "end": 638,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 635,
              "end": 638
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 639,
        "end": 644,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 641,
          "end": 644
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 646,
      "end": 663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 662,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 652,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 655,
            "end": 662,
            "arguments": [
              {
                "type": "Identifier",
                "start": 660,
                "end": 661,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 655,
              "end": 659,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 672,
      "end": 709,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 689,
        "end": 693,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 694,
          "end": 701,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 695,
            "end": 701,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 697,
              "end": 701,
              "typeName": {
                "type": "Identifier",
                "start": 697,
                "end": 701,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 702,
        "end": 708,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 704,
          "end": 708,
          "typeName": {
            "type": "Identifier",
            "start": 704,
            "end": 708,
            "decorators": [],
            "name": "Date",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 710,
      "end": 745,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 731,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 738,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 738,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 735,
              "end": 738
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 739,
        "end": 744,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 741,
          "end": 744
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 746,
      "end": 763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 750,
          "end": 762,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 750,
            "end": 752,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 755,
            "end": 762,
            "arguments": [
              {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 755,
              "end": 759,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 772,
      "end": 813,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 793,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 794,
          "end": 803,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 795,
            "end": 803,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 797,
              "end": 803,
              "typeName": {
                "type": "Identifier",
                "start": 797,
                "end": 803,
                "decorators": [],
                "name": "RegExp",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 804,
        "end": 812,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 806,
          "end": 812,
          "typeName": {
            "type": "Identifier",
            "start": 806,
            "end": 812,
            "decorators": [],
            "name": "RegExp",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 814,
      "end": 849,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 831,
        "end": 835,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 836,
          "end": 842,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 837,
            "end": 842,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 839,
              "end": 842
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 843,
        "end": 848,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 845,
          "end": 848
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 850,
      "end": 867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 866,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 856,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 859,
            "end": 866,
            "arguments": [
              {
                "type": "Identifier",
                "start": 864,
                "end": 865,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 859,
              "end": 863,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 876,
      "end": 935,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 893,
        "end": 897,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 898,
          "end": 916,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 899,
            "end": 916,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 901,
              "end": 916,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 903,
                  "end": 914,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 906,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 906,
                    "end": 914,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 908,
                      "end": 914
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 917,
        "end": 934,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 919,
          "end": 934,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 921,
              "end": 932,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 921,
                "end": 924,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 924,
                "end": 932,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 926,
                  "end": 932
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 936,
      "end": 971,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 953,
        "end": 957,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 958,
          "end": 964,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 959,
            "end": 964,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 961,
              "end": 964
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 965,
        "end": 970,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 967,
          "end": 970
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 972,
      "end": 989,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 988,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 978,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 981,
            "end": 988,
            "arguments": [
              {
                "type": "Identifier",
                "start": 986,
                "end": 987,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 981,
              "end": 985,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 998,
      "end": 1043,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1019,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1020,
          "end": 1031,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1021,
            "end": 1031,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1023,
              "end": 1031,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1023,
                "end": 1029
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1032,
        "end": 1042,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 1034,
          "end": 1042,
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 1034,
            "end": 1040
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1044,
      "end": 1079,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1061,
        "end": 1065,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1066,
          "end": 1072,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1067,
            "end": 1072,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1069,
              "end": 1072
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1073,
        "end": 1078,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1075,
          "end": 1078
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1080,
      "end": 1097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1084,
          "end": 1096,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1084,
            "end": 1086,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1089,
            "end": 1096,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1094,
                "end": 1095,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1089,
              "end": 1093,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1106,
      "end": 1134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1119,
        "end": 1134,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1121,
            "end": 1132,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1121,
              "end": 1124,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1124,
              "end": 1132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1126,
                "end": 1132
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1116,
        "end": 1118,
        "decorators": [],
        "name": "I8",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1135,
      "end": 1168,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1152,
        "end": 1156,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1157,
          "end": 1162,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1158,
            "end": 1162,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1160,
              "end": 1162,
              "typeName": {
                "type": "Identifier",
                "start": 1160,
                "end": 1162,
                "decorators": [],
                "name": "I8",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1163,
        "end": 1167,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1165,
          "end": 1167,
          "typeName": {
            "type": "Identifier",
            "start": 1165,
            "end": 1167,
            "decorators": [],
            "name": "I8",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1169,
      "end": 1204,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1186,
        "end": 1190,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1191,
          "end": 1197,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1192,
            "end": 1197,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1194,
              "end": 1197
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1198,
        "end": 1203,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1200,
          "end": 1203
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1205,
      "end": 1222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1211,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1214,
            "end": 1221,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1219,
                "end": 1220,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1214,
              "end": 1218,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1231,
      "end": 1255,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1239,
        "end": 1255,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1241,
            "end": 1253,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1241,
              "end": 1244,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1244,
              "end": 1252,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1246,
                "end": 1252
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1238,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1256,
      "end": 1288,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1273,
        "end": 1278,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1279,
          "end": 1283,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1280,
            "end": 1283,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1282,
              "end": 1283,
              "typeName": {
                "type": "Identifier",
                "start": 1282,
                "end": 1283,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1284,
        "end": 1287,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1286,
          "end": 1287,
          "typeName": {
            "type": "Identifier",
            "start": 1286,
            "end": 1287,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1289,
      "end": 1325,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1306,
        "end": 1311,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1312,
          "end": 1318,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1313,
            "end": 1318,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1315,
              "end": 1318
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1319,
        "end": 1324,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1321,
          "end": 1324
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1326,
      "end": 1343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1330,
          "end": 1342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1330,
            "end": 1332,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1335,
            "end": 1342,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1341,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1335,
              "end": 1339,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1352,
      "end": 1375,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1364,
        "end": 1375,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1366,
            "end": 1373,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1366,
              "end": 1369,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1369,
              "end": 1372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1371,
                "end": 1372,
                "typeName": {
                  "type": "Identifier",
                  "start": 1371,
                  "end": 1372,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1360,
        "decorators": [],
        "name": "A2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1360,
        "end": 1363,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1361,
            "end": 1362,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1361,
              "end": 1362,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1376,
      "end": 1426,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1393,
        "end": 1398,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1399,
          "end": 1412,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1400,
            "end": 1412,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1402,
              "end": 1412,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1404,
                "end": 1412,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1405,
                    "end": 1411
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1402,
                "end": 1404,
                "decorators": [],
                "name": "A2",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1413,
        "end": 1425,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1415,
          "end": 1425,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1417,
            "end": 1425,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1418,
                "end": 1424
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1415,
            "end": 1417,
            "decorators": [],
            "name": "A2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1427,
      "end": 1463,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1444,
        "end": 1449,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1450,
          "end": 1456,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1451,
            "end": 1456,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1453,
              "end": 1456
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1457,
        "end": 1462,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1459,
          "end": 1462
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1464,
      "end": 1481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1468,
          "end": 1480,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1468,
            "end": 1470,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1473,
            "end": 1480,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1478,
                "end": 1479,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1473,
              "end": 1477,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1490,
      "end": 1546,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1507,
        "end": 1512,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1513,
          "end": 1529,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1514,
            "end": 1529,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1516,
              "end": 1529,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1517,
                  "end": 1518,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1520,
                "end": 1529,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1523,
                  "end": 1529
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1530,
        "end": 1545,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1532,
          "end": 1545,
          "params": [
            {
              "type": "Identifier",
              "start": 1533,
              "end": 1534,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1536,
            "end": 1545,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1539,
              "end": 1545
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1547,
      "end": 1583,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1564,
        "end": 1569,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1570,
          "end": 1576,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1571,
            "end": 1576,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1573,
              "end": 1576
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1577,
        "end": 1582,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1579,
          "end": 1582
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1584,
      "end": 1601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1588,
          "end": 1600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1588,
            "end": 1590,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1593,
            "end": 1600,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1598,
                "end": 1599,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1593,
              "end": 1597,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1610,
      "end": 1668,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1627,
        "end": 1632,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1633,
          "end": 1650,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1650,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1636,
              "end": 1650,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1644,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1641,
                    "end": 1644,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1643,
                      "end": 1644,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1643,
                        "end": 1644,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1646,
                "end": 1650,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1649,
                  "end": 1650,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1649,
                    "end": 1650,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1636,
                "end": 1639,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1637,
                    "end": 1638,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1637,
                      "end": 1638,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1651,
        "end": 1667,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1653,
          "end": 1667,
          "params": [
            {
              "type": "Identifier",
              "start": 1657,
              "end": 1661,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1658,
                "end": 1661,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1660,
                  "end": 1661,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1660,
                    "end": 1661,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1663,
            "end": 1667,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1666,
              "end": 1667,
              "typeName": {
                "type": "Identifier",
                "start": 1666,
                "end": 1667,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 1653,
            "end": 1656,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 1654,
                "end": 1655,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 1654,
                  "end": 1655,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1669,
      "end": 1705,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1686,
        "end": 1691,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1692,
          "end": 1698,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1693,
            "end": 1698,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1695,
              "end": 1698
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1699,
        "end": 1704,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1701,
          "end": 1704
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1706,
      "end": 1723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1710,
          "end": 1722,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1710,
            "end": 1712,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1715,
            "end": 1722,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1720,
                "end": 1721,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1715,
              "end": 1719,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1732,
      "end": 1744,
      "body": {
        "type": "TSEnumBody",
        "start": 1739,
        "end": 1744,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1741,
            "end": 1742,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1741,
              "end": 1742,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1737,
        "end": 1738,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1745,
      "end": 1777,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1762,
        "end": 1767,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1768,
          "end": 1772,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1769,
            "end": 1772,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1771,
              "end": 1772,
              "typeName": {
                "type": "Identifier",
                "start": 1771,
                "end": 1772,
                "decorators": [],
                "name": "E",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1773,
        "end": 1776,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1775,
          "end": 1776,
          "typeName": {
            "type": "Identifier",
            "start": 1775,
            "end": 1776,
            "decorators": [],
            "name": "E",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1778,
      "end": 1814,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1795,
        "end": 1800,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1801,
          "end": 1807,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1802,
            "end": 1807,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1804,
              "end": 1807
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1808,
        "end": 1813,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1810,
          "end": 1813
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1815,
      "end": 1832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1819,
          "end": 1831,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1819,
            "end": 1821,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1824,
            "end": 1831,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1829,
                "end": 1830,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1824,
              "end": 1828,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1841,
      "end": 1857,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1854,
        "end": 1857,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1850,
        "end": 1851,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1858,
      "end": 1894,
      "body": {
        "type": "TSModuleBlock",
        "start": 1867,
        "end": 1894,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1873,
            "end": 1892,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1880,
              "end": 1892,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1884,
                  "end": 1891,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1884,
                    "end": 1887,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1890,
                    "end": 1891,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1865,
        "end": 1866,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1895,
      "end": 1941,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1912,
        "end": 1917,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1918,
          "end": 1929,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1919,
            "end": 1929,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1921,
              "end": 1929,
              "exprName": {
                "type": "Identifier",
                "start": 1928,
                "end": 1929,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1930,
        "end": 1940,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1932,
          "end": 1940,
          "exprName": {
            "type": "Identifier",
            "start": 1939,
            "end": 1940,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1942,
      "end": 1978,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1959,
        "end": 1964,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1965,
          "end": 1971,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1966,
            "end": 1971,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1968,
              "end": 1971
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1972,
        "end": 1977,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1974,
          "end": 1977
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1979,
      "end": 1996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1983,
          "end": 1995,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1983,
            "end": 1985,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1988,
            "end": 1995,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1993,
                "end": 1994,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1988,
              "end": 1992,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 2005,
      "end": 2029,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2014,
        "end": 2029,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2016,
            "end": 2027,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2016,
              "end": 2019,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2019,
              "end": 2027,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2021,
                "end": 2027
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2011,
        "end": 2013,
        "decorators": [],
        "name": "CC",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2030,
      "end": 2067,
      "body": {
        "type": "TSModuleBlock",
        "start": 2040,
        "end": 2067,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2046,
            "end": 2065,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2053,
              "end": 2065,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2057,
                  "end": 2064,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2057,
                    "end": 2060,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2063,
                    "end": 2064,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2037,
        "end": 2039,
        "decorators": [],
        "name": "CC",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSDeclareFunction",
      "start": 2068,
      "end": 2102,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2085,
        "end": 2090,
        "decorators": [],
        "name": "foo16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2091,
          "end": 2096,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2092,
            "end": 2096,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2094,
              "end": 2096,
              "typeName": {
                "type": "Identifier",
                "start": 2094,
                "end": 2096,
                "decorators": [],
                "name": "CC",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2097,
        "end": 2101,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2099,
          "end": 2101,
          "typeName": {
            "type": "Identifier",
            "start": 2099,
            "end": 2101,
            "decorators": [],
            "name": "CC",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2103,
      "end": 2139,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2120,
        "end": 2125,
        "decorators": [],
        "name": "foo16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2126,
          "end": 2132,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2127,
            "end": 2132,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2129,
              "end": 2132
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2133,
        "end": 2138,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2135,
          "end": 2138
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2140,
      "end": 2157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2144,
          "end": 2156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2144,
            "end": 2146,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2149,
            "end": 2156,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2154,
                "end": 2155,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2149,
              "end": 2153,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 2166,
      "end": 2208,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2183,
        "end": 2188,
        "decorators": [],
        "name": "foo17",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2189,
          "end": 2198,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2190,
            "end": 2198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2192,
              "end": 2198,
              "typeName": {
                "type": "Identifier",
                "start": 2192,
                "end": 2198,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2199,
        "end": 2207,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2201,
          "end": 2207,
          "typeName": {
            "type": "Identifier",
            "start": 2201,
            "end": 2207,
            "decorators": [],
            "name": "Object",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2209,
      "end": 2245,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2226,
        "end": 2231,
        "decorators": [],
        "name": "foo17",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2232,
          "end": 2238,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2233,
            "end": 2238,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2235,
              "end": 2238
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2239,
        "end": 2244,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2241,
          "end": 2244
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2246,
      "end": 2263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2250,
          "end": 2262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2250,
            "end": 2252,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2255,
            "end": 2262,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2260,
                "end": 2261,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2255,
              "end": 2259,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 2272,
      "end": 2306,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2289,
        "end": 2294,
        "decorators": [],
        "name": "foo18",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2295,
          "end": 2300,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2296,
            "end": 2300,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2298,
              "end": 2300,
              "members": []
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2301,
        "end": 2305,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 2303,
          "end": 2305,
          "members": []
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2307,
      "end": 2343,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2324,
        "end": 2329,
        "decorators": [],
        "name": "foo18",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2330,
          "end": 2336,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2331,
            "end": 2336,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2333,
              "end": 2336
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2337,
        "end": 2342,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2339,
          "end": 2342
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2344,
      "end": 2361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2348,
          "end": 2360,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2348,
            "end": 2350,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2353,
            "end": 2360,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2358,
                "end": 2359,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2353,
              "end": 2357,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
