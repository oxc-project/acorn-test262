__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 467,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 32,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "name": "ENUM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 42,
        "end": 45,
        "members": []
      }
    },
    {
      "type": "EmptyStatement",
      "start": 45,
      "end": 46
    },
    {
      "type": "TSEnumDeclaration",
      "start": 47,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "name": "ENUM1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 60,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
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
          "start": 63,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
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
          "start": 66,
          "end": 68,
          "id": {
            "type": "Literal",
            "start": 66,
            "end": 68,
            "value": "",
            "raw": "\"\""
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 58,
        "end": 70,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
            "start": 63,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
            "start": 66,
            "end": 68,
            "id": {
              "type": "Literal",
              "start": 66,
              "end": 68,
              "value": "",
              "raw": "\"\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 70,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "name": "ResultIsAny1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 109,
            "end": 118,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 120,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "name": "ResultIsAny2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 139,
            "end": 149,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 144,
              "end": 149,
              "name": "ENUM1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 177,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 193,
            "name": "ResultIsAny3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 196,
            "end": 211,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 201,
              "end": 211,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 206,
                "name": "ENUM1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 207,
                "end": 210,
                "value": "A",
                "raw": "\"A\""
              },
              "computed": true,
              "optional": false
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
      "start": 213,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 229,
            "name": "ResultIsAny4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 232,
            "end": 259,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 238,
              "end": 258,
              "left": {
                "type": "MemberExpression",
                "start": 238,
                "end": 245,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 242,
                  "name": "ENUM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 243,
                  "end": 244,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 248,
                "end": 258,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 253,
                  "name": "ENUM1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 254,
                  "end": 257,
                  "value": "B",
                  "raw": "\"B\""
                },
                "computed": true,
                "optional": false
              }
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
      "start": 290,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 306,
            "name": "ResultIsAny5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 309,
            "end": 323,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 314,
              "end": 323,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "name": "ENUM",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "start": 325,
      "end": 379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 341,
            "name": "ResultIsAny6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 344,
            "end": 378,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 349,
              "end": 378,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 354,
                "end": 378,
                "operator": "void",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 360,
                  "end": 377,
                  "left": {
                    "type": "MemberExpression",
                    "start": 360,
                    "end": 367,
                    "object": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "name": "ENUM",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": true,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 370,
                    "end": 377,
                    "object": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 375,
                      "name": "ENUM1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 410,
      "end": 420,
      "expression": {
        "type": "UnaryExpression",
        "start": 410,
        "end": 419,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 415,
          "end": 419,
          "name": "ENUM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 432,
      "expression": {
        "type": "UnaryExpression",
        "start": 421,
        "end": 431,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "name": "ENUM1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 449,
      "expression": {
        "type": "UnaryExpression",
        "start": 433,
        "end": 448,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 438,
          "end": 448,
          "object": {
            "type": "Identifier",
            "start": 438,
            "end": 443,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 444,
            "end": 447,
            "value": "B",
            "raw": "\"B\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 467,
      "expression": {
        "type": "SequenceExpression",
        "start": 450,
        "end": 466,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 450,
            "end": 459,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 455,
              "end": 459,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 461,
            "end": 466,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
