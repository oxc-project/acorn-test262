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
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "value": "./b",
        "raw": "'./b'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 122,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 39,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 52,
          "decorators": [],
          "name": "ns1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 53,
          "end": 122,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 57,
              "end": 120,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 64,
                "end": 120,
                "id": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 81,
                  "end": 120,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 87,
                      "end": 116,
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 94,
                        "end": 116,
                        "id": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 115,
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
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": []
                    }
                  ]
                },
                "kind": "namespace",
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
        "kind": "namespace",
        "declare": false,
        "global": false
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
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 122,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 39,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 52,
          "decorators": [],
          "name": "ns2",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 53,
          "end": 122,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 57,
              "end": 120,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 64,
                "end": 120,
                "id": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 81,
                  "end": 120,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 87,
                      "end": 116,
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 94,
                        "end": 116,
                        "id": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 115,
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
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": []
                    }
                  ]
                },
                "kind": "namespace",
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
        "kind": "namespace",
        "declare": false,
        "global": false
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
