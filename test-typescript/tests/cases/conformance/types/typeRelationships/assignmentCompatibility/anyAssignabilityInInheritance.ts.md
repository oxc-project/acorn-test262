__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 151,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 148,
                "end": 151
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 162,
                "end": 165
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
      "type": "VariableDeclaration",
      "start": 201,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 211,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 211,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 208,
                "end": 211
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
      "type": "TSDeclareFunction",
      "start": 214,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 235,
        "name": "foo2",
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
          "start": 236,
          "end": 245,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 245,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 239,
              "end": 245
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 277,
        "name": "foo2",
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
          "start": 278,
          "end": 284,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 284,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 281,
              "end": 284
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 308,
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 305,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 462,
      "end": 503,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 483,
        "name": "foo3",
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
          "start": 484,
          "end": 493,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 485,
            "end": 493,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 487,
              "end": 493
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 525,
        "name": "foo3",
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
          "start": 526,
          "end": 532,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 527,
            "end": 532,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 529,
              "end": 532
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 546,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 549,
            "end": 556,
            "callee": {
              "type": "Identifier",
              "start": 549,
              "end": 553,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 555,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 566,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 587,
        "name": "foo4",
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
          "start": 588,
          "end": 598,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 589,
            "end": 598,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 591,
              "end": 598
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 627,
        "end": 631,
        "name": "foo4",
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
          "start": 632,
          "end": 638,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 633,
            "end": 638,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 635,
              "end": 638
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 652,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 655,
            "end": 662,
            "callee": {
              "type": "Identifier",
              "start": 655,
              "end": 659,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 660,
                "end": 661,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 672,
      "end": 709,
      "id": {
        "type": "Identifier",
        "start": 689,
        "end": 693,
        "name": "foo5",
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
          "start": 694,
          "end": 701,
          "name": "x",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "Date",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 710,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 731,
        "name": "foo5",
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
          "start": 732,
          "end": 738,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 738,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 735,
              "end": 738
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 750,
            "end": 752,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 755,
            "end": 762,
            "callee": {
              "type": "Identifier",
              "start": 755,
              "end": 759,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 772,
      "end": 813,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 793,
        "name": "foo6",
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
          "start": 794,
          "end": 803,
          "name": "x",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "RegExp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 814,
      "end": 849,
      "id": {
        "type": "Identifier",
        "start": 831,
        "end": 835,
        "name": "foo6",
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
          "start": 836,
          "end": 842,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 837,
            "end": 842,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 839,
              "end": 842
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 856,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 859,
            "end": 866,
            "callee": {
              "type": "Identifier",
              "start": 859,
              "end": 863,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 864,
                "end": 865,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 876,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 893,
        "end": 897,
        "name": "foo7",
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
          "start": 898,
          "end": 916,
          "name": "x",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 906,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 906,
                    "end": 914,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 908,
                      "end": 914
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
      "body": null,
      "declare": true,
      "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 921,
                "end": 924,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 924,
                "end": 932,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 926,
                  "end": 932
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 936,
      "end": 971,
      "id": {
        "type": "Identifier",
        "start": 953,
        "end": 957,
        "name": "foo7",
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
          "start": 958,
          "end": 964,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 959,
            "end": 964,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 961,
              "end": 964
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 978,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 981,
            "end": 988,
            "callee": {
              "type": "Identifier",
              "start": 981,
              "end": 985,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 986,
                "end": 987,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 998,
      "end": 1043,
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1019,
        "name": "foo8",
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
          "start": 1020,
          "end": 1031,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 1061,
        "end": 1065,
        "name": "foo8",
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
          "start": 1066,
          "end": 1072,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1067,
            "end": 1072,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1069,
              "end": 1072
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1084,
            "end": 1086,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1089,
            "end": 1096,
            "callee": {
              "type": "Identifier",
              "start": 1089,
              "end": 1093,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1094,
                "end": 1095,
                "name": "a",
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
      "type": "TSInterfaceDeclaration",
      "start": 1106,
      "end": 1134,
      "id": {
        "type": "Identifier",
        "start": 1116,
        "end": 1118,
        "name": "I8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1121,
              "end": 1124,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1124,
              "end": 1132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1126,
                "end": 1132
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
      "type": "TSDeclareFunction",
      "start": 1135,
      "end": 1168,
      "id": {
        "type": "Identifier",
        "start": 1152,
        "end": 1156,
        "name": "foo9",
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
          "start": 1157,
          "end": 1162,
          "name": "x",
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
                "name": "I8",
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
      "declare": true,
      "typeParameters": null,
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
            "name": "I8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1169,
      "end": 1204,
      "id": {
        "type": "Identifier",
        "start": 1186,
        "end": 1190,
        "name": "foo9",
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
          "start": 1191,
          "end": 1197,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1192,
            "end": 1197,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1194,
              "end": 1197
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1211,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1214,
            "end": 1221,
            "callee": {
              "type": "Identifier",
              "start": 1214,
              "end": 1218,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1219,
                "end": 1220,
                "name": "a",
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
      "type": "ClassDeclaration",
      "start": 1231,
      "end": 1255,
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1238,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1239,
        "end": 1255,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1241,
            "end": 1253,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1241,
              "end": 1244,
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
              "start": 1244,
              "end": 1252,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1246,
                "end": 1252
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
      "type": "TSDeclareFunction",
      "start": 1256,
      "end": 1288,
      "id": {
        "type": "Identifier",
        "start": 1273,
        "end": 1278,
        "name": "foo10",
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
          "start": 1279,
          "end": 1283,
          "name": "x",
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
                "name": "A",
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
      "declare": true,
      "typeParameters": null,
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1289,
      "end": 1325,
      "id": {
        "type": "Identifier",
        "start": 1306,
        "end": 1311,
        "name": "foo10",
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
          "start": 1312,
          "end": 1318,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1313,
            "end": 1318,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1315,
              "end": 1318
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1330,
            "end": 1332,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1335,
            "end": 1342,
            "callee": {
              "type": "Identifier",
              "start": 1335,
              "end": 1339,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1341,
                "name": "a",
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
      "type": "ClassDeclaration",
      "start": 1352,
      "end": 1375,
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1360,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1364,
        "end": 1375,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1366,
            "end": 1373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1366,
              "end": 1369,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1360,
        "end": 1363,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1361,
            "end": 1362,
            "name": {
              "type": "Identifier",
              "start": 1361,
              "end": 1362,
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
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1376,
      "end": 1426,
      "id": {
        "type": "Identifier",
        "start": 1393,
        "end": 1398,
        "name": "foo11",
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
          "start": 1399,
          "end": 1412,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1400,
            "end": 1412,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1402,
              "end": 1412,
              "typeName": {
                "type": "Identifier",
                "start": 1402,
                "end": 1404,
                "name": "A2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1413,
        "end": 1425,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1415,
          "end": 1425,
          "typeName": {
            "type": "Identifier",
            "start": 1415,
            "end": 1417,
            "name": "A2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1427,
      "end": 1463,
      "id": {
        "type": "Identifier",
        "start": 1444,
        "end": 1449,
        "name": "foo11",
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
          "start": 1450,
          "end": 1456,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1451,
            "end": 1456,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1453,
              "end": 1456
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1468,
            "end": 1470,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1473,
            "end": 1480,
            "callee": {
              "type": "Identifier",
              "start": 1473,
              "end": 1477,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1478,
                "end": 1479,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 1490,
      "end": 1546,
      "id": {
        "type": "Identifier",
        "start": 1507,
        "end": 1512,
        "name": "foo12",
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
          "start": 1513,
          "end": 1529,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1514,
            "end": 1529,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1516,
              "end": 1529,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1517,
                  "end": 1518,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1530,
        "end": 1545,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1532,
          "end": 1545,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1533,
              "end": 1534,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
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
      "id": {
        "type": "Identifier",
        "start": 1564,
        "end": 1569,
        "name": "foo12",
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
          "start": 1570,
          "end": 1576,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1571,
            "end": 1576,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1573,
              "end": 1576
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1588,
            "end": 1590,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1593,
            "end": 1600,
            "callee": {
              "type": "Identifier",
              "start": 1593,
              "end": 1597,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1598,
                "end": 1599,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 1610,
      "end": 1668,
      "id": {
        "type": "Identifier",
        "start": 1627,
        "end": 1632,
        "name": "foo13",
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
          "start": 1633,
          "end": 1650,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1650,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1636,
              "end": 1650,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1636,
                "end": 1639,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1637,
                    "end": 1638,
                    "name": {
                      "type": "Identifier",
                      "start": 1637,
                      "end": 1638,
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
                  "start": 1640,
                  "end": 1644,
                  "name": "x",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1651,
        "end": 1667,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1653,
          "end": 1667,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 1653,
            "end": 1656,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 1654,
                "end": 1655,
                "name": {
                  "type": "Identifier",
                  "start": 1654,
                  "end": 1655,
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
              "start": 1657,
              "end": 1661,
              "name": "x",
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
    {
      "type": "TSDeclareFunction",
      "start": 1669,
      "end": 1705,
      "id": {
        "type": "Identifier",
        "start": 1686,
        "end": 1691,
        "name": "foo13",
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
          "start": 1692,
          "end": 1698,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1693,
            "end": 1698,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1695,
              "end": 1698
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1710,
            "end": 1712,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1715,
            "end": 1722,
            "callee": {
              "type": "Identifier",
              "start": 1715,
              "end": 1719,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1720,
                "end": 1721,
                "name": "a",
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
      "type": "TSEnumDeclaration",
      "start": 1732,
      "end": 1744,
      "id": {
        "type": "Identifier",
        "start": 1737,
        "end": 1738,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1741,
          "end": 1742,
          "id": {
            "type": "Identifier",
            "start": 1741,
            "end": 1742,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1739,
        "end": 1744,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1741,
            "end": 1742,
            "id": {
              "type": "Identifier",
              "start": 1741,
              "end": 1742,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1745,
      "end": 1777,
      "id": {
        "type": "Identifier",
        "start": 1762,
        "end": 1767,
        "name": "foo14",
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
          "start": 1768,
          "end": 1772,
          "name": "x",
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
                "name": "E",
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
      "declare": true,
      "typeParameters": null,
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
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1778,
      "end": 1814,
      "id": {
        "type": "Identifier",
        "start": 1795,
        "end": 1800,
        "name": "foo14",
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
          "start": 1801,
          "end": 1807,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1802,
            "end": 1807,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1804,
              "end": 1807
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1819,
            "end": 1821,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1824,
            "end": 1831,
            "callee": {
              "type": "Identifier",
              "start": 1824,
              "end": 1828,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1829,
                "end": 1830,
                "name": "a",
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
      "type": "FunctionDeclaration",
      "start": 1841,
      "end": 1857,
      "id": {
        "type": "Identifier",
        "start": 1850,
        "end": 1851,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1854,
        "end": 1857,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1858,
      "end": 1894,
      "id": {
        "type": "Identifier",
        "start": 1865,
        "end": 1866,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1867,
        "end": 1894,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1873,
            "end": 1892,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1880,
              "end": 1892,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1884,
                  "end": 1891,
                  "id": {
                    "type": "Identifier",
                    "start": 1884,
                    "end": 1887,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1890,
                    "end": 1891,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1895,
      "end": 1941,
      "id": {
        "type": "Identifier",
        "start": 1912,
        "end": 1917,
        "name": "foo15",
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
          "start": 1918,
          "end": 1929,
          "name": "x",
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
                "name": "f",
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
      "declare": true,
      "typeParameters": null,
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1942,
      "end": 1978,
      "id": {
        "type": "Identifier",
        "start": 1959,
        "end": 1964,
        "name": "foo15",
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
          "start": 1965,
          "end": 1971,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1966,
            "end": 1971,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1968,
              "end": 1971
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 1983,
            "end": 1985,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1988,
            "end": 1995,
            "callee": {
              "type": "Identifier",
              "start": 1988,
              "end": 1992,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1993,
                "end": 1994,
                "name": "a",
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
      "type": "ClassDeclaration",
      "start": 2005,
      "end": 2029,
      "id": {
        "type": "Identifier",
        "start": 2011,
        "end": 2013,
        "name": "CC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2014,
        "end": 2029,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2016,
            "end": 2027,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2016,
              "end": 2019,
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
              "start": 2019,
              "end": 2027,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2021,
                "end": 2027
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
      "type": "TSModuleDeclaration",
      "start": 2030,
      "end": 2067,
      "id": {
        "type": "Identifier",
        "start": 2037,
        "end": 2039,
        "name": "CC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2040,
        "end": 2067,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2046,
            "end": 2065,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2053,
              "end": 2065,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2057,
                  "end": 2064,
                  "id": {
                    "type": "Identifier",
                    "start": 2057,
                    "end": 2060,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2063,
                    "end": 2064,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2068,
      "end": 2102,
      "id": {
        "type": "Identifier",
        "start": 2085,
        "end": 2090,
        "name": "foo16",
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
          "start": 2091,
          "end": 2096,
          "name": "x",
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
                "name": "CC",
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
      "declare": true,
      "typeParameters": null,
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
            "name": "CC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2103,
      "end": 2139,
      "id": {
        "type": "Identifier",
        "start": 2120,
        "end": 2125,
        "name": "foo16",
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
          "start": 2126,
          "end": 2132,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2127,
            "end": 2132,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2129,
              "end": 2132
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 2144,
            "end": 2146,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2149,
            "end": 2156,
            "callee": {
              "type": "Identifier",
              "start": 2149,
              "end": 2153,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2154,
                "end": 2155,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 2166,
      "end": 2208,
      "id": {
        "type": "Identifier",
        "start": 2183,
        "end": 2188,
        "name": "foo17",
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
          "start": 2189,
          "end": 2198,
          "name": "x",
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
                "name": "Object",
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
      "declare": true,
      "typeParameters": null,
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
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2209,
      "end": 2245,
      "id": {
        "type": "Identifier",
        "start": 2226,
        "end": 2231,
        "name": "foo17",
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
          "start": 2232,
          "end": 2238,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2233,
            "end": 2238,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2235,
              "end": 2238
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 2250,
            "end": 2252,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2255,
            "end": 2262,
            "callee": {
              "type": "Identifier",
              "start": 2255,
              "end": 2259,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2260,
                "end": 2261,
                "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 2272,
      "end": 2306,
      "id": {
        "type": "Identifier",
        "start": 2289,
        "end": 2294,
        "name": "foo18",
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
          "start": 2295,
          "end": 2300,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 2324,
        "end": 2329,
        "name": "foo18",
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
          "start": 2330,
          "end": 2336,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2331,
            "end": 2336,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2333,
              "end": 2336
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 2348,
            "end": 2350,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2353,
            "end": 2360,
            "callee": {
              "type": "Identifier",
              "start": 2353,
              "end": 2357,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2358,
                "end": 2359,
                "name": "a",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
