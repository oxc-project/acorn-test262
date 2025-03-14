__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foof",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 25,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            }
          }
        },
        {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 37,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 31,
          "end": 37
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 77,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "foof",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 64,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 64,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 58,
              "end": 64
            }
          }
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 76,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 78,
      "end": 121,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 109,
            "end": 119,
            "argument": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "decorators": [],
        "name": "foof",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 100,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 95,
            "end": 100,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 97,
              "end": 100
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 106,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 103,
          "end": 106
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 121,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 136,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 139,
            "end": 154,
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 147,
                "raw": "\"s\"",
                "value": "s"
              },
              {
                "type": "Literal",
                "start": 149,
                "end": 153,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 139,
              "end": 143,
              "decorators": [],
              "name": "foof",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 169,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 169,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 163,
                "end": 169
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 172,
            "end": 187,
            "arguments": [
              {
                "type": "Literal",
                "start": 177,
                "end": 180,
                "raw": "\"s\"",
                "value": "s"
              },
              {
                "type": "Literal",
                "start": 182,
                "end": 186,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 172,
              "end": 176,
              "decorators": [],
              "name": "foof",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 190,
      "end": 229,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 204,
        "decorators": [],
        "name": "foof2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 205,
          "end": 216,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            }
          }
        },
        {
          "type": "Identifier",
          "start": 218,
          "end": 219,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 220,
        "end": 228,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 222,
          "end": 228
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 230,
      "end": 269,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 244,
        "decorators": [],
        "name": "foof2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 245,
          "end": 256,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 256,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 250,
              "end": 256
            }
          }
        },
        {
          "type": "Identifier",
          "start": 258,
          "end": 259,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 260,
        "end": 268,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 262,
          "end": 268
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 270,
      "end": 314,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 300,
        "end": 314,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 302,
            "end": 312,
            "argument": {
              "type": "Identifier",
              "start": 309,
              "end": 312,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 284,
        "decorators": [],
        "name": "foof2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 285,
          "end": 293,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 293,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 290,
              "end": 293
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 294,
        "end": 299,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 296,
          "end": 299
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 314,
      "end": 315
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 330,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 330,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 324,
                "end": 330
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 333,
            "end": 349,
            "arguments": [
              {
                "type": "Literal",
                "start": 339,
                "end": 342,
                "raw": "\"s\"",
                "value": "s"
              },
              {
                "type": "Literal",
                "start": 344,
                "end": 348,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 333,
              "end": 338,
              "decorators": [],
              "name": "foof2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 365,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 365,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 359,
                "end": 365
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 368,
            "end": 384,
            "arguments": [
              {
                "type": "Literal",
                "start": 374,
                "end": 377,
                "raw": "\"s\"",
                "value": "s"
              },
              {
                "type": "Literal",
                "start": 379,
                "end": 383,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 373,
              "decorators": [],
              "name": "foof2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
