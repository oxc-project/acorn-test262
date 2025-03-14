__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 82,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 82,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 80,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 80,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 80,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 74,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 55,
                        "end": 74,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 63,
                          "end": 74,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "implements": [],
                        "superClass": null
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
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "module"
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
      "start": 84,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 91,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 102,
          "end": 105,
          "left": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 137,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 136,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 124,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 124,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 121,
                  "end": 124,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 121,
                    "end": 124,
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 127,
              "end": 136,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 131,
                "end": 134,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
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
  "sourceType": "script",
  "hashbang": null
}
```
