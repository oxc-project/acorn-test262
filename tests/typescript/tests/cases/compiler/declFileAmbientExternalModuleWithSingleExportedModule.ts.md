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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "value": "SubModule",
        "raw": "\"SubModule\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 135,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 133,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 40,
              "end": 133,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 49,
                "end": 133,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 59,
                    "end": 127,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 66,
                      "end": 127,
                      "id": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "m3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 76,
                        "end": 127,
                        "body": [
                          {
                            "type": "TSInterfaceDeclaration",
                            "start": 90,
                            "end": 117,
                            "id": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 101,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeParameters": null,
                            "extends": [],
                            "body": {
                              "type": "TSInterfaceBody",
                              "start": 102,
                              "end": 117,
                              "body": []
                            },
                            "declare": false
                          }
                        ]
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 118,
        "end": 138,
        "expression": {
          "type": "Literal",
          "start": 126,
          "end": 137,
          "value": "SubModule",
          "raw": "'SubModule'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 171,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 147,
        "end": 171,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 170,
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
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
