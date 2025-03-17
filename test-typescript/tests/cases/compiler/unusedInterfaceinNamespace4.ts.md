__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Validation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 166,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 39,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 88,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "name": "i3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 109,
                "end": 111,
                "expression": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 111,
                  "name": "i1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 112,
              "end": 120,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 126,
            "end": 164,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 133,
              "end": 164,
              "id": {
                "type": "Identifier",
                "start": 139,
                "end": 141,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 156,
                "end": 164,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 153,
                  "end": 155,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 155,
                    "name": "i3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
