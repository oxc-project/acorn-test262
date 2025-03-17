__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 307,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 176,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 203,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 188,
                "end": 203,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 205,
      "end": 306,
      "alternate": {
        "type": "BlockStatement",
        "start": 277,
        "end": 306,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 283,
            "end": 294,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 283,
              "end": 293,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 283,
                "end": 286,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 289,
                "end": 293,
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 235,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 259,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 241,
              "end": 258,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 244,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 247,
                "end": 258,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 251,
                  "decorators": [],
                  "name": "var1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 258,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 209,
        "end": 233,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 209,
          "end": 220,
          "argument": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 225,
          "end": 233,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
