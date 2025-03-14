importedModuleClassNameClash.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 13,
        "end": 15,
        "decorators": [],
        "name": "m1",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 26,
        "end": 39,
        "body": {
          "type": "TSModuleBlock",
          "start": 36,
          "end": 39,
          "body": []
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 35,
          "decorators": [],
          "name": "m1",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
