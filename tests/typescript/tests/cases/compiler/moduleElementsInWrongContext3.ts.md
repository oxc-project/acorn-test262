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
        "start": 10,
        "end": 11
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
                  "start": 38,
                  "end": 39
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [],
                  "start": 40,
                  "end": 43
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 28,
                "end": 43
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
                    "start": 69,
                    "end": 70
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
                            "start": 102,
                            "end": 103
                          },
                          "typeParameters": null,
                          "extends": [],
                          "body": {
                            "type": "TSInterfaceBody",
                            "body": [],
                            "start": 104,
                            "end": 107
                          },
                          "declare": false,
                          "start": 92,
                          "end": 107
                        },
                        "specifiers": [],
                        "source": null,
                        "exportKind": "type",
                        "attributes": [],
                        "start": 85,
                        "end": 107
                      }
                    ],
                    "start": 71,
                    "end": 117
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 59,
                  "end": 117
                },
                "specifiers": [],
                "source": null,
                "exportKind": "value",
                "attributes": [],
                "start": 52,
                "end": 117
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
                    "start": 137,
                    "end": 138
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "start": 137,
                  "end": 140
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [],
                  "start": 141,
                  "end": 144
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 127,
                "end": 144
              },
              {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 169,
                  "end": 178
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [],
                  "start": 179,
                  "end": 191
                },
                "kind": "module",
                "declare": true,
                "global": false,
                "start": 154,
                "end": 191
              },
              {
                "type": "TSExportAssignment",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "start": 201,
                "end": 212
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
                      "start": 226,
                      "end": 227
                    },
                    "init": null,
                    "definite": false,
                    "start": 226,
                    "end": 227
                  }
                ],
                "declare": false,
                "start": 222,
                "end": 228
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 249
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
                  "start": 252,
                  "end": 255
                },
                "expression": false,
                "start": 237,
                "end": 255
              },
              {
                "type": "ExportAllDeclaration",
                "exported": null,
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 278,
                  "end": 287
                },
                "attributes": [],
                "exportKind": "value",
                "start": 264,
                "end": 288
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
                      "start": 306,
                      "end": 309
                    },
                    "exported": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 309
                    },
                    "exportKind": "value",
                    "start": 306,
                    "end": 309
                  }
                ],
                "source": null,
                "exportKind": "value",
                "attributes": [],
                "start": 297,
                "end": 312
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
                      "start": 330,
                      "end": 333
                    },
                    "exported": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "exportKind": "value",
                    "start": 330,
                    "end": 338
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 346,
                  "end": 355
                },
                "exportKind": "value",
                "attributes": [],
                "start": 321,
                "end": 356
              },
              {
                "type": "ExportDefaultDeclaration",
                "declaration": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 381
                },
                "exportKind": "value",
                "start": 365,
                "end": 382
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
                    "start": 412,
                    "end": 413
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 414,
                    "end": 417
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 406,
                  "end": 417
                },
                "exportKind": "value",
                "start": 391,
                "end": 417
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
                    "start": 442,
                    "end": 445
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
                    "start": 448,
                    "end": 451
                  },
                  "expression": false,
                  "start": 433,
                  "end": 451
                },
                "specifiers": [],
                "source": null,
                "exportKind": "value",
                "attributes": [],
                "start": 426,
                "end": 451
              },
              {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 468
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "importKind": "value",
                "start": 460,
                "end": 473
              },
              {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 491
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 502,
                    "end": 507
                  },
                  "start": 494,
                  "end": 508
                },
                "importKind": "value",
                "start": 482,
                "end": 509
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
                      "start": 530,
                      "end": 533
                    },
                    "start": 525,
                    "end": 533
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 539,
                  "end": 548
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 518,
                "end": 549
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
                      "start": 565,
                      "end": 568
                    },
                    "start": 565,
                    "end": 568
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 574,
                  "end": 583
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 558,
                "end": 584
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
                      "start": 602,
                      "end": 605
                    },
                    "local": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 605
                    },
                    "importKind": "value",
                    "start": 602,
                    "end": 605
                  }
                ],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 613,
                  "end": 622
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 593,
                "end": 623
              },
              {
                "type": "ImportDeclaration",
                "specifiers": [],
                "source": {
                  "type": "Literal",
                  "value": "ambient",
                  "raw": "\"ambient\"",
                  "start": 639,
                  "end": 648
                },
                "phase": null,
                "attributes": [],
                "importKind": "value",
                "start": 632,
                "end": 649
              }
            ],
            "start": 18,
            "end": 655
          }
        ],
        "start": 12,
        "end": 657
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 657
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 657
}
```
