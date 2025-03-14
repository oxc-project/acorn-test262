exportDefaultForNonInstantiatedModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 43,
              "body": {
                "type": "TSInterfaceBody",
                "start": 36,
                "end": 43,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 35,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 71,
      "end": 88,
      "declaration": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
