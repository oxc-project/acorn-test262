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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 128
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 137,
                  "end": 145
                },
                "start": 136,
                "end": 145
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 148,
                "end": 151
              },
              "start": 146,
              "end": 151
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 135,
            "end": 152
          },
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
              "start": 157,
              "end": 160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 162,
                "end": 165
              },
              "start": 160,
              "end": 165
            },
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 166
          }
        ],
        "start": 129,
        "end": 199
      },
      "declare": false,
      "start": 117,
      "end": 199
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
                "type": "TSAnyKeyword",
                "start": 208,
                "end": 211
              },
              "start": 206,
              "end": 211
            },
            "start": 205,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 211
        }
      ],
      "declare": false,
      "start": 201,
      "end": 212
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 239,
              "end": 245
            },
            "start": 237,
            "end": 245
          },
          "start": 236,
          "end": 245
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 248,
          "end": 254
        },
        "start": 246,
        "end": 254
      },
      "body": null,
      "expression": false,
      "start": 214,
      "end": 255
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 277
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 281,
              "end": 284
            },
            "start": 279,
            "end": 284
          },
          "start": 278,
          "end": 284
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 287,
          "end": 290
        },
        "start": 285,
        "end": 290
      },
      "body": null,
      "expression": false,
      "start": 256,
      "end": 291
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 305
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              }
            ],
            "optional": false,
            "start": 301,
            "end": 308
          },
          "definite": false,
          "start": 296,
          "end": 308
        }
      ],
      "declare": false,
      "start": 292,
      "end": 309
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 483
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 487,
              "end": 493
            },
            "start": 485,
            "end": 493
          },
          "start": 484,
          "end": 493
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 496,
          "end": 502
        },
        "start": 494,
        "end": 502
      },
      "body": null,
      "expression": false,
      "start": 462,
      "end": 503
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 525
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 529,
              "end": 532
            },
            "start": 527,
            "end": 532
          },
          "start": 526,
          "end": 532
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 535,
          "end": 538
        },
        "start": 533,
        "end": 538
      },
      "body": null,
      "expression": false,
      "start": 504,
      "end": 539
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 546
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 555
              }
            ],
            "optional": false,
            "start": 549,
            "end": 556
          },
          "definite": false,
          "start": 544,
          "end": 556
        }
      ],
      "declare": false,
      "start": 540,
      "end": 557
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 583,
        "end": 587
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSBooleanKeyword",
              "start": 591,
              "end": 598
            },
            "start": 589,
            "end": 598
          },
          "start": 588,
          "end": 598
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 601,
          "end": 608
        },
        "start": 599,
        "end": 608
      },
      "body": null,
      "expression": false,
      "start": 566,
      "end": 609
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 631
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 635,
              "end": 638
            },
            "start": 633,
            "end": 638
          },
          "start": 632,
          "end": 638
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 641,
          "end": 644
        },
        "start": 639,
        "end": 644
      },
      "body": null,
      "expression": false,
      "start": 610,
      "end": 645
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 652
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 659
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 661
              }
            ],
            "optional": false,
            "start": 655,
            "end": 662
          },
          "definite": false,
          "start": 650,
          "end": 662
        }
      ],
      "declare": false,
      "start": 646,
      "end": 663
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 693
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 701
              },
              "typeArguments": null,
              "start": 697,
              "end": 701
            },
            "start": 695,
            "end": 701
          },
          "start": 694,
          "end": 701
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
            "start": 704,
            "end": 708
          },
          "typeArguments": null,
          "start": 704,
          "end": 708
        },
        "start": 702,
        "end": 708
      },
      "body": null,
      "expression": false,
      "start": 672,
      "end": 709
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 731
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 735,
              "end": 738
            },
            "start": 733,
            "end": 738
          },
          "start": 732,
          "end": 738
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 741,
          "end": 744
        },
        "start": 739,
        "end": 744
      },
      "body": null,
      "expression": false,
      "start": 710,
      "end": 745
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 750,
            "end": 752
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 759
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              }
            ],
            "optional": false,
            "start": 755,
            "end": 762
          },
          "definite": false,
          "start": 750,
          "end": 762
        }
      ],
      "declare": false,
      "start": 746,
      "end": 763
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 803
              },
              "typeArguments": null,
              "start": 797,
              "end": 803
            },
            "start": 795,
            "end": 803
          },
          "start": 794,
          "end": 803
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 812
          },
          "typeArguments": null,
          "start": 806,
          "end": 812
        },
        "start": 804,
        "end": 812
      },
      "body": null,
      "expression": false,
      "start": 772,
      "end": 813
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 835
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 839,
              "end": 842
            },
            "start": 837,
            "end": 842
          },
          "start": 836,
          "end": 842
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 845,
          "end": 848
        },
        "start": 843,
        "end": 848
      },
      "body": null,
      "expression": false,
      "start": 814,
      "end": 849
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 856
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 863
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 865
              }
            ],
            "optional": false,
            "start": 859,
            "end": 866
          },
          "definite": false,
          "start": 854,
          "end": 866
        }
      ],
      "declare": false,
      "start": 850,
      "end": 867
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 897
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 903,
                    "end": 906
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 908,
                      "end": 914
                    },
                    "start": 906,
                    "end": 914
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 903,
                  "end": 914
                }
              ],
              "start": 901,
              "end": 916
            },
            "start": 899,
            "end": 916
          },
          "start": 898,
          "end": 916
        }
      ],
      "returnType": {
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 924
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 926,
                  "end": 932
                },
                "start": 924,
                "end": 932
              },
              "accessibility": null,
              "static": false,
              "start": 921,
              "end": 932
            }
          ],
          "start": 919,
          "end": 934
        },
        "start": 917,
        "end": 934
      },
      "body": null,
      "expression": false,
      "start": 876,
      "end": 935
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 953,
        "end": 957
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 961,
              "end": 964
            },
            "start": 959,
            "end": 964
          },
          "start": 958,
          "end": 964
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 967,
          "end": 970
        },
        "start": 965,
        "end": 970
      },
      "body": null,
      "expression": false,
      "start": 936,
      "end": 971
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 978
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 985
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 987
              }
            ],
            "optional": false,
            "start": 981,
            "end": 988
          },
          "definite": false,
          "start": 976,
          "end": 988
        }
      ],
      "declare": false,
      "start": 972,
      "end": 989
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1019
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1023,
                "end": 1029
              },
              "start": 1023,
              "end": 1031
            },
            "start": 1021,
            "end": 1031
          },
          "start": 1020,
          "end": 1031
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 1034,
            "end": 1040
          },
          "start": 1034,
          "end": 1042
        },
        "start": 1032,
        "end": 1042
      },
      "body": null,
      "expression": false,
      "start": 998,
      "end": 1043
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1065
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1069,
              "end": 1072
            },
            "start": 1067,
            "end": 1072
          },
          "start": 1066,
          "end": 1072
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1075,
          "end": 1078
        },
        "start": 1073,
        "end": 1078
      },
      "body": null,
      "expression": false,
      "start": 1044,
      "end": 1079
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1084,
            "end": 1086
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1089,
              "end": 1093
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1095
              }
            ],
            "optional": false,
            "start": 1089,
            "end": 1096
          },
          "definite": false,
          "start": 1084,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 1080,
      "end": 1097
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1118
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1126,
                "end": 1132
              },
              "start": 1124,
              "end": 1132
            },
            "accessibility": null,
            "static": false,
            "start": 1121,
            "end": 1132
          }
        ],
        "start": 1119,
        "end": 1134
      },
      "declare": false,
      "start": 1106,
      "end": 1134
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1156
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "I8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1162
              },
              "typeArguments": null,
              "start": 1160,
              "end": 1162
            },
            "start": 1158,
            "end": 1162
          },
          "start": 1157,
          "end": 1162
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1167
          },
          "typeArguments": null,
          "start": 1165,
          "end": 1167
        },
        "start": 1163,
        "end": 1167
      },
      "body": null,
      "expression": false,
      "start": 1135,
      "end": 1168
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1190
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1194,
              "end": 1197
            },
            "start": 1192,
            "end": 1197
          },
          "start": 1191,
          "end": 1197
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1200,
          "end": 1203
        },
        "start": 1198,
        "end": 1203
      },
      "body": null,
      "expression": false,
      "start": 1169,
      "end": 1204
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1211
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1220
              }
            ],
            "optional": false,
            "start": 1214,
            "end": 1221
          },
          "definite": false,
          "start": 1209,
          "end": 1221
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1222
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1238
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
              "start": 1241,
              "end": 1244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1246,
                "end": 1252
              },
              "start": 1244,
              "end": 1252
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
            "start": 1241,
            "end": 1253
          }
        ],
        "start": 1239,
        "end": 1255
      },
      "abstract": false,
      "declare": false,
      "start": 1231,
      "end": 1255
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1273,
        "end": 1278
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              },
              "typeArguments": null,
              "start": 1282,
              "end": 1283
            },
            "start": 1280,
            "end": 1283
          },
          "start": 1279,
          "end": 1283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1286,
            "end": 1287
          },
          "typeArguments": null,
          "start": 1286,
          "end": 1287
        },
        "start": 1284,
        "end": 1287
      },
      "body": null,
      "expression": false,
      "start": 1256,
      "end": 1288
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1311
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1315,
              "end": 1318
            },
            "start": 1313,
            "end": 1318
          },
          "start": 1312,
          "end": 1318
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1321,
          "end": 1324
        },
        "start": 1319,
        "end": 1324
      },
      "body": null,
      "expression": false,
      "start": 1289,
      "end": 1325
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1330,
            "end": 1332
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1335,
              "end": 1339
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              }
            ],
            "optional": false,
            "start": 1335,
            "end": 1342
          },
          "definite": false,
          "start": 1330,
          "end": 1342
        }
      ],
      "declare": false,
      "start": 1326,
      "end": 1343
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1360
      },
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
              "start": 1361,
              "end": 1362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1361,
            "end": 1362
          }
        ],
        "start": 1360,
        "end": 1363
      },
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
              "start": 1366,
              "end": 1369
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
                  "start": 1371,
                  "end": 1372
                },
                "typeArguments": null,
                "start": 1371,
                "end": 1372
              },
              "start": 1369,
              "end": 1372
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
            "start": 1366,
            "end": 1373
          }
        ],
        "start": 1364,
        "end": 1375
      },
      "abstract": false,
      "declare": false,
      "start": 1352,
      "end": 1375
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1393,
        "end": 1398
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1402,
                "end": 1404
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1405,
                    "end": 1411
                  }
                ],
                "start": 1404,
                "end": 1412
              },
              "start": 1402,
              "end": 1412
            },
            "start": 1400,
            "end": 1412
          },
          "start": 1399,
          "end": 1412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1415,
            "end": 1417
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1418,
                "end": 1424
              }
            ],
            "start": 1417,
            "end": 1425
          },
          "start": 1415,
          "end": 1425
        },
        "start": 1413,
        "end": 1425
      },
      "body": null,
      "expression": false,
      "start": 1376,
      "end": 1426
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1449
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1453,
              "end": 1456
            },
            "start": 1451,
            "end": 1456
          },
          "start": 1450,
          "end": 1456
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1459,
          "end": 1462
        },
        "start": 1457,
        "end": 1462
      },
      "body": null,
      "expression": false,
      "start": 1427,
      "end": 1463
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1468,
            "end": 1470
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1473,
              "end": 1477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1479
              }
            ],
            "optional": false,
            "start": 1473,
            "end": 1480
          },
          "definite": false,
          "start": 1468,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1464,
      "end": 1481
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1507,
        "end": 1512
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1518
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1523,
                  "end": 1529
                },
                "start": 1520,
                "end": 1529
              },
              "start": 1516,
              "end": 1529
            },
            "start": 1514,
            "end": 1529
          },
          "start": 1513,
          "end": 1529
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1534
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1539,
              "end": 1545
            },
            "start": 1536,
            "end": 1545
          },
          "start": 1532,
          "end": 1545
        },
        "start": 1530,
        "end": 1545
      },
      "body": null,
      "expression": false,
      "start": 1490,
      "end": 1546
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1569
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1573,
              "end": 1576
            },
            "start": 1571,
            "end": 1576
          },
          "start": 1570,
          "end": 1576
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1579,
          "end": 1582
        },
        "start": 1577,
        "end": 1582
      },
      "body": null,
      "expression": false,
      "start": 1547,
      "end": 1583
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1588,
            "end": 1590
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1593,
              "end": 1597
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1599
              }
            ],
            "optional": false,
            "start": 1593,
            "end": 1600
          },
          "definite": false,
          "start": 1588,
          "end": 1600
        }
      ],
      "declare": false,
      "start": 1584,
      "end": 1601
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1627,
        "end": 1632
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 1637,
                      "end": 1638
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1637,
                    "end": 1638
                  }
                ],
                "start": 1636,
                "end": 1639
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
                        "start": 1643,
                        "end": 1644
                      },
                      "typeArguments": null,
                      "start": 1643,
                      "end": 1644
                    },
                    "start": 1641,
                    "end": 1644
                  },
                  "start": 1640,
                  "end": 1644
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
                    "start": 1649,
                    "end": 1650
                  },
                  "typeArguments": null,
                  "start": 1649,
                  "end": 1650
                },
                "start": 1646,
                "end": 1650
              },
              "start": 1636,
              "end": 1650
            },
            "start": 1634,
            "end": 1650
          },
          "start": 1633,
          "end": 1650
        }
      ],
      "returnType": {
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
                  "start": 1654,
                  "end": 1655
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1654,
                "end": 1655
              }
            ],
            "start": 1653,
            "end": 1656
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
                    "start": 1660,
                    "end": 1661
                  },
                  "typeArguments": null,
                  "start": 1660,
                  "end": 1661
                },
                "start": 1658,
                "end": 1661
              },
              "start": 1657,
              "end": 1661
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
                "start": 1666,
                "end": 1667
              },
              "typeArguments": null,
              "start": 1666,
              "end": 1667
            },
            "start": 1663,
            "end": 1667
          },
          "start": 1653,
          "end": 1667
        },
        "start": 1651,
        "end": 1667
      },
      "body": null,
      "expression": false,
      "start": 1610,
      "end": 1668
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1686,
        "end": 1691
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1695,
              "end": 1698
            },
            "start": 1693,
            "end": 1698
          },
          "start": 1692,
          "end": 1698
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1701,
          "end": 1704
        },
        "start": 1699,
        "end": 1704
      },
      "body": null,
      "expression": false,
      "start": 1669,
      "end": 1705
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1710,
            "end": 1712
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1715,
              "end": 1719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1720,
                "end": 1721
              }
            ],
            "optional": false,
            "start": 1715,
            "end": 1722
          },
          "definite": false,
          "start": 1710,
          "end": 1722
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1723
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1738
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1742
            },
            "initializer": null,
            "computed": false,
            "start": 1741,
            "end": 1742
          }
        ],
        "start": 1739,
        "end": 1744
      },
      "const": false,
      "declare": false,
      "start": 1732,
      "end": 1744
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1762,
        "end": 1767
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1771,
                "end": 1772
              },
              "typeArguments": null,
              "start": 1771,
              "end": 1772
            },
            "start": 1769,
            "end": 1772
          },
          "start": 1768,
          "end": 1772
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1775,
            "end": 1776
          },
          "typeArguments": null,
          "start": 1775,
          "end": 1776
        },
        "start": 1773,
        "end": 1776
      },
      "body": null,
      "expression": false,
      "start": 1745,
      "end": 1777
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1795,
        "end": 1800
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1804,
              "end": 1807
            },
            "start": 1802,
            "end": 1807
          },
          "start": 1801,
          "end": 1807
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1810,
          "end": 1813
        },
        "start": 1808,
        "end": 1813
      },
      "body": null,
      "expression": false,
      "start": 1778,
      "end": 1814
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1819,
            "end": 1821
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1824,
              "end": 1828
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1830
              }
            ],
            "optional": false,
            "start": 1824,
            "end": 1831
          },
          "definite": false,
          "start": 1819,
          "end": 1831
        }
      ],
      "declare": false,
      "start": 1815,
      "end": 1832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1850,
        "end": 1851
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1854,
        "end": 1857
      },
      "expression": false,
      "start": 1841,
      "end": 1857
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1868,
        "end": 1869
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1887,
                    "end": 1890
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1893,
                    "end": 1894
                  },
                  "definite": false,
                  "start": 1887,
                  "end": 1894
                }
              ],
              "declare": false,
              "start": 1883,
              "end": 1895
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1876,
            "end": 1895
          }
        ],
        "start": 1870,
        "end": 1897
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1858,
      "end": 1897
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1920
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1931,
                "end": 1932
              },
              "typeArguments": null,
              "start": 1924,
              "end": 1932
            },
            "start": 1922,
            "end": 1932
          },
          "start": 1921,
          "end": 1932
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1942,
            "end": 1943
          },
          "typeArguments": null,
          "start": 1935,
          "end": 1943
        },
        "start": 1933,
        "end": 1943
      },
      "body": null,
      "expression": false,
      "start": 1898,
      "end": 1944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1962,
        "end": 1967
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1971,
              "end": 1974
            },
            "start": 1969,
            "end": 1974
          },
          "start": 1968,
          "end": 1974
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1977,
          "end": 1980
        },
        "start": 1975,
        "end": 1980
      },
      "body": null,
      "expression": false,
      "start": 1945,
      "end": 1981
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1986,
            "end": 1988
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1991,
              "end": 1995
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1996,
                "end": 1997
              }
            ],
            "optional": false,
            "start": 1991,
            "end": 1998
          },
          "definite": false,
          "start": 1986,
          "end": 1998
        }
      ],
      "declare": false,
      "start": 1982,
      "end": 1999
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2014,
        "end": 2016
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 2019,
              "end": 2022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2024,
                "end": 2030
              },
              "start": 2022,
              "end": 2030
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
            "start": 2019,
            "end": 2030
          }
        ],
        "start": 2017,
        "end": 2032
      },
      "abstract": false,
      "declare": false,
      "start": 2008,
      "end": 2032
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2045
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2063,
                    "end": 2066
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2069,
                    "end": 2070
                  },
                  "definite": false,
                  "start": 2063,
                  "end": 2070
                }
              ],
              "declare": false,
              "start": 2059,
              "end": 2071
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2052,
            "end": 2071
          }
        ],
        "start": 2046,
        "end": 2073
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2033,
      "end": 2073
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2091,
        "end": 2096
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "CC",
                "optional": false,
                "typeAnnotation": null,
                "start": 2100,
                "end": 2102
              },
              "typeArguments": null,
              "start": 2100,
              "end": 2102
            },
            "start": 2098,
            "end": 2102
          },
          "start": 2097,
          "end": 2102
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2105,
            "end": 2107
          },
          "typeArguments": null,
          "start": 2105,
          "end": 2107
        },
        "start": 2103,
        "end": 2107
      },
      "body": null,
      "expression": false,
      "start": 2074,
      "end": 2108
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2131
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2135,
              "end": 2138
            },
            "start": 2133,
            "end": 2138
          },
          "start": 2132,
          "end": 2138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2141,
          "end": 2144
        },
        "start": 2139,
        "end": 2144
      },
      "body": null,
      "expression": false,
      "start": 2109,
      "end": 2145
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2152
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2155,
              "end": 2159
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2160,
                "end": 2161
              }
            ],
            "optional": false,
            "start": 2155,
            "end": 2162
          },
          "definite": false,
          "start": 2150,
          "end": 2162
        }
      ],
      "declare": false,
      "start": 2146,
      "end": 2163
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2189,
        "end": 2194
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 2198,
                "end": 2204
              },
              "typeArguments": null,
              "start": 2198,
              "end": 2204
            },
            "start": 2196,
            "end": 2204
          },
          "start": 2195,
          "end": 2204
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
            "start": 2207,
            "end": 2213
          },
          "typeArguments": null,
          "start": 2207,
          "end": 2213
        },
        "start": 2205,
        "end": 2213
      },
      "body": null,
      "expression": false,
      "start": 2172,
      "end": 2214
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2232,
        "end": 2237
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2241,
              "end": 2244
            },
            "start": 2239,
            "end": 2244
          },
          "start": 2238,
          "end": 2244
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2247,
          "end": 2250
        },
        "start": 2245,
        "end": 2250
      },
      "body": null,
      "expression": false,
      "start": 2215,
      "end": 2251
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2256,
            "end": 2258
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2261,
              "end": 2265
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2266,
                "end": 2267
              }
            ],
            "optional": false,
            "start": 2261,
            "end": 2268
          },
          "definite": false,
          "start": 2256,
          "end": 2268
        }
      ],
      "declare": false,
      "start": 2252,
      "end": 2269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2295,
        "end": 2300
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "members": [],
              "start": 2304,
              "end": 2306
            },
            "start": 2302,
            "end": 2306
          },
          "start": 2301,
          "end": 2306
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2309,
          "end": 2311
        },
        "start": 2307,
        "end": 2311
      },
      "body": null,
      "expression": false,
      "start": 2278,
      "end": 2312
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2330,
        "end": 2335
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2339,
              "end": 2342
            },
            "start": 2337,
            "end": 2342
          },
          "start": 2336,
          "end": 2342
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2345,
          "end": 2348
        },
        "start": 2343,
        "end": 2348
      },
      "body": null,
      "expression": false,
      "start": 2313,
      "end": 2349
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2354,
            "end": 2356
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2359,
              "end": 2363
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2364,
                "end": 2365
              }
            ],
            "optional": false,
            "start": 2359,
            "end": 2366
          },
          "definite": false,
          "start": 2354,
          "end": 2366
        }
      ],
      "declare": false,
      "start": 2350,
      "end": 2367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 2374
}
```
