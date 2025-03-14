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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "array",
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 70,
                "end": 71,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
