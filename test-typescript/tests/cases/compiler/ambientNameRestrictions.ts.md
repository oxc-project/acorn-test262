ambientNameRestrictions.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 58,
        "body": {
          "type": "TSModuleBlock",
          "start": 29,
          "end": 58,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 33,
              "end": 56,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 40,
                "end": 56,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 44,
                    "end": 55,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "decorators": [],
                      "name": "static",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 50,
                        "end": 55,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 52,
                          "end": 55
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
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
