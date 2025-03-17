__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 1614,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 34,
            "name": "strNumTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 18,
                "end": 34,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 27,
                    "end": 33
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 37,
            "end": 48,
            "elements": [
              {
                "type": "Literal",
                "start": 38,
                "end": 43,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Literal",
                "start": 45,
                "end": 47,
                "value": 10,
                "raw": "10"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 95,
            "name": "numTupleTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 69,
                "end": 95,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSTupleType",
                    "start": 78,
                    "end": 94,
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 79,
                        "end": 85
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 87,
                        "end": 93
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 98,
            "end": 115,
            "elements": [
              {
                "type": "Literal",
                "start": 99,
                "end": 101,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 103,
                "end": 114,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 104,
                    "end": 109,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  {
                    "type": "Literal",
                    "start": 111,
                    "end": 113,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 158,
            "name": "unionTuple1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 134,
                "end": 158,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 135,
                    "end": 141
                  },
                  {
                    "type": "TSUnionType",
                    "start": 143,
                    "end": 157,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 143,
                        "end": 149
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 161,
            "end": 172,
            "elements": [
              {
                "type": "Literal",
                "start": 162,
                "end": 164,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 166,
                "end": 171,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 216,
            "name": "unionTuple2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 191,
                "end": 216,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 192,
                    "end": 199
                  },
                  {
                    "type": "TSUnionType",
                    "start": 201,
                    "end": 215,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 209,
                        "end": 215
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 219,
            "end": 232,
            "elements": [
              {
                "type": "Literal",
                "start": 220,
                "end": 224,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 226,
                "end": 231,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 255,
            "name": "idx0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 258,
            "end": 259,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 269,
            "name": "idx1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 284,
            "name": "ele10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 287,
            "end": 301,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 298,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 299,
              "end": 300,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 322,
            "name": "ele11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 325,
            "end": 339,
            "object": {
              "type": "Identifier",
              "start": 325,
              "end": 336,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 337,
              "end": 338,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 360,
            "name": "ele12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 363,
            "end": 377,
            "object": {
              "type": "Identifier",
              "start": 363,
              "end": 374,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 375,
              "end": 376,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 398,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 407,
            "name": "ele13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 410,
            "end": 427,
            "object": {
              "type": "Identifier",
              "start": 410,
              "end": 421,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 426,
              "name": "idx0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 457,
            "name": "ele14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 477,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 472,
              "end": 476,
              "name": "idx1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 498,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 507,
            "name": "ele15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 510,
            "end": 526,
            "object": {
              "type": "Identifier",
              "start": 510,
              "end": 521,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 522,
              "end": 525,
              "value": "0",
              "raw": "\"0\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 566,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 547,
            "name": "ele16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 550,
            "end": 566,
            "object": {
              "type": "Identifier",
              "start": 550,
              "end": 561,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 562,
              "end": 565,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 613,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 594,
            "name": "strNumTuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 597,
            "end": 613,
            "object": {
              "type": "Identifier",
              "start": 597,
              "end": 610,
              "name": "numTupleTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 611,
              "end": 612,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 645,
            "name": "ele17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 648,
            "end": 664,
            "object": {
              "type": "Identifier",
              "start": 648,
              "end": 661,
              "name": "numTupleTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 695,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 722,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 704,
            "name": "ele19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 707,
            "end": 722,
            "object": {
              "type": "Identifier",
              "start": 707,
              "end": 718,
              "name": "strNumTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "UnaryExpression",
              "start": 719,
              "end": 721,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 720,
                "end": 721,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 771,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 743,
          "end": 770,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 753,
            "name": "eleUnion10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 756,
            "end": 770,
            "object": {
              "type": "Identifier",
              "start": 756,
              "end": 767,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 768,
              "end": 769,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 782,
      "end": 814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 813,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 796,
            "name": "eleUnion11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 799,
            "end": 813,
            "object": {
              "type": "Identifier",
              "start": 799,
              "end": 810,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 811,
              "end": 812,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 834,
      "end": 866,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 865,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 848,
            "name": "eleUnion12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 851,
            "end": 865,
            "object": {
              "type": "Identifier",
              "start": 851,
              "end": 862,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 863,
              "end": 864,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 886,
      "end": 921,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 890,
          "end": 920,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 900,
            "name": "eleUnion13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 903,
            "end": 920,
            "object": {
              "type": "Identifier",
              "start": 903,
              "end": 914,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 915,
              "end": 919,
              "name": "idx0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 941,
      "end": 976,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 945,
          "end": 975,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 955,
            "name": "eleUnion14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 958,
            "end": 975,
            "object": {
              "type": "Identifier",
              "start": 958,
              "end": 969,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 970,
              "end": 974,
              "name": "idx1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 996,
      "end": 1030,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1000,
          "end": 1029,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1010,
            "name": "eleUnion15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1013,
            "end": 1029,
            "object": {
              "type": "Identifier",
              "start": 1013,
              "end": 1024,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1025,
              "end": 1028,
              "value": "0",
              "raw": "\"0\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1041,
      "end": 1075,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1045,
          "end": 1074,
          "id": {
            "type": "Identifier",
            "start": 1045,
            "end": 1055,
            "name": "eleUnion16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1058,
            "end": 1074,
            "object": {
              "type": "Identifier",
              "start": 1058,
              "end": 1069,
              "name": "unionTuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1070,
              "end": 1073,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1096,
      "end": 1128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1100,
          "end": 1127,
          "id": {
            "type": "Identifier",
            "start": 1100,
            "end": 1110,
            "name": "eleUnion20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1113,
            "end": 1127,
            "object": {
              "type": "Identifier",
              "start": 1113,
              "end": 1124,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1125,
              "end": 1126,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1140,
      "end": 1172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1144,
          "end": 1171,
          "id": {
            "type": "Identifier",
            "start": 1144,
            "end": 1154,
            "name": "eleUnion21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1157,
            "end": 1171,
            "object": {
              "type": "Identifier",
              "start": 1157,
              "end": 1168,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1169,
              "end": 1170,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1192,
      "end": 1224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1196,
          "end": 1223,
          "id": {
            "type": "Identifier",
            "start": 1196,
            "end": 1206,
            "name": "eleUnion22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1209,
            "end": 1223,
            "object": {
              "type": "Identifier",
              "start": 1209,
              "end": 1220,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1221,
              "end": 1222,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1254,
      "end": 1289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1258,
          "end": 1288,
          "id": {
            "type": "Identifier",
            "start": 1258,
            "end": 1268,
            "name": "eleUnion23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1271,
            "end": 1288,
            "object": {
              "type": "Identifier",
              "start": 1271,
              "end": 1282,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1283,
              "end": 1287,
              "name": "idx0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1319,
      "end": 1354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1323,
          "end": 1353,
          "id": {
            "type": "Identifier",
            "start": 1323,
            "end": 1333,
            "name": "eleUnion24",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1336,
            "end": 1353,
            "object": {
              "type": "Identifier",
              "start": 1336,
              "end": 1347,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1348,
              "end": 1352,
              "name": "idx1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
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
      "end": 1418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1388,
          "end": 1417,
          "id": {
            "type": "Identifier",
            "start": 1388,
            "end": 1398,
            "name": "eleUnion25",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1401,
            "end": 1417,
            "object": {
              "type": "Identifier",
              "start": 1401,
              "end": 1412,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1413,
              "end": 1416,
              "value": "0",
              "raw": "\"0\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1430,
      "end": 1464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1434,
          "end": 1463,
          "id": {
            "type": "Identifier",
            "start": 1434,
            "end": 1444,
            "name": "eleUnion26",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1447,
            "end": 1463,
            "object": {
              "type": "Identifier",
              "start": 1447,
              "end": 1458,
              "name": "unionTuple2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1459,
              "end": 1462,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1485,
      "end": 1515,
      "id": {
        "type": "Identifier",
        "start": 1490,
        "end": 1492,
        "name": "t1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1495,
        "end": 1514,
        "objectType": {
          "type": "TSTupleType",
          "start": 1495,
          "end": 1511,
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1496,
              "end": 1502
            },
            {
              "type": "TSNumberKeyword",
              "start": 1504,
              "end": 1510
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1512,
          "end": 1513,
          "literal": {
            "type": "Literal",
            "start": 1512,
            "end": 1513,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1527,
      "end": 1557,
      "id": {
        "type": "Identifier",
        "start": 1532,
        "end": 1534,
        "name": "t2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1537,
        "end": 1556,
        "objectType": {
          "type": "TSTupleType",
          "start": 1537,
          "end": 1553,
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1538,
              "end": 1544
            },
            {
              "type": "TSNumberKeyword",
              "start": 1546,
              "end": 1552
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1554,
          "end": 1555,
          "literal": {
            "type": "Literal",
            "start": 1554,
            "end": 1555,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1569,
      "end": 1600,
      "id": {
        "type": "Identifier",
        "start": 1574,
        "end": 1576,
        "name": "t3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1579,
        "end": 1599,
        "objectType": {
          "type": "TSTupleType",
          "start": 1579,
          "end": 1595,
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1580,
              "end": 1586
            },
            {
              "type": "TSNumberKeyword",
              "start": 1588,
              "end": 1594
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1596,
          "end": 1598,
          "literal": {
            "type": "UnaryExpression",
            "start": 1596,
            "end": 1598,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1597,
              "end": 1598,
              "value": 1,
              "raw": "1"
            }
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
