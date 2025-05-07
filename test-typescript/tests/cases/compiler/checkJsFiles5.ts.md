__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 31,
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
      "start": 33,
      "end": 39,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 38,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 37,
          "end": 38,
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
