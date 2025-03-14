internalAliasVarInsideLocalModuleWithoutExportAccessError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 40,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 29,
                "end": 40,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 39,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 37,
                      "end": 39,
                      "raw": "10",
                      "value": 10
                    }
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 108,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 51,
        "end": 108,
        "body": {
          "type": "TSModuleBlock",
          "start": 60,
          "end": 108,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 66,
              "end": 81,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 77,
                "end": 80,
                "left": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 86,
              "end": 106,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 93,
                "end": 106,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 97,
                    "end": 105,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 101,
                      "decorators": [],
                      "name": "bVal",
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
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
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 110,
      "end": 129,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 117,
        "end": 129,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 128,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 125,
              "end": 128,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
