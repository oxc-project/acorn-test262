internalAliasUninitializedModuleInsideTopLevelModuleWithoutExport.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 105,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 103,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 103,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 97,
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 55,
                        "end": 97,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 67,
                          "end": 97,
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "start": 81,
                              "end": 87,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 84,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "method",
                              "optional": false,
                              "params": [],
                              "readonly": false,
                              "static": false
                            }
                          ]
                        },
                        "declare": false,
                        "extends": [],
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "decorators": [],
                          "name": "I",
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
      "type": "TSImportEqualsDeclaration",
      "start": 107,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 118,
        "end": 121,
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 141,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 130,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 134,
            "end": 140,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 137,
                  "end": 140,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 137,
                    "end": 140,
                    "left": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
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
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 150,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 149,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 147,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
