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
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 41,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "ENUM",
        "optional": false
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
      "body": {
        "type": "TSEnumBody",
        "start": 54,
        "end": 66,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 57,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 60,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 64,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 62,
              "end": 64,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "decorators": [],
        "name": "ENUM1",
        "optional": false
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 105,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false
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
              "optional": false
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
      "start": 131,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 150,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 153,
            "end": 164,
            "argument": {
              "type": "MemberExpression",
              "start": 154,
              "end": 164,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "decorators": [],
                "name": "ENUM1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 160,
                "end": 163,
                "raw": "\"B\"",
                "value": "B"
              }
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
      "start": 166,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 185,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 188,
            "end": 210,
            "argument": {
              "type": "BinaryExpression",
              "start": 190,
              "end": 209,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 190,
                "end": 197,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 195,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 200,
                "end": 209,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 205,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 206,
                  "end": 208,
                  "raw": "\"\"",
                  "value": ""
                }
              }
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
      "type": "ExpressionStatement",
      "start": 242,
      "end": 248,
      "expression": {
        "type": "UnaryExpression",
        "start": 242,
        "end": 247,
        "argument": {
          "type": "Identifier",
          "start": 243,
          "end": 247,
          "decorators": [],
          "name": "ENUM",
          "optional": false
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 256,
      "expression": {
        "type": "UnaryExpression",
        "start": 249,
        "end": 255,
        "argument": {
          "type": "Identifier",
          "start": 250,
          "end": 255,
          "decorators": [],
          "name": "ENUM1",
          "optional": false
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 269,
      "expression": {
        "type": "UnaryExpression",
        "start": 257,
        "end": 268,
        "argument": {
          "type": "MemberExpression",
          "start": 258,
          "end": 268,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 258,
            "end": 263,
            "decorators": [],
            "name": "ENUM1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 264,
            "end": 267,
            "raw": "\"B\"",
            "value": "B"
          }
        },
        "operator": "-",
        "prefix": true
      }
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
            "argument": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "decorators": [],
              "name": "ENUM",
              "optional": false
            },
            "operator": "-",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 277,
            "end": 282,
            "decorators": [],
            "name": "ENUM1",
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
