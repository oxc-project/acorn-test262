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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 60,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 53,
                  "end": 57,
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
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
