__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 20,
                "end": 35,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 20,
                    "end": 26
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 38,
      "end": 157,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 78,
        "end": 157,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 155,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 124,
              "end": 155,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 134,
                  "end": 149,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 148,
                    "decorators": [],
                    "name": "stringOrNumber",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 88,
              "end": 122,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 88,
                "end": 109,
                "argument": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 109,
                  "decorators": [],
                  "name": "stringOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 114,
                "end": 122,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 42,
        "end": 76,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 42,
          "end": 63,
          "argument": {
            "type": "Identifier",
            "start": 49,
            "end": 63,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 68,
          "end": 76,
          "raw": "\"number\"",
          "value": "number",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 159,
      "end": 260,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 237,
        "end": 260,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 243,
            "end": 258,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 243,
              "end": 257,
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 163,
        "end": 235,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 163,
          "end": 197,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 163,
            "end": 184,
            "argument": {
              "type": "Identifier",
              "start": 170,
              "end": 184,
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 189,
            "end": 197,
            "raw": "\"number\"",
            "value": "number",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 201,
          "end": 235,
          "operator": "!==",
          "left": {
            "type": "UnaryExpression",
            "start": 201,
            "end": 222,
            "argument": {
              "type": "Identifier",
              "start": 208,
              "end": 222,
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 227,
            "end": 235,
            "raw": "\"number\"",
            "value": "number",
            "regex": null,
            "bigint": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
