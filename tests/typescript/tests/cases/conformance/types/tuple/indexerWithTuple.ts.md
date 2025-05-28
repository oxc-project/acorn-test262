__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1612,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 33,
            "decorators": [],
            "name": "strNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 17,
                "end": 33,
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
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 36,
            "end": 47,
            "elements": [
              {
                "type": "Literal",
                "start": 37,
                "end": 42,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Literal",
                "start": 44,
                "end": 46,
                "value": 10,
                "raw": "10"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 94,
            "decorators": [],
            "name": "numTupleTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 68,
                "end": 94,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSTupleType",
                    "start": 77,
                    "end": 93,
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
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 97,
            "end": 114,
            "elements": [
              {
                "type": "Literal",
                "start": 98,
                "end": 100,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 102,
                "end": 113,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 103,
                    "end": 108,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  {
                    "type": "Literal",
                    "start": 110,
                    "end": 112,
                    "value": 20,
                    "raw": "20"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 172,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 157,
            "decorators": [],
            "name": "unionTuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 133,
                "end": 157,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  {
                    "type": "TSUnionType",
                    "start": 142,
                    "end": 156,
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
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 160,
            "end": 171,
            "elements": [
              {
                "type": "Literal",
                "start": 161,
                "end": 163,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 165,
                "end": 170,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 215,
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 215,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 190,
                "end": 215,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 191,
                    "end": 198
                  },
                  {
                    "type": "TSUnionType",
                    "start": 200,
                    "end": 214,
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
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 218,
            "end": 231,
            "elements": [
              {
                "type": "Literal",
                "start": 219,
                "end": 223,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 225,
                "end": 230,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 259,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 254,
            "decorators": [],
            "name": "idx0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 257,
            "end": 258,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 273,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 268,
            "decorators": [],
            "name": "idx1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 271,
            "end": 272,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 301,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 283,
            "decorators": [],
            "name": "ele10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 286,
            "end": 300,
            "object": {
              "type": "Identifier",
              "start": 286,
              "end": 297,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 298,
              "end": 299,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 339,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "decorators": [],
            "name": "ele11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 324,
            "end": 338,
            "object": {
              "type": "Identifier",
              "start": 324,
              "end": 335,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 336,
              "end": 337,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 377,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 359,
            "decorators": [],
            "name": "ele12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 362,
            "end": 376,
            "object": {
              "type": "Identifier",
              "start": 362,
              "end": 373,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 374,
              "end": 375,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 427,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 406,
            "decorators": [],
            "name": "ele13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 409,
            "end": 426,
            "object": {
              "type": "Identifier",
              "start": 409,
              "end": 420,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 421,
              "end": 425,
              "decorators": [],
              "name": "idx0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 477,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 456,
            "decorators": [],
            "name": "ele14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 459,
            "end": 476,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 470,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 471,
              "end": 475,
              "decorators": [],
              "name": "idx1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 526,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 525,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 506,
            "decorators": [],
            "name": "ele15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 509,
            "end": 525,
            "object": {
              "type": "Identifier",
              "start": 509,
              "end": 520,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 521,
              "end": 524,
              "value": "0",
              "raw": "\"0\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 566,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 565,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 546,
            "decorators": [],
            "name": "ele16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 549,
            "end": 565,
            "object": {
              "type": "Identifier",
              "start": 549,
              "end": 560,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 561,
              "end": 564,
              "value": "1",
              "raw": "\"1\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 613,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 612,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 593,
            "decorators": [],
            "name": "strNumTuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 596,
            "end": 612,
            "object": {
              "type": "Identifier",
              "start": 596,
              "end": 609,
              "decorators": [],
              "name": "numTupleTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 610,
              "end": 611,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 635,
      "end": 664,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 639,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 644,
            "decorators": [],
            "name": "ele17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 647,
            "end": 663,
            "object": {
              "type": "Identifier",
              "start": 647,
              "end": 660,
              "decorators": [],
              "name": "numTupleTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 661,
              "end": 662,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 694,
      "end": 721,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 703,
            "decorators": [],
            "name": "ele19",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 706,
            "end": 721,
            "object": {
              "type": "Identifier",
              "start": 706,
              "end": 717,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "UnaryExpression",
              "start": 718,
              "end": 720,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 719,
                "end": 720,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 738,
      "end": 770,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 742,
          "end": 769,
          "id": {
            "type": "Identifier",
            "start": 742,
            "end": 752,
            "decorators": [],
            "name": "eleUnion10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 755,
            "end": 769,
            "object": {
              "type": "Identifier",
              "start": 755,
              "end": 766,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 767,
              "end": 768,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 781,
      "end": 813,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 812,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 795,
            "decorators": [],
            "name": "eleUnion11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 798,
            "end": 812,
            "object": {
              "type": "Identifier",
              "start": 798,
              "end": 809,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 810,
              "end": 811,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 865,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 864,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 847,
            "decorators": [],
            "name": "eleUnion12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 850,
            "end": 864,
            "object": {
              "type": "Identifier",
              "start": 850,
              "end": 861,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 862,
              "end": 863,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 885,
      "end": 920,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 889,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 889,
            "end": 899,
            "decorators": [],
            "name": "eleUnion13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 902,
            "end": 919,
            "object": {
              "type": "Identifier",
              "start": 902,
              "end": 913,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 914,
              "end": 918,
              "decorators": [],
              "name": "idx0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 940,
      "end": 975,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 944,
          "end": 974,
          "id": {
            "type": "Identifier",
            "start": 944,
            "end": 954,
            "decorators": [],
            "name": "eleUnion14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 957,
            "end": 974,
            "object": {
              "type": "Identifier",
              "start": 957,
              "end": 968,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 969,
              "end": 973,
              "decorators": [],
              "name": "idx1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 995,
      "end": 1029,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 999,
          "end": 1028,
          "id": {
            "type": "Identifier",
            "start": 999,
            "end": 1009,
            "decorators": [],
            "name": "eleUnion15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1012,
            "end": 1028,
            "object": {
              "type": "Identifier",
              "start": 1012,
              "end": 1023,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1024,
              "end": 1027,
              "value": "0",
              "raw": "\"0\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1040,
      "end": 1074,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1044,
          "end": 1073,
          "id": {
            "type": "Identifier",
            "start": 1044,
            "end": 1054,
            "decorators": [],
            "name": "eleUnion16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1057,
            "end": 1073,
            "object": {
              "type": "Identifier",
              "start": 1057,
              "end": 1068,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1069,
              "end": 1072,
              "value": "1",
              "raw": "\"1\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1095,
      "end": 1127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1099,
          "end": 1126,
          "id": {
            "type": "Identifier",
            "start": 1099,
            "end": 1109,
            "decorators": [],
            "name": "eleUnion20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1112,
            "end": 1126,
            "object": {
              "type": "Identifier",
              "start": 1112,
              "end": 1123,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1124,
              "end": 1125,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1139,
      "end": 1171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1170,
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1153,
            "decorators": [],
            "name": "eleUnion21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1156,
            "end": 1170,
            "object": {
              "type": "Identifier",
              "start": 1156,
              "end": 1167,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1168,
              "end": 1169,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1191,
      "end": 1223,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1195,
          "end": 1222,
          "id": {
            "type": "Identifier",
            "start": 1195,
            "end": 1205,
            "decorators": [],
            "name": "eleUnion22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1208,
            "end": 1222,
            "object": {
              "type": "Identifier",
              "start": 1208,
              "end": 1219,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1220,
              "end": 1221,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1253,
      "end": 1288,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1257,
          "end": 1287,
          "id": {
            "type": "Identifier",
            "start": 1257,
            "end": 1267,
            "decorators": [],
            "name": "eleUnion23",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1270,
            "end": 1287,
            "object": {
              "type": "Identifier",
              "start": 1270,
              "end": 1281,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1282,
              "end": 1286,
              "decorators": [],
              "name": "idx0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1318,
      "end": 1353,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1322,
          "end": 1352,
          "id": {
            "type": "Identifier",
            "start": 1322,
            "end": 1332,
            "decorators": [],
            "name": "eleUnion24",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1335,
            "end": 1352,
            "object": {
              "type": "Identifier",
              "start": 1335,
              "end": 1346,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1347,
              "end": 1351,
              "decorators": [],
              "name": "idx1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1383,
      "end": 1417,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1387,
          "end": 1416,
          "id": {
            "type": "Identifier",
            "start": 1387,
            "end": 1397,
            "decorators": [],
            "name": "eleUnion25",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1400,
            "end": 1416,
            "object": {
              "type": "Identifier",
              "start": 1400,
              "end": 1411,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1412,
              "end": 1415,
              "value": "0",
              "raw": "\"0\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1429,
      "end": 1463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1433,
          "end": 1462,
          "id": {
            "type": "Identifier",
            "start": 1433,
            "end": 1443,
            "decorators": [],
            "name": "eleUnion26",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1446,
            "end": 1462,
            "object": {
              "type": "Identifier",
              "start": 1446,
              "end": 1457,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1458,
              "end": 1461,
              "value": "1",
              "raw": "\"1\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1484,
      "end": 1514,
      "id": {
        "type": "Identifier",
        "start": 1489,
        "end": 1491,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1494,
        "end": 1513,
        "objectType": {
          "type": "TSTupleType",
          "start": 1494,
          "end": 1510,
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
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1511,
          "end": 1512,
          "literal": {
            "type": "Literal",
            "start": 1511,
            "end": 1512,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1526,
      "end": 1556,
      "id": {
        "type": "Identifier",
        "start": 1531,
        "end": 1533,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1536,
        "end": 1555,
        "objectType": {
          "type": "TSTupleType",
          "start": 1536,
          "end": 1552,
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
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1553,
          "end": 1554,
          "literal": {
            "type": "Literal",
            "start": 1553,
            "end": 1554,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1568,
      "end": 1599,
      "id": {
        "type": "Identifier",
        "start": 1573,
        "end": 1575,
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1578,
        "end": 1598,
        "objectType": {
          "type": "TSTupleType",
          "start": 1578,
          "end": 1594,
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
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1595,
          "end": 1597,
          "literal": {
            "type": "UnaryExpression",
            "start": 1595,
            "end": 1597,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 1596,
              "end": 1597,
              "value": 1,
              "raw": "1"
            },
            "prefix": true
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
