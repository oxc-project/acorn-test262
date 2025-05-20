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
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 21,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
  "end": 93,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 93,
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 70,
            "end": 91,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 91,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 81,
                  "end": 90,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 90,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 84,
                        "end": 90,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 90,
                          "decorators": [],
                          "name": "JQuery",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 63,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
