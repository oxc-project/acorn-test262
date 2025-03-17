__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 60,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 49,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 53,
                  "end": 57,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
