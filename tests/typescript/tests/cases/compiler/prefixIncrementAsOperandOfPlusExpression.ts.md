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
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 20,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "prefix": true
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
