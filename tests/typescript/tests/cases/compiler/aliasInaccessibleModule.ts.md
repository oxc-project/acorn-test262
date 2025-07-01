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
        "start": 7,
        "end": 8
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
              "start": 22,
              "end": 23
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 24,
              "end": 31
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 15,
            "end": 31
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
                "start": 50,
                "end": 51
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "importKind": "value",
              "start": 43,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 36,
            "end": 56
          }
        ],
        "start": 9,
        "end": 58
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
