/foo.d.ts
```json
{
  "type": "Program",
  "start": 33,
  "end": 64,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 62,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 49,
                  "end": 62,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 49,
                      "end": 55
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 58,
                      "end": 62
                    }
                  ]
                }
              }
            },
            "init": null
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
  "sourceType": "module"
}
```
