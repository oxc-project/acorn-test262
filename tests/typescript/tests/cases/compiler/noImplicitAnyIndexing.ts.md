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
            "start": 448,
            "end": 449
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 452,
              "end": 454
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "\"hi\"",
              "start": 455,
              "end": 459
            },
            "optional": false,
            "computed": true,
            "start": 452,
            "end": 460
          },
          "definite": false,
          "start": 448,
          "end": 460
        }
      ],
      "declare": false,
      "start": 444,
      "end": 461
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
            "start": 503,
            "end": 504
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 507,
              "end": 509
            },
            "property": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 510,
              "end": 512
            },
            "optional": false,
            "computed": true,
            "start": 507,
            "end": 513
          },
          "definite": false,
          "start": 503,
          "end": 513
        }
      ],
      "declare": false,
      "start": 499,
      "end": 514
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
                "start": 525,
                "end": 528
              },
              "start": 523,
              "end": 528
            },
            "start": 521,
            "end": 528
          },
          "init": {
            "type": "Literal",
            "value": "hi",
            "raw": "\"hi\"",
            "start": 531,
            "end": 535
          },
          "definite": false,
          "start": 521,
          "end": 535
        }
      ],
      "declare": false,
      "start": 517,
      "end": 536
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
            "start": 542,
            "end": 550
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 553,
            "end": 555
          },
          "definite": false,
          "start": 542,
          "end": 555
        }
      ],
      "declare": false,
      "start": 538,
      "end": 556
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
            "start": 598,
            "end": 600
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "emptyObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 611
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 614
            },
            "optional": false,
            "computed": true,
            "start": 603,
            "end": 615
          },
          "definite": false,
          "start": 598,
          "end": 615
        }
      ],
      "declare": false,
      "start": 594,
      "end": 616
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
            "start": 621,
            "end": 623
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 628,
                "end": 631
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "emptyObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 640
              },
              "start": 627,
              "end": 640
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 644
            },
            "optional": false,
            "computed": true,
            "start": 626,
            "end": 645
          },
          "definite": false,
          "start": 621,
          "end": 645
        }
      ],
      "declare": false,
      "start": 617,
      "end": 646
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 663
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
              "start": 664,
              "end": 665
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 664,
            "end": 665
          }
        ],
        "start": 663,
        "end": 666
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
                    "start": 679,
                    "end": 685
                  },
                  "start": 677,
                  "end": 685
                },
                "start": 674,
                "end": 685
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
                  "start": 688,
                  "end": 689
                },
                "typeArguments": null,
                "start": 688,
                "end": 689
              },
              "start": 686,
              "end": 689
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 673,
            "end": 690
          }
        ],
        "start": 667,
        "end": 692
      },
      "declare": false,
      "start": 648,
      "end": 692
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
                  "start": 701,
                  "end": 706
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 707,
                      "end": 713
                    }
                  ],
                  "start": 706,
                  "end": 714
                },
                "start": 701,
                "end": 714
              },
              "start": 699,
              "end": 714
            },
            "start": 698,
            "end": 714
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
                  "start": 723,
                  "end": 726
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 728,
                  "end": 729
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 723,
                "end": 729
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 735,
                  "end": 738
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 740,
                  "end": 741
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 735,
                "end": 741
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 747,
                  "end": 750
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 752,
                  "end": 753
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 747,
                "end": 753
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "Okay that's enough for today.",
                  "raw": "\"Okay that's enough for today.\"",
                  "start": 759,
                  "end": 790
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NaN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 795
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 759,
                "end": 795
              }
            ],
            "start": 717,
            "end": 797
          },
          "definite": false,
          "start": 698,
          "end": 797
        }
      ],
      "declare": false,
      "start": 694,
      "end": 798
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
            "start": 804,
            "end": 812
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 816
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEmusEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "emu",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 831
              },
              "optional": false,
              "computed": false,
              "start": 817,
              "end": 831
            },
            "optional": false,
            "computed": true,
            "start": 815,
            "end": 832
          },
          "definite": false,
          "start": 804,
          "end": 832
        }
      ],
      "declare": false,
      "start": 800,
      "end": 833
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
            "start": 838,
            "end": 846
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 850
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEmusEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 861
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEmusEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 872
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "emu",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 876
                },
                "optional": false,
                "computed": false,
                "start": 862,
                "end": 876
              },
              "optional": false,
              "computed": true,
              "start": 851,
              "end": 877
            },
            "optional": false,
            "computed": true,
            "start": 849,
            "end": 878
          },
          "definite": false,
          "start": 838,
          "end": 878
        }
      ],
      "declare": false,
      "start": 834,
      "end": 879
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
            "start": 884,
            "end": 892
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 896
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 899
            },
            "optional": false,
            "computed": true,
            "start": 895,
            "end": 900
          },
          "definite": false,
          "start": 884,
          "end": 900
        }
      ],
      "declare": false,
      "start": 880,
      "end": 901
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 902
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
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 455,
    "end": 459,
    "range": [
      455,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 510,
    "end": 512,
    "range": [
      510,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520,
    "range": [
      517,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 521,
    "end": 523,
    "range": [
      521,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 525,
    "end": 528,
    "range": [
      525,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 531,
    "end": 535,
    "range": [
      531,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 538,
    "end": 541,
    "range": [
      538,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 542,
    "end": 550,
    "range": [
      542,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 598,
    "end": 600,
    "range": [
      598,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 603,
    "end": 611,
    "range": [
      603,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620,
    "range": [
      617,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 621,
    "end": 623,
    "range": [
      621,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 628,
    "end": 631,
    "range": [
      628,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 632,
    "end": 640,
    "range": [
      632,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 642,
    "end": 644,
    "range": [
      642,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 648,
    "end": 657,
    "range": [
      648,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 658,
    "end": 663,
    "range": [
      658,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 674,
    "end": 677,
    "range": [
      674,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 694,
    "end": 697,
    "range": [
      694,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 701,
    "end": 706,
    "range": [
      701,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 723,
    "end": 726,
    "range": [
      723,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 747,
    "end": 750,
    "range": [
      747,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "String",
    "value": "\"Okay that's enough for today.\"",
    "start": 759,
    "end": 790,
    "range": [
      759,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 792,
    "end": 795,
    "range": [
      792,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 800,
    "end": 803,
    "range": [
      800,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "mResult1",
    "start": 804,
    "end": 812,
    "range": [
      804,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 817,
    "end": 827,
    "range": [
      817,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "emu",
    "start": 828,
    "end": 831,
    "range": [
      828,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 834,
    "end": 837,
    "range": [
      834,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "mResult2",
    "start": 838,
    "end": 846,
    "range": [
      838,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 851,
    "end": 861,
    "range": [
      851,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmusEnum",
    "start": 862,
    "end": 872,
    "range": [
      862,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "emu",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 880,
    "end": 883,
    "range": [
      880,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "mResult3",
    "start": 884,
    "end": 892,
    "range": [
      884,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 897,
    "end": 899,
    "range": [
      897,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  }
]
```
