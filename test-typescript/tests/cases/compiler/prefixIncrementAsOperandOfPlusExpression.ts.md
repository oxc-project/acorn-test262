__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 20,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 28,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 22,
        "end": 27,
        "argument": {
          "type": "UpdateExpression",
          "start": 24,
          "end": 27,
          "argument": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": true
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 35,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 29,
        "end": 34,
        "argument": {
          "type": "UpdateExpression",
          "start": 31,
          "end": 34,
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": true
        },
        "operator": "+",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
