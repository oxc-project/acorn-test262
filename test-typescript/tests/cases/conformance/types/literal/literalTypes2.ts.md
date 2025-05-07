__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3913,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 41,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 41,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 587,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 113,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 109,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 133,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 132,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 128,
                  "end": 132,
                  "argument": {
                    "type": "Literal",
                    "start": 129,
                    "end": 132,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 138,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 142,
                "end": 152,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 144,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 147,
                  "end": 152,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 147,
                    "end": 148,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 151,
                    "end": 152,
                    "raw": "4",
                    "value": 4,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 173,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 162,
                "end": 172,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 164,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 167,
                  "end": 172,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 178,
            "end": 190,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 182,
                "end": 189,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 187,
                  "end": 189,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 217,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 201,
                  "decorators": [],
                  "name": "v6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 204,
                  "end": 217,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 204,
                    "end": 209,
                    "raw": "\"abc\"",
                    "value": "abc",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 212,
                    "end": 217,
                    "raw": "\"def\"",
                    "value": "def",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 223,
            "end": 237,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 236,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "decorators": [],
                  "name": "v7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 232,
                  "end": 236,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 242,
            "end": 255,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 246,
                "end": 254,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 248,
                  "decorators": [],
                  "name": "v8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 251,
                  "end": 254,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 260,
            "end": 271,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 270,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 266,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 269,
                  "end": 270,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 276,
            "end": 290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 280,
                "end": 289,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 285,
                  "end": 289,
                  "argument": {
                    "type": "Literal",
                    "start": 286,
                    "end": 289,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 295,
            "end": 310,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 309,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 301,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 304,
                  "end": 309,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 304,
                    "end": 305,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 308,
                    "end": 309,
                    "raw": "4",
                    "value": 4,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 315,
            "end": 330,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 329,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 324,
                  "end": 329,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 335,
            "end": 347,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 339,
                "end": 346,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 344,
                  "end": 346,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 352,
            "end": 375,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 356,
                "end": 374,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 358,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 361,
                  "end": 374,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 361,
                    "end": 366,
                    "raw": "\"abc\"",
                    "value": "abc",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 369,
                    "end": 374,
                    "raw": "\"def\"",
                    "value": "def",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 380,
            "end": 394,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 393,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 386,
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 389,
                  "end": 393,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 399,
            "end": 412,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 403,
                "end": 411,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 405,
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 408,
                  "end": 411,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 417,
            "end": 430,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 423,
                "end": 429,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 425,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 428,
                  "end": 429,
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
            "type": "VariableDeclaration",
            "start": 435,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 450,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 443,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 446,
                  "end": 450,
                  "argument": {
                    "type": "Literal",
                    "start": 447,
                    "end": 450,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 456,
            "end": 473,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 462,
                "end": 472,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 464,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 467,
                  "end": 472,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 467,
                    "end": 468,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 471,
                    "end": 472,
                    "raw": "4",
                    "value": 4,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 478,
            "end": 495,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 484,
                "end": 494,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 486,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 489,
                  "end": 494,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 500,
            "end": 514,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 506,
                "end": 513,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 508,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 511,
                  "end": 513,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 519,
            "end": 544,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 525,
                "end": 543,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 527,
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 530,
                  "end": 543,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 530,
                    "end": 535,
                    "raw": "\"abc\"",
                    "value": "abc",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 538,
                    "end": 543,
                    "raw": "\"def\"",
                    "value": "def",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 549,
            "end": 565,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 555,
                "end": 564,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 557,
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 560,
                  "end": 564,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 570,
            "end": 585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 576,
                "end": 584,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 578,
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 581,
                  "end": 584,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 56,
          "end": 62,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 61,
            "end": 62,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 64,
          "end": 74,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 69,
            "end": 74,
            "raw": "\"abc\"",
            "value": "abc",
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 76,
          "end": 85,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 81,
            "end": 85,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 87,
          "end": 95,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 87,
            "end": 89,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "MemberExpression",
            "start": 92,
            "end": 95,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 589,
      "end": 904,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 663,
        "end": 904,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 669,
            "end": 683,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 673,
                "end": 682,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 678,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 675,
                    "end": 678,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 677,
                      "end": 678,
                      "literal": {
                        "type": "Literal",
                        "start": 677,
                        "end": 678,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 681,
                  "end": 682,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 688,
            "end": 708,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 692,
                "end": 707,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 700,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 694,
                    "end": 700,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 696,
                      "end": 700,
                      "literal": {
                        "type": "UnaryExpression",
                        "start": 696,
                        "end": 700,
                        "argument": {
                          "type": "Literal",
                          "start": 697,
                          "end": 700,
                          "raw": "123",
                          "value": 123,
                          "regex": null,
                          "bigint": null
                        },
                        "operator": "-",
                        "prefix": true
                      }
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 703,
                  "end": 707,
                  "argument": {
                    "type": "Literal",
                    "start": 704,
                    "end": 707,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 713,
            "end": 735,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 717,
                "end": 734,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 726,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 719,
                    "end": 726,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 721,
                      "end": 726,
                      "literal": {
                        "type": "Literal",
                        "start": 721,
                        "end": 726,
                        "raw": "\"abc\"",
                        "value": "abc",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 729,
                  "end": 734,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 740,
            "end": 760,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 744,
                "end": 759,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 752,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 746,
                    "end": 752,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 748,
                      "end": 752,
                      "literal": {
                        "type": "Literal",
                        "start": 748,
                        "end": 752,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 755,
                  "end": 759,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 765,
            "end": 783,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 769,
                "end": 782,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 776,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 771,
                    "end": 776,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 773,
                      "end": 776,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 773,
                        "end": 776,
                        "left": {
                          "type": "Identifier",
                          "start": 773,
                          "end": 774,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 776,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 779,
                  "end": 782,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 779,
                    "end": 780,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 781,
                    "end": 782,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 788,
            "end": 802,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 792,
                "end": 801,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 797,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 794,
                    "end": 797,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 796,
                      "end": 797,
                      "literal": {
                        "type": "Literal",
                        "start": 796,
                        "end": 797,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 800,
                  "end": 801,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 807,
            "end": 827,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 811,
                "end": 826,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 811,
                  "end": 819,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 813,
                    "end": 819,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 815,
                      "end": 819,
                      "literal": {
                        "type": "UnaryExpression",
                        "start": 815,
                        "end": 819,
                        "argument": {
                          "type": "Literal",
                          "start": 816,
                          "end": 819,
                          "raw": "123",
                          "value": 123,
                          "regex": null,
                          "bigint": null
                        },
                        "operator": "-",
                        "prefix": true
                      }
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 822,
                  "end": 826,
                  "argument": {
                    "type": "Literal",
                    "start": 823,
                    "end": 826,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 832,
            "end": 854,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 836,
                "end": 853,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 836,
                  "end": 845,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 838,
                    "end": 845,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 840,
                      "end": 845,
                      "literal": {
                        "type": "Literal",
                        "start": 840,
                        "end": 845,
                        "raw": "\"abc\"",
                        "value": "abc",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 848,
                  "end": 853,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 859,
            "end": 879,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 863,
                "end": 878,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 871,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 865,
                    "end": 871,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 867,
                      "end": 871,
                      "literal": {
                        "type": "Literal",
                        "start": 867,
                        "end": 871,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 874,
                  "end": 878,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 884,
            "end": 902,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 888,
                "end": 901,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 895,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 890,
                    "end": 895,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 892,
                      "end": 895,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 892,
                        "end": 895,
                        "left": {
                          "type": "Identifier",
                          "start": 892,
                          "end": 893,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 894,
                          "end": 895,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 898,
                  "end": 901,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 899,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 900,
                    "end": 901,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 600,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 601,
          "end": 610,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 601,
            "end": 606,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 606,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 605,
                "end": 606,
                "literal": {
                  "type": "Literal",
                  "start": 605,
                  "end": 606,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 609,
            "end": 610,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 612,
          "end": 629,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 612,
            "end": 621,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 614,
              "end": 621,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 616,
                "end": 621,
                "literal": {
                  "type": "Literal",
                  "start": 616,
                  "end": 621,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 624,
            "end": 629,
            "raw": "\"abc\"",
            "value": "abc",
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 631,
          "end": 646,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 631,
            "end": 639,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 633,
              "end": 639,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 635,
                "end": 639,
                "literal": {
                  "type": "Literal",
                  "start": 635,
                  "end": 639,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 642,
            "end": 646,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 648,
          "end": 661,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 648,
            "end": 655,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 655,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 652,
                "end": 655,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 652,
                  "end": 655,
                  "left": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 655,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "MemberExpression",
            "start": 658,
            "end": 661,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 658,
              "end": 659,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 906,
      "end": 1387,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 920,
        "end": 1387,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 926,
            "end": 950,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 932,
                "end": 949,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 932,
                  "end": 934,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 937,
                  "end": 949,
                  "alternate": {
                    "type": "Literal",
                    "start": 948,
                    "end": 949,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 944,
                    "end": 945,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 937,
                    "end": 941,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 955,
            "end": 983,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 961,
                "end": 982,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 963,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 966,
                  "end": 982,
                  "alternate": {
                    "type": "Literal",
                    "start": 977,
                    "end": 982,
                    "raw": "\"two\"",
                    "value": "two",
                    "regex": null,
                    "bigint": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 973,
                    "end": 974,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 970,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 988,
            "end": 1030,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 994,
                "end": 1029,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 996,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 999,
                  "end": 1029,
                  "alternate": {
                    "type": "ConditionalExpression",
                    "start": 1012,
                    "end": 1029,
                    "alternate": {
                      "type": "Literal",
                      "start": 1026,
                      "end": 1029,
                      "raw": "123",
                      "value": 123,
                      "regex": null,
                      "bigint": null
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 1019,
                      "end": 1023,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 1012,
                      "end": 1016,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 1006,
                    "end": 1009,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1006,
                      "end": 1007,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1009,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 999,
                    "end": 1003,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1035,
            "end": 1066,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1041,
                "end": 1065,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1043,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1046,
                  "end": 1065,
                  "alternate": {
                    "type": "Literal",
                    "start": 1061,
                    "end": 1065,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1053,
                    "end": 1058,
                    "raw": "\"abc\"",
                    "value": "abc",
                    "regex": null,
                    "bigint": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1050,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1071,
            "end": 1105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1077,
                "end": 1104,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1079,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1082,
                  "end": 1104,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1095,
                    "end": 1104,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1089,
                    "end": 1092,
                    "raw": "456",
                    "value": 456,
                    "regex": null,
                    "bigint": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1086,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1110,
            "end": 1150,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1116,
                "end": 1149,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1133,
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1118,
                    "end": 1133,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1120,
                      "end": 1133,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1122,
                          "end": 1131,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1122,
                            "end": 1126,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1126,
                            "end": 1131,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 1128,
                              "end": 1131,
                              "literal": {
                                "type": "Literal",
                                "start": 1128,
                                "end": 1131,
                                "raw": "123",
                                "value": 123,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1136,
                  "end": 1149,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1138,
                      "end": 1147,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1138,
                        "end": 1142,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1144,
                        "end": 1147,
                        "raw": "123",
                        "value": 123,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1155,
            "end": 1201,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1161,
                "end": 1200,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1161,
                  "end": 1187,
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1163,
                    "end": 1187,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 1165,
                      "end": 1187,
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "start": 1166,
                          "end": 1171,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 1166,
                              "end": 1167,
                              "literal": {
                                "type": "Literal",
                                "start": 1166,
                                "end": 1167,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 1170,
                              "end": 1171,
                              "literal": {
                                "type": "Literal",
                                "start": 1170,
                                "end": 1171,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          ]
                        },
                        {
                          "type": "TSUnionType",
                          "start": 1173,
                          "end": 1186,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 1173,
                              "end": 1178,
                              "literal": {
                                "type": "Literal",
                                "start": 1173,
                                "end": 1178,
                                "raw": "\"foo\"",
                                "value": "foo",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 1181,
                              "end": 1186,
                              "literal": {
                                "type": "Literal",
                                "start": 1181,
                                "end": 1186,
                                "raw": "\"bar\"",
                                "value": "bar",
                                "regex": null,
                                "bigint": null
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1190,
                  "end": 1200,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1191,
                      "end": 1192,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 1194,
                      "end": 1199,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1206,
            "end": 1249,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1212,
                "end": 1248,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1214,
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1217,
                  "end": 1248,
                  "alternate": {
                    "type": "ConditionalExpression",
                    "start": 1229,
                    "end": 1248,
                    "alternate": {
                      "type": "Literal",
                      "start": 1241,
                      "end": 1248,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 1236,
                      "end": 1238,
                      "decorators": [],
                      "name": "c7",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 1229,
                      "end": 1233,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1224,
                    "end": 1226,
                    "decorators": [],
                    "name": "c6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1217,
                    "end": 1221,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1254,
            "end": 1266,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1258,
                "end": 1265,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1258,
                  "end": 1260,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1265,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1271,
            "end": 1283,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1275,
                "end": 1282,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1277,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1280,
                  "end": 1282,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1288,
            "end": 1300,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1292,
                "end": 1299,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1292,
                  "end": 1294,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1297,
                  "end": 1299,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1305,
            "end": 1317,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1309,
                "end": 1316,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1309,
                  "end": 1311,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1314,
                  "end": 1316,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1322,
            "end": 1334,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1326,
                "end": 1333,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1326,
                  "end": 1328,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1331,
                  "end": 1333,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1339,
            "end": 1351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1343,
                "end": 1350,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1345,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1350,
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1356,
            "end": 1368,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1360,
                "end": 1367,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1362,
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1365,
                  "end": 1367,
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1373,
            "end": 1385,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1377,
                "end": 1384,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1377,
                  "end": 1379,
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1382,
                  "end": 1384,
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 915,
        "end": 917,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1389,
      "end": 1723,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1398,
        "end": 1723,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1404,
            "end": 1411,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1404,
              "end": 1406,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1409,
              "end": 1410,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1416,
            "end": 1426,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1416,
              "end": 1418,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "UnaryExpression",
              "start": 1421,
              "end": 1425,
              "argument": {
                "type": "Literal",
                "start": 1422,
                "end": 1425,
                "raw": "123",
                "value": 123,
                "regex": null,
                "bigint": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1431,
            "end": 1442,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1431,
              "end": 1433,
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 1436,
              "end": 1441,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1436,
                "end": 1437,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 1440,
                "end": 1441,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1447,
            "end": 1458,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1447,
              "end": 1449,
              "decorators": [],
              "name": "x4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1452,
              "end": 1457,
              "raw": "\"abc\"",
              "value": "abc",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1463,
            "end": 1471,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1463,
              "end": 1465,
              "decorators": [],
              "name": "x5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1468,
              "end": 1470,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1476,
            "end": 1495,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1476,
              "end": 1478,
              "decorators": [],
              "name": "x6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 1481,
              "end": 1494,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1481,
                "end": 1486,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 1489,
                "end": 1494,
                "raw": "\"def\"",
                "value": "def",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1500,
            "end": 1510,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1500,
              "end": 1502,
              "decorators": [],
              "name": "x7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1505,
              "end": 1509,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1515,
            "end": 1524,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1515,
              "end": 1517,
              "decorators": [],
              "name": "x8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 1520,
              "end": 1523,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1520,
                "end": 1521,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1522,
                "end": 1523,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1529,
            "end": 1545,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1538,
              "end": 1540,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1543,
              "end": 1544,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1550,
            "end": 1569,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1559,
              "end": 1561,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "UnaryExpression",
              "start": 1564,
              "end": 1568,
              "argument": {
                "type": "Literal",
                "start": 1565,
                "end": 1568,
                "raw": "123",
                "value": 123,
                "regex": null,
                "bigint": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1574,
            "end": 1594,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1583,
              "end": 1585,
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 1588,
              "end": 1593,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1588,
                "end": 1589,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 1592,
                "end": 1593,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1599,
            "end": 1619,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1608,
              "end": 1610,
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1613,
              "end": 1618,
              "raw": "\"abc\"",
              "value": "abc",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1624,
            "end": 1641,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1633,
              "end": 1635,
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1638,
              "end": 1640,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1646,
            "end": 1674,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1655,
              "end": 1657,
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 1660,
              "end": 1673,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1660,
                "end": 1665,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 1668,
                "end": 1673,
                "raw": "\"def\"",
                "value": "def",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1679,
            "end": 1698,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1688,
              "end": 1690,
              "decorators": [],
              "name": "c7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1693,
              "end": 1697,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1703,
            "end": 1721,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1712,
              "end": 1714,
              "decorators": [],
              "name": "c8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 1717,
              "end": 1720,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1717,
                "end": 1718,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1395,
        "end": 1397,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1725,
      "end": 1944,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1739,
        "end": 1944,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1745,
            "end": 1775,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1751,
                "end": 1774,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1751,
                  "end": 1753,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1756,
                  "end": 1774,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1758,
                      "end": 1762,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1758,
                        "end": 1759,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1761,
                        "end": 1762,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1764,
                      "end": 1772,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1764,
                        "end": 1765,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1767,
                        "end": 1772,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1780,
            "end": 1843,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1786,
                "end": 1842,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1786,
                  "end": 1821,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1788,
                    "end": 1821,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1790,
                      "end": 1821,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1792,
                          "end": 1802,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1792,
                            "end": 1793,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1794,
                            "end": 1801,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1796,
                              "end": 1801,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 1796,
                                  "end": 1797,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1796,
                                    "end": 1797,
                                    "raw": "0",
                                    "value": 0,
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 1800,
                                  "end": 1801,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1800,
                                    "end": 1801,
                                    "raw": "1",
                                    "value": 1,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1803,
                          "end": 1819,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1803,
                            "end": 1804,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1804,
                            "end": 1819,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1806,
                              "end": 1819,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 1806,
                                  "end": 1811,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1806,
                                    "end": 1811,
                                    "raw": "\"foo\"",
                                    "value": "foo",
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 1814,
                                  "end": 1819,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1814,
                                    "end": 1819,
                                    "raw": "\"bar\"",
                                    "value": "bar",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1824,
                  "end": 1842,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1826,
                      "end": 1830,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1827,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1829,
                        "end": 1830,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1832,
                      "end": 1840,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1832,
                        "end": 1833,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1835,
                        "end": 1840,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1848,
            "end": 1876,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1852,
                "end": 1875,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1852,
                  "end": 1854,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1857,
                  "end": 1875,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1859,
                      "end": 1863,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1859,
                        "end": 1860,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1862,
                        "end": 1863,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1865,
                      "end": 1873,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1865,
                        "end": 1866,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1868,
                        "end": 1873,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1881,
            "end": 1942,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1885,
                "end": 1941,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1885,
                  "end": 1920,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1887,
                    "end": 1920,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1889,
                      "end": 1920,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1891,
                          "end": 1901,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1891,
                            "end": 1892,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1893,
                            "end": 1900,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1895,
                              "end": 1900,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 1895,
                                  "end": 1896,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1895,
                                    "end": 1896,
                                    "raw": "0",
                                    "value": 0,
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 1899,
                                  "end": 1900,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1899,
                                    "end": 1900,
                                    "raw": "1",
                                    "value": 1,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1902,
                          "end": 1918,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1902,
                            "end": 1903,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1903,
                            "end": 1918,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1905,
                              "end": 1918,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 1905,
                                  "end": 1910,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1905,
                                    "end": 1910,
                                    "raw": "\"foo\"",
                                    "value": "foo",
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 1913,
                                  "end": 1918,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1913,
                                    "end": 1918,
                                    "raw": "\"bar\"",
                                    "value": "bar",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1923,
                  "end": 1941,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1925,
                      "end": 1929,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1925,
                        "end": 1926,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1928,
                        "end": 1929,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1931,
                      "end": 1939,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1931,
                        "end": 1932,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1934,
                        "end": 1939,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1734,
        "end": 1736,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1946,
      "end": 2173,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1960,
        "end": 2173,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1966,
            "end": 1988,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1972,
                "end": 1987,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1972,
                  "end": 1974,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1977,
                  "end": 1987,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1978,
                      "end": 1979,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 1981,
                      "end": 1986,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1993,
            "end": 2030,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1999,
                "end": 2029,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1999,
                  "end": 2016,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2001,
                    "end": 2016,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2003,
                      "end": 2016,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 2004,
                        "end": 2013,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 2004,
                            "end": 2005,
                            "literal": {
                              "type": "Literal",
                              "start": 2004,
                              "end": 2005,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 2008,
                            "end": 2013,
                            "literal": {
                              "type": "Literal",
                              "start": 2008,
                              "end": 2013,
                              "raw": "\"foo\"",
                              "value": "foo",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2019,
                  "end": 2029,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2020,
                      "end": 2021,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 2023,
                      "end": 2028,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2035,
            "end": 2069,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2041,
                "end": 2068,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2041,
                  "end": 2055,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2043,
                    "end": 2055,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 2045,
                      "end": 2055,
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "start": 2046,
                          "end": 2047,
                          "literal": {
                            "type": "Literal",
                            "start": 2046,
                            "end": 2047,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2049,
                          "end": 2054,
                          "literal": {
                            "type": "Literal",
                            "start": 2049,
                            "end": 2054,
                            "raw": "\"foo\"",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2058,
                  "end": 2068,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2059,
                      "end": 2060,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 2062,
                      "end": 2067,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2074,
            "end": 2094,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2078,
                "end": 2093,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2078,
                  "end": 2080,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2083,
                  "end": 2093,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2084,
                      "end": 2085,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 2087,
                      "end": 2092,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2099,
            "end": 2134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2103,
                "end": 2133,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2120,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2105,
                    "end": 2120,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2107,
                      "end": 2120,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 2108,
                        "end": 2117,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 2108,
                            "end": 2109,
                            "literal": {
                              "type": "Literal",
                              "start": 2108,
                              "end": 2109,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 2112,
                            "end": 2117,
                            "literal": {
                              "type": "Literal",
                              "start": 2112,
                              "end": 2117,
                              "raw": "\"foo\"",
                              "value": "foo",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2123,
                  "end": 2133,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2124,
                      "end": 2125,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 2127,
                      "end": 2132,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2139,
            "end": 2171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2143,
                "end": 2170,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2143,
                  "end": 2157,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2145,
                    "end": 2157,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 2147,
                      "end": 2157,
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "start": 2148,
                          "end": 2149,
                          "literal": {
                            "type": "Literal",
                            "start": 2148,
                            "end": 2149,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2151,
                          "end": 2156,
                          "literal": {
                            "type": "Literal",
                            "start": 2151,
                            "end": 2156,
                            "raw": "\"foo\"",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2160,
                  "end": 2170,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2161,
                      "end": 2162,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 2164,
                      "end": 2169,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1955,
        "end": 1957,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2175,
      "end": 2348,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2189,
        "end": 2348,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2195,
            "end": 2269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2201,
                "end": 2268,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 2201,
                  "end": 2234,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2203,
                      "end": 2212,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2203,
                        "end": 2205,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2203,
                        "end": 2212,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2203,
                          "end": 2205,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2208,
                          "end": 2212,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2214,
                      "end": 2220,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2214,
                        "end": 2216,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2214,
                        "end": 2220,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2214,
                          "end": 2216,
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2219,
                          "end": 2220,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2222,
                      "end": 2232,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2222,
                        "end": 2224,
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2222,
                        "end": 2232,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2222,
                          "end": 2224,
                          "decorators": [],
                          "name": "c3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2227,
                          "end": 2232,
                          "raw": "\"foo\"",
                          "value": "foo",
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2237,
                  "end": 2268,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2239,
                      "end": 2248,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2239,
                        "end": 2241,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2243,
                        "end": 2248,
                        "raw": "false",
                        "value": false,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2250,
                      "end": 2255,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2250,
                        "end": 2252,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2254,
                        "end": 2255,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2257,
                      "end": 2266,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2257,
                        "end": 2259,
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2261,
                        "end": 2266,
                        "raw": "\"bar\"",
                        "value": "bar",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2274,
            "end": 2346,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2278,
                "end": 2345,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 2278,
                  "end": 2311,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2280,
                      "end": 2289,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2280,
                        "end": 2282,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2280,
                        "end": 2289,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2280,
                          "end": 2282,
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2285,
                          "end": 2289,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2291,
                      "end": 2297,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2291,
                        "end": 2293,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2291,
                        "end": 2297,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2291,
                          "end": 2293,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2296,
                          "end": 2297,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2299,
                      "end": 2309,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2299,
                        "end": 2301,
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2299,
                        "end": 2309,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2299,
                          "end": 2301,
                          "decorators": [],
                          "name": "x3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2304,
                          "end": 2309,
                          "raw": "\"foo\"",
                          "value": "foo",
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2314,
                  "end": 2345,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2316,
                      "end": 2325,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2316,
                        "end": 2318,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2320,
                        "end": 2325,
                        "raw": "false",
                        "value": false,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2327,
                      "end": 2332,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2327,
                        "end": 2329,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2331,
                        "end": 2332,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2334,
                      "end": 2343,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2334,
                        "end": 2336,
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2338,
                        "end": 2343,
                        "raw": "\"bar\"",
                        "value": "bar",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2184,
        "end": 2186,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2350,
      "end": 2388,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2365,
        "end": 2388,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2371,
            "end": 2386,
            "argument": {
              "type": "Literal",
              "start": 2378,
              "end": 2385,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2359,
        "end": 2362,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2390,
      "end": 2437,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2405,
        "end": 2437,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2411,
            "end": 2435,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2418,
              "end": 2434,
              "alternate": {
                "type": "Literal",
                "start": 2429,
                "end": 2434,
                "raw": "\"two\"",
                "value": "two",
                "regex": null,
                "bigint": null
              },
              "consequent": {
                "type": "Literal",
                "start": 2425,
                "end": 2426,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "test": {
                "type": "Identifier",
                "start": 2418,
                "end": 2422,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2399,
        "end": 2402,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2439,
      "end": 2536,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2454,
        "end": 2536,
        "body": [
          {
            "type": "IfStatement",
            "start": 2460,
            "end": 2534,
            "alternate": {
              "type": "BlockStatement",
              "start": 2505,
              "end": 2534,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2515,
                  "end": 2528,
                  "argument": {
                    "type": "Literal",
                    "start": 2522,
                    "end": 2527,
                    "raw": "\"two\"",
                    "value": "two",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2470,
              "end": 2495,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2480,
                  "end": 2489,
                  "argument": {
                    "type": "Literal",
                    "start": 2487,
                    "end": 2488,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2464,
              "end": 2468,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2448,
        "end": 2451,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2538,
      "end": 2633,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2547,
        "end": 2633,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2553,
            "end": 2584,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2553,
              "end": 2556,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2556,
              "end": 2584,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2559,
                "end": 2584,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2569,
                    "end": 2578,
                    "argument": {
                      "type": "Literal",
                      "start": 2576,
                      "end": 2577,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2589,
            "end": 2631,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2589,
              "end": 2592,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2592,
              "end": 2631,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2595,
                "end": 2631,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2605,
                    "end": 2625,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 2612,
                      "end": 2624,
                      "alternate": {
                        "type": "Literal",
                        "start": 2623,
                        "end": 2624,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 2619,
                        "end": 2620,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 2612,
                        "end": 2616,
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2544,
        "end": 2546,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2635,
      "end": 2903,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2650,
        "end": 2903,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2656,
            "end": 2675,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2662,
                "end": 2674,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2662,
                  "end": 2664,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2667,
                  "end": 2674,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2673,
                    "end": 2674,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2680,
            "end": 2705,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2686,
                "end": 2704,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2686,
                  "end": 2688,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2691,
                  "end": 2704,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2697,
                    "end": 2704,
                    "raw": "\"hello\"",
                    "value": "hello",
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2710,
            "end": 2732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2716,
                "end": 2731,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2716,
                  "end": 2718,
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2721,
                  "end": 2731,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2727,
                    "end": 2731,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2737,
            "end": 2758,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2743,
                "end": 2757,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2743,
                  "end": 2745,
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2748,
                  "end": 2757,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 2754,
                    "end": 2757,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2755,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2756,
                      "end": 2757,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2763,
            "end": 2793,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2769,
                "end": 2792,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2769,
                  "end": 2771,
                  "decorators": [],
                  "name": "f5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2774,
                  "end": 2792,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2787,
                    "end": 2792,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2776,
                    "end": 2783,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2778,
                      "end": 2783,
                      "literal": {
                        "type": "Literal",
                        "start": 2778,
                        "end": 2783,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2798,
            "end": 2842,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2804,
                "end": 2841,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2804,
                  "end": 2827,
                  "decorators": [],
                  "name": "f6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2806,
                    "end": 2827,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2808,
                      "end": 2827,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2811,
                        "end": 2827,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 2814,
                          "end": 2827,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 2814,
                              "end": 2819,
                              "literal": {
                                "type": "Literal",
                                "start": 2814,
                                "end": 2819,
                                "raw": "\"foo\"",
                                "value": "foo",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 2822,
                              "end": 2827,
                              "literal": {
                                "type": "Literal",
                                "start": 2822,
                                "end": 2827,
                                "raw": "\"bar\"",
                                "value": "bar",
                                "regex": null,
                                "bigint": null
                              }
                            }
                          ]
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2830,
                  "end": 2841,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2836,
                    "end": 2841,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2847,
            "end": 2901,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2853,
                "end": 2900,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2853,
                  "end": 2886,
                  "decorators": [],
                  "name": "f7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2855,
                    "end": 2886,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2857,
                      "end": 2886,
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "start": 2858,
                          "end": 2869,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2861,
                            "end": 2869,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 2864,
                              "end": 2869,
                              "literal": {
                                "type": "Literal",
                                "start": 2864,
                                "end": 2869,
                                "raw": "\"foo\"",
                                "value": "foo",
                                "regex": null,
                                "bigint": null
                              }
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSFunctionType",
                          "start": 2874,
                          "end": 2885,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2877,
                            "end": 2885,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 2880,
                              "end": 2885,
                              "literal": {
                                "type": "Literal",
                                "start": 2880,
                                "end": 2885,
                                "raw": "\"bar\"",
                                "value": "bar",
                                "regex": null,
                                "bigint": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2889,
                  "end": 2900,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2895,
                    "end": 2900,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2644,
        "end": 2647,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2905,
      "end": 2937,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2922,
        "end": 2924,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2928,
          "end": 2932,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2929,
            "end": 2932,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2931,
              "end": 2932,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2931,
                "end": 2932,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2933,
        "end": 2936,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2935,
          "end": 2936,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2935,
            "end": 2936,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2924,
        "end": 2927,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2925,
            "end": 2926,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2925,
              "end": 2926,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2938,
      "end": 2976,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2955,
        "end": 2957,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2961,
          "end": 2965,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2962,
            "end": 2965,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2964,
              "end": 2965,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2964,
                "end": 2965,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2967,
          "end": 2971,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2968,
            "end": 2971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2970,
              "end": 2971,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2970,
                "end": 2971,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2972,
        "end": 2975,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2974,
          "end": 2975,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2974,
            "end": 2975,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2957,
        "end": 2960,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2958,
            "end": 2959,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2958,
              "end": 2959,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2977,
      "end": 3022,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2994,
        "end": 2996,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3003,
          "end": 3007,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3004,
            "end": 3007,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3006,
              "end": 3007,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3006,
                "end": 3007,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3009,
          "end": 3013,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3010,
            "end": 3013,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3012,
              "end": 3013,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3012,
                "end": 3013,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3014,
        "end": 3021,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 3016,
          "end": 3021,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3016,
              "end": 3017,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3016,
                "end": 3017,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3020,
              "end": 3021,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3020,
                "end": 3021,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2996,
        "end": 3002,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2997,
            "end": 2998,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2997,
              "end": 2998,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3000,
            "end": 3001,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3000,
              "end": 3001,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3023,
      "end": 3057,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3040,
        "end": 3042,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3046,
          "end": 3050,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3047,
            "end": 3050,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3049,
              "end": 3050,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3049,
                "end": 3050,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3051,
        "end": 3056,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3053,
          "end": 3056,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3053,
            "end": 3054,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3053,
              "end": 3054,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3042,
        "end": 3045,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3043,
            "end": 3044,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3043,
              "end": 3044,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3058,
      "end": 3113,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3075,
        "end": 3077,
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3096,
          "end": 3100,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3097,
            "end": 3100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3099,
              "end": 3100,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3099,
                "end": 3100,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3102,
          "end": 3106,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3103,
            "end": 3106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3105,
              "end": 3106,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3105,
                "end": 3106,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3107,
        "end": 3112,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3109,
          "end": 3112,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3109,
            "end": 3110,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3109,
              "end": 3110,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3077,
        "end": 3095,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3078,
            "end": 3094,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3088,
              "end": 3094
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3078,
              "end": 3079,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3114,
      "end": 3148,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3131,
        "end": 3133,
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3137,
          "end": 3143,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3138,
            "end": 3143,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3140,
              "end": 3143,
              "elementType": {
                "type": "TSTypeReference",
                "start": 3140,
                "end": 3141,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3140,
                  "end": 3141,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3144,
        "end": 3147,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3146,
          "end": 3147,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3146,
            "end": 3147,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3133,
        "end": 3136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3134,
            "end": 3135,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3134,
              "end": 3135,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3149,
      "end": 3185,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3166,
        "end": 3168,
        "decorators": [],
        "name": "g7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3172,
          "end": 3178,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3173,
            "end": 3178,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3175,
              "end": 3178,
              "elementType": {
                "type": "TSTypeReference",
                "start": 3175,
                "end": 3176,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3175,
                  "end": 3176,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3179,
        "end": 3184,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3181,
          "end": 3184,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3181,
            "end": 3182,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3181,
              "end": 3182,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3168,
        "end": 3171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3169,
            "end": 3170,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3169,
              "end": 3170,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3186,
      "end": 3234,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3203,
        "end": 3205,
        "decorators": [],
        "name": "g8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3209,
          "end": 3213,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3210,
            "end": 3213,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3212,
              "end": 3213,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3212,
                "end": 3213,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3215,
          "end": 3229,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3216,
            "end": 3229,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3218,
              "end": 3229,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3219,
                  "end": 3223,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3220,
                    "end": 3223,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3222,
                      "end": 3223,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3222,
                        "end": 3223,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3225,
                "end": 3229,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3228,
                  "end": 3229,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3228,
                    "end": 3229,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3230,
        "end": 3233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3232,
          "end": 3233,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3232,
            "end": 3233,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3205,
        "end": 3208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3206,
            "end": 3207,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3206,
              "end": 3207,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3236,
      "end": 3264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3242,
          "end": 3263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3242,
            "end": 3254,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3243,
              "end": 3254,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3245,
                "end": 3254,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 3246,
                  "end": 3251,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 3246,
                      "end": 3247,
                      "literal": {
                        "type": "Literal",
                        "start": 3246,
                        "end": 3247,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3250,
                      "end": 3251,
                      "literal": {
                        "type": "Literal",
                        "start": 3250,
                        "end": 3251,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3257,
            "end": 3263,
            "elements": [
              {
                "type": "Literal",
                "start": 3258,
                "end": 3259,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 3261,
                "end": 3262,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3266,
      "end": 3283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3272,
          "end": 3282,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3272,
            "end": 3274,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3277,
            "end": 3282,
            "arguments": [
              {
                "type": "Literal",
                "start": 3280,
                "end": 3281,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3277,
              "end": 3279,
              "decorators": [],
              "name": "g1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3295,
      "end": 3315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3301,
          "end": 3314,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3301,
            "end": 3303,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3306,
            "end": 3314,
            "arguments": [
              {
                "type": "Literal",
                "start": 3309,
                "end": 3310,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 3312,
                "end": 3313,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3306,
              "end": 3308,
              "decorators": [],
              "name": "g2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3327,
      "end": 3347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3333,
          "end": 3346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3333,
            "end": 3335,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3338,
            "end": 3346,
            "arguments": [
              {
                "type": "Literal",
                "start": 3341,
                "end": 3342,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 3344,
                "end": 3345,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3338,
              "end": 3340,
              "decorators": [],
              "name": "g2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3363,
      "end": 3387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3369,
          "end": 3386,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3369,
            "end": 3371,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3374,
            "end": 3386,
            "arguments": [
              {
                "type": "Literal",
                "start": 3377,
                "end": 3378,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 3380,
                "end": 3385,
                "raw": "\"two\"",
                "value": "two",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3374,
              "end": 3376,
              "decorators": [],
              "name": "g3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3407,
      "end": 3424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3413,
          "end": 3423,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3413,
            "end": 3415,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3418,
            "end": 3423,
            "arguments": [
              {
                "type": "Literal",
                "start": 3421,
                "end": 3422,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3418,
              "end": 3420,
              "decorators": [],
              "name": "g4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3443,
      "end": 3463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3449,
          "end": 3462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3449,
            "end": 3451,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3454,
            "end": 3462,
            "arguments": [
              {
                "type": "Literal",
                "start": 3457,
                "end": 3458,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 3460,
                "end": 3461,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3454,
              "end": 3456,
              "decorators": [],
              "name": "g5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3483,
      "end": 3505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3489,
          "end": 3504,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3489,
            "end": 3491,
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3494,
            "end": 3504,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 3497,
                "end": 3503,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 3498,
                    "end": 3499,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 3501,
                    "end": 3502,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3494,
              "end": 3496,
              "decorators": [],
              "name": "g6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3522,
      "end": 3539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3528,
          "end": 3538,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3528,
            "end": 3530,
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3533,
            "end": 3538,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3536,
                "end": 3537,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3533,
              "end": 3535,
              "decorators": [],
              "name": "g6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3555,
      "end": 3572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3561,
          "end": 3571,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3561,
            "end": 3563,
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3566,
            "end": 3571,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3569,
                "end": 3570,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3566,
              "end": 3568,
              "decorators": [],
              "name": "g7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3592,
      "end": 3618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3598,
          "end": 3617,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3598,
            "end": 3601,
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3604,
            "end": 3617,
            "arguments": [
              {
                "type": "Literal",
                "start": 3607,
                "end": 3608,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3610,
                "end": 3616,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3615,
                  "end": 3616,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3610,
                    "end": 3611,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3604,
              "end": 3606,
              "decorators": [],
              "name": "g8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3635,
      "end": 3665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3641,
          "end": 3664,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3641,
            "end": 3644,
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3647,
            "end": 3664,
            "arguments": [
              {
                "type": "Literal",
                "start": 3650,
                "end": 3651,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3653,
                "end": 3663,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 3658,
                  "end": 3663,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 3658,
                    "end": 3659,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3662,
                    "end": 3663,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3653,
                    "end": 3654,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3647,
              "end": 3649,
              "decorators": [],
              "name": "g8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3683,
      "end": 3735,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3716,
        "end": 3735,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3722,
            "end": 3733,
            "argument": {
              "type": "ArrayExpression",
              "start": 3729,
              "end": 3732,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 3730,
                  "end": 3731,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3692,
        "end": 3701,
        "decorators": [],
        "name": "makeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3705,
          "end": 3709,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3706,
            "end": 3709,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3708,
              "end": 3709,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3708,
                "end": 3709,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3710,
        "end": 3715,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3712,
          "end": 3715,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3712,
            "end": 3713,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3712,
              "end": 3713,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3701,
        "end": 3704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3702,
            "end": 3703,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3702,
              "end": 3703,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3737,
      "end": 3845,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3775,
        "end": 3845,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3781,
            "end": 3804,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3785,
                "end": 3803,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3785,
                  "end": 3791,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3794,
                  "end": 3803,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3794,
                    "end": 3801,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3794,
                      "end": 3795,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3796,
                      "end": 3801,
                      "decorators": [],
                      "name": "slice",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 3809,
            "end": 3824,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 3809,
              "end": 3823,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3821,
                  "end": 3822,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3809,
                "end": 3820,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3809,
                  "end": 3815,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3816,
                  "end": 3820,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 3829,
            "end": 3843,
            "argument": {
              "type": "Identifier",
              "start": 3836,
              "end": 3842,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3746,
        "end": 3752,
        "decorators": [],
        "name": "append",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3756,
          "end": 3762,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3757,
            "end": 3762,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3759,
              "end": 3762,
              "elementType": {
                "type": "TSTypeReference",
                "start": 3759,
                "end": 3760,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3759,
                  "end": 3760,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3764,
          "end": 3768,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3765,
            "end": 3768,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3767,
              "end": 3768,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3767,
                "end": 3768,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3769,
        "end": 3774,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3771,
          "end": 3774,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3771,
            "end": 3772,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3771,
              "end": 3772,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3752,
        "end": 3755,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3753,
            "end": 3754,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3753,
              "end": 3754,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3847,
      "end": 3864,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3852,
        "end": 3855,
        "decorators": [],
        "name": "Bit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3858,
        "end": 3863,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 3858,
            "end": 3859,
            "literal": {
              "type": "Literal",
              "start": 3858,
              "end": 3859,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3862,
            "end": 3863,
            "literal": {
              "type": "Literal",
              "start": 3862,
              "end": 3863,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3866,
      "end": 3893,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3870,
          "end": 3892,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3870,
            "end": 3872,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3875,
            "end": 3892,
            "arguments": [
              {
                "type": "Literal",
                "start": 3890,
                "end": 3891,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3875,
              "end": 3884,
              "decorators": [],
              "name": "makeArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3884,
              "end": 3889,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3885,
                  "end": 3888,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3885,
                    "end": 3888,
                    "decorators": [],
                    "name": "Bit",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3894,
      "end": 3913,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3894,
        "end": 3912,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3894,
          "end": 3896,
          "decorators": [],
          "name": "aa",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3899,
          "end": 3912,
          "arguments": [
            {
              "type": "Identifier",
              "start": 3906,
              "end": 3908,
              "decorators": [],
              "name": "aa",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 3910,
              "end": 3911,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3899,
            "end": 3905,
            "decorators": [],
            "name": "append",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
