__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 393,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "name": "ENUM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 40,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
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
          "start": 43,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
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
          "start": 46,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
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
        "start": 38,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 40,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
            "start": 43,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
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
            "start": 46,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "type": "EmptyStatement",
      "start": 49,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "name": "ENUM1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 62,
        "end": 65,
        "members": []
      }
    },
    {
      "type": "EmptyStatement",
      "start": 65,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 105,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 108,
            "end": 113,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
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
      "start": 141,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 161,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 164,
            "end": 174,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 165,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "name": "ENUM",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 170,
                "end": 173,
                "value": "B",
                "raw": "\"B\""
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
      "start": 176,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 196,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 199,
            "end": 220,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 219,
              "left": {
                "type": "MemberExpression",
                "start": 201,
                "end": 207,
                "object": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 205,
                  "name": "ENUM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 210,
                "end": 219,
                "object": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 214,
                  "name": "ENUM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 215,
                  "end": 218,
                  "value": "C",
                  "raw": "\"C\""
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
      "start": 247,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 267,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 270,
            "end": 276,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 271,
              "end": 276,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
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
      "start": 278,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 324,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 298,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 301,
            "end": 324,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 302,
              "end": 324,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 303,
                "end": 324,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 305,
                  "end": 323,
                  "left": {
                    "type": "MemberExpression",
                    "start": 305,
                    "end": 314,
                    "object": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 309,
                      "name": "ENUM",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 310,
                      "end": 313,
                      "value": "B",
                      "raw": "\"B\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 317,
                    "end": 323,
                    "object": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 321,
                      "name": "ENUM",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
                      "name": "C",
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
      "start": 356,
      "end": 362,
      "expression": {
        "type": "UnaryExpression",
        "start": 356,
        "end": 361,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 357,
          "end": 361,
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
      "start": 363,
      "end": 370,
      "expression": {
        "type": "UnaryExpression",
        "start": 363,
        "end": 369,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 364,
          "end": 369,
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
      "start": 371,
      "end": 379,
      "expression": {
        "type": "UnaryExpression",
        "start": 371,
        "end": 378,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 372,
          "end": 378,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 376,
            "name": "ENUM",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 393,
      "expression": {
        "type": "SequenceExpression",
        "start": 380,
        "end": 392,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 380,
            "end": 385,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 381,
              "end": 385,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 387,
            "end": 392,
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
