__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 135,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 135,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 133,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 40,
              "end": 133,
              "body": {
                "type": "TSModuleBlock",
                "start": 49,
                "end": 133,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 59,
                    "end": 127,
                    "attributes": [],
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 66,
                      "end": 127,
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 76,
                        "end": 127,
                        "body": [
                          {
                            "type": "TSInterfaceDeclaration",
                            "start": 90,
                            "end": 117,
                            "body": {
                              "type": "TSInterfaceBody",
                              "start": 102,
                              "end": 117,
                              "body": []
                            },
                            "declare": false,
                            "extends": [],
                            "id": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 101,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeParameters": null
                          }
                        ]
                      },
                      "declare": false,
                      "global": false,
                      "id": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "m3",
                        "optional": false,
                        "typeAnnotation": null
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
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "raw": "\"SubModule\"",
        "value": "SubModule"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 99,
  "end": 172,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 99,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 115,
        "decorators": [],
        "name": "SubModule",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 118,
        "end": 138,
        "expression": {
          "type": "Literal",
          "start": 126,
          "end": 137,
          "raw": "'SubModule'",
          "value": "SubModule"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 171,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 147,
        "end": 171,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 170,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 151,
              "end": 170,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 170,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 170,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 154,
                    "end": 170,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 154,
                      "end": 168,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 154,
                        "end": 165,
                        "left": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 163,
                          "decorators": [],
                          "name": "SubModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 168,
                        "decorators": [],
                        "name": "m3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
