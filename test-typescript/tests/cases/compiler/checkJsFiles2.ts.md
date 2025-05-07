__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 21,
            "end": 29,
            "raw": "\"string\"",
            "value": "string",
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
      "start": 31,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 31,
        "end": 36,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 36,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
