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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 20,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 28,
      "expression": {
        "type": "UnaryExpression",
        "start": 22,
        "end": 27,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "UpdateExpression",
          "start": 24,
          "end": 27,
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 35,
      "expression": {
        "type": "UnaryExpression",
        "start": 29,
        "end": 34,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "UpdateExpression",
          "start": 31,
          "end": 34,
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
