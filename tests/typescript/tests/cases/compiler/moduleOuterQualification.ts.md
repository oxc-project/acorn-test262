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
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Beta",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 25,
            "end": 43
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 58
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Beta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 136
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "outer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 145,
                            "end": 150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Beta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 155
                          },
                          "optional": false,
                          "computed": false,
                          "start": 145,
                          "end": 155
                        },
                        "typeArguments": null,
                        "start": 145,
                        "end": 155
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 156,
                      "end": 159
                    },
                    "declare": false,
                    "start": 122,
                    "end": 159
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 115,
                  "end": 159
                }
              ],
              "start": 59,
              "end": 163
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 46,
            "end": 163
          }
        ],
        "start": 21,
        "end": 165
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 165
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 165
}
```
