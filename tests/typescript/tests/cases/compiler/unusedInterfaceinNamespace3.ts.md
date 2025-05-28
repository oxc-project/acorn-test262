__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 122,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 39,
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 48,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 82,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 61,
              "end": 82,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 74,
                "end": 82,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 88,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "i3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 109,
                "end": 111,
                "expression": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 111,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 112,
              "end": 120,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
