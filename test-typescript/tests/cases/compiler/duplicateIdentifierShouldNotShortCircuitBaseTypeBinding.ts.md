__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "name": "IPoint",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 26,
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
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 98,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 35,
        "end": 98,
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 48,
          "name": "Shapes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 49,
          "end": 98,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 56,
              "end": 95,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 63,
                "end": 95,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 74,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 93,
                  "end": 95,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 86,
                    "end": 92,
                    "expression": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 92,
                      "name": "IPoint",
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
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 122,
  "end": 122,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
