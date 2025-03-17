__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 180,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "name": "istring",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 44,
              "end": 47,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 149,
            "end": 178,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 162,
              "name": "string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 165,
              "end": 177,
              "left": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "name": "istring",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
