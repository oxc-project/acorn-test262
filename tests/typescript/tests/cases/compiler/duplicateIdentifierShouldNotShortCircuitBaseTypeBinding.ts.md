__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IPoint",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 24,
          "end": 26
        },
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shapes",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 51
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 77
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPoint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 95
                    },
                    "typeArguments": null,
                    "start": 89,
                    "end": 95
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 96,
                  "end": 98
                },
                "abstract": false,
                "declare": false,
                "start": 66,
                "end": 98
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 59,
              "end": 98
            }
          ],
          "start": 52,
          "end": 101
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 35,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 125,
  "end": 125
}
```
