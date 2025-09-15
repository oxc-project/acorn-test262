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
        "start": 18,
        "end": 23
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
              "start": 38,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 28,
            "end": 46
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 64
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
                      "start": 138,
                      "end": 142
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
                            "start": 151,
                            "end": 156
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Beta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 161
                          },
                          "optional": false,
                          "computed": false,
                          "start": 151,
                          "end": 161
                        },
                        "typeArguments": null,
                        "start": 151,
                        "end": 161
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 162,
                      "end": 165
                    },
                    "declare": false,
                    "start": 128,
                    "end": 165
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 121,
                  "end": 165
                }
              ],
              "start": 65,
              "end": 169
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 49,
            "end": 169
          }
        ],
        "start": 24,
        "end": 171
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
