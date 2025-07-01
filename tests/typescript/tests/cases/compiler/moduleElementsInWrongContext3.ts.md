__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "start": 32,
                  "end": 33
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [],
                  "start": 34,
                  "end": 37
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 25,
                "end": 37
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
                    "start": 63,
                    "end": 64
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
                            "start": 96,
                            "end": 97
                          },
                          "typeParameters": null,
                          "extends": [],
                          "body": {
                            "type": "TSInterfaceBody",
                            "body": [],
                            "start": 98,
                            "end": 101
                          },
                          "declare": false,
                          "start": 86,
                          "end": 101
                        },
                        "specifiers": [],
                        "source": null,
                        "exportKind": "type",
                        "attributes": [],
                        "start": 79,
                        "end": 101
                      }
                    ],
                    "start": 65,
                    "end": 111
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 53,
                  "end": 111
                },
                "specifiers": [],
                "source": null,
                "exportKind": "value",
                "attributes": [],
                "start": 46,
                "end": 111
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
                    "start": 131,
                    "end": 132
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 134
                  },
                  "start": 131,
                  "end": 134
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [],
                  "start": 135,
                  "end": 138
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 121,
                "end": 138
              },
              {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 163,
                  "end": 172
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [],
                  "start": 173,
                  "end": 185
                },
                "kind": "module",
                "declare": true,
                "global": false,
                "start": 148,
                "end": 185
              },
              {
                "type": "TSExportAssignment",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "start": 195,
                "end": 206
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
                      "start": 220,
                      "end": 221
                    },
                    "init": null,
                    "definite": false,
                    "start": 220,
                    "end": 221
                  }
                ],
                "declare": false,
                "start": 216,
                "end": 222
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 243
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
                  "start": 246,
                  "end": 249
                },
                "expression": false,
                "start": 231,
                "end": 249
              },
              {
                "type": "ExportAllDeclaration",
                "exported": null,
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 272,
                  "end": 281
                },
                "attributes": [],
                "exportKind": "value",
                "start": 258,
                "end": 282
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
                      "start": 300,
                      "end": 303
                    },
                    "exported": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 303
                    },
                    "exportKind": "value",
                    "start": 300,
                    "end": 303
                  }
                ],
                "source": null,
                "exportKind": "value",
                "attributes": [],
                "start": 291,
                "end": 306
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
                      "start": 324,
                      "end": 327
                    },
                    "exported": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 332
                    },
                    "exportKind": "value",
                    "start": 324,
                    "end": 332
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 340,
                  "end": 349
                },
                "exportKind": "value",
                "attributes": [],
                "start": 315,
                "end": 350
              },
              {
                "type": "ExportDefaultDeclaration",
                "declaration": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 375
                },
                "exportKind": "value",
                "start": 359,
                "end": 376
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
                    "start": 406,
                    "end": 407
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 408,
                    "end": 411
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 400,
                  "end": 411
                },
                "exportKind": "value",
                "start": 385,
                "end": 411
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
                    "start": 436,
                    "end": 439
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
                    "start": 442,
                    "end": 445
                  },
                  "expression": false,
                  "start": 427,
                  "end": 445
                },
                "specifiers": [],
                "source": null,
                "exportKind": "value",
                "attributes": [],
                "start": 420,
                "end": 445
              },
              {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 462
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "importKind": "value",
                "start": 454,
                "end": 467
              },
              {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 485
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 496,
                    "end": 501
                  },
                  "start": 488,
                  "end": 502
                },
                "importKind": "value",
                "start": 476,
                "end": 503
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
                      "start": 524,
                      "end": 527
                    },
                    "start": 519,
                    "end": 527
                  }
                ],
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
                "start": 512,
                "end": 543
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
                      "start": 559,
                      "end": 562
                    },
                    "start": 559,
                    "end": 562
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 568,
                  "end": 577
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 552,
                "end": 578
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
                      "start": 596,
                      "end": 599
                    },
                    "local": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 599
                    },
                    "importKind": "value",
                    "start": 596,
                    "end": 599
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 607,
                  "end": 616
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 587,
                "end": 617
              },
              {
                "type": "ImportDeclaration",
                "specifiers": [],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 633,
                  "end": 642
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 626,
                "end": 643
              }
            ],
            "start": 15,
            "end": 649
          }
        ],
        "start": 9,
        "end": 651
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 651
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 651
}
```
