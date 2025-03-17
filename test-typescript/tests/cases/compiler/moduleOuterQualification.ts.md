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
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "name": "outer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Beta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "Beta",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "outer",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 155,
                            "name": "Beta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ],
                    "typeParameters": null,
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
                  "attributes": [],
                  "exportKind": "type"
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
