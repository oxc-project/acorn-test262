__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "importKind": "value",
          "start": 14,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 25,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns1",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 52
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
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 80
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 100
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ns2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 106
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nested",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 107,
                                "end": 113
                              },
                              "start": 103,
                              "end": 113
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 114,
                              "end": 115
                            },
                            "start": 103,
                            "end": 115
                          },
                          "typeArguments": null,
                          "start": 103,
                          "end": 115
                        },
                        "declare": false,
                        "start": 94,
                        "end": 116
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 87,
                      "end": 116
                    }
                  ],
                  "start": 81,
                  "end": 120
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 64,
                "end": 120
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 57,
              "end": 120
            }
          ],
          "start": 53,
          "end": 122
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 39,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "importKind": "value",
          "start": 14,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 25,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns2",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 52
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
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 80
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 100
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ns1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 106
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nested",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 107,
                                "end": 113
                              },
                              "start": 103,
                              "end": 113
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 114,
                              "end": 115
                            },
                            "start": 103,
                            "end": 115
                          },
                          "typeArguments": null,
                          "start": 103,
                          "end": 115
                        },
                        "declare": false,
                        "start": 94,
                        "end": 116
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 87,
                      "end": 116
                    }
                  ],
                  "start": 81,
                  "end": 120
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 64,
                "end": 120
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 57,
              "end": 120
            }
          ],
          "start": 53,
          "end": 122
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 39,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
