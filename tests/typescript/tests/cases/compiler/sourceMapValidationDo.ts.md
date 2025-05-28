__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "DoWhileStatement",
      "start": 11,
      "end": 42,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 26,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 24,
            "expression": {
              "type": "UpdateExpression",
              "start": 20,
              "end": 23,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 34,
        "end": 40,
        "left": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 40,
          "value": 10,
          "raw": "10"
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 43,
      "end": 74,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 58,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 56,
            "expression": {
              "type": "UpdateExpression",
              "start": 52,
              "end": 55,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 66,
        "end": 72,
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 70,
          "end": 72,
          "value": 20,
          "raw": "20"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
