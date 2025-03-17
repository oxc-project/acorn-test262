__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 58,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 29,
          "end": 58,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 33,
              "end": 56,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 40,
                "end": 56,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 44,
                    "end": 55,
                    "id": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "name": "static",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 50,
                        "end": 55,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 52,
                          "end": 55
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
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
