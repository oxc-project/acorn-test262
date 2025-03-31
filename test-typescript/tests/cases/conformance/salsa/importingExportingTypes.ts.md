__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 181,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "fs",
        "raw": "\"fs\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 60,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 31,
              "end": 60,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 57,
                "name": "WriteFileOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 58,
                "end": 60,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 63,
            "end": 179,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 70,
              "end": 179,
              "id": {
                "type": "Identifier",
                "start": 79,
                "end": 88,
                "name": "writeFile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 101,
                  "name": "path",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "name": "data",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 139,
                  "name": "options",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 139,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 139,
                        "name": "WriteFileOptions",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 171,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 151,
                      "end": 171,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 152,
                          "end": 162,
                          "name": "err",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 155,
                            "end": 162,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 157,
                              "end": 162,
                              "typeName": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 162,
                                "name": "Error",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 171,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 167,
                          "end": 171
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 172,
                "end": 178,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 174,
                  "end": 178
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
