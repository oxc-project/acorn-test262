__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 16,
            "end": 20
          },
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 58,
                  "end": 62
                },
                "definite": false,
                "start": 54,
                "end": 62
              }
            ],
            "declare": false,
            "start": 42,
            "end": 63
          }
        ],
        "start": 36,
        "end": 65
      },
      "expression": false,
      "start": 23,
      "end": 65
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
