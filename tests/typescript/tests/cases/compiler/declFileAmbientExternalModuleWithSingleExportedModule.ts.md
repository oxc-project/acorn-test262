__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "SubModule",
        "raw": "\"SubModule\"",
        "start": 15,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 81
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "TSInterfaceDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 106,
                              "end": 107
                            },
                            "typeParameters": null,
                            "extends": [],
                            "body": {
                              "type": "TSInterfaceBody",
                              "body": [],
                              "start": 108,
                              "end": 123
                            },
                            "declare": false,
                            "start": 96,
                            "end": 123
                          }
                        ],
                        "start": 82,
                        "end": 133
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 69,
                      "end": 133
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 62,
                    "end": 133
                  }
                ],
                "start": 52,
                "end": 139
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 40,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 33,
            "end": 139
          }
        ],
        "start": 27,
        "end": 141
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 141
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 142
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 115
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "SubModule",
          "raw": "'SubModule'",
          "start": 126,
          "end": 137
        },
        "start": 118,
        "end": 138
      },
      "importKind": "value",
      "start": 99,
      "end": 139
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SubModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 163
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        },
                        "start": 154,
                        "end": 165
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 168
                      },
                      "start": 154,
                      "end": 168
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "start": 154,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 170
                },
                "start": 152,
                "end": 170
              },
              "start": 151,
              "end": 170
            },
            "init": null,
            "definite": false,
            "start": 151,
            "end": 170
          }
        ],
        "declare": false,
        "start": 147,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 99,
  "end": 172
}
```
