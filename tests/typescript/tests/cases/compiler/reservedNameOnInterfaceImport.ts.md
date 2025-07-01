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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "istring",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 43
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 44,
              "end": 47
            },
            "declare": false,
            "start": 26,
            "end": 47
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 162
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 169
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "istring",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 177
              },
              "start": 165,
              "end": 177
            },
            "importKind": "value",
            "start": 149,
            "end": 178
          }
        ],
        "start": 20,
        "end": 180
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
