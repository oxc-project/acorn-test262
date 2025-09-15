__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 18,
            "end": 21
          },
          "kind": "namespace",
          "declare": false,
          "global": false,
          "start": 6,
          "end": 21
        },
        {
          "type": "ExportNamedDeclaration",
          "declaration": {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
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
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 74,
                      "end": 77
                    },
                    "declare": false,
                    "start": 62,
                    "end": 77
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 55,
                  "end": 77
                }
              ],
              "start": 45,
              "end": 83
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 33,
            "end": 83
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 26,
          "end": 83
        },
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "start": 99,
            "end": 102
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 103,
            "end": 106
          },
          "kind": "namespace",
          "declare": false,
          "global": false,
          "start": 89,
          "end": 106
        },
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 127,
            "end": 136
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 137,
            "end": 145
          },
          "kind": "module",
          "declare": true,
          "global": false,
          "start": 112,
          "end": 145
        },
        {
          "type": "TSExportAssignment",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          },
          "start": 151,
          "end": 162
        },
        {
          "type": "VariableDeclaration",
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "init": null,
              "definite": false,
              "start": 172,
              "end": 173
            }
          ],
          "declare": false,
          "start": 168,
          "end": 174
        },
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 194,
            "end": 197
          },
          "expression": false,
          "start": 179,
          "end": 197
        },
        {
          "type": "ExportAllDeclaration",
          "exported": null,
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 216,
            "end": 225
          },
          "attributes": [],
          "exportKind": "value",
          "start": 202,
          "end": 226
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 243
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 243
              },
              "exportKind": "value",
              "start": 240,
              "end": 243
            }
          ],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 231,
          "end": 246
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
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 263
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "exportKind": "value",
              "start": 260,
              "end": 268
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 276,
            "end": 285
          },
          "exportKind": "value",
          "attributes": [],
          "start": 251,
          "end": 286
        },
        {
          "type": "ExportDefaultDeclaration",
          "declaration": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "exportKind": "value",
          "start": 291,
          "end": 308
        },
        {
          "type": "ExportDefaultDeclaration",
          "declaration": {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 336,
              "end": 339
            },
            "abstract": false,
            "declare": false,
            "start": 328,
            "end": 339
          },
          "exportKind": "value",
          "start": 313,
          "end": 339
        },
        {
          "type": "ExportNamedDeclaration",
          "declaration": {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bee",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 363
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 366,
              "end": 369
            },
            "expression": false,
            "start": 351,
            "end": 369
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 344,
          "end": 369
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 382
          },
          "moduleReference": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 386
          },
          "importKind": "value",
          "start": 374,
          "end": 387
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 401
          },
          "moduleReference": {
            "type": "TSExternalModuleReference",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 412,
              "end": 417
            },
            "start": 404,
            "end": 418
          },
          "importKind": "value",
          "start": 392,
          "end": 419
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportNamespaceSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 439
              },
              "start": 431,
              "end": 439
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 445,
            "end": 454
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 424,
          "end": 455
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportDefaultSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 470
              },
              "start": 467,
              "end": 470
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 476,
            "end": 485
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 460,
          "end": 486
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportSpecifier",
              "imported": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 503
              },
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 503
              },
              "importKind": "value",
              "start": 500,
              "end": 503
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 511,
            "end": 520
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 491,
          "end": 521
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 533,
            "end": 542
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 526,
          "end": 543
        }
      ],
      "start": 0,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 545
}
```
