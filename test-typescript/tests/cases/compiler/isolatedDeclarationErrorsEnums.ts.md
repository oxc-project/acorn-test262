__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 547,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 45,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "computed",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 35,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 44,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 47,
      "end": 141,
      "body": {
        "type": "TSEnumBody",
        "start": 54,
        "end": 141,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 75,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 64,
              "end": 75,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 64,
                "end": 72,
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 81,
            "end": 96,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 85,
              "end": 96,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 94,
                  "end": 95,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 85,
                "end": 93,
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 102,
            "end": 117,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 106,
              "end": 117,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 115,
                  "end": 116,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 106,
                "end": 114,
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 123,
            "end": 138,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 127,
              "end": 138,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 136,
                  "end": 137,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 144,
      "end": 178,
      "body": {
        "type": "TSEnumBody",
        "start": 151,
        "end": 178,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 157,
            "end": 164,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 161,
              "end": 164,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 170,
            "end": 175,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 181,
      "end": 305,
      "body": {
        "type": "TSEnumBody",
        "start": 191,
        "end": 305,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 197,
            "end": 207,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 207,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 201,
                "end": 202,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 206,
                "end": 207,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 213,
            "end": 223,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 217,
              "end": 223,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 217,
                "end": 218,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 222,
                "end": 223,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 229,
            "end": 239,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 233,
              "end": 239,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 233,
                "end": 234,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 239,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 245,
            "end": 255,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 247,
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 250,
              "end": 255,
              "operator": "|",
              "left": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 261,
            "end": 278,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 261,
              "end": 264,
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 267,
              "end": 278,
              "operator": "|",
              "left": {
                "type": "MemberExpression",
                "start": 267,
                "end": 274,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 271,
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 274,
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 284,
            "end": 302,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 286,
              "decorators": [],
              "name": "AC",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 289,
              "end": 302,
              "operator": "|",
              "left": {
                "type": "MemberExpression",
                "start": 289,
                "end": 298,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 293,
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 294,
                  "end": 297,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 190,
        "decorators": [],
        "name": "Flag",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 315,
            "decorators": [],
            "name": "EV",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 318,
            "end": 319,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 321,
      "end": 415,
      "body": {
        "type": "TSEnumBody",
        "start": 335,
        "end": 415,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 341,
            "end": 351,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 345,
              "end": 351,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 345,
                "end": 346,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 350,
                "end": 351,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 357,
            "end": 363,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 361,
              "end": 363,
              "decorators": [],
              "name": "EV",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 369,
            "end": 388,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 369,
              "end": 373,
              "decorators": [],
              "name": "ABCD",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 376,
              "end": 388,
              "operator": "|",
              "left": {
                "type": "MemberExpression",
                "start": 376,
                "end": 384,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 380,
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 384,
                  "decorators": [],
                  "name": "ABC",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 394,
            "end": 412,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 394,
              "end": 396,
              "decorators": [],
              "name": "AC",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 399,
              "end": 412,
              "operator": "|",
              "left": {
                "type": "MemberExpression",
                "start": 399,
                "end": 408,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 404,
                  "end": 407,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 334,
        "decorators": [],
        "name": "ExtFlags",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 418,
      "end": 471,
      "body": {
        "type": "TSEnumBody",
        "start": 427,
        "end": 471,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 433,
            "end": 440,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 437,
              "end": 440,
              "raw": "\"A\"",
              "value": "A",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 446,
            "end": 453,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 450,
              "end": 453,
              "raw": "\"B\"",
              "value": "B",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 459,
            "end": 469,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 459,
              "end": 461,
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 464,
              "end": 469,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 426,
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 474,
      "end": 547,
      "body": {
        "type": "TSEnumBody",
        "start": 486,
        "end": 547,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 492,
            "end": 499,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 496,
              "end": 499,
              "raw": "\"D\"",
              "value": "D",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 505,
            "end": 521,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 505,
              "end": 508,
              "decorators": [],
              "name": "ABD",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 511,
              "end": 521,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 511,
                "end": 517,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 514,
                  "decorators": [],
                  "name": "Str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 517,
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 520,
                "end": 521,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 527,
            "end": 544,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "decorators": [],
              "name": "AD",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 532,
              "end": 544,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 532,
                "end": 540,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 535,
                  "decorators": [],
                  "name": "Str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 536,
                  "end": 539,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 485,
        "decorators": [],
        "name": "StrExt",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
