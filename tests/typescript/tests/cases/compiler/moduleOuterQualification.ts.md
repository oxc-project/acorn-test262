__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "outer",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 165,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "Beta",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 46,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 59,
              "end": 163,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 115,
                  "end": 159,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 122,
                    "end": 159,
                    "id": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 136,
                      "decorators": [],
                      "name": "Beta",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "start": 145,
                        "end": 155,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 145,
                          "end": 155,
                          "object": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 150,
                            "decorators": [],
                            "name": "outer",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 155,
                            "decorators": [],
                            "name": "Beta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 156,
                      "end": 159,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
