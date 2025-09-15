__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 30,
              "end": 37
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 18,
            "end": 37
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 57
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "importKind": "value",
              "start": 49,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 42,
            "end": 62
          }
        ],
        "start": 12,
        "end": 64
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
