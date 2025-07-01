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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mstring",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 40
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 41,
              "end": 44
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 26,
            "end": 44
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 136
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "mstring",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 146
              },
              "importKind": "value",
              "start": 123,
              "end": 147
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 116,
            "end": 147
          }
        ],
        "start": 20,
        "end": 149
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
