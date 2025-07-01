__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
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
                "name": "WriteFileOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 57
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 58,
                "end": 60
              },
              "declare": false,
              "start": 31,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 24,
            "end": 60
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "writeFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 88
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    "start": 93,
                    "end": 101
                  },
                  "start": 89,
                  "end": 101
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    },
                    "start": 107,
                    "end": 112
                  },
                  "start": 103,
                  "end": 112
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WriteFileOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 139
                    },
                    "start": 121,
                    "end": 139
                  },
                  "start": 114,
                  "end": 139
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 162
                              },
                              "typeArguments": null,
                              "start": 157,
                              "end": 162
                            },
                            "start": 155,
                            "end": 162
                          },
                          "start": 152,
                          "end": 162
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 167,
                          "end": 171
                        },
                        "start": 164,
                        "end": 171
                      },
                      "start": 151,
                      "end": 171
                    },
                    "start": 149,
                    "end": 171
                  },
                  "start": 141,
                  "end": 171
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 174,
                  "end": 178
                },
                "start": 172,
                "end": 178
              },
              "body": null,
              "expression": false,
              "start": 70,
              "end": 179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 63,
            "end": 179
          }
        ],
        "start": 20,
        "end": 181
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 182
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
            "name": "writeFile",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "writeFile",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 36
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 36
          },
          "importKind": "value",
          "start": 20,
          "end": 36
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 54
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "OtherName",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 67
          },
          "importKind": "value",
          "start": 38,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 75,
        "end": 79
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 140
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 140
          },
          "exportKind": "value",
          "start": 131,
          "end": 140
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 122,
      "end": 143
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 162
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThisIsFine",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 176
          },
          "exportKind": "value",
          "start": 153,
          "end": 176
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 144,
      "end": 179
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 205
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 205
          },
          "exportKind": "value",
          "start": 189,
          "end": 205
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 180,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
}
```
