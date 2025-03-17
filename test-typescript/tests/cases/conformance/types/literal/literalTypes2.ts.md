__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3914,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 16,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 19,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 41,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 41,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 56,
          "end": 62,
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 61,
            "end": 62,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 64,
          "end": 74,
          "left": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 69,
            "end": 74,
            "value": "abc",
            "raw": "\"abc\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 76,
          "end": 85,
          "left": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "name": "p3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 81,
            "end": 85,
            "value": true,
            "raw": "true"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 87,
          "end": 95,
          "left": {
            "type": "Identifier",
            "start": 87,
            "end": 89,
            "name": "p4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 92,
            "end": 95,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 109,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
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
            "start": 119,
            "end": 133,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 132,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 128,
                  "end": 132,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 129,
                    "end": 132,
                    "value": 123,
                    "raw": "123"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 144,
                  "name": "v3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 147,
                  "end": 152,
                  "left": {
                    "type": "Literal",
                    "start": 147,
                    "end": 148,
                    "value": 3,
                    "raw": "3"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 151,
                    "end": 152,
                    "value": 4,
                    "raw": "4"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 164,
                  "name": "v4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 167,
                  "end": 172,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "name": "v5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 187,
                  "end": 189,
                  "value": "",
                  "raw": "\"\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 201,
                  "name": "v6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 204,
                  "end": 217,
                  "left": {
                    "type": "Literal",
                    "start": 204,
                    "end": 209,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 212,
                    "end": 217,
                    "value": "def",
                    "raw": "\"def\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "name": "v7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 232,
                  "end": 236,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 248,
                  "name": "v8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 251,
                  "end": 254,
                  "object": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
            "start": 260,
            "end": 271,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 270,
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 266,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 269,
                  "end": 270,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 285,
                  "end": 289,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 286,
                    "end": 289,
                    "value": 123,
                    "raw": "123"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 301,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 304,
                  "end": 309,
                  "left": {
                    "type": "Literal",
                    "start": 304,
                    "end": 305,
                    "value": 3,
                    "raw": "3"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 308,
                    "end": 309,
                    "value": 4,
                    "raw": "4"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "name": "x4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 324,
                  "end": 329,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "name": "x5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 344,
                  "end": 346,
                  "value": "",
                  "raw": "\"\""
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 358,
                  "name": "x6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 361,
                  "end": 374,
                  "left": {
                    "type": "Literal",
                    "start": 361,
                    "end": 366,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 369,
                    "end": 374,
                    "value": "def",
                    "raw": "\"def\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 386,
                  "name": "x7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 389,
                  "end": 393,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 405,
                  "name": "x8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 408,
                  "end": 411,
                  "object": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
            "start": 417,
            "end": 430,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 423,
                "end": 429,
                "id": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 425,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 428,
                  "end": 429,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 443,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 446,
                  "end": 450,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 447,
                    "end": 450,
                    "value": 123,
                    "raw": "123"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 464,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 467,
                  "end": 472,
                  "left": {
                    "type": "Literal",
                    "start": 467,
                    "end": 468,
                    "value": 3,
                    "raw": "3"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 471,
                    "end": 472,
                    "value": 4,
                    "raw": "4"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 486,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 489,
                  "end": 494,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 508,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 511,
                  "end": 513,
                  "value": "",
                  "raw": "\"\""
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 527,
                  "name": "c6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 530,
                  "end": 543,
                  "left": {
                    "type": "Literal",
                    "start": 530,
                    "end": 535,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 538,
                    "end": 543,
                    "value": "def",
                    "raw": "\"def\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 557,
                  "name": "c7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 560,
                  "end": 564,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 578,
                  "name": "c8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 581,
                  "end": 584,
                  "object": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 589,
      "end": 904,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 600,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 601,
          "end": 610,
          "left": {
            "type": "Identifier",
            "start": 601,
            "end": 606,
            "name": "p1",
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
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 609,
            "end": 610,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 612,
          "end": 629,
          "left": {
            "type": "Identifier",
            "start": 612,
            "end": 621,
            "name": "p2",
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
                  "value": "abc",
                  "raw": "\"abc\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 624,
            "end": 629,
            "value": "abc",
            "raw": "\"abc\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 631,
          "end": 646,
          "left": {
            "type": "Identifier",
            "start": 631,
            "end": 639,
            "name": "p3",
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
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 642,
            "end": 646,
            "value": true,
            "raw": "true"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 648,
          "end": 661,
          "left": {
            "type": "Identifier",
            "start": 648,
            "end": 655,
            "name": "p4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 655,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 652,
                "end": 655,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 652,
                  "end": 655,
                  "left": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 655,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 658,
            "end": 661,
            "object": {
              "type": "Identifier",
              "start": 658,
              "end": 659,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 678,
                  "name": "v1",
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
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 681,
                  "end": 682,
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
            "start": 688,
            "end": 708,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 692,
                "end": 707,
                "id": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 700,
                  "name": "v2",
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
                        "operator": "-",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 697,
                          "end": 700,
                          "value": 123,
                          "raw": "123"
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 703,
                  "end": 707,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 704,
                    "end": 707,
                    "value": 123,
                    "raw": "123"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 726,
                  "name": "v3",
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
                        "value": "abc",
                        "raw": "\"abc\""
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 729,
                  "end": 734,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 752,
                  "name": "v4",
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
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 755,
                  "end": 759,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 776,
                  "name": "v5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 771,
                    "end": 776,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 773,
                      "end": 776,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 773,
                        "end": 776,
                        "left": {
                          "type": "Identifier",
                          "start": 773,
                          "end": 774,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 776,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 779,
                  "end": 782,
                  "object": {
                    "type": "Identifier",
                    "start": 779,
                    "end": 780,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 781,
                    "end": 782,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
            "start": 788,
            "end": 802,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 792,
                "end": 801,
                "id": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 797,
                  "name": "x1",
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
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 800,
                  "end": 801,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 811,
                  "end": 819,
                  "name": "x2",
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
                        "operator": "-",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 816,
                          "end": 819,
                          "value": 123,
                          "raw": "123"
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 822,
                  "end": 826,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 823,
                    "end": 826,
                    "value": 123,
                    "raw": "123"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 836,
                  "end": 845,
                  "name": "x3",
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
                        "value": "abc",
                        "raw": "\"abc\""
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 848,
                  "end": 853,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 871,
                  "name": "x4",
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
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 874,
                  "end": 878,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 895,
                  "name": "x5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 890,
                    "end": 895,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 892,
                      "end": 895,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 892,
                        "end": 895,
                        "left": {
                          "type": "Identifier",
                          "start": 892,
                          "end": 893,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 894,
                          "end": 895,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 898,
                  "end": 901,
                  "object": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 899,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 900,
                    "end": 901,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 906,
      "end": 1387,
      "id": {
        "type": "Identifier",
        "start": 915,
        "end": 917,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 932,
                  "end": 934,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 937,
                  "end": 949,
                  "test": {
                    "type": "Identifier",
                    "start": 937,
                    "end": 941,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 944,
                    "end": 945,
                    "value": 1,
                    "raw": "1"
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 948,
                    "end": 949,
                    "value": 2,
                    "raw": "2"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 963,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 966,
                  "end": 982,
                  "test": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 970,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 973,
                    "end": 974,
                    "value": 1,
                    "raw": "1"
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 977,
                    "end": 982,
                    "value": "two",
                    "raw": "\"two\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 996,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 999,
                  "end": 1029,
                  "test": {
                    "type": "Identifier",
                    "start": 999,
                    "end": 1003,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 1006,
                    "end": 1009,
                    "object": {
                      "type": "Identifier",
                      "start": 1006,
                      "end": 1007,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1009,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "start": 1012,
                    "end": 1029,
                    "test": {
                      "type": "Identifier",
                      "start": 1012,
                      "end": 1016,
                      "name": "cond",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 1019,
                      "end": 1023,
                      "value": true,
                      "raw": "true"
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 1026,
                      "end": 1029,
                      "value": 123,
                      "raw": "123"
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1043,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1046,
                  "end": 1065,
                  "test": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1050,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1053,
                    "end": 1058,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1061,
                    "end": 1065,
                    "value": null,
                    "raw": "null"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1079,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1082,
                  "end": 1104,
                  "test": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1086,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1089,
                    "end": 1092,
                    "value": 456,
                    "raw": "456"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1095,
                    "end": 1104,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1133,
                  "name": "c6",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1122,
                            "end": 1126,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "value": 123,
                                "raw": "123"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1138,
                        "end": 1142,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1144,
                        "end": 1147,
                        "value": 123,
                        "raw": "123"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1161,
                  "end": 1187,
                  "name": "c7",
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
                                "value": 1,
                                "raw": "1"
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
                                "value": 2,
                                "raw": "2"
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
                                "value": "foo",
                                "raw": "\"foo\""
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
                                "value": "bar",
                                "raw": "\"bar\""
                              }
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
                  "start": 1190,
                  "end": 1200,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1191,
                      "end": 1192,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 1194,
                      "end": 1199,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1214,
                  "name": "c8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1217,
                  "end": 1248,
                  "test": {
                    "type": "Identifier",
                    "start": 1217,
                    "end": 1221,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1224,
                    "end": 1226,
                    "name": "c6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "start": 1229,
                    "end": 1248,
                    "test": {
                      "type": "Identifier",
                      "start": 1229,
                      "end": 1233,
                      "name": "cond",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 1236,
                      "end": 1238,
                      "name": "c7",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 1241,
                      "end": 1248,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1258,
                  "end": 1260,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1265,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1277,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1280,
                  "end": 1282,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1292,
                  "end": 1294,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1297,
                  "end": 1299,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1309,
                  "end": 1311,
                  "name": "x4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1314,
                  "end": 1316,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1326,
                  "end": 1328,
                  "name": "x5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1331,
                  "end": 1333,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1345,
                  "name": "x6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1350,
                  "name": "c6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1362,
                  "name": "x7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1365,
                  "end": 1367,
                  "name": "c7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1377,
                  "end": 1379,
                  "name": "x8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1382,
                  "end": 1384,
                  "name": "c8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1389,
      "end": 1723,
      "id": {
        "type": "Identifier",
        "start": 1395,
        "end": 1397,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1398,
        "end": 1723,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1404,
            "end": 1411,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1404,
              "end": 1406,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1409,
              "end": 1410,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1416,
            "end": 1426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1416,
              "end": 1418,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UnaryExpression",
              "start": 1421,
              "end": 1425,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 1422,
                "end": 1425,
                "value": 123,
                "raw": "123"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1431,
            "end": 1442,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1431,
              "end": 1433,
              "name": "x3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 1436,
              "end": 1441,
              "left": {
                "type": "Literal",
                "start": 1436,
                "end": 1437,
                "value": 3,
                "raw": "3"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1440,
                "end": 1441,
                "value": 4,
                "raw": "4"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1447,
            "end": 1458,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1447,
              "end": 1449,
              "name": "x4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1452,
              "end": 1457,
              "value": "abc",
              "raw": "\"abc\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1463,
            "end": 1471,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1463,
              "end": 1465,
              "name": "x5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1468,
              "end": 1470,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1476,
            "end": 1495,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1476,
              "end": 1478,
              "name": "x6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 1481,
              "end": 1494,
              "left": {
                "type": "Literal",
                "start": 1481,
                "end": 1486,
                "value": "abc",
                "raw": "\"abc\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1489,
                "end": 1494,
                "value": "def",
                "raw": "\"def\""
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1500,
            "end": 1510,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1500,
              "end": 1502,
              "name": "x7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1505,
              "end": 1509,
              "value": true,
              "raw": "true"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1515,
            "end": 1524,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1515,
              "end": 1517,
              "name": "x8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 1520,
              "end": 1523,
              "object": {
                "type": "Identifier",
                "start": 1520,
                "end": 1521,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1522,
                "end": 1523,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1529,
            "end": 1545,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1538,
              "end": 1540,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1543,
              "end": 1544,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1550,
            "end": 1569,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1559,
              "end": 1561,
              "name": "c2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UnaryExpression",
              "start": 1564,
              "end": 1568,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 1565,
                "end": 1568,
                "value": 123,
                "raw": "123"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1574,
            "end": 1594,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1583,
              "end": 1585,
              "name": "c3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 1588,
              "end": 1593,
              "left": {
                "type": "Literal",
                "start": 1588,
                "end": 1589,
                "value": 3,
                "raw": "3"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1592,
                "end": 1593,
                "value": 4,
                "raw": "4"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1599,
            "end": 1619,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1608,
              "end": 1610,
              "name": "c4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1613,
              "end": 1618,
              "value": "abc",
              "raw": "\"abc\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1624,
            "end": 1641,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1633,
              "end": 1635,
              "name": "c5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1638,
              "end": 1640,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1646,
            "end": 1674,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1655,
              "end": 1657,
              "name": "c6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 1660,
              "end": 1673,
              "left": {
                "type": "Literal",
                "start": 1660,
                "end": 1665,
                "value": "abc",
                "raw": "\"abc\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1668,
                "end": 1673,
                "value": "def",
                "raw": "\"def\""
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1679,
            "end": 1698,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1688,
              "end": 1690,
              "name": "c7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1693,
              "end": 1697,
              "value": true,
              "raw": "true"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1703,
            "end": 1721,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1712,
              "end": 1714,
              "name": "c8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 1717,
              "end": 1720,
              "object": {
                "type": "Identifier",
                "start": 1717,
                "end": 1718,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1725,
      "end": 1944,
      "id": {
        "type": "Identifier",
        "start": 1734,
        "end": 1736,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1751,
                  "end": 1753,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1758,
                        "end": 1759,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1761,
                        "end": 1762,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1764,
                      "end": 1772,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1764,
                        "end": 1765,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1767,
                        "end": 1772,
                        "value": "foo",
                        "raw": "\"foo\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1786,
                  "end": 1821,
                  "name": "c2",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1792,
                            "end": 1793,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "value": 0,
                                    "raw": "0"
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
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1803,
                          "end": 1819,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1803,
                            "end": 1804,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "value": "foo",
                                    "raw": "\"foo\""
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
                                    "value": "bar",
                                    "raw": "\"bar\""
                                  }
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1827,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1829,
                        "end": 1830,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1832,
                      "end": 1840,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1832,
                        "end": 1833,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1835,
                        "end": 1840,
                        "value": "foo",
                        "raw": "\"foo\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1852,
                  "end": 1854,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1859,
                        "end": 1860,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1862,
                        "end": 1863,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1865,
                      "end": 1873,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1865,
                        "end": 1866,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1868,
                        "end": 1873,
                        "value": "foo",
                        "raw": "\"foo\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1885,
                  "end": 1920,
                  "name": "x2",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1891,
                            "end": 1892,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "value": 0,
                                    "raw": "0"
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
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1902,
                          "end": 1918,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1902,
                            "end": 1903,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "value": "foo",
                                    "raw": "\"foo\""
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
                                    "value": "bar",
                                    "raw": "\"bar\""
                                  }
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1925,
                        "end": 1926,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1928,
                        "end": 1929,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1931,
                      "end": 1939,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1931,
                        "end": 1932,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1934,
                        "end": 1939,
                        "value": "foo",
                        "raw": "\"foo\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1946,
      "end": 2173,
      "id": {
        "type": "Identifier",
        "start": 1955,
        "end": 1957,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1972,
                  "end": 1974,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 1981,
                      "end": 1986,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1999,
                  "end": 2016,
                  "name": "c2",
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
                              "value": 1,
                              "raw": "1"
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
                              "value": "foo",
                              "raw": "\"foo\""
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 2023,
                      "end": 2028,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2041,
                  "end": 2055,
                  "name": "c3",
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
                            "value": 1,
                            "raw": "1"
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
                            "value": "foo",
                            "raw": "\"foo\""
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 2062,
                      "end": 2067,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2078,
                  "end": 2080,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 2087,
                      "end": 2092,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2120,
                  "name": "x2",
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
                              "value": 1,
                              "raw": "1"
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
                              "value": "foo",
                              "raw": "\"foo\""
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 2127,
                      "end": 2132,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2143,
                  "end": 2157,
                  "name": "x3",
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
                            "value": 1,
                            "raw": "1"
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
                            "value": "foo",
                            "raw": "\"foo\""
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 2164,
                      "end": 2169,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2175,
      "end": 2348,
      "id": {
        "type": "Identifier",
        "start": 2184,
        "end": 2186,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 2201,
                  "end": 2234,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2203,
                      "end": 2212,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2203,
                        "end": 2205,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2203,
                        "end": 2212,
                        "left": {
                          "type": "Identifier",
                          "start": 2203,
                          "end": 2205,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2208,
                          "end": 2212,
                          "value": true,
                          "raw": "true"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2214,
                      "end": 2220,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2214,
                        "end": 2216,
                        "name": "c2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2214,
                        "end": 2220,
                        "left": {
                          "type": "Identifier",
                          "start": 2214,
                          "end": 2216,
                          "name": "c2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2219,
                          "end": 2220,
                          "value": 0,
                          "raw": "0"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2222,
                      "end": 2232,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2222,
                        "end": 2224,
                        "name": "c3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2222,
                        "end": 2232,
                        "left": {
                          "type": "Identifier",
                          "start": 2222,
                          "end": 2224,
                          "name": "c3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2227,
                          "end": 2232,
                          "value": "foo",
                          "raw": "\"foo\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2239,
                        "end": 2241,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2243,
                        "end": 2248,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2250,
                      "end": 2255,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2250,
                        "end": 2252,
                        "name": "c2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2254,
                        "end": 2255,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2257,
                      "end": 2266,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2257,
                        "end": 2259,
                        "name": "c3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2261,
                        "end": 2266,
                        "value": "bar",
                        "raw": "\"bar\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 2278,
                  "end": 2311,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2280,
                      "end": 2289,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2280,
                        "end": 2282,
                        "name": "x1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2280,
                        "end": 2289,
                        "left": {
                          "type": "Identifier",
                          "start": 2280,
                          "end": 2282,
                          "name": "x1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2285,
                          "end": 2289,
                          "value": true,
                          "raw": "true"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2291,
                      "end": 2297,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2291,
                        "end": 2293,
                        "name": "x2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2291,
                        "end": 2297,
                        "left": {
                          "type": "Identifier",
                          "start": 2291,
                          "end": 2293,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2296,
                          "end": 2297,
                          "value": 0,
                          "raw": "0"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2299,
                      "end": 2309,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2299,
                        "end": 2301,
                        "name": "x3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2299,
                        "end": 2309,
                        "left": {
                          "type": "Identifier",
                          "start": 2299,
                          "end": 2301,
                          "name": "x3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2304,
                          "end": 2309,
                          "value": "foo",
                          "raw": "\"foo\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2316,
                        "end": 2318,
                        "name": "x1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2320,
                        "end": 2325,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2327,
                      "end": 2332,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2327,
                        "end": 2329,
                        "name": "x2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2331,
                        "end": 2332,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2334,
                      "end": 2343,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2334,
                        "end": 2336,
                        "name": "x3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2338,
                        "end": 2343,
                        "value": "bar",
                        "raw": "\"bar\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2350,
      "end": 2388,
      "id": {
        "type": "Identifier",
        "start": 2359,
        "end": 2362,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": "hello",
              "raw": "\"hello\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2390,
      "end": 2437,
      "id": {
        "type": "Identifier",
        "start": 2399,
        "end": 2402,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "test": {
                "type": "Identifier",
                "start": 2418,
                "end": 2422,
                "name": "cond",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "Literal",
                "start": 2425,
                "end": 2426,
                "value": 1,
                "raw": "1"
              },
              "alternate": {
                "type": "Literal",
                "start": 2429,
                "end": 2434,
                "value": "two",
                "raw": "\"two\""
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2439,
      "end": 2536,
      "id": {
        "type": "Identifier",
        "start": 2448,
        "end": 2451,
        "name": "f12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2454,
        "end": 2536,
        "body": [
          {
            "type": "IfStatement",
            "start": 2460,
            "end": 2534,
            "test": {
              "type": "Identifier",
              "start": 2464,
              "end": 2468,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
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
                    "value": "two",
                    "raw": "\"two\""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2538,
      "end": 2633,
      "id": {
        "type": "Identifier",
        "start": 2544,
        "end": 2546,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2547,
        "end": 2633,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2553,
            "end": 2584,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2553,
              "end": 2556,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2556,
              "end": 2584,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2589,
            "end": 2631,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2589,
              "end": 2592,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2592,
              "end": 2631,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "test": {
                        "type": "Identifier",
                        "start": 2612,
                        "end": 2616,
                        "name": "cond",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 2619,
                        "end": 2620,
                        "value": 0,
                        "raw": "0"
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 2623,
                        "end": 2624,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2635,
      "end": 2903,
      "id": {
        "type": "Identifier",
        "start": 2644,
        "end": 2647,
        "name": "f20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 2662,
                  "end": 2664,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2667,
                  "end": 2674,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 2673,
                    "end": 2674,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2686,
                  "end": 2688,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2691,
                  "end": 2704,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 2697,
                    "end": 2704,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2716,
                  "end": 2718,
                  "name": "f3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2721,
                  "end": 2731,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 2727,
                    "end": 2731,
                    "value": true,
                    "raw": "true"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2743,
                  "end": 2745,
                  "name": "f4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2748,
                  "end": 2757,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "MemberExpression",
                    "start": 2754,
                    "end": 2757,
                    "object": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2755,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2756,
                      "end": 2757,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2769,
                  "end": 2771,
                  "name": "f5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2774,
                  "end": 2792,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 2787,
                    "end": 2792,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "typeParameters": null,
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
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2804,
                  "end": 2827,
                  "name": "f6",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2806,
                    "end": 2827,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2808,
                      "end": 2827,
                      "typeParameters": null,
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
                                "value": "foo",
                                "raw": "\"foo\""
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
                                "value": "bar",
                                "raw": "\"bar\""
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2830,
                  "end": 2841,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 2836,
                    "end": 2841,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2853,
                  "end": 2886,
                  "name": "f7",
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
                          "typeParameters": null,
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
                                "value": "foo",
                                "raw": "\"foo\""
                              }
                            }
                          }
                        },
                        {
                          "type": "TSFunctionType",
                          "start": 2874,
                          "end": 2885,
                          "typeParameters": null,
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
                                "value": "bar",
                                "raw": "\"bar\""
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2889,
                  "end": 2900,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 2895,
                    "end": 2900,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2905,
      "end": 2937,
      "id": {
        "type": "Identifier",
        "start": 2922,
        "end": 2924,
        "name": "g1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2928,
          "end": 2932,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2929,
            "end": 2932,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2931,
              "end": 2932,
              "typeName": {
                "type": "Identifier",
                "start": 2931,
                "end": 2932,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2924,
        "end": 2927,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2925,
            "end": 2926,
            "name": {
              "type": "Identifier",
              "start": 2925,
              "end": 2926,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2933,
        "end": 2936,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2935,
          "end": 2936,
          "typeName": {
            "type": "Identifier",
            "start": 2935,
            "end": 2936,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2938,
      "end": 2976,
      "id": {
        "type": "Identifier",
        "start": 2955,
        "end": 2957,
        "name": "g2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2961,
          "end": 2965,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2962,
            "end": 2965,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2964,
              "end": 2965,
              "typeName": {
                "type": "Identifier",
                "start": 2964,
                "end": 2965,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2967,
          "end": 2971,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2968,
            "end": 2971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2970,
              "end": 2971,
              "typeName": {
                "type": "Identifier",
                "start": 2970,
                "end": 2971,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2957,
        "end": 2960,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2958,
            "end": 2959,
            "name": {
              "type": "Identifier",
              "start": 2958,
              "end": 2959,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2972,
        "end": 2975,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2974,
          "end": 2975,
          "typeName": {
            "type": "Identifier",
            "start": 2974,
            "end": 2975,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2977,
      "end": 3022,
      "id": {
        "type": "Identifier",
        "start": 2994,
        "end": 2996,
        "name": "g3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3003,
          "end": 3007,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3004,
            "end": 3007,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3006,
              "end": 3007,
              "typeName": {
                "type": "Identifier",
                "start": 3006,
                "end": 3007,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3009,
          "end": 3013,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3010,
            "end": 3013,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3012,
              "end": 3013,
              "typeName": {
                "type": "Identifier",
                "start": 3012,
                "end": 3013,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2996,
        "end": 3002,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2997,
            "end": 2998,
            "name": {
              "type": "Identifier",
              "start": 2997,
              "end": 2998,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3000,
            "end": 3001,
            "name": {
              "type": "Identifier",
              "start": 3000,
              "end": 3001,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "typeName": {
                "type": "Identifier",
                "start": 3016,
                "end": 3017,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3020,
              "end": 3021,
              "typeName": {
                "type": "Identifier",
                "start": 3020,
                "end": 3021,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3023,
      "end": 3057,
      "id": {
        "type": "Identifier",
        "start": 3040,
        "end": 3042,
        "name": "g4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3046,
          "end": 3050,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3047,
            "end": 3050,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3049,
              "end": 3050,
              "typeName": {
                "type": "Identifier",
                "start": 3049,
                "end": 3050,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3042,
        "end": 3045,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3043,
            "end": 3044,
            "name": {
              "type": "Identifier",
              "start": 3043,
              "end": 3044,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 3053,
              "end": 3054,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3058,
      "end": 3113,
      "id": {
        "type": "Identifier",
        "start": 3075,
        "end": 3077,
        "name": "g5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3096,
          "end": 3100,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3097,
            "end": 3100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3099,
              "end": 3100,
              "typeName": {
                "type": "Identifier",
                "start": 3099,
                "end": 3100,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3102,
          "end": 3106,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3103,
            "end": 3106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3105,
              "end": 3106,
              "typeName": {
                "type": "Identifier",
                "start": 3105,
                "end": 3106,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3077,
        "end": 3095,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3078,
            "end": 3094,
            "name": {
              "type": "Identifier",
              "start": 3078,
              "end": 3079,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3088,
              "end": 3094
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 3109,
              "end": 3110,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3114,
      "end": 3148,
      "id": {
        "type": "Identifier",
        "start": 3131,
        "end": 3133,
        "name": "g6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3137,
          "end": 3143,
          "name": "x",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 3140,
                  "end": 3141,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3133,
        "end": 3136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3134,
            "end": 3135,
            "name": {
              "type": "Identifier",
              "start": 3134,
              "end": 3135,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3144,
        "end": 3147,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3146,
          "end": 3147,
          "typeName": {
            "type": "Identifier",
            "start": 3146,
            "end": 3147,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3149,
      "end": 3185,
      "id": {
        "type": "Identifier",
        "start": 3166,
        "end": 3168,
        "name": "g7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3172,
          "end": 3178,
          "name": "x",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 3175,
                  "end": 3176,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3168,
        "end": 3171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3169,
            "end": 3170,
            "name": {
              "type": "Identifier",
              "start": 3169,
              "end": 3170,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 3181,
              "end": 3182,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3186,
      "end": 3234,
      "id": {
        "type": "Identifier",
        "start": 3203,
        "end": 3205,
        "name": "g8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3209,
          "end": 3213,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3210,
            "end": 3213,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3212,
              "end": 3213,
              "typeName": {
                "type": "Identifier",
                "start": 3212,
                "end": 3213,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3215,
          "end": 3229,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3216,
            "end": 3229,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3218,
              "end": 3229,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3219,
                  "end": 3223,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3220,
                    "end": 3223,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3222,
                      "end": 3223,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3222,
                        "end": 3223,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3228,
                    "end": 3229,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3205,
        "end": 3208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3206,
            "end": 3207,
            "name": {
              "type": "Identifier",
              "start": 3206,
              "end": 3207,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3230,
        "end": 3233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3232,
          "end": 3233,
          "typeName": {
            "type": "Identifier",
            "start": 3232,
            "end": 3233,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 3242,
            "end": 3254,
            "name": "a",
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
                        "value": 1,
                        "raw": "1"
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
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 3261,
                "end": 3262,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3272,
            "end": 3274,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3277,
            "end": 3282,
            "callee": {
              "type": "Identifier",
              "start": 3277,
              "end": 3279,
              "name": "g1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3280,
                "end": 3281,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3301,
            "end": 3303,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3306,
            "end": 3314,
            "callee": {
              "type": "Identifier",
              "start": 3306,
              "end": 3308,
              "name": "g2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3309,
                "end": 3310,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 3312,
                "end": 3313,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3333,
            "end": 3335,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3338,
            "end": 3346,
            "callee": {
              "type": "Identifier",
              "start": 3338,
              "end": 3340,
              "name": "g2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3341,
                "end": 3342,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 3344,
                "end": 3345,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3369,
            "end": 3371,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3374,
            "end": 3386,
            "callee": {
              "type": "Identifier",
              "start": 3374,
              "end": 3376,
              "name": "g3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3377,
                "end": 3378,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 3380,
                "end": 3385,
                "value": "two",
                "raw": "\"two\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3413,
            "end": 3415,
            "name": "x5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3418,
            "end": 3423,
            "callee": {
              "type": "Identifier",
              "start": 3418,
              "end": 3420,
              "name": "g4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3421,
                "end": 3422,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3449,
            "end": 3451,
            "name": "x6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3454,
            "end": 3462,
            "callee": {
              "type": "Identifier",
              "start": 3454,
              "end": 3456,
              "name": "g5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3457,
                "end": 3458,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 3460,
                "end": 3461,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3489,
            "end": 3491,
            "name": "x7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3494,
            "end": 3504,
            "callee": {
              "type": "Identifier",
              "start": 3494,
              "end": 3496,
              "name": "g6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 3501,
                    "end": 3502,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3528,
            "end": 3530,
            "name": "x8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3533,
            "end": 3538,
            "callee": {
              "type": "Identifier",
              "start": 3533,
              "end": 3535,
              "name": "g6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3536,
                "end": 3537,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3561,
            "end": 3563,
            "name": "x9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3566,
            "end": 3571,
            "callee": {
              "type": "Identifier",
              "start": 3566,
              "end": 3568,
              "name": "g7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3569,
                "end": 3570,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3598,
            "end": 3601,
            "name": "x10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3604,
            "end": 3617,
            "callee": {
              "type": "Identifier",
              "start": 3604,
              "end": 3606,
              "name": "g8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3607,
                "end": 3608,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3610,
                "end": 3616,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3610,
                    "end": 3611,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 3615,
                  "end": 3616,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3641,
            "end": 3644,
            "name": "x11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3647,
            "end": 3664,
            "callee": {
              "type": "Identifier",
              "start": 3647,
              "end": 3649,
              "name": "g8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3650,
                "end": 3651,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3653,
                "end": 3663,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3653,
                    "end": 3654,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 3658,
                  "end": 3663,
                  "left": {
                    "type": "Identifier",
                    "start": 3658,
                    "end": 3659,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 3662,
                    "end": 3663,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3683,
      "end": 3735,
      "id": {
        "type": "Identifier",
        "start": 3692,
        "end": 3701,
        "name": "makeArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3705,
          "end": 3709,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3706,
            "end": 3709,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3708,
              "end": 3709,
              "typeName": {
                "type": "Identifier",
                "start": 3708,
                "end": 3709,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3701,
        "end": 3704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3702,
            "end": 3703,
            "name": {
              "type": "Identifier",
              "start": 3702,
              "end": 3703,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 3712,
              "end": 3713,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3737,
      "end": 3845,
      "id": {
        "type": "Identifier",
        "start": 3746,
        "end": 3752,
        "name": "append",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3756,
          "end": 3762,
          "name": "a",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 3759,
                  "end": 3760,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3764,
          "end": 3768,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3765,
            "end": 3768,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3767,
              "end": 3768,
              "typeName": {
                "type": "Identifier",
                "start": 3767,
                "end": 3768,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 3785,
                  "end": 3791,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3794,
                  "end": 3803,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3794,
                    "end": 3801,
                    "object": {
                      "type": "Identifier",
                      "start": 3794,
                      "end": 3795,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3796,
                      "end": 3801,
                      "name": "slice",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3809,
            "end": 3824,
            "expression": {
              "type": "CallExpression",
              "start": 3809,
              "end": 3823,
              "callee": {
                "type": "MemberExpression",
                "start": 3809,
                "end": 3820,
                "object": {
                  "type": "Identifier",
                  "start": 3809,
                  "end": 3815,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3816,
                  "end": 3820,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3821,
                  "end": 3822,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 3829,
            "end": 3843,
            "argument": {
              "type": "Identifier",
              "start": 3836,
              "end": 3842,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3752,
        "end": 3755,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3753,
            "end": 3754,
            "name": {
              "type": "Identifier",
              "start": 3753,
              "end": 3754,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 3771,
              "end": 3772,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3847,
      "end": 3864,
      "id": {
        "type": "Identifier",
        "start": 3852,
        "end": 3855,
        "name": "Bit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": 0,
              "raw": "0"
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
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3870,
            "end": 3872,
            "name": "aa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3875,
            "end": 3892,
            "callee": {
              "type": "Identifier",
              "start": 3875,
              "end": 3884,
              "name": "makeArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3890,
                "end": 3891,
                "value": 0,
                "raw": "0"
              }
            ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3885,
                    "end": 3888,
                    "name": "Bit",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3894,
      "end": 3913,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3894,
        "end": 3912,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3894,
          "end": 3896,
          "name": "aa",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3899,
          "end": 3912,
          "callee": {
            "type": "Identifier",
            "start": 3899,
            "end": 3905,
            "name": "append",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 3906,
              "end": 3908,
              "name": "aa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Literal",
              "start": 3910,
              "end": 3911,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
