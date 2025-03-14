internalAliasUninitializedModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 96,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 96,
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 96,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 90,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 48,
                      "end": 90,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 60,
                        "end": 90,
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "start": 74,
                            "end": 80,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 77,
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
                        "start": 58,
                        "end": 59,
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
                "start": 29,
                "end": 30,
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 168,
      "body": {
        "type": "TSModuleBlock",
        "start": 109,
        "end": 168,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 115,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 126,
              "end": 129,
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 153,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 142,
              "end": 153,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 146,
                  "end": 152,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 152,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 152,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 149,
                          "end": 152,
                          "left": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
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
            "start": 158,
            "end": 166,
            "expression": {
              "type": "CallExpression",
              "start": 158,
              "end": 165,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 158,
                "end": 163,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 163,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
