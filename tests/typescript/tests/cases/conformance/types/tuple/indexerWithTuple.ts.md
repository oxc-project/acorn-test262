__ESTREE_TEST__:PASS:
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
