moduleAndInterfaceSharingName3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 101,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 101,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 69,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 69,
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 69,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 63,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 48,
                      "end": 63,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 60,
                        "end": 63,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "decorators": [],
                        "name": "Z",
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
                "name": "Y",
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
            "start": 74,
            "end": 99,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 81,
              "end": 99,
              "body": {
                "type": "TSInterfaceBody",
                "start": 96,
                "end": 99,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "Y",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 92,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 93,
                    "end": 94,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 114,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 109,
                  "end": 114,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 109,
                    "end": 112,
                    "left": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "Y",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "Z",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 117,
            "end": 121,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 142,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 142,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 134,
                  "end": 142,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 131,
                  "end": 134,
                  "left": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "Y",
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
    }
  ],
  "sourceType": "script"
}
```
