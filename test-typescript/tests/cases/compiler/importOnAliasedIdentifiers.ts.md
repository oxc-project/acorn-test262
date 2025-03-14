importOnAliasedIdentifiers.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 47,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 36,
                    "end": 45,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 59,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 63,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 67,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 66,
                        "end": 67,
                        "typeName": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "decorators": [],
                          "name": "X",
                          "optional": false
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
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 71,
      "end": 234,
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 234,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 86,
            "end": 111,
            "body": {
              "type": "TSInterfaceBody",
              "start": 98,
              "end": 111,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 100,
                  "end": 109,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 103,
                      "end": 109
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 116,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 161,
            "end": 176,
            "id": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "Z",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 172,
              "end": 175,
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 232,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 231,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 227,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 227,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 226,
                      "end": 227,
                      "typeName": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "decorators": [],
                        "name": "Z",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "Z",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
