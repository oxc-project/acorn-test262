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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
              "argument": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 34,
        "end": 40,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 40,
          "raw": "10",
          "value": 10
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
              "argument": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 66,
        "end": 72,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 70,
          "end": 72,
          "raw": "20",
          "value": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
