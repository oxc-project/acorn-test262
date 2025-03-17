__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "JQuery",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 21,
        "body": []
      },
      "declare": false
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
  "start": 49,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 63,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 70,
            "end": 91,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 91,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 81,
                  "end": 90,
                  "id": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 90,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 84,
                        "end": 90,
                        "typeName": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 90,
                          "name": "JQuery",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
  "sourceType": "module",
  "hashbang": null
}
```
