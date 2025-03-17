__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 34,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 22,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16,
                  "end": 22
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 25,
              "end": 33,
              "value": "not ok",
              "raw": "\"not ok\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
