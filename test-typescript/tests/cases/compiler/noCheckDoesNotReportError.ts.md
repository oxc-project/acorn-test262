noCheckDoesNotReportError.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 34,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 33,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 22,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16,
                  "end": 22
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 25,
              "end": 33,
              "raw": "\"not ok\"",
              "value": "not ok"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
