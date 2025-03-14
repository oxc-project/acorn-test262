__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 13,
        "end": 32,
        "decorators": [],
        "name": "SomeNonExistingName",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 45,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 41,
          "end": 44,
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
