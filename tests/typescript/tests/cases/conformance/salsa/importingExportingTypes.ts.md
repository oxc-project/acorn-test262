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
                "decorators": [],
                "name": "WriteFileOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "writeFile",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                      "typeParameters": null,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
              },
              "body": null,
              "expression": false
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
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 80,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "writeFile",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "writeFile",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 36,
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 36,
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 38,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 38,
            "end": 54,
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "decorators": [],
            "name": "OtherName",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 79,
        "value": "fs",
        "raw": "\"fs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 143,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 131,
          "end": 140,
          "local": {
            "type": "Identifier",
            "start": 131,
            "end": 140,
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 131,
            "end": 140,
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 144,
      "end": 179,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 153,
          "end": 176,
          "local": {
            "type": "Identifier",
            "start": 153,
            "end": 162,
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 166,
            "end": 176,
            "decorators": [],
            "name": "ThisIsFine",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 180,
      "end": 208,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 189,
          "end": 205,
          "local": {
            "type": "Identifier",
            "start": 189,
            "end": 205,
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 189,
            "end": 205,
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
