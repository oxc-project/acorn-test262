__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 15,
            "end": 100,
            "elements": [
              {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 70,
                "end": 71,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
