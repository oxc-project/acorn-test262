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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 39,
                      "end": 40
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      },
                      "start": 40,
                      "end": 48
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 39,
                    "end": 48
                  }
                ],
                "start": 37,
                "end": 50
              },
              "declare": false,
              "start": 25,
              "end": 50
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 50
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 69,
                          "end": 70
                        },
                        "typeArguments": null,
                        "start": 69,
                        "end": 70
                      },
                      "start": 67,
                      "end": 70
                    },
                    "start": 66,
                    "end": 70
                  },
                  "init": null,
                  "definite": false,
                  "start": 66,
                  "end": 70
                }
              ],
              "declare": false,
              "start": 62,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 55,
            "end": 71
          }
        ],
        "start": 12,
        "end": 73
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 85
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 106,
                  "end": 115
                }
              ],
              "start": 104,
              "end": 117
            },
            "declare": false,
            "start": 92,
            "end": 117
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "importKind": "value",
            "start": 122,
            "end": 135
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 179
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "start": 178,
              "end": 181
            },
            "importKind": "value",
            "start": 167,
            "end": 182
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 232,
                        "end": 233
                      },
                      "typeArguments": null,
                      "start": 232,
                      "end": 233
                    },
                    "start": 230,
                    "end": 233
                  },
                  "start": 229,
                  "end": 233
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "definite": false,
                "start": 229,
                "end": 237
              }
            ],
            "declare": false,
            "start": 225,
            "end": 238
          }
        ],
        "start": 86,
        "end": 240
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 74,
      "end": 240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
