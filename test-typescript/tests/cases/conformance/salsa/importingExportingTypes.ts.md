/node_modules/@types/node/index.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 60,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 31,
              "end": 60,
              "body": {
                "type": "TSInterfaceBody",
                "start": 58,
                "end": 60,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 57,
                "decorators": [],
                "name": "WriteFileOptions",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 63,
            "end": 179,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 70,
              "end": 179,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 79,
                "end": 88,
                "decorators": [],
                "name": "writeFile",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 101,
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 139,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
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
                        "decorators": [],
                        "name": "WriteFileOptions",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 171,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 151,
                      "end": 171,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 152,
                          "end": 162,
                          "decorators": [],
                          "name": "err",
                          "optional": false,
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
                                "decorators": [],
                                "name": "Error",
                                "optional": false
                              }
                            }
                          }
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
                  }
                }
              ],
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
        "end": 19,
        "raw": "\"fs\"",
        "value": "fs"
      }
    }
  ],
  "sourceType": "module"
}
```
