__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 20,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "await using"
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 65,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 65,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 54,
                "end": 62,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
