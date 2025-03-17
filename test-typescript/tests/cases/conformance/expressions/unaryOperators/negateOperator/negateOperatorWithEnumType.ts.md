__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 283,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
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
        "start": 38,
        "end": 41,
        "members": []
      }
    },
    {
      "type": "EmptyStatement",
      "start": 41,
      "end": 42
    },
    {
      "type": "TSEnumDeclaration",
      "start": 43,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "name": "ENUM1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 56,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
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
          "start": 59,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
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
          "start": 62,
          "end": 64,
          "id": {
            "type": "Literal",
            "start": 62,
            "end": 64,
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
        "start": 54,
        "end": 66,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
            "start": 59,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
            "start": 62,
            "end": 64,
            "id": {
              "type": "Literal",
              "start": 62,
              "end": 64,
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
      "start": 66,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 105,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 108,
            "end": 113,
            "operator": "-",
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
      "start": 131,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 150,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 153,
            "end": 164,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 154,
              "end": 164,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "name": "ENUM1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 160,
                "end": 163,
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
      "start": 166,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 185,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 188,
            "end": 210,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 190,
              "end": 209,
              "left": {
                "type": "MemberExpression",
                "start": 190,
                "end": 197,
                "object": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 195,
                  "name": "ENUM1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
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
                "start": 200,
                "end": 209,
                "object": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 205,
                  "name": "ENUM1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 206,
                  "end": 208,
                  "value": "",
                  "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 242,
      "end": 248,
      "expression": {
        "type": "UnaryExpression",
        "start": 242,
        "end": 247,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 243,
          "end": 247,
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
      "start": 249,
      "end": 256,
      "expression": {
        "type": "UnaryExpression",
        "start": 249,
        "end": 255,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 250,
          "end": 255,
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
      "start": 257,
      "end": 269,
      "expression": {
        "type": "UnaryExpression",
        "start": 257,
        "end": 268,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 258,
          "end": 268,
          "object": {
            "type": "Identifier",
            "start": 258,
            "end": 263,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 264,
            "end": 267,
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
      "start": 270,
      "end": 283,
      "expression": {
        "type": "SequenceExpression",
        "start": 270,
        "end": 282,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 270,
            "end": 275,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 277,
            "end": 282,
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
