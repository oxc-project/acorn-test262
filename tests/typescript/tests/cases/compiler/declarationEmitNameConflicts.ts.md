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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 29,
                "end": 32
              },
              "abstract": false,
              "declare": false,
              "start": 21,
              "end": 32
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14,
            "end": 32
          }
        ],
        "start": 12,
        "end": 34
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
      "start": 35,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./declarationEmit_nameConflicts_1",
          "raw": "'./declarationEmit_nameConflicts_1'",
          "start": 20,
          "end": 55
        },
        "start": 12,
        "end": 56
      },
      "importKind": "value",
      "start": 0,
      "end": 57
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 76
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
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
                  "start": 103,
                  "end": 106
                },
                "expression": false,
                "start": 90,
                "end": 106
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 83,
              "end": 106
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 126,
                  "end": 129
                },
                "abstract": false,
                "declare": false,
                "start": 118,
                "end": 129
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 111,
              "end": 129
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
                  "start": 151,
                  "end": 152
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 180
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
                          "start": 183,
                          "end": 186
                        },
                        "expression": false,
                        "start": 170,
                        "end": 186
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 163,
                      "end": 186
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 186,
                      "end": 187
                    },
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
                          "start": 213,
                          "end": 214
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 215,
                          "end": 218
                        },
                        "declare": false,
                        "start": 203,
                        "end": 218
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 196,
                      "end": 218
                    }
                  ],
                  "start": 153,
                  "end": 224
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 141,
                "end": 224
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 134,
              "end": 224
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
                  },
                  "start": 248,
                  "end": 251
                },
                "importKind": "value",
                "start": 237,
                "end": 252
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 230,
              "end": 252
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 276
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 278
                  },
                  "start": 275,
                  "end": 278
                },
                "importKind": "value",
                "start": 264,
                "end": 279
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 257,
              "end": 279
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "importKind": "value",
                "start": 291,
                "end": 304
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 284,
              "end": 304
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 324
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 329
                },
                "importKind": "value",
                "start": 316,
                "end": 330
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 309,
              "end": 330
            }
          ],
          "start": 77,
          "end": 332
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 65,
        "end": 332
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 58,
      "end": 332
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 352
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 354
          },
          "start": 351,
          "end": 354
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 378
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
                  "start": 381,
                  "end": 384
                },
                "expression": false,
                "start": 368,
                "end": 384
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 361,
              "end": 384
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 403
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 404,
                  "end": 407
                },
                "abstract": false,
                "declare": false,
                "start": 396,
                "end": 407
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 389,
              "end": 407
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
                  "start": 429,
                  "end": 430
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 457,
                          "end": 458
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
                          "start": 461,
                          "end": 464
                        },
                        "expression": false,
                        "start": 448,
                        "end": 464
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 441,
                      "end": 464
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 464,
                      "end": 465
                    },
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
                          "start": 491,
                          "end": 492
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 493,
                          "end": 496
                        },
                        "declare": false,
                        "start": 481,
                        "end": 496
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 474,
                      "end": 496
                    }
                  ],
                  "start": 431,
                  "end": 502
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 419,
                "end": 502
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 412,
              "end": 502
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 523
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 527
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 529
                    },
                    "start": 526,
                    "end": 529
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "start": 526,
                  "end": 531
                },
                "importKind": "value",
                "start": 514,
                "end": 532
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 507,
              "end": 532
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 549
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 553
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 555
                      },
                      "optional": false,
                      "computed": false,
                      "start": 552,
                      "end": 555
                    },
                    "definite": false,
                    "start": 548,
                    "end": 555
                  }
                ],
                "declare": false,
                "start": 544,
                "end": 556
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 537,
              "end": 556
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 608
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 611,
                        "end": 612
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 613,
                        "end": 614
                      },
                      "optional": false,
                      "computed": false,
                      "start": 611,
                      "end": 614
                    },
                    "definite": false,
                    "start": 607,
                    "end": 614
                  }
                ],
                "declare": false,
                "start": 603,
                "end": 615
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 596,
              "end": 615
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 638
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 641,
                        "end": 642
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 643,
                        "end": 644
                      },
                      "optional": false,
                      "computed": false,
                      "start": 641,
                      "end": 644
                    },
                    "definite": false,
                    "start": 637,
                    "end": 644
                  }
                ],
                "declare": false,
                "start": 633,
                "end": 645
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 626,
              "end": 645
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 668
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 671,
                          "end": 672
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 673,
                          "end": 674
                        },
                        "optional": false,
                        "computed": false,
                        "start": 671,
                        "end": 674
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 675,
                        "end": 676
                      },
                      "optional": false,
                      "computed": false,
                      "start": 671,
                      "end": 676
                    },
                    "definite": false,
                    "start": 667,
                    "end": 676
                  }
                ],
                "declare": false,
                "start": 663,
                "end": 677
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 656,
              "end": 677
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 700
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 704
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 705,
                        "end": 706
                      },
                      "optional": false,
                      "computed": false,
                      "start": 703,
                      "end": 706
                    },
                    "definite": false,
                    "start": 699,
                    "end": 706
                  }
                ],
                "declare": false,
                "start": 695,
                "end": 707
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 688,
              "end": 707
            }
          ],
          "start": 355,
          "end": 745
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 341,
        "end": 745
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 334,
      "end": 745
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 765
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 767
          },
          "start": 764,
          "end": 767
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 791
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
                  "start": 794,
                  "end": 797
                },
                "expression": false,
                "start": 781,
                "end": 797
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 774,
              "end": 797
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 816
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 817,
                  "end": 820
                },
                "abstract": false,
                "declare": false,
                "start": 809,
                "end": 820
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 802,
              "end": 820
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
                  "start": 842,
                  "end": 843
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 870,
                          "end": 871
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
                          "start": 874,
                          "end": 877
                        },
                        "expression": false,
                        "start": 861,
                        "end": 877
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 854,
                      "end": 877
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 877,
                      "end": 878
                    },
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
                          "start": 904,
                          "end": 905
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 906,
                          "end": 909
                        },
                        "declare": false,
                        "start": 894,
                        "end": 909
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 887,
                      "end": 909
                    }
                  ],
                  "start": 844,
                  "end": 915
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 832,
                "end": 915
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 825,
              "end": 915
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 938
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 948
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 949,
                        "end": 950
                      },
                      "optional": false,
                      "computed": false,
                      "start": 947,
                      "end": 950
                    },
                    "typeArguments": null,
                    "start": 947,
                    "end": 950
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 951,
                  "end": 954
                },
                "declare": false,
                "start": 927,
                "end": 954
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 920,
              "end": 954
            },
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
                  "start": 982,
                  "end": 983
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 992,
                          "end": 993
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 994,
                          "end": 995
                        },
                        "optional": false,
                        "computed": false,
                        "start": 992,
                        "end": 995
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 996,
                        "end": 997
                      },
                      "optional": false,
                      "computed": false,
                      "start": 992,
                      "end": 997
                    },
                    "typeArguments": null,
                    "start": 992,
                    "end": 997
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 998,
                  "end": 1001
                },
                "declare": false,
                "start": 972,
                "end": 1001
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 965,
              "end": 1001
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1029,
                  "end": 1030
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
                          "start": 1058,
                          "end": 1059
                        },
                        "typeParameters": null,
                        "extends": [
                          {
                            "type": "TSInterfaceHeritage",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "M",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1068,
                                  "end": 1069
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1070,
                                  "end": 1071
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1068,
                                "end": 1071
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1072,
                                "end": 1073
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1068,
                              "end": 1073
                            },
                            "typeArguments": null,
                            "start": 1068,
                            "end": 1073
                          }
                        ],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 1074,
                          "end": 1077
                        },
                        "declare": false,
                        "start": 1048,
                        "end": 1077
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 1041,
                      "end": 1077
                    }
                  ],
                  "start": 1031,
                  "end": 1089
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 1019,
                "end": 1089
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1012,
              "end": 1089
            }
          ],
          "start": 768,
          "end": 1091
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 754,
        "end": 1091
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 747,
      "end": 1091
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1091
}
```
