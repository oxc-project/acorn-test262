__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "'./b'",
        "value": "./b",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 39,
        "end": 122,
        "body": {
          "type": "TSModuleBlock",
          "start": 53,
          "end": 122,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 57,
              "end": 120,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 64,
                "end": 120,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 81,
                  "end": 120,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 87,
                      "end": 116,
                      "attributes": [],
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 94,
                        "end": 116,
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 115,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 103,
                            "end": 115,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 103,
                              "end": 113,
                              "left": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 106,
                                "decorators": [],
                                "name": "ns2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 113,
                                "decorators": [],
                                "name": "nested",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 115,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
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
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "namespace"
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
          "start": 49,
          "end": 52,
          "decorators": [],
          "name": "ns1",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 39,
        "end": 122,
        "body": {
          "type": "TSModuleBlock",
          "start": 53,
          "end": 122,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 57,
              "end": 120,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 64,
                "end": 120,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 81,
                  "end": 120,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 87,
                      "end": 116,
                      "attributes": [],
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 94,
                        "end": 116,
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 115,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 103,
                            "end": 115,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 103,
                              "end": 113,
                              "left": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 106,
                                "decorators": [],
                                "name": "ns1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 113,
                                "decorators": [],
                                "name": "nested",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 115,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
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
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "namespace"
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
          "start": 49,
          "end": 52,
          "decorators": [],
          "name": "ns2",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
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
