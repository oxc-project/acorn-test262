__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 33,
              "end": 34
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 35,
              "end": 38
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 23,
            "end": 38
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
                "start": 60,
                "end": 61
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
                        "start": 89,
                        "end": 90
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 91,
                        "end": 94
                      },
                      "declare": false,
                      "start": 79,
                      "end": 94
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 72,
                    "end": 94
                  }
                ],
                "start": 62,
                "end": 100
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 50,
              "end": 100
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 100
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
                "start": 116,
                "end": 117
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 119
              },
              "start": 116,
              "end": 119
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 120,
              "end": 123
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 106,
            "end": 123
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 144,
              "end": 153
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 154,
              "end": 162
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 129,
            "end": 162
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "start": 168,
            "end": 179
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
                  "start": 189,
                  "end": 190
                },
                "init": null,
                "definite": false,
                "start": 189,
                "end": 190
              }
            ],
            "declare": false,
            "start": 185,
            "end": 191
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
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
              "start": 211,
              "end": 214
            },
            "expression": false,
            "start": 196,
            "end": 214
          },
          {
            "type": "ExportAllDeclaration",
            "exported": null,
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 233,
              "end": 242
            },
            "attributes": [],
            "exportKind": "value",
            "start": 219,
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "exportKind": "value",
                "start": 257,
                "end": 260
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 248,
            "end": 263
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
                  "start": 277,
                  "end": 280
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "exportKind": "value",
                "start": 277,
                "end": 285
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 293,
              "end": 302
            },
            "exportKind": "value",
            "attributes": [],
            "start": 268,
            "end": 303
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "exportKind": "value",
            "start": 308,
            "end": 325
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
                "start": 351,
                "end": 352
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 353,
                "end": 356
              },
              "abstract": false,
              "declare": false,
              "start": 345,
              "end": 356
            },
            "exportKind": "value",
            "start": 330,
            "end": 356
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
                "start": 377,
                "end": 380
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
                "start": 383,
                "end": 386
              },
              "expression": false,
              "start": 368,
              "end": 386
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 361,
            "end": 386
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "importKind": "value",
            "start": 391,
            "end": 404
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 418
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 429,
                "end": 434
              },
              "start": 421,
              "end": 435
            },
            "importKind": "value",
            "start": 409,
            "end": 436
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
                  "start": 453,
                  "end": 456
                },
                "start": 448,
                "end": 456
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 462,
              "end": 471
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 441,
            "end": 472
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
                  "start": 484,
                  "end": 487
                },
                "start": 484,
                "end": 487
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 493,
              "end": 502
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 477,
            "end": 503
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
                  "start": 517,
                  "end": 520
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 520
                },
                "importKind": "value",
                "start": 517,
                "end": 520
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 528,
              "end": 537
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 508,
            "end": 538
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 550,
              "end": 559
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 543,
            "end": 560
          }
        ],
        "start": 17,
        "end": 562
      },
      "expression": false,
      "start": 0,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
}
```
