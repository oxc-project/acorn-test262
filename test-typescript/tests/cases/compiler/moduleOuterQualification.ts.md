moduleOuterQualification.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 165,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "Beta",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 46,
            "end": 163,
            "body": {
              "type": "TSModuleBlock",
              "start": 59,
              "end": 163,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 115,
                  "end": 159,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 122,
                    "end": 159,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 156,
                      "end": 159,
                      "body": []
                    },
                    "declare": false,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "start": 145,
                        "end": 155,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 145,
                          "end": 155,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 150,
                            "decorators": [],
                            "name": "outer",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 155,
                            "decorators": [],
                            "name": "Beta",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "id": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 136,
                      "decorators": [],
                      "name": "Beta",
                      "optional": false
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "decorators": [],
              "name": "inner",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "outer",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
