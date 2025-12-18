__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEmusEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "emu",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "initializer": null,
            "computed": false,
            "start": 22,
            "end": 25
          }
        ],
        "start": 16,
        "end": 27
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 27
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
            "name": "strRepresentation1",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 90
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEmusEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 103
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 104,
              "end": 105
            },
            "optional": false,
            "computed": true,
            "start": 93,
            "end": 106
          },
          "definite": false,
          "start": 72,
          "end": 106
        }
      ],
      "declare": false,
      "start": 68,
      "end": 106
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
            "name": "strRepresentation2",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 169
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEmusEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 182
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEmusEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 193
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "emu",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 197
              },
              "optional": false,
              "computed": false,
              "start": 183,
              "end": 197
            },
            "optional": false,
            "computed": true,
            "start": 172,
            "end": 198
          },
          "definite": false,
          "start": 151,
          "end": 198
        }
      ],
      "declare": false,
      "start": 147,
      "end": 198
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
            "name": "strRepresentation3",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 294
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEmusEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 307
            },
            "property": {
              "type": "Literal",
              "value": "monehh",
              "raw": "\"monehh\"",
              "start": 308,
              "end": 316
            },
            "optional": false,
            "computed": true,
            "start": 297,
            "end": 317
          },
          "definite": false,
          "start": 276,
          "end": 317
        }
      ],
      "declare": false,
      "start": 272,
      "end": 318
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
            "name": "strRepresentation4",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 384
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEmusEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 397
            },
            "property": {
              "type": "Literal",
              "value": "emu",
              "raw": "\"emu\"",
              "start": 398,
              "end": 403
            },
            "optional": false,
            "computed": true,
            "start": 387,
            "end": 404
          },
          "definite": false,
          "start": 366,
          "end": 404
        }
      ],
      "declare": false,
      "start": 362,
      "end": 405
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
            "start": 484,
            "end": 485
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 488,
              "end": 490
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "\"hi\"",
              "start": 491,
              "end": 495
            },
            "optional": false,
            "computed": true,
            "start": 488,
            "end": 496
          },
          "definite": false,
          "start": 484,
          "end": 496
        }
      ],
      "declare": false,
      "start": 480,
      "end": 497
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 576
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 579,
              "end": 581
            },
            "property": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 582,
              "end": 584
            },
            "optional": false,
            "computed": true,
            "start": 579,
            "end": 585
          },
          "definite": false,
          "start": 575,
          "end": 585
        }
      ],
      "declare": false,
      "start": 571,
      "end": 586
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
            "name": "hi",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 596,
                "end": 599
              },
              "start": 594,
              "end": 599
            },
            "start": 592,
            "end": 599
          },
          "init": {
            "type": "Literal",
            "value": "hi",
            "raw": "\"hi\"",
            "start": 602,
            "end": 606
          },
          "definite": false,
          "start": 592,
          "end": 606
        }
      ],
      "declare": false,
      "start": 588,
      "end": 607
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
            "name": "emptyObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 621
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 624,
            "end": 626
          },
          "definite": false,
          "start": 613,
          "end": 626
        }
      ],
      "declare": false,
      "start": 609,
      "end": 627
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 707
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "emptyObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 718
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 721
            },
            "optional": false,
            "computed": true,
            "start": 710,
            "end": 722
          },
          "definite": false,
          "start": 705,
          "end": 722
        }
      ],
      "declare": false,
      "start": 701,
      "end": 723
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 728,
            "end": 730
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 735,
                "end": 738
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "emptyObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 747
              },
              "start": 734,
              "end": 747
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 751
            },
            "optional": false,
            "computed": true,
            "start": 733,
            "end": 752
          },
          "definite": false,
          "start": 728,
          "end": 752
        }
      ],
      "declare": false,
      "start": 724,
      "end": 753
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 770
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
              "start": 771,
              "end": 772
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 771,
            "end": 772
          }
        ],
        "start": 770,
        "end": 773
      },
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 786,
                    "end": 792
                  },
                  "start": 784,
                  "end": 792
                },
                "start": 781,
                "end": 792
              }
            ],
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
                  "start": 795,
                  "end": 796
                },
                "typeArguments": null,
                "start": 795,
                "end": 796
              },
              "start": 793,
              "end": 796
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 780,
            "end": 797
          }
        ],
        "start": 774,
        "end": 799
      },
      "declare": false,
      "start": 755,
      "end": 799
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 808,
                  "end": 813
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 814,
                      "end": 820
                    }
                  ],
                  "start": 813,
                  "end": 821
                },
                "start": 808,
                "end": 821
              },
              "start": 806,
              "end": 821
            },
            "start": 805,
            "end": 821
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "\"0\"",
                  "start": 830,
                  "end": 833
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 835,
                  "end": 836
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 830,
                "end": 836
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 842,
                  "end": 845
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 847,
                  "end": 848
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 842,
                "end": 848
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 854,
                  "end": 857
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 859,
                  "end": 860
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 854,
                "end": 860
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "Okay that's enough for today.",
                  "raw": "\"Okay that's enough for today.\"",
                  "start": 866,
                  "end": 897
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NaN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 899,
                  "end": 902
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 866,
                "end": 902
              }
            ],
            "start": 824,
            "end": 904
          },
          "definite": false,
          "start": 805,
          "end": 904
        }
      ],
      "declare": false,
      "start": 801,
      "end": 905
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
            "name": "mResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 911,
            "end": 919
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 922,
              "end": 923
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEmusEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 924,
                "end": 934
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "emu",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 938
              },
              "optional": false,
              "computed": false,
              "start": 924,
              "end": 938
            },
            "optional": false,
            "computed": true,
            "start": 922,
            "end": 939
          },
          "definite": false,
          "start": 911,
          "end": 939
        }
      ],
      "declare": false,
      "start": 907,
      "end": 940
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
            "name": "mResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 953
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEmusEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 968
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEmusEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 979
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "emu",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 983
                },
                "optional": false,
                "computed": false,
                "start": 969,
                "end": 983
              },
              "optional": false,
              "computed": true,
              "start": 958,
              "end": 984
            },
            "optional": false,
            "computed": true,
            "start": 956,
            "end": 985
          },
          "definite": false,
          "start": 945,
          "end": 985
        }
      ],
      "declare": false,
      "start": 941,
      "end": 986
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
            "name": "mResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 991,
            "end": 999
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1006
            },
            "optional": false,
            "computed": true,
            "start": 1002,
            "end": 1007
          },
          "definite": false,
          "start": 991,
          "end": 1007
        }
      ],
      "declare": false,
      "start": 987,
      "end": 1008
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1009
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 5,
    "end": 15,
    "range": [
      5,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "emu",
    "start": 22,
    "end": 25,
    "range": [
      22,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "strRepresentation1",
    "start": 72,
    "end": 90,
    "range": [
      72,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 93,
    "end": 103,
    "range": [
      93,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 147,
    "end": 150,
    "range": [
      147,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "strRepresentation2",
    "start": 151,
    "end": 169,
    "range": [
      151,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 172,
    "end": 182,
    "range": [
      172,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 183,
    "end": 193,
    "range": [
      183,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "emu",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "strRepresentation3",
    "start": 276,
    "end": 294,
    "range": [
      276,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 297,
    "end": 307,
    "range": [
      297,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "String",
    "value": "\"monehh\"",
    "start": 308,
    "end": 316,
    "range": [
      308,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 362,
    "end": 365,
    "range": [
      362,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "strRepresentation4",
    "start": 366,
    "end": 384,
    "range": [
      366,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 387,
    "end": 397,
    "range": [
      387,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "String",
    "value": "\"emu\"",
    "start": 398,
    "end": 403,
    "range": [
      398,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 480,
    "end": 483,
    "range": [
      480,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 491,
    "end": 495,
    "range": [
      491,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 571,
    "end": 574,
    "range": [
      571,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 582,
    "end": 584,
    "range": [
      582,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 592,
    "end": 594,
    "range": [
      592,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 596,
    "end": 599,
    "range": [
      596,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 602,
    "end": 606,
    "range": [
      602,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 609,
    "end": 612,
    "range": [
      609,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 613,
    "end": 621,
    "range": [
      613,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 701,
    "end": 704,
    "range": [
      701,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 705,
    "end": 707,
    "range": [
      705,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 710,
    "end": 718,
    "range": [
      710,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 719,
    "end": 721,
    "range": [
      719,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 724,
    "end": 727,
    "range": [
      724,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 728,
    "end": 730,
    "range": [
      728,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 739,
    "end": 747,
    "range": [
      739,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 749,
    "end": 751,
    "range": [
      749,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 755,
    "end": 764,
    "range": [
      755,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 765,
    "end": 770,
    "range": [
      765,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 781,
    "end": 784,
    "range": [
      781,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 786,
    "end": 792,
    "range": [
      786,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 801,
    "end": 804,
    "range": [
      801,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 808,
    "end": 813,
    "range": [
      808,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 814,
    "end": 820,
    "range": [
      814,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 830,
    "end": 833,
    "range": [
      830,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 854,
    "end": 857,
    "range": [
      854,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "String",
    "value": "\"Okay that's enough for today.\"",
    "start": 866,
    "end": 897,
    "range": [
      866,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 899,
    "end": 902,
    "range": [
      899,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 907,
    "end": 910,
    "range": [
      907,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "mResult1",
    "start": 911,
    "end": 919,
    "range": [
      911,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 924,
    "end": 934,
    "range": [
      924,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "emu",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 941,
    "end": 944,
    "range": [
      941,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "mResult2",
    "start": 945,
    "end": 953,
    "range": [
      945,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 958,
    "end": 968,
    "range": [
      958,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 969,
    "end": 979,
    "range": [
      969,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "emu",
    "start": 980,
    "end": 983,
    "range": [
      980,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 987,
    "end": 990,
    "range": [
      987,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "mResult3",
    "start": 991,
    "end": 999,
    "range": [
      991,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 1004,
    "end": 1006,
    "range": [
      1004,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  }
]
```
