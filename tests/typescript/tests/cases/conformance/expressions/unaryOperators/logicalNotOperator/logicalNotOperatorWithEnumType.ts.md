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
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
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
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 62,
        "end": 65,
        "members": []
      },
      "const": false,
      "declare": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 113,
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
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 175,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 174,
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
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 165,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 170,
                "end": 173,
                "value": "B",
                "raw": "\"B\""
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 220,
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
            "operator": "!",
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
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 215,
                  "end": 218,
                  "value": "C",
                  "raw": "\"C\""
                },
                "optional": false,
                "computed": true
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 277,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 276,
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
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 271,
              "end": 276,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 325,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 324,
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
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 302,
              "end": 324,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 303,
                "end": 324,
                "operator": "!",
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
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 310,
                      "end": 313,
                      "value": "B",
                      "raw": "\"B\""
                    },
                    "optional": false,
                    "computed": true
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
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
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
        "argument": {
          "type": "Identifier",
          "start": 357,
          "end": 361,
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 364,
          "end": 369,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 372,
          "end": 378,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 376,
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
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
            "argument": {
              "type": "Identifier",
              "start": 381,
              "end": 385,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
