__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "~popsicle/dist/request",
        "raw": "'~popsicle/dist/request'",
        "start": 15,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Request",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 66
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 67,
                "end": 69
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 69
          }
        ],
        "start": 40,
        "end": 71
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "~popsicle/dist/common",
        "raw": "'~popsicle/dist/common'",
        "start": 88,
        "end": 111
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 134
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 134
                },
                "importKind": "value",
                "start": 127,
                "end": 134
              }
            ],
            "source": {
              "type": "Literal",
              "value": "~popsicle/dist/request",
              "raw": "'~popsicle/dist/request'",
              "start": 142,
              "end": 166
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 118,
            "end": 167
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
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "exportKind": "value",
                "start": 181,
                "end": 188
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 172,
            "end": 191
          }
        ],
        "start": 112,
        "end": 193
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 73,
      "end": 193
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "popsicle",
        "raw": "'popsicle'",
        "start": 210,
        "end": 220
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 239
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "~popsicle/dist/common",
                "raw": "'~popsicle/dist/common'",
                "start": 250,
                "end": 273
              },
              "start": 242,
              "end": 274
            },
            "importKind": "value",
            "start": 227,
            "end": 275
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 294
            },
            "start": 280,
            "end": 295
          }
        ],
        "start": 221,
        "end": 297
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 195,
      "end": 297
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "popsicle-proxy-agent",
        "raw": "'popsicle-proxy-agent'",
        "start": 314,
        "end": 336
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 359
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 359
                },
                "importKind": "value",
                "start": 352,
                "end": 359
              }
            ],
            "source": {
              "type": "Literal",
              "value": "popsicle",
              "raw": "'popsicle'",
              "start": 367,
              "end": 377
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 343,
            "end": 378
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 397
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "request",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 418
                        },
                        "typeArguments": null,
                        "start": 411,
                        "end": 418
                      },
                      "start": 409,
                      "end": 418
                    },
                    "start": 402,
                    "end": 418
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 423,
                    "end": 426
                  },
                  "start": 420,
                  "end": 426
                },
                "start": 401,
                "end": 426
              },
              "start": 399,
              "end": 426
            },
            "body": null,
            "expression": false,
            "start": 383,
            "end": 427
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 446
            },
            "start": 432,
            "end": 447
          }
        ],
        "start": 337,
        "end": 449
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 299,
      "end": 449
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 449
}
```
