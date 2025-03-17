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
      "body": {
        "type": "TSEnumBody",
        "start": 42,
        "end": 45,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
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
      "body": {
        "type": "TSEnumBody",
        "start": 58,
        "end": 70,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 61,
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
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 63,
            "end": 64,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 68,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 66,
              "end": 68,
              "raw": "\"\"",
              "value": ""
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 109,
            "end": 118,
            "argument": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 139,
            "end": 149,
            "argument": {
              "type": "Identifier",
              "start": 144,
              "end": 149,
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 193,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 196,
            "end": 211,
            "argument": {
              "type": "MemberExpression",
              "start": 201,
              "end": 211,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 206,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 207,
                "end": 210,
                "raw": "\"A\"",
                "value": "A"
              }
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 229,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 232,
            "end": 259,
            "argument": {
              "type": "BinaryExpression",
              "start": 238,
              "end": 258,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 238,
                "end": 245,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 242,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 243,
                  "end": 244,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 248,
                "end": 258,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 253,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 254,
                  "end": 257,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 306,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 309,
            "end": 323,
            "argument": {
              "type": "UnaryExpression",
              "start": 314,
              "end": 323,
              "argument": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "void",
              "prefix": true
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 341,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 344,
            "end": 378,
            "argument": {
              "type": "UnaryExpression",
              "start": 349,
              "end": 378,
              "argument": {
                "type": "UnaryExpression",
                "start": 354,
                "end": 378,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 360,
                  "end": 377,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 360,
                    "end": 367,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 370,
                    "end": 377,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 375,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "void",
                "prefix": true
              },
              "operator": "void",
              "prefix": true
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 410,
      "end": 420,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 410,
        "end": 419,
        "argument": {
          "type": "Identifier",
          "start": 415,
          "end": 419,
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 432,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 421,
        "end": 431,
        "argument": {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 449,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 433,
        "end": 448,
        "argument": {
          "type": "MemberExpression",
          "start": 438,
          "end": 448,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 438,
            "end": 443,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 444,
            "end": 447,
            "raw": "\"B\"",
            "value": "B"
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 467,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 450,
        "end": 466,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 450,
            "end": 459,
            "argument": {
              "type": "Identifier",
              "start": 455,
              "end": 459,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "void",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 461,
            "end": 466,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
