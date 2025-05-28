__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "WhileStatement",
      "start": 12,
      "end": 40,
      "test": {
        "type": "BinaryExpression",
        "start": 19,
        "end": 26,
        "left": {
          "type": "Identifier",
          "start": 19,
          "end": 20,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 24,
          "end": 26,
          "value": 10,
          "raw": "10"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 40,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 34,
            "end": 38,
            "expression": {
              "type": "UpdateExpression",
              "start": 34,
              "end": 37,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 41,
      "end": 69,
      "test": {
        "type": "BinaryExpression",
        "start": 48,
        "end": 55,
        "left": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 53,
          "end": 55,
          "value": 10,
          "raw": "10"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 69,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 63,
            "end": 67,
            "expression": {
              "type": "UpdateExpression",
              "start": 63,
              "end": 66,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
