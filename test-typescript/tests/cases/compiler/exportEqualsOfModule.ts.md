__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 39,
        "value": "~popsicle/dist/request",
        "raw": "'~popsicle/dist/request'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 40,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 69,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 53,
              "end": 69,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 66,
                "name": "Request",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 69,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 73,
      "end": 193,
      "id": {
        "type": "Literal",
        "start": 88,
        "end": 111,
        "value": "~popsicle/dist/common",
        "raw": "'~popsicle/dist/common'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 112,
        "end": 193,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 118,
            "end": 167,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 127,
                "end": 134,
                "imported": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 134,
                  "name": "Request",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 134,
                  "name": "Request",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 142,
              "end": 166,
              "value": "~popsicle/dist/request",
              "raw": "'~popsicle/dist/request'"
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 172,
            "end": 191,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 181,
                "end": 188,
                "local": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 188,
                  "name": "Request",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 188,
                  "name": "Request",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 195,
      "end": 297,
      "id": {
        "type": "Literal",
        "start": 210,
        "end": 220,
        "value": "popsicle",
        "raw": "'popsicle'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 221,
        "end": 297,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 227,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 234,
              "end": 239,
              "name": "alias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 242,
              "end": 274,
              "expression": {
                "type": "Literal",
                "start": 250,
                "end": 273,
                "value": "~popsicle/dist/common",
                "raw": "'~popsicle/dist/common'"
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 280,
            "end": 295,
            "expression": {
              "type": "Identifier",
              "start": 289,
              "end": 294,
              "name": "alias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 299,
      "end": 449,
      "id": {
        "type": "Literal",
        "start": 314,
        "end": 336,
        "value": "popsicle-proxy-agent",
        "raw": "'popsicle-proxy-agent'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 337,
        "end": 449,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 343,
            "end": 378,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 352,
                "end": 359,
                "imported": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 359,
                  "name": "Request",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 359,
                  "name": "Request",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 367,
              "end": 377,
              "value": "popsicle",
              "raw": "'popsicle'"
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSDeclareFunction",
            "start": 383,
            "end": 427,
            "id": {
              "type": "Identifier",
              "start": 392,
              "end": 397,
              "name": "proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 426,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 401,
                "end": 426,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 402,
                    "end": 418,
                    "name": "request",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 409,
                      "end": 418,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 411,
                        "end": 418,
                        "typeName": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 418,
                          "name": "Request",
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
                  "start": 420,
                  "end": 426,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 423,
                    "end": 426
                  }
                }
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 432,
            "end": 447,
            "expression": {
              "type": "Identifier",
              "start": 441,
              "end": 446,
              "name": "proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
