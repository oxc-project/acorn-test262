__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "path",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 20,
            "value": "./foo",
            "raw": "'./foo'"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 36,
      "expression": {
        "type": "ImportExpression",
        "start": 22,
        "end": 35,
        "source": {
          "type": "Identifier",
          "start": 29,
          "end": 33,
          "name": "path",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "options": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
