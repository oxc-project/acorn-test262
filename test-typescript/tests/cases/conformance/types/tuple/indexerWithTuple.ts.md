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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 34,
            "decorators": [],
            "name": "strNumTuple",
            "optional": false,
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
            }
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
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 45,
                "end": 47,
                "raw": "10",
                "value": 10
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 95,
            "decorators": [],
            "name": "numTupleTuple",
            "optional": false,
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
            }
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
                "raw": "10",
                "value": 10
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
                    "raw": "\"bar\"",
                    "value": "bar"
                  },
                  {
                    "type": "Literal",
                    "start": 111,
                    "end": 113,
                    "raw": "20",
                    "value": 20
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 158,
            "decorators": [],
            "name": "unionTuple1",
            "optional": false,
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
            }
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
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 166,
                "end": 171,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 216,
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
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
            }
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
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 226,
                "end": 231,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 255,
            "decorators": [],
            "name": "idx0",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 258,
            "end": 259,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 269,
            "decorators": [],
            "name": "idx1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 284,
            "decorators": [],
            "name": "ele10",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 287,
            "end": 301,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 298,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 299,
              "end": 300,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 322,
            "decorators": [],
            "name": "ele11",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 325,
            "end": 339,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 325,
              "end": 336,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 337,
              "end": 338,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 360,
            "decorators": [],
            "name": "ele12",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 363,
            "end": 377,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 363,
              "end": 374,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 375,
              "end": 376,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 407,
            "decorators": [],
            "name": "ele13",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 410,
            "end": 427,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 410,
              "end": 421,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 426,
              "decorators": [],
              "name": "idx0",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 457,
            "decorators": [],
            "name": "ele14",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 477,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 472,
              "end": 476,
              "decorators": [],
              "name": "idx1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 507,
            "decorators": [],
            "name": "ele15",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 510,
            "end": 526,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 510,
              "end": 521,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 522,
              "end": 525,
              "raw": "\"0\"",
              "value": "0"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 547,
            "decorators": [],
            "name": "ele16",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 550,
            "end": 566,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 550,
              "end": 561,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 562,
              "end": 565,
              "raw": "\"1\"",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 594,
            "decorators": [],
            "name": "strNumTuple1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 597,
            "end": 613,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 597,
              "end": 610,
              "decorators": [],
              "name": "numTupleTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 611,
              "end": 612,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 645,
            "decorators": [],
            "name": "ele17",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 648,
            "end": 664,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 648,
              "end": 661,
              "decorators": [],
              "name": "numTupleTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 704,
            "decorators": [],
            "name": "ele19",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 707,
            "end": 722,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 707,
              "end": 718,
              "decorators": [],
              "name": "strNumTuple",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "UnaryExpression",
              "start": 719,
              "end": 721,
              "argument": {
                "type": "Literal",
                "start": 720,
                "end": 721,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 753,
            "decorators": [],
            "name": "eleUnion10",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 756,
            "end": 770,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 756,
              "end": 767,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 768,
              "end": 769,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 796,
            "decorators": [],
            "name": "eleUnion11",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 799,
            "end": 813,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 799,
              "end": 810,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 811,
              "end": 812,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 848,
            "decorators": [],
            "name": "eleUnion12",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 851,
            "end": 865,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 851,
              "end": 862,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 863,
              "end": 864,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 900,
            "decorators": [],
            "name": "eleUnion13",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 903,
            "end": 920,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 903,
              "end": 914,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 915,
              "end": 919,
              "decorators": [],
              "name": "idx0",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 955,
            "decorators": [],
            "name": "eleUnion14",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 958,
            "end": 975,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 958,
              "end": 969,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 970,
              "end": 974,
              "decorators": [],
              "name": "idx1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1010,
            "decorators": [],
            "name": "eleUnion15",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1013,
            "end": 1029,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1013,
              "end": 1024,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1025,
              "end": 1028,
              "raw": "\"0\"",
              "value": "0"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1045,
            "end": 1055,
            "decorators": [],
            "name": "eleUnion16",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1058,
            "end": 1074,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1058,
              "end": 1069,
              "decorators": [],
              "name": "unionTuple1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1070,
              "end": 1073,
              "raw": "\"1\"",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1100,
            "end": 1110,
            "decorators": [],
            "name": "eleUnion20",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1113,
            "end": 1127,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1113,
              "end": 1124,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1125,
              "end": 1126,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1144,
            "end": 1154,
            "decorators": [],
            "name": "eleUnion21",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1157,
            "end": 1171,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1157,
              "end": 1168,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1169,
              "end": 1170,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1196,
            "end": 1206,
            "decorators": [],
            "name": "eleUnion22",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1209,
            "end": 1223,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1209,
              "end": 1220,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1221,
              "end": 1222,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1258,
            "end": 1268,
            "decorators": [],
            "name": "eleUnion23",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1271,
            "end": 1288,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1271,
              "end": 1282,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1283,
              "end": 1287,
              "decorators": [],
              "name": "idx0",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1323,
            "end": 1333,
            "decorators": [],
            "name": "eleUnion24",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1336,
            "end": 1353,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1336,
              "end": 1347,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1348,
              "end": 1352,
              "decorators": [],
              "name": "idx1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1388,
            "end": 1398,
            "decorators": [],
            "name": "eleUnion25",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1401,
            "end": 1417,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1401,
              "end": 1412,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1413,
              "end": 1416,
              "raw": "\"0\"",
              "value": "0"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1434,
            "end": 1444,
            "decorators": [],
            "name": "eleUnion26",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1447,
            "end": 1463,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1447,
              "end": 1458,
              "decorators": [],
              "name": "unionTuple2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1459,
              "end": 1462,
              "raw": "\"1\"",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1485,
      "end": 1515,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1490,
        "end": 1492,
        "decorators": [],
        "name": "t1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1495,
        "end": 1514,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1512,
          "end": 1513,
          "literal": {
            "type": "Literal",
            "start": 1512,
            "end": 1513,
            "raw": "0",
            "value": 0
          }
        },
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
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1527,
      "end": 1557,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1532,
        "end": 1534,
        "decorators": [],
        "name": "t2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1537,
        "end": 1556,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1554,
          "end": 1555,
          "literal": {
            "type": "Literal",
            "start": 1554,
            "end": 1555,
            "raw": "1",
            "value": 1
          }
        },
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
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1569,
      "end": 1600,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1574,
        "end": 1576,
        "decorators": [],
        "name": "t3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1579,
        "end": 1599,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1596,
          "end": 1598,
          "literal": {
            "type": "UnaryExpression",
            "start": 1596,
            "end": 1598,
            "argument": {
              "type": "Literal",
              "start": 1597,
              "end": 1598,
              "raw": "1",
              "value": 1
            },
            "operator": "-",
            "prefix": true
          }
        },
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
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
