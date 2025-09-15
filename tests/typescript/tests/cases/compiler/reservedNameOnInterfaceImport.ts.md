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
        "start": 18,
        "end": 22
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
              "start": 39,
              "end": 46
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 47,
              "end": 50
            },
            "declare": false,
            "start": 29,
            "end": 50
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 165
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 172
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "istring",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 180
              },
              "start": 168,
              "end": 180
            },
            "importKind": "value",
            "start": 152,
            "end": 181
          }
        ],
        "start": 23,
        "end": 183
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
