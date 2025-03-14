nonExportedElementsOfMergedModules.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 74,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 74,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 17,
            "end": 29,
            "body": {
              "type": "TSEnumBody",
              "start": 24,
              "end": 29,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 26,
                  "end": 27,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 34,
            "end": 72,
            "body": {
              "type": "TSModuleBlock",
              "start": 43,
              "end": 72,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 53,
                  "end": 66,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 60,
                    "end": 66,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 64,
                        "end": 65,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 64,
                          "end": 65,
                          "decorators": [],
                          "name": "x",
                          "optional": false
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
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "One",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 76,
      "end": 168,
      "body": {
        "type": "TSModuleBlock",
        "start": 87,
        "end": 168,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 93,
            "end": 105,
            "body": {
              "type": "TSEnumBody",
              "start": 100,
              "end": 105,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 102,
                  "end": 103,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "Y",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 110,
            "end": 148,
            "body": {
              "type": "TSModuleBlock",
              "start": 119,
              "end": 148,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 129,
                  "end": 142,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 136,
                    "end": 142,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 140,
                        "end": 141,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "y",
                          "optional": false
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
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 157,
            "expression": {
              "type": "MemberExpression",
              "start": 153,
              "end": 156,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 166,
            "expression": {
              "type": "MemberExpression",
              "start": 162,
              "end": 165,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "One",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
