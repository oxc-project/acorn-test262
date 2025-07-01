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
            "start": 13,
            "end": 14
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 15,
            "end": 18
          },
          "kind": "module",
          "declare": false,
          "global": false,
          "start": 6,
          "end": 18
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
              "start": 40,
              "end": 41
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
                      "start": 69,
                      "end": 70
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 71,
                      "end": 74
                    },
                    "declare": false,
                    "start": 59,
                    "end": 74
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 52,
                  "end": 74
                }
              ],
              "start": 42,
              "end": 80
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 30,
            "end": 80
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 23,
          "end": 80
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
              "start": 96,
              "end": 97
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "start": 96,
            "end": 99
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 100,
            "end": 103
          },
          "kind": "namespace",
          "declare": false,
          "global": false,
          "start": 86,
          "end": 103
        },
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 124,
            "end": 133
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 134,
            "end": 142
          },
          "kind": "module",
          "declare": true,
          "global": false,
          "start": 109,
          "end": 142
        },
        {
          "type": "TSExportAssignment",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "start": 148,
          "end": 159
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
                "start": 169,
                "end": 170
              },
              "init": null,
              "definite": false,
              "start": 169,
              "end": 170
            }
          ],
          "declare": false,
          "start": 165,
          "end": 171
        },
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 188
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
            "start": 191,
            "end": 194
          },
          "expression": false,
          "start": 176,
          "end": 194
        },
        {
          "type": "ExportAllDeclaration",
          "exported": null,
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 213,
            "end": 222
          },
          "attributes": [],
          "exportKind": "value",
          "start": 199,
          "end": 223
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
                "start": 237,
                "end": 240
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 240
              },
              "exportKind": "value",
              "start": 237,
              "end": 240
            }
          ],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 228,
          "end": 243
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
                "start": 257,
                "end": 260
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 265
              },
              "exportKind": "value",
              "start": 257,
              "end": 265
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 273,
            "end": 282
          },
          "exportKind": "value",
          "attributes": [],
          "start": 248,
          "end": 283
        },
        {
          "type": "ExportDefaultDeclaration",
          "declaration": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 304
          },
          "exportKind": "value",
          "start": 288,
          "end": 305
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
              "start": 331,
              "end": 332
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 333,
              "end": 336
            },
            "abstract": false,
            "declare": false,
            "start": 325,
            "end": 336
          },
          "exportKind": "value",
          "start": 310,
          "end": 336
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
              "start": 357,
              "end": 360
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
              "start": 363,
              "end": 366
            },
            "expression": false,
            "start": 348,
            "end": 366
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 341,
          "end": 366
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 379
          },
          "moduleReference": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "importKind": "value",
          "start": 371,
          "end": 384
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 398
          },
          "moduleReference": {
            "type": "TSExternalModuleReference",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 409,
              "end": 414
            },
            "start": 401,
            "end": 415
          },
          "importKind": "value",
          "start": 389,
          "end": 416
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
                "start": 433,
                "end": 436
              },
              "start": 428,
              "end": 436
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 442,
            "end": 451
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 421,
          "end": 452
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
                "start": 464,
                "end": 467
              },
              "start": 464,
              "end": 467
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 473,
            "end": 482
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 457,
          "end": 483
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
                "start": 497,
                "end": 500
              },
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 500
              },
              "importKind": "value",
              "start": 497,
              "end": 500
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 508,
            "end": 517
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 488,
          "end": 518
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 530,
            "end": 539
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 523,
          "end": 540
        }
      ],
      "start": 0,
      "end": 542
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 542
}
```
