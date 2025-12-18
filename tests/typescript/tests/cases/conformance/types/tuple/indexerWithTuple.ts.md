__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "strNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 26,
                    "end": 32
                  }
                ],
                "start": 17,
                "end": 33
              },
              "start": 15,
              "end": 33
            },
            "start": 4,
            "end": 33
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 37,
                "end": 42
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 44,
                "end": 46
              }
            ],
            "start": 36,
            "end": 47
          },
          "definite": false,
          "start": 4,
          "end": 47
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
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
            "name": "numTupleTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 78,
                        "end": 84
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 86,
                        "end": 92
                      }
                    ],
                    "start": 77,
                    "end": 93
                  }
                ],
                "start": 68,
                "end": 94
              },
              "start": 66,
              "end": 94
            },
            "start": 53,
            "end": 94
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 98,
                "end": 100
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 103,
                    "end": 108
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 110,
                    "end": 112
                  }
                ],
                "start": 102,
                "end": 113
              }
            ],
            "start": 97,
            "end": 114
          },
          "definite": false,
          "start": 53,
          "end": 114
        }
      ],
      "declare": false,
      "start": 49,
      "end": 115
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
            "name": "unionTuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 150,
                        "end": 156
                      }
                    ],
                    "start": 142,
                    "end": 156
                  }
                ],
                "start": 133,
                "end": 157
              },
              "start": 131,
              "end": 157
            },
            "start": 120,
            "end": 157
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 161,
                "end": 163
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 165,
                "end": 170
              }
            ],
            "start": 160,
            "end": 171
          },
          "definite": false,
          "start": 120,
          "end": 171
        }
      ],
      "declare": false,
      "start": 116,
      "end": 172
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
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 191,
                    "end": 198
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 208,
                        "end": 214
                      }
                    ],
                    "start": 200,
                    "end": 214
                  }
                ],
                "start": 190,
                "end": 215
              },
              "start": 188,
              "end": 215
            },
            "start": 177,
            "end": 215
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 219,
                "end": 223
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 225,
                "end": 230
              }
            ],
            "start": 218,
            "end": 231
          },
          "definite": false,
          "start": 177,
          "end": 231
        }
      ],
      "declare": false,
      "start": 173,
      "end": 232
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
            "name": "idx0",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 254
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 257,
            "end": 258
          },
          "definite": false,
          "start": 250,
          "end": 258
        }
      ],
      "declare": false,
      "start": 246,
      "end": 259
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
            "name": "idx1",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 268
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 271,
            "end": 272
          },
          "definite": false,
          "start": 264,
          "end": 272
        }
      ],
      "declare": false,
      "start": 260,
      "end": 273
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
            "name": "ele10",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 283
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 297
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 298,
              "end": 299
            },
            "optional": false,
            "computed": true,
            "start": 286,
            "end": 300
          },
          "definite": false,
          "start": 278,
          "end": 300
        }
      ],
      "declare": false,
      "start": 274,
      "end": 301
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
            "name": "ele11",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 321
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 335
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 336,
              "end": 337
            },
            "optional": false,
            "computed": true,
            "start": 324,
            "end": 338
          },
          "definite": false,
          "start": 316,
          "end": 338
        }
      ],
      "declare": false,
      "start": 312,
      "end": 339
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
            "name": "ele12",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 359
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 373
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 374,
              "end": 375
            },
            "optional": false,
            "computed": true,
            "start": 362,
            "end": 376
          },
          "definite": false,
          "start": 354,
          "end": 376
        }
      ],
      "declare": false,
      "start": 350,
      "end": 377
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
            "name": "ele13",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 406
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 420
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx0",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 425
            },
            "optional": false,
            "computed": true,
            "start": 409,
            "end": 426
          },
          "definite": false,
          "start": 401,
          "end": 426
        }
      ],
      "declare": false,
      "start": 397,
      "end": 427
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
            "name": "ele14",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 456
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 470
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx1",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 475
            },
            "optional": false,
            "computed": true,
            "start": 459,
            "end": 476
          },
          "definite": false,
          "start": 451,
          "end": 476
        }
      ],
      "declare": false,
      "start": 447,
      "end": 477
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
            "name": "ele15",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 506
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 520
            },
            "property": {
              "type": "Literal",
              "value": "0",
              "raw": "\"0\"",
              "start": 521,
              "end": 524
            },
            "optional": false,
            "computed": true,
            "start": 509,
            "end": 525
          },
          "definite": false,
          "start": 501,
          "end": 525
        }
      ],
      "declare": false,
      "start": 497,
      "end": 526
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
            "name": "ele16",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 546
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 560
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 561,
              "end": 564
            },
            "optional": false,
            "computed": true,
            "start": 549,
            "end": 565
          },
          "definite": false,
          "start": 541,
          "end": 565
        }
      ],
      "declare": false,
      "start": 537,
      "end": 566
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
            "name": "strNumTuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 593
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numTupleTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 609
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 610,
              "end": 611
            },
            "optional": false,
            "computed": true,
            "start": 596,
            "end": 612
          },
          "definite": false,
          "start": 581,
          "end": 612
        }
      ],
      "declare": false,
      "start": 577,
      "end": 613
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
            "name": "ele17",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 644
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numTupleTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 660
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 661,
              "end": 662
            },
            "optional": false,
            "computed": true,
            "start": 647,
            "end": 663
          },
          "definite": false,
          "start": 639,
          "end": 663
        }
      ],
      "declare": false,
      "start": 635,
      "end": 664
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
            "name": "ele19",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 703
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 717
            },
            "property": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 719,
                "end": 720
              },
              "prefix": true,
              "start": 718,
              "end": 720
            },
            "optional": false,
            "computed": true,
            "start": 706,
            "end": 721
          },
          "definite": false,
          "start": 698,
          "end": 721
        }
      ],
      "declare": false,
      "start": 694,
      "end": 721
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
            "name": "eleUnion10",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 752
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 766
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 767,
              "end": 768
            },
            "optional": false,
            "computed": true,
            "start": 755,
            "end": 769
          },
          "definite": false,
          "start": 742,
          "end": 769
        }
      ],
      "declare": false,
      "start": 738,
      "end": 770
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
            "name": "eleUnion11",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 795
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 809
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 810,
              "end": 811
            },
            "optional": false,
            "computed": true,
            "start": 798,
            "end": 812
          },
          "definite": false,
          "start": 785,
          "end": 812
        }
      ],
      "declare": false,
      "start": 781,
      "end": 813
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
            "name": "eleUnion12",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 847
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 861
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 862,
              "end": 863
            },
            "optional": false,
            "computed": true,
            "start": 850,
            "end": 864
          },
          "definite": false,
          "start": 837,
          "end": 864
        }
      ],
      "declare": false,
      "start": 833,
      "end": 865
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
            "name": "eleUnion13",
            "optional": false,
            "typeAnnotation": null,
            "start": 889,
            "end": 899
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 913
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx0",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 918
            },
            "optional": false,
            "computed": true,
            "start": 902,
            "end": 919
          },
          "definite": false,
          "start": 889,
          "end": 919
        }
      ],
      "declare": false,
      "start": 885,
      "end": 920
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
            "name": "eleUnion14",
            "optional": false,
            "typeAnnotation": null,
            "start": 944,
            "end": 954
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 968
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx1",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 973
            },
            "optional": false,
            "computed": true,
            "start": 957,
            "end": 974
          },
          "definite": false,
          "start": 944,
          "end": 974
        }
      ],
      "declare": false,
      "start": 940,
      "end": 975
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
            "name": "eleUnion15",
            "optional": false,
            "typeAnnotation": null,
            "start": 999,
            "end": 1009
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1023
            },
            "property": {
              "type": "Literal",
              "value": "0",
              "raw": "\"0\"",
              "start": 1024,
              "end": 1027
            },
            "optional": false,
            "computed": true,
            "start": 1012,
            "end": 1028
          },
          "definite": false,
          "start": 999,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 995,
      "end": 1029
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
            "name": "eleUnion16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1054
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1068
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 1069,
              "end": 1072
            },
            "optional": false,
            "computed": true,
            "start": 1057,
            "end": 1073
          },
          "definite": false,
          "start": 1044,
          "end": 1073
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1074
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
            "name": "eleUnion20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1099,
            "end": 1109
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1112,
              "end": 1123
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1124,
              "end": 1125
            },
            "optional": false,
            "computed": true,
            "start": 1112,
            "end": 1126
          },
          "definite": false,
          "start": 1099,
          "end": 1126
        }
      ],
      "declare": false,
      "start": 1095,
      "end": 1127
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
            "name": "eleUnion21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1143,
            "end": 1153
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1167
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1168,
              "end": 1169
            },
            "optional": false,
            "computed": true,
            "start": 1156,
            "end": 1170
          },
          "definite": false,
          "start": 1143,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1139,
      "end": 1171
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
            "name": "eleUnion22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1195,
            "end": 1205
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1208,
              "end": 1219
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1220,
              "end": 1221
            },
            "optional": false,
            "computed": true,
            "start": 1208,
            "end": 1222
          },
          "definite": false,
          "start": 1195,
          "end": 1222
        }
      ],
      "declare": false,
      "start": 1191,
      "end": 1223
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
            "name": "eleUnion23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1257,
            "end": 1267
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1281
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1286
            },
            "optional": false,
            "computed": true,
            "start": 1270,
            "end": 1287
          },
          "definite": false,
          "start": 1257,
          "end": 1287
        }
      ],
      "declare": false,
      "start": 1253,
      "end": 1288
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
            "name": "eleUnion24",
            "optional": false,
            "typeAnnotation": null,
            "start": 1322,
            "end": 1332
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1335,
              "end": 1346
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1347,
              "end": 1351
            },
            "optional": false,
            "computed": true,
            "start": 1335,
            "end": 1352
          },
          "definite": false,
          "start": 1322,
          "end": 1352
        }
      ],
      "declare": false,
      "start": 1318,
      "end": 1353
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
            "name": "eleUnion25",
            "optional": false,
            "typeAnnotation": null,
            "start": 1387,
            "end": 1397
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1411
            },
            "property": {
              "type": "Literal",
              "value": "0",
              "raw": "\"0\"",
              "start": 1412,
              "end": 1415
            },
            "optional": false,
            "computed": true,
            "start": 1400,
            "end": 1416
          },
          "definite": false,
          "start": 1387,
          "end": 1416
        }
      ],
      "declare": false,
      "start": 1383,
      "end": 1417
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
            "name": "eleUnion26",
            "optional": false,
            "typeAnnotation": null,
            "start": 1433,
            "end": 1443
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1446,
              "end": 1457
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 1458,
              "end": 1461
            },
            "optional": false,
            "computed": true,
            "start": 1446,
            "end": 1462
          },
          "definite": false,
          "start": 1433,
          "end": 1462
        }
      ],
      "declare": false,
      "start": 1429,
      "end": 1463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1489,
        "end": 1491
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1495,
              "end": 1501
            },
            {
              "type": "TSNumberKeyword",
              "start": 1503,
              "end": 1509
            }
          ],
          "start": 1494,
          "end": 1510
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1511,
            "end": 1512
          },
          "start": 1511,
          "end": 1512
        },
        "start": 1494,
        "end": 1513
      },
      "declare": false,
      "start": 1484,
      "end": 1514
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1533
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1537,
              "end": 1543
            },
            {
              "type": "TSNumberKeyword",
              "start": 1545,
              "end": 1551
            }
          ],
          "start": 1536,
          "end": 1552
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1553,
            "end": 1554
          },
          "start": 1553,
          "end": 1554
        },
        "start": 1536,
        "end": 1555
      },
      "declare": false,
      "start": 1526,
      "end": 1556
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1573,
        "end": 1575
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1579,
              "end": 1585
            },
            {
              "type": "TSNumberKeyword",
              "start": 1587,
              "end": 1593
            }
          ],
          "start": 1578,
          "end": 1594
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1596,
              "end": 1597
            },
            "prefix": true,
            "start": 1595,
            "end": 1597
          },
          "start": 1595,
          "end": 1597
        },
        "start": 1578,
        "end": 1598
      },
      "declare": false,
      "start": 1568,
      "end": 1599
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1612
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 4,
    "end": 15,
    "range": [
      4,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 37,
    "end": 42,
    "range": [
      37,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 44,
    "end": 46,
    "range": [
      44,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "numTupleTuple",
    "start": 53,
    "end": 66,
    "range": [
      53,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 98,
    "end": 100,
    "range": [
      98,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 103,
    "end": 108,
    "range": [
      103,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 120,
    "end": 131,
    "range": [
      120,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148,
    "range": [
      142,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 165,
    "end": 170,
    "range": [
      165,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 173,
    "end": 176,
    "range": [
      173,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 177,
    "end": 188,
    "range": [
      177,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 191,
    "end": 198,
    "range": [
      191,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "idx0",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "idx1",
    "start": 264,
    "end": 268,
    "range": [
      264,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "ele10",
    "start": 278,
    "end": 283,
    "range": [
      278,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 286,
    "end": 297,
    "range": [
      286,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "ele11",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 324,
    "end": 335,
    "range": [
      324,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "ele12",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 362,
    "end": 373,
    "range": [
      362,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 397,
    "end": 400,
    "range": [
      397,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "ele13",
    "start": 401,
    "end": 406,
    "range": [
      401,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 409,
    "end": 420,
    "range": [
      409,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "idx0",
    "start": 421,
    "end": 425,
    "range": [
      421,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450,
    "range": [
      447,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "ele14",
    "start": 451,
    "end": 456,
    "range": [
      451,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 459,
    "end": 470,
    "range": [
      459,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "idx1",
    "start": 471,
    "end": 475,
    "range": [
      471,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 497,
    "end": 500,
    "range": [
      497,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "ele15",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 509,
    "end": 520,
    "range": [
      509,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 521,
    "end": 524,
    "range": [
      521,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "ele16",
    "start": 541,
    "end": 546,
    "range": [
      541,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 549,
    "end": 560,
    "range": [
      549,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 561,
    "end": 564,
    "range": [
      561,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580,
    "range": [
      577,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple1",
    "start": 581,
    "end": 593,
    "range": [
      581,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "numTupleTuple",
    "start": 596,
    "end": 609,
    "range": [
      596,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 635,
    "end": 638,
    "range": [
      635,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "ele17",
    "start": 639,
    "end": 644,
    "range": [
      639,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "numTupleTuple",
    "start": 647,
    "end": 660,
    "range": [
      647,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
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
    "value": "ele19",
    "start": 698,
    "end": 703,
    "range": [
      698,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "strNumTuple",
    "start": 706,
    "end": 717,
    "range": [
      706,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 738,
    "end": 741,
    "range": [
      738,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion10",
    "start": 742,
    "end": 752,
    "range": [
      742,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 755,
    "end": 766,
    "range": [
      755,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 781,
    "end": 784,
    "range": [
      781,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion11",
    "start": 785,
    "end": 795,
    "range": [
      785,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 798,
    "end": 809,
    "range": [
      798,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836,
    "range": [
      833,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion12",
    "start": 837,
    "end": 847,
    "range": [
      837,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 850,
    "end": 861,
    "range": [
      850,
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
    "type": "Numeric",
    "value": "2",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 885,
    "end": 888,
    "range": [
      885,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion13",
    "start": 889,
    "end": 899,
    "range": [
      889,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 902,
    "end": 913,
    "range": [
      902,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "idx0",
    "start": 914,
    "end": 918,
    "range": [
      914,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 940,
    "end": 943,
    "range": [
      940,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion14",
    "start": 944,
    "end": 954,
    "range": [
      944,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 957,
    "end": 968,
    "range": [
      957,
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
    "value": "idx1",
    "start": 969,
    "end": 973,
    "range": [
      969,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 995,
    "end": 998,
    "range": [
      995,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion15",
    "start": 999,
    "end": 1009,
    "range": [
      999,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 1012,
    "end": 1023,
    "range": [
      1012,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1024,
    "end": 1027,
    "range": [
      1024,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1040,
    "end": 1043,
    "range": [
      1040,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion16",
    "start": 1044,
    "end": 1054,
    "range": [
      1044,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 1057,
    "end": 1068,
    "range": [
      1057,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1069,
    "end": 1072,
    "range": [
      1069,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1095,
    "end": 1098,
    "range": [
      1095,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion20",
    "start": 1099,
    "end": 1109,
    "range": [
      1099,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1112,
    "end": 1123,
    "range": [
      1112,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1139,
    "end": 1142,
    "range": [
      1139,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion21",
    "start": 1143,
    "end": 1153,
    "range": [
      1143,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1156,
    "end": 1167,
    "range": [
      1156,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1191,
    "end": 1194,
    "range": [
      1191,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion22",
    "start": 1195,
    "end": 1205,
    "range": [
      1195,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1208,
    "end": 1219,
    "range": [
      1208,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1253,
    "end": 1256,
    "range": [
      1253,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion23",
    "start": 1257,
    "end": 1267,
    "range": [
      1257,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1270,
    "end": 1281,
    "range": [
      1270,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "idx0",
    "start": 1282,
    "end": 1286,
    "range": [
      1282,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1318,
    "end": 1321,
    "range": [
      1318,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion24",
    "start": 1322,
    "end": 1332,
    "range": [
      1322,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1335,
    "end": 1346,
    "range": [
      1335,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "idx1",
    "start": 1347,
    "end": 1351,
    "range": [
      1347,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1383,
    "end": 1386,
    "range": [
      1383,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion25",
    "start": 1387,
    "end": 1397,
    "range": [
      1387,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1400,
    "end": 1411,
    "range": [
      1400,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1412,
    "end": 1415,
    "range": [
      1412,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1429,
    "end": 1432,
    "range": [
      1429,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "eleUnion26",
    "start": 1433,
    "end": 1443,
    "range": [
      1433,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 1446,
    "end": 1457,
    "range": [
      1446,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1458,
    "end": 1461,
    "range": [
      1458,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1484,
    "end": 1488,
    "range": [
      1484,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1489,
    "end": 1491,
    "range": [
      1489,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1495,
    "end": 1501,
    "range": [
      1495,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1503,
    "end": 1509,
    "range": [
      1503,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1526,
    "end": 1530,
    "range": [
      1526,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1531,
    "end": 1533,
    "range": [
      1531,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1537,
    "end": 1543,
    "range": [
      1537,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1545,
    "end": 1551,
    "range": [
      1545,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1568,
    "end": 1572,
    "range": [
      1568,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1573,
    "end": 1575,
    "range": [
      1573,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1579,
    "end": 1585,
    "range": [
      1579,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1587,
    "end": 1593,
    "range": [
      1587,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  }
]
```
