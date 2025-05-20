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
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 40,
            "end": 41,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 44,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 47,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
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
      "body": {
        "type": "TSEnumBody",
        "start": 62,
        "end": 65,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 105,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 108,
            "end": 113,
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 161,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 164,
            "end": 174,
            "argument": {
              "type": "MemberExpression",
              "start": 165,
              "end": 174,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 170,
                "end": 173,
                "raw": "\"B\"",
                "value": "B"
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 196,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 199,
            "end": 220,
            "argument": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 219,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 201,
                "end": 207,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 205,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 210,
                "end": 219,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 214,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 215,
                  "end": 218,
                  "raw": "\"C\"",
                  "value": "C"
                }
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 267,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 270,
            "end": 276,
            "argument": {
              "type": "UnaryExpression",
              "start": 271,
              "end": 276,
              "argument": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 298,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 301,
            "end": 324,
            "argument": {
              "type": "UnaryExpression",
              "start": 302,
              "end": 324,
              "argument": {
                "type": "UnaryExpression",
                "start": 303,
                "end": 324,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 305,
                  "end": 323,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 305,
                    "end": 314,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 309,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 310,
                      "end": 313,
                      "raw": "\"B\"",
                      "value": "B"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 317,
                    "end": 323,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 321,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 362,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 356,
        "end": 361,
        "argument": {
          "type": "Identifier",
          "start": 357,
          "end": 361,
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 370,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 363,
        "end": 369,
        "argument": {
          "type": "Identifier",
          "start": 364,
          "end": 369,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 371,
      "end": 379,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 371,
        "end": 378,
        "argument": {
          "type": "MemberExpression",
          "start": 372,
          "end": 378,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 376,
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 393,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 380,
        "end": 392,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 380,
            "end": 385,
            "argument": {
              "type": "Identifier",
              "start": 381,
              "end": 385,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 387,
            "end": 392,
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
