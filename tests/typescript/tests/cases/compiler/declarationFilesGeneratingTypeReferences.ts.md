__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 17,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 63
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JQuery",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 90
                        },
                        "typeArguments": null,
                        "start": 84,
                        "end": 90
                      },
                      "start": 82,
                      "end": 90
                    },
                    "start": 81,
                    "end": 90
                  },
                  "init": null,
                  "definite": false,
                  "start": 81,
                  "end": 90
                }
              ],
              "declare": false,
              "start": 77,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 70,
            "end": 91
          }
        ],
        "start": 64,
        "end": 93
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 49,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 93
}
```
