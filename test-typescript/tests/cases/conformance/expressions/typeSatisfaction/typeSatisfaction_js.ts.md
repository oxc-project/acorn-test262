__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 8,
            "end": 29,
            "expression": {
              "type": "Identifier",
              "start": 8,
              "end": 17,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 28,
              "end": 29,
              "literal": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "raw": "1",
                "value": 1
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
